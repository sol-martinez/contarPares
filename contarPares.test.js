const ContarPares = require('./contarPares');

describe('ContarPares', () => {
  let testPassed = false;

  test('should count the even numbers in the array', () => {
    expect(ContarPares([1, 2, 3, 4, 5, 6])).toBe(3);
    expect(ContarPares([1, 3, 5])).toBe(0);
    expect(ContarPares([2, 4, 6, 8, 10])).toBe(5);
    expect(ContarPares([])).toBe(0);
    testPassed = true;
  });

  afterAll(() => {
    if (testPassed) {
      console.log('🎉 ¡Excelente! Dominás arrays y lógica de conteo.');
    } else {
      console.log('❌ Algo salió mal. Volvé a intentarlo.');
    }
  });
});
