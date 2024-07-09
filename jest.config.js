module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(your-module)/)'  // Reemplaza 'your-module' con el nombre del módulo que necesita ser transformado, o elimínalo si no es necesario.
  ]
};
