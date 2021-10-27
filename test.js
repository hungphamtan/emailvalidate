'use strict';
const isEmail = require('./');

describe('Email validate', function() {
  test('Should return true when email is valid', () => {
		const email = 'phamtanhung@gmail.com';
		const expectedValue = isEmail(email);
		expect(expectedValue).toBe(true);
	});

	test('Should return false when email include invalid', () => {
		const email = 'phamtanhung_gmail.com';
		const expectedValue = isEmail(email);
		expect(expectedValue).toBe(false);
	});
});
