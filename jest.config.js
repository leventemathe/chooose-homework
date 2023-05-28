module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: '<rootDir>/coverage/',
  coveragePathIgnorePatterns: ['(tests/.*.mock).(jsx?|tsx?)$', '(.*).d.ts$', 'firebase.ts', 'setupTests.ts'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$':
      'identity-obj-proxy',
  },
  verbose: true,
  testTimeout: 30000,
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: "jsdom",
  "setupFilesAfterEnv": [
    "<rootDir>/src/setupTests.ts"
  ]
};
