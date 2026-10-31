const { factorial } = require('../src/index');

describe('Factorial Function Test Suite', () => {
    
    // Test 1: Base case validation
    test('factorial of 0 should be 1', () => {
        expect(factorial(0)).toBe(1);
    });

    // Test 2: Standard calculation test
    test('factorial of 5 should be 120', () => {
        expect(factorial(5)).toBe(120);
    });

    // Test 3: Another standard case
    test('factorial of 3 should be 6', () => {
        expect(factorial(3)).toBe(6);
    });

    // Test 4: Exception / edge-case testing
    test('factorial of a negative number throws an error', () => {
        expect(() => factorial(-1)).toThrow("Factorial is not defined for negative numbers.");
    });

});