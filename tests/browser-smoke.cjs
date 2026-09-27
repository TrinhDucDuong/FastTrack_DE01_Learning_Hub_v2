const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const prefix = '/FastTrack_DE01_Learning_Hub_v2/';
const server = http.createServer((req, res) => {
  let relative = new URL(req.url, 'http://localhost').pathname;
  if (!relative.startsWith(prefix)) { res.writeHead(404).end(); return; }
  relative = relative.slice(prefix.length) || 'index.html';
  const file = path.resolve(root, relative);
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file)) { res.writeHead(404).end(); return; }
  const type = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript'}[path.extname(file)];
  res.setHeader('Content-Type', type || 'application/octet-stream'); res.end(fs.readFileSync(file));
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}${prefix}`;
  const browser = await chromium.launch({channel:'chrome', headless:true});
  const context = await browser.newContext({viewport:{width:1440,height:1000}});
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  try {
    await page.goto(base);
    await page.evaluate(() => localStorage.setItem('de01-progress', '["18"]'));
    for (let n = 1; n <= 18; n++) {
      await page.goto(base + `lessons/unit-${String(n).padStart(2,'0')}.html`);
      assert.equal(await page.locator('#beginner-start').count(), 1);
      assert(await page.locator('#tocNav a').count() > 10);
    }
    assert.equal(await page.locator('#doneButton').getAttribute('aria-pressed'), 'false', 'V2 must not read V1 completion');
    await page.locator('#doneButton').click();
    await page.reload();
    assert.equal(await page.locator('#doneButton').getAttribute('aria-pressed'), 'true');
    assert.equal(await page.evaluate(() => localStorage.getItem('de01-progress')), '["18"]');
    assert.equal(await page.evaluate(() => localStorage.getItem('de01-v2-progress')), '["18"]');
    await page.goto(base + 'quiz.html');
    assert(await page.locator('#quizSetup').isVisible());
    assert(!await page.locator('#quizView').isVisible());
    await page.locator('#examCount').fill('37');
    await page.locator('form').nth(1).locator('button').click();
    await page.locator('#questionCounter').waitFor();
    assert.match(await page.locator('#questionCounter').textContent(), /37/);
    await page.locator('#choices input').first().check();
    await page.locator('#next').click();
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('de01-v2-quiz-state-v1')).activeAttempt);
    await page.reload();
    const restored = await page.evaluate(() => JSON.parse(localStorage.getItem('de01-v2-quiz-state-v1')).activeAttempt);
    assert.deepEqual(restored, saved, 'Resume must keep sampled IDs, answers and cursor');
    await page.goto(base + 'quiz.html');
    assert(await page.locator('#resumePanel').isVisible());
    await page.locator('#resumeLink').click();
    assert.match(await page.locator('#questionCounter').textContent(), /2 \/ 37/);
    await page.goto(base + 'quiz.html?mode=exam&count=37&restart=1');
    await page.locator('#choices input').first().check();
    const restartedId = await page.evaluate(() => JSON.parse(localStorage.getItem('de01-v2-quiz-state-v1')).activeAttempt.id);
    await page.reload();
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('de01-v2-quiz-state-v1')).activeAttempt.id), restartedId, 'Reload after restart must resume the new attempt');
    await page.goto(base + 'quiz.html?mode=practice&set=1&restart=1');
    for (let index = 0; index < 16; index++) {
      const answer = await page.evaluate(i => {
        const q = window.DE01QuestionLoader.forPractice(1)[i];
        return i === 0 ? q.choices.find(c => c.id !== q.answer).id : q.answer;
      }, index);
      await page.locator(`#choices input[value="${answer}"]`).check();
      if (index < 15) await page.locator('#next').click();
    }
    await page.locator('#submit').click();
    assert.equal(await page.locator('#scoreFraction').textContent(), '15/16 câu đúng');
    await page.locator('#reviewButton').click();
    assert.equal(await page.locator('.review-item').count(), 16);
    assert.equal(await page.getByText(/^Vì sao đúng:/).count(), 16);
    assert(!await page.locator('#quizView').isVisible());
    await page.locator('#retryIncorrect').click();
    assert.match(await page.locator('#questionCounter').textContent(), /1 \/ 1/);
    await page.locator('#choices input').first().check();
    await page.locator('#submit').click();
    await page.goto(base + 'progress.html');
    assert.equal(await page.locator('.history-item').count(), 2);
    await page.goto(base + 'question-bank.html');
    assert.equal(await page.locator('#bankCount').textContent(), '436 / 436 câu hỏi');
    await page.locator('#bankGroup').selectOption('2');
    assert.match(await page.locator('#bankCount').textContent(), /^60 /);
    await page.locator('#bankSearch').fill('1.040');
    assert.equal(await page.locator('.case-card').count(), 1);
    await page.locator('summary').click();
    assert(await page.getByText(/960 \+ 40/).isVisible());
    await page.goto(base + 'etl-coach.html');
    assert(await page.locator('h1').isVisible());
    await page.setViewportSize({width:390,height:844});
    for (const url of ['', 'quiz.html', 'question-bank.html', 'lessons/unit-02.html', 'lessons/unit-06.html', 'quiz.html?mode=exam&count=436&restart=1']) {
      await page.goto(base + url);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Mobile overflow: ' + url);
    }
    await page.goto(base + 'quiz.html');
    await page.locator('#theme').click();
    await page.reload();
    assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
    await page.locator('#theme').click();
    await page.screenshot({path:path.join(require('node:os').tmpdir(),'de01-v2-mobile.png'),fullPage:true});
    await page.setViewportSize({width:1440,height:1000});
    await page.goto(base);
    await page.screenshot({path:path.join(require('node:os').tmpdir(),'de01-v2-home.png'),fullPage:false});
    assert.deepEqual(errors, []);
    console.log('Browser smoke: all 18 lessons, completion, state isolation, 37-question resume, practice scoring/review/retry/history, search, Coach and mobile passed.');
  } finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
})().catch(e => { console.error(e); server.close(); process.exitCode=1; });
