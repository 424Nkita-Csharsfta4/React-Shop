module.exports = {
    moduleFileExtensions: ['js', 'jsx'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['/node_modules/'],
    verbose: true,
};
