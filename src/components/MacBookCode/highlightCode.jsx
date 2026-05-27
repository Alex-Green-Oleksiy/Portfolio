const KEYWORDS = new Set([
  'export',
  'function',
  'const',
  'return',
  'async',
  'await',
  'import',
  'from',
  'true',
  'false',
])

function tokenizeLine(line) {
  const tokens = []
  let i = 0

  while (i < line.length) {
    if (line[i] === ' ' || line[i] === '\t') {
      let ws = ''
      while (i < line.length && (line[i] === ' ' || line[i] === '\t')) {
        ws += line[i]
        i++
      }
      tokens.push({ type: 'plain', value: ws })
      continue
    }

    if (line.slice(i, i + 2) === '//') {
      tokens.push({ type: 'comment', value: line.slice(i) })
      break
    }

    if (line[i] === "'" || line[i] === '"' || line[i] === '`') {
      const q = line[i]
      let str = q
      i++
      while (i < line.length) {
        str += line[i]
        if (line[i] === q && line[i - 1] !== '\\') {
          i++
          break
        }
        i++
      }
      tokens.push({ type: 'string', value: str })
      continue
    }

    if (/[a-zA-Z_$]/.test(line[i])) {
      let word = ''
      while (i < line.length && /[\w$]/.test(line[i])) {
        word += line[i]
        i++
      }
      const type = KEYWORDS.has(word) ? 'keyword' : 'ident'
      tokens.push({ type, value: word })
      continue
    }

    if (/[0-9]/.test(line[i])) {
      let num = ''
      while (i < line.length && /[\w.]/.test(line[i])) {
        num += line[i]
        i++
      }
      tokens.push({ type: 'number', value: num })
      continue
    }

    tokens.push({ type: 'punct', value: line[i] })
    i++
  }

  return tokens
}

export function highlightCode(code) {
  const lines = code.split('\n')
  return lines.map((line, lineIdx) => (
    <span key={lineIdx} className="code-line">
      {tokenizeLine(line).map((tok, i) => (
        <span key={i} className={`tok-${tok.type}`}>
          {tok.value}
        </span>
      ))}
      {lineIdx < lines.length - 1 ? '\n' : null}
    </span>
  ))
}
