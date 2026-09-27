"""Run self-contained Python examples extracted from the actual lesson HTML.
Requires pandas and numpy for Unit 06. File/cloud/SQL examples are not executed.
"""
import contextlib
import io
from html.parser import HTMLParser
from pathlib import Path


class Examples(HTMLParser):
    def __init__(self):
        super().__init__()
        self.heading_id = None
        self.capture = False
        self.chunks = []
        self.examples = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in ('h2', 'h3'):
            self.heading_id = attrs.get('id')
        if tag == 'pre':
            self.capture = True
            self.chunks = []

    def handle_endtag(self, tag):
        if tag == 'pre':
            self.examples.append((self.heading_id, ''.join(self.chunks)))
            self.capture = False

    def handle_data(self, text):
        if self.capture:
            self.chunks.append(text)


expected = {
    'beginner-example': ['100\nTrue\n'],
    'python-first-lab': ['[100, 80]\n180\n'],
    'python-class': ['1 1\n'],
    'python-cleanup': ['amount không phải số nguyên\nđã kết thúc bước parse\n', '100\n100\n'],
    'merge-count-lab': ['5\nKhóa customer phía phải chưa duy nhất\n'],
    'null-profile-lab': ['3\n2\n1\n1\n'],
    'numpy-lab': ['[100, 80, 60]\n240\n'],
}
count = 0
for unit in (2, 6):
    parser = Examples()
    parser.feed((Path(__file__).resolve().parent.parent / 'lessons' / f'unit-{unit:02d}.html').read_text(encoding='utf-8'))
    namespace = {}
    for heading, code in parser.examples:
        if heading not in expected or (unit == 6 and heading == 'beginner-example'):
            continue
        with contextlib.redirect_stdout(io.StringIO()) as output:
            exec(compile(code, f'unit-{unit}:{heading}', 'exec'), namespace)
        assert output.getvalue() == expected[heading].pop(0), (heading, output.getvalue())
        count += 1
assert count == 8, count
print(f'Lab examples: {count} Python/pandas/NumPy examples matched their published results.')
