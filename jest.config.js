/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "ts", "json"],
  testMatch: ["**/__tests__/**/*.test.ts", "**/modules/**/tests/**/*.test.ts"],
};

module.exports = config;
