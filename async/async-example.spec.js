import { it, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example.js'

it('should generate a token value', (done) => {
    //Arrange
    const testUserEmail = 'test@test.com';

    //Arrange and assert
    generateToken(testUserEmail, (err, token) => {
        try {
            expect(token).toBeDefined();
            // expect(token).toBe(2);
            done();
        } catch(err) {
            done(err);
        }
    });
});

it('should generate a token value', () => {
    //Arrange
    const testUserEmail = 'test@test.com';

    //Act and Assert
    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it('should generate a token value', async () => {//Other approach for promises
    //Arrange
    const testUserEmail = 'test@test.com';

    const token = await generateTokenPromise(testUserEmail);

    //Act and Assert
    expect(token).toBeDefined();
});