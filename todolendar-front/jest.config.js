/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  collectCoverage: true,
  coverageReporters: ["lcov", "text-summary"],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
    '^@molecules/(.*)$': '<rootDir>/src/components/molecules/$1',
    '^@organisms/(.*)$': '<rootDir>/src/components/organisms/$1',
    '^@templates/(.*)$': '<rootDir>/src/templates/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@types/(.*)$': '<rootDir>/src/types/$1',
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^@formkit/auto-animate/react$': '<rootDir>/__mocks__/auto-animate.js',
  },
};

