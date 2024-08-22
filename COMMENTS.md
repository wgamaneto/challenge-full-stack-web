# Decisão da arquitetura utilizada

- MSC:
  Como o meu foco foi criar algo simples e o mais rápido possível, resolvi usar o MSC pela facilidade de manutenção e por ser a arquitetura com a qual tinha mais familiaridade.

# Lista de bibliotecas de terceiros utilizadas

- express
- body-parser (Middleware para parsing de requisições JSON)
- pg e pg-hstore (Pacotes para conexão com PostgreSQL)
- dotenv
- sequelize
- cors

# O que você melhoraria se tivesse mais tempo

- Dificuldades de instalações de dependencias:
  - Vuetify: tentei tanto pelo CLI quanto manualmente.
  - @vue_tests3.0: pesquisei sobre os erros, porem nao obtive respostas que me ajudassem a implementar os testes.
- Usaria o Vue de forma mais eficiente, porém fazem quase 2 anos que tive contato com a tecnologia.
- Melhorias nas lógicas, códigos mais concisos e maior componentização para evitar repetições desnecessárias, pricipalmente nos botoes e estilos.
- Melhorias no UX/UI.
- Testes mais assertivos e em ambas stacks.

# Quais requisitos obrigatórios que não foram entregues

- Vuetify.

```
? Choose a preset: Vuetify 2 - Vue CLI (recommended)

🚀  Invoking generator for vue-cli-plugin-vuetify...
 WARN  conflicting versions for project dependency "sass-loader":

       - ^13.0.2 injected by generator "undefined"
       - ^10.0.0 injected by generator "vue-cli-plugin-vuetify"

       Using newer version (^13.0.2), but this may cause build errors.
 ERROR  Error: You cannot call "get" on a collection with no paths. Instead, check the "length" property first to verify at least 1 path exists.
Error: You cannot call "get" on a collection with no paths. Instead, check the "length" property first to verify at least 1 path exists.
    at Collection.get (/opt/homebrew/lib/node_modules/@vue/cli/node_modules/jscodeshift/src/Collection.js:213:13)
    at injectOptions (/opt/homebrew/lib/node_modules/@vue/cli/lib/util/codemods/injectOptions.js:15:6)
    at runTransformation (/opt/homebrew/lib/node_modules/@vue/cli/node_modules/vue-codemod/dist/src/runTransformation.js:60:17)
    at /opt/homebrew/lib/node_modules/@vue/cli/lib/Generator.js:335:23
    at Array.forEach (<anonymous>)
    at Generator.resolveFiles (/opt/homebrew/lib/node_modules/@vue/cli/lib/Generator.js:321:24)
    at async Generator.generate (/opt/homebrew/lib/node_modules/@vue/cli/lib/Generator.js:205:5)
    at async runGenerator (/opt/homebrew/lib/node_modules/@vue/cli/lib/invoke.js:111:3)
    at async invoke (/opt/homebrew/lib/node_modules/@vue/cli/lib/invoke.js:92:3)

```
