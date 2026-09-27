(function () {
  'use strict';
  const bank = window.DE01_QUESTION_BANK;
  const search = document.getElementById('bankSearch');
  const unit = document.getElementById('bankUnit');
  const group = document.getElementById('bankGroup');
  let page = 0;
  const pageSize = 20;
  const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').toLowerCase();
  for (let n = 1; n <= 18; n++) {
    const option = document.createElement('option'); option.value = n;
    option.textContent = 'Unit ' + String(n).padStart(2, '0'); unit.append(option);
  }
  unit.value = new URLSearchParams(location.search).get('unit') || '';
  function node(tag, text) { const el = document.createElement(tag); el.textContent = text; return el; }
  function render() {
    const query = normalize(search.value.trim());
    const questions = bank.filter(q => (!unit.value || q.unit === Number(unit.value)) &&
      (!group.value || (group.value === 'original' ? !q.practiceSet : q.practiceSet === Number(group.value))) &&
      normalize(q.prompt + ' ' + q.explanation + ' ' + q.topic).includes(query));
    const pageCount = Math.max(1, Math.ceil(questions.length / pageSize));
    page = Math.min(page, pageCount - 1);
    const results = document.getElementById('bankResults'); results.replaceChildren();
    document.getElementById('bankCount').textContent = questions.length + ' / ' + bank.length + ' câu hỏi';
    if (!questions.length) results.append(node('p', 'Không tìm thấy câu phù hợp. Thử từ khóa khác hoặc bỏ bộ lọc.'));
    questions.slice(page * pageSize, (page + 1) * pageSize).forEach(q => {
      const card = document.createElement('article'); card.className = 'case-card';
      card.append(node('p', 'Unit ' + q.unit + ' · ' + q.difficulty), node('h2', q.prompt));
      const list = document.createElement('ol'); list.type = 'A';
      q.choices.forEach(c => list.append(node('li', c.text))); card.append(list);
      const details = document.createElement('details');
      details.append(node('summary', 'Xem đáp án đúng và giải thích'),
        node('p', 'Đáp án đúng: ' + q.choices.find(c => c.id === q.answer).text), node('p', q.explanation));
      const link = node('a', 'Học lại phần này →'); link.href = q.lessonUrl; details.append(link);
      card.append(details); results.append(card);
    });
    document.getElementById('bankPrev').disabled = page === 0;
    document.getElementById('bankNext').disabled = page >= pageCount - 1;
    document.getElementById('bankPage').textContent = 'Trang ' + (page + 1) + ' / ' + pageCount;
  }
  document.getElementById('bankFilters').addEventListener('submit', e => e.preventDefault());
  [search, unit, group].forEach(el => el.addEventListener('input', () => { page = 0; render(); }));
  document.getElementById('bankPrev').addEventListener('click', () => { page--; render(); });
  document.getElementById('bankNext').addEventListener('click', () => { page++; render(); });
  document.documentElement.dataset.theme = localStorage.getItem('de01-v2-theme') || 'light';
  document.getElementById('theme').addEventListener('click', () => {
    const root = document.documentElement;
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('de01-v2-theme', root.dataset.theme);
  });
  render();
}());
