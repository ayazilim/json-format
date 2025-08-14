// Lightweight JSON parse worker
self.onmessage = function (e) {
  try {
    const { id, text } = e.data || {};
    const value = JSON.parse(text);
    self.postMessage({ id, ok: true, value });
  } catch (error) {
    try {
      const { id, text } = e.data || {};
      const msg = String(error && error.message ? error.message : error);
      let position = null, line = null, column = null;
      const match = msg.match(/position\s+(\d+)/i);
      if (match) {
        position = Number(match[1]);
        const lc = positionToLineColumn(text, position);
        line = lc.line; column = lc.column;
      }
      self.postMessage({ id, ok: false, error: msg, position, line, column });
    } catch {
      self.postMessage({ id: (e.data && e.data.id) || null, ok: false, error: 'parse_failed' });
    }
  }
};

function positionToLineColumn(text, pos) {
  let line = 1, column = 1;
  for (let i = 0; i < text.length && i < pos; i++) {
    const ch = text.charAt(i);
    if (ch === "\n") { line++; column = 1; }
    else { column++; }
  }
  return { line, column };
}

