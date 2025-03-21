const fetchData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('peanut butter')
        }, 1000)
    })
}

const fetchDataWithError = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('error'))
        }, 1000)
    })
}

describe('[asynchronoustest] Test case', () => {
    test('the data is peanut butter（Promise）', () => {
        return fetchData().then(data => {
            expect(data).toBe('peanut butter')
        })
    })

    test('the data is peanut butter（async/await）', async () => {
        const data = await fetchData()
        expect(data).toBe('peanut butter')
    })

    test('the fetch fails with an error', async () => {
        // 确保在测试中至少调用一次断言。这有助于确保在异步测试中，断言确实被执行。
        expect.assertions(1)
        try {
            await fetchDataWithError()
        } catch (error) {
            expect(error.message).toMatch('error')
        }
    })

    test('the fetch fails with an error', () => {
        expect.assertions(1)
        return fetchDataWithError().catch(error => expect(error.message).toMatch('error'))
    })

    test('the data is peanut butter', async () => {
        await expect(fetchData()).resolves.toBe('peanut butter')
    })

    test('the fetch fails with an error', async () => {
        await expect(fetchDataWithError()).rejects.toThrow('error')
    })
})
