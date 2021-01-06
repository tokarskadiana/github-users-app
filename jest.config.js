module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss|cssmodule)$': 'identity-obj-proxy'
  }
};