const nextPrime = require('./next-prime')

describe('nextPrime', () => {
    it('should return the next prime number of given input', () => {
        // arrange
        const inputA = 2
        const inputB = 6

        // act
        const resultA = nextPrime(inputA)
        const resultB = nextPrime(inputB)

        // assert
        expect(resultA).toBe(3)
        expect(resultB).toBe(7)
    })
})
