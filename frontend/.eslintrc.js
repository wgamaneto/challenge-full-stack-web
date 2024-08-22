module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      configFile: "./babel.config.js",
    },
  },
};
