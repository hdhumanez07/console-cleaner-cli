const fs = require('fs');
const path = require('path');

// Add you language here
const languagePrintFunctions = {
  javascript: { comment: '//', print: 'console.log', extensions: ['.js', '.jsx'] },
  python: { comment: '#', print: 'print', extensions: ['.py'] },
  java: { comment: '//', print: 'System.out.println', extensions: ['.java'] },
  csharp: { comment: '//', print: 'Console.WriteLine', extensions: ['.cs'] },
  cpp: { comment: '//', print: 'std::cout', extensions: ['.cpp', '.h'] },
  php: { comment: '//', print: 'echo', extensions: ['.php'] },
  ruby: { comment: '#', print: 'puts', extensions: ['.rb'] },
  typescript: { comment: '//', print: 'console.log', extensions: ['.ts', '.tsx'] },
  go: { comment: '//', print: 'fmt.Println', extensions: ['.go'] },
  swift: { comment: '//', print: 'print', extensions: ['.swift'] },
  dart: { comment: '//', print: 'print', extensions: ['.dart'] },
};

function getLanguageConfig(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return Object.values(languagePrintFunctions).find(config =>
    config.extensions.includes(ext)
  );
}

function cleanFileContent(content, languageConfig) {
  const { comment, print } = languageConfig;
  const lines = content.split('\n');
  const newLines = [];

  for (let i = 0; i < lines.length; i++) {
    const currentLine = lines[i].trim();

    if (currentLine.startsWith(print)) {
      const previousLine = lines[i - 1]?.trim();
      if (!previousLine?.startsWith(`${comment} no-delete-print`)) {
        continue;
      }
    }
    newLines.push(lines[i]);
  }

  return newLines.join('\n');
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      processDirectory(filePath);
    } else {
      const languageConfig = getLanguageConfig(filePath);
      if (languageConfig) {
        const content = fs.readFileSync(filePath, 'utf8');
        const cleanedContent = cleanFileContent(content, languageConfig);
        fs.writeFileSync(filePath, cleanedContent, 'utf8');
      }
    }
  }
}

function main() {
  const targetDir = process.argv[2] || '.';
  const absolutePath = path.resolve(targetDir);

  if (!fs.existsSync(absolutePath)) {
    console.error(`Directory does not exist: ${absolutePath}`);
    process.exit(1);
  }

  processDirectory(absolutePath);
}

main();
