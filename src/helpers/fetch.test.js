import { fetchData } from './fetch';

describe('FetchData', () => {
    beforeEach(() => {
        window.fetch = jest.fn(() => {
            return Promise.resolve({
                status: 200,
                ok: true
            })
        })
    })

    it('should return a resolved response when successful', async () => {
        let response = await fetchData('https://treat-yo-self-bjtw.herokuapp.com/api/v1/suggestions')
        expect(response).toEqual({ status: 200, ok: true })
    })

    it('should return an error when unsuccessful', async () => {
        let error = new Error('There was an error fetching data')
        window.fetch = jest.fn(() => {
            return Promise.resolve({
                status: 200,
                ok: false
            })
        })
        await expect(fetchData('https://treat-yo-self-bjtw.herokuapp.com/api/v1/suggestions')).rejects.toEqual(error)
    })
})