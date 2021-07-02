module.exports = {
  "extension": [
    "tsx"
  ],
  "spec": "__tests__/*.tsx",
  "reporter": "dot",
  "require": ["global-jsdom/register", "./babel-register.js"]
}