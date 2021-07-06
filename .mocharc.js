module.exports = {
  "extension": [
    "tsx"
  ],
  "spec": "__tests__/*.tsx",
  "reporter": "Min",
  "require": ["global-jsdom/register", "./babel-register.js"]
}