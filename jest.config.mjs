/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  verbose: true,
  injectGlobals: true,
  testMatch: ['<rootDir>/__tests__/**/*.test.[jt]s'],
  testPathIgnorePatterns: ['<rootDir>/__tests__/input/', '<rootDir>/__tests__/output/'],
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*'],
  coverageDirectory: './coverage',
  // fix test cases with side effects (dynamic import) sharing the same evnironment may throw error, refer: https://github.com/facebook/jest/issues/11438
  maxWorkers: 10,
  maxConcurrency: 6,
};

export default config;
