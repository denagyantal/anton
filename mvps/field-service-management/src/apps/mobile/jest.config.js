module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/app'],
  moduleNameMapper: {
    '^@field-service/shared$': '<rootDir>/../../../packages/shared/src/index.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@react-native-async-storage/async-storage$': '<rootDir>/src/__mocks__/async-storage.ts',
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: {
        module: 'commonjs',
        moduleResolution: 'node',
        jsx: 'react-jsx',
        esModuleInterop: true,
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        strict: true,
        skipLibCheck: true,
      },
    }],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@nozbe/watermelondb|@field-service)/)',
  ],
};
