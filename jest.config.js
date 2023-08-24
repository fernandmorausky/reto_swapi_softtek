const esModules = ['@rimac'].join('|');

module.exports = {
  preset: "ts-jest",
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  testMatch: [
    '**/*.test.ts'
  ],
  coveragePathIgnorePatterns: [
    'src/Planeta/dao/planeta.dao.ts'
  ],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest'
  },
  transformIgnorePatterns: [
    `/node_modules/(?!${esModules})`
  ]
};
