describe('使用jest 的API', () => {
    test('jest demo', () => {
        // Arrange
        const a = 1
        // Act
        const result = 1
        // Assert
        expect(result).toBe(a)
    })

    test('object assignment', () => {
        const data = { one: 1, other: undefined }
        data['two'] = 2
        expect(data).toEqual({ one: 1, two: 2 }) // Pass
        // expect(data).toStrictEqual({ one: 1, two: 2 }) // will not pass
    })

    test('adding positive numbers is not zero', () => {
        for (let a = 1; a < 10; a++) {
            for (let b = 1; b < 10; b++) {
                expect(a + b).not.toBe(0)
            }
        }
    })

    test('null', () => {
        const n = null
        expect(n).toBeNull()
        expect(n).toBeDefined()
        expect(n).not.toBeUndefined()
        expect(n).not.toBeTruthy()
        expect(n).toBeFalsy()
    })

    test('zero', () => {
        const z = 0
        expect(z).not.toBeNull()
        expect(z).toBeDefined()
        expect(z).not.toBeUndefined()
        expect(z).not.toBeTruthy()
        expect(z).toBeFalsy()
    })

    test('truthy', () => {
        const a = 1
        expect(a).toBeTruthy()
        // expect(b).toBeFalsy()
    })

    test('two plus two', () => {
        const value = 2 + 2
        expect(value).toBeGreaterThan(3)
        expect(value).toBeGreaterThanOrEqual(3.5)
        expect(value).toBeLessThan(5)
        expect(value).toBeLessThanOrEqual(4.5)

        // toBe and toEqual are equivalent for numbers
        expect(value).toBe(4)
        expect(value).toEqual(4)
    })

    test('adding floating point numbers', () => {
        const value = 0.1 + 0.2
        //expect(value).toBe(0.3);           This won't work because of rounding error
        expect(value).toBeCloseTo(0.3) // This works.
    })

    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/)
    })

    test('but there is a "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/)
    })

    test('the shopping list has milk on it', () => {
        const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk']
        expect(shoppingList).toContain('milk')
        expect(new Set(shoppingList)).toContain('milk')
    })
})
