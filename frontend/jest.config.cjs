module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ['**/*.test.(ts|js)', '**/*.it.(ts|js)', '**/*.pacttest.(ts|js)'],
  watchPathIgnorePatterns: ['pact/logs/*', 'pact/pacts/*'],
};