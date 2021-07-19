# Modelo de API em Node
#### Node.js | Express | TypeScript | Sequelize | Sqlite

## Instalação:
* para instalar o projeto

      yarn install
      // ou
      npm install
## Scripts:
* Reinicia o processo do Node.JS de destino quando qualquer um dos arquivos necessários muda

      dev: ts-node-dev src/server.ts

* Transpila o codigo em typescript para Node.js de acordo com as configs em  tsconfig.json

      build: tsc

* Builda a aplicação e roda o código node em /dist/server.js

      start: tsc && node dist/server.js
