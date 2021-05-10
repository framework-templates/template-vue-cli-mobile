
const path = require('path')
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: [
    'js',
    'jsx',
    'vue'
  ],
  collectCoverage: true,
  coverageDirectory: path.join(__dirname, './tests/unit/coverage')
}
