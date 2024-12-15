// tests/MyClass.test.js
const MyClass = require('../src/MyClass');

test('sayHello returns "Hello, World!"', () => {
  const myClass = new MyClass();
  expect(myClass.sayHello()).toBe('Hello, World!');
});
