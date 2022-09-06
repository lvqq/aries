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
  testMatch: ['**/__tests__/**/*.test.[jt]s'],
  testPathIgnorePatterns: ['/__tests__/output/'],
  collectCoverage: false,
  collectCoverageFrom: ['./src/**/*'],
  coverageDirectory: './coverage',
  maxWorkers: 10,
};

export default config;
