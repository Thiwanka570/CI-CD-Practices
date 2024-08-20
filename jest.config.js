module.exports = {
    setupFiles: ['./jest.setup.js'],
    testEnvironment: 'node', // Use Node environment for backend testing
    testMatch: [ // Specify test file patterns
      '**/__tests__/**/*.test.js', // Tests inside __tests__ directory
      '**/?(*.)+(spec|test).js', // Tests with .spec.js or .test.js extension
    ],
    coverageDirectory: 'coverage', // Directory where coverage reports will be stored
    collectCoverage: true, // Enable coverage collection
    collectCoverageFrom: [ // Specify files for coverage collection
      'src/**/*.js', // Adjust path based on your project structure
      '!src/**/*.test.js', // Exclude test files from coverage
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Setup file to configure Jest environment
    transform: {
      '^.+\\.js$': 'babel-jest', // Use babel-jest to transpile ES6+ code
    },
    moduleFileExtensions: ['js', 'json', 'node'], // File extensions Jest should handle
  };
  