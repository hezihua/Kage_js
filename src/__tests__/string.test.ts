import {
  capitalize,
  camelCase,
  snakeCase,
  kebabCase,
  trim,
  truncate,
  words,
} from '../string';

describe('String', () => {
  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('HELLO')).toBe('Hello');
    });
  });

  describe('camelCase', () => {
    it('should convert to camelCase', () => {
      expect(camelCase('hello world')).toBe('helloWorld');
      expect(camelCase('hello-world')).toBe('helloWorld');
      expect(camelCase('hello_world')).toBe('helloWorld');
    });
  });

  describe('snakeCase', () => {
    it('should convert to snake_case', () => {
      expect(snakeCase('helloWorld')).toBe('hello_world');
      expect(snakeCase('hello-world')).toBe('hello_world');
    });
  });

  describe('kebabCase', () => {
    it('should convert to kebab-case', () => {
      expect(kebabCase('helloWorld')).toBe('hello-world');
      expect(kebabCase('hello_world')).toBe('hello-world');
    });
  });

  describe('trim', () => {
    it('should trim whitespace', () => {
      expect(trim('  hello  ')).toBe('hello');
    });

    it('should trim custom characters', () => {
      expect(trim('--hello--', '-')).toBe('hello');
    });
  });

  describe('truncate', () => {
    it('should truncate long strings', () => {
      expect(truncate('hello world', { length: 8 })).toBe('hello...');
    });

    it('should not truncate short strings', () => {
      expect(truncate('hello', { length: 10 })).toBe('hello');
    });
  });

  describe('words', () => {
    it('should split string into words', () => {
      expect(words('helloWorld')).toEqual(['hello', 'World']);
      expect(words('hello-world')).toEqual(['hello', 'world']);
    });
  });
});
