module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-prettier"],
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      configFile: "./babel.config.js",
    },
  },
};
