# Console Cleaner CLI

**Console Cleaner CLI** is a tool to search and remove print statements (`console.log`, `print`, etc.) from projects written in the most popular programming languages. It respects comments that indicate a specific statement should not be removed (`// no-delete-print`).

---

## Features

- Automatically cleans print statements across project files.
- Respects comments that protect specific print statements (`// no-delete-print` or equivalents in other languages).
- Supports the following languages:
  - **JavaScript / TypeScript**: `console.log`
  - **Python**: `print`
  - **Java**: `System.out.println`
  - **C#**: `Console.WriteLine`
  - **C++**: `std::cout`
  - **PHP**: `echo`
  - **Ruby**: `puts`
  - **Go**: `fmt.Println`
  - **Swift / Dart**: `print`

---

## Use with Node.js
- Clone the repository:
```bash
https://github.com/your-username/console-cleaner-cli.git 
```
- Paste **cleaner.js** in your root project and execute
```bash
node cleaner.js . 
```
- Or using with package.json if your project is based in Node.js
```bash
"scripts": {
  ... other awesome scripts
  "clean": "node cleaner.js ."
}
```
- And run
```bash
npm run clean
```
## Screenshots

![App Screenshot](https://media.licdn.com/dms/image/v2/D4E22AQG6TeQtH2qyLg/feedshare-shrink_800/feedshare-shrink_800/0/1732384869569?e=1735171200&v=beta&t=S-1p1c-_VZ5PJmnGRIbTqtl6LlWv0xjhrVXEBxRbKo0)

![App Screenshot](https://media.licdn.com/dms/image/v2/D4E22AQEpQpgPbozcCw/feedshare-shrink_800/feedshare-shrink_800/0/1732384869590?e=1735171200&v=beta&t=2XdhG4FEK6Zj58rrnsmFGN1S4JCqzpCiqT9hLPsubkY)

![App Screenshot](https://media.licdn.com/dms/image/v2/D4E22AQGe6D3G0Dtc_A/feedshare-shrink_800/feedshare-shrink_800/0/1732384869582?e=1735171200&v=beta&t=8KwbgbQjiuS1Nlc1TPrvAO4bFL7RP8_KBS_10wJJs00)

![App Screenshot](https://media.licdn.com/dms/image/v2/D4E22AQEsqw1vKx6PtA/feedshare-shrink_800/feedshare-shrink_800/0/1732384869575?e=1735171200&v=beta&t=NpNwgSz-CA6OQE1uCK4Sg_7lq9uQVZQLQDYXdGR6ok0)

![App Screenshot](https://media.licdn.com/dms/image/v2/D4E22AQGurx7XyRalSw/feedshare-shrink_800/feedshare-shrink_800/0/1732384869579?e=1735171200&v=beta&t=pKkgs1vBN_iNexAXAOAbGSd7ly9pMKMEt0rKsAlgTXg)


## Authors

- [@hdhumanez07](https://www.github.com/hdhumanez07)