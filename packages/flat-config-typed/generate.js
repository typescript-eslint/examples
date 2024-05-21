import fs from 'node:fs/promises'

const pending = []

for (let i = 0; i < 9001; i += 1) {
    pending.push(fs.writeFile(`default-${i}.js`, "console.log();\n"))
}

await Promise.all(pending);