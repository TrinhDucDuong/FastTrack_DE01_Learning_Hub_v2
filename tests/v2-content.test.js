const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const bank = require('../assets/question-bank');
const loader = require('../assets/question-loader');
const root = path.resolve(__dirname, '..');

assert.equal(bank.length, 436);
assert.equal(loader.forPractice(1).length, 16);
assert.equal(loader.forPractice(2).length, 60);
for (let unit = 1; unit <= 18; unit++) {
  for (let number = 1; number <= 20; number++) {
    assert(bank.some(q => q.id === `u${String(unit).padStart(2, '0')}-q${String(number).padStart(3, '0')}`), 'Missing original question');
  }
  const lesson = fs.readFileSync(path.join(root, 'lessons', `unit-${String(unit).padStart(2, '0')}.html`), 'utf8');
  assert(lesson.includes('id="beginner-start"'), 'Missing beginner guide');
  assert(lesson.includes('id="beginner-vocabulary"'), 'Missing vocabulary');
  assert(lesson.includes('id="beginner-example"'), 'Missing worked example');
  for (const q of bank.filter(q => q.unit === unit && q.practiceSet)) assert(lesson.includes(q.explanation.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')), 'Practice explanation missing from lesson: ' + q.id);
}
for (const q of bank) {
  assert(q.explanation.trim().length > 40, 'Insufficient explanation: ' + q.id);
  if (q.practiceSet) assert(q.explanation.length > 160, 'Practice needs reasoning: ' + q.id);
}
for (const count of [1, 17, 18, 37, 360, 435, 436, 999]) {
  const qs = loader.forExam({count});
  assert.equal(qs.length, Math.min(count, 436));
  assert.equal(new Set(qs.map(q => q.id)).size, qs.length);
  if (count >= 18) assert.equal(new Set(qs.map(q => q.unit)).size, 18);
  assert.deepEqual(loader.byIds(qs.map(q => q.id)).map(q => q.id), qs.map(q => q.id));
}
const files = fs.readdirSync(root).filter(f => f.endsWith('.html')).concat(fs.readdirSync(path.join(root, 'lessons')).map(f => 'lessons/' + f));
for (const relative of files) {
  const file = path.join(root, relative), html = fs.readFileSync(file, 'utf8');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, 'Duplicate HTML ids in ' + relative);
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, tag => tag.includes(' src=') ? tag : '');
  for (const match of markup.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1].replaceAll('&amp;', '&');
    if (/^(https?:|mailto:|data:)/.test(url)) continue;
    const [pathname, fragment] = url.split('#');
    const target = pathname.split('?')[0] ? path.resolve(path.dirname(file), pathname.split('?')[0]) : file;
    assert(fs.existsSync(target), relative + ' -> ' + url);
    if (fragment && target.endsWith('.html')) assert(fs.readFileSync(target, 'utf8').includes('id="' + fragment + '"'), relative + ' broken anchor ' + url);
  }
  assert(!/Question&Answer_of_2_quiz|DETakeNote|DE_Schedule|C:\\Users\\/.test(html), 'Internal source trace in public HTML');
}
console.log('v2-content.test.js: 436 explanations, 18 beginner guides, sampling, links and anchors passed');
