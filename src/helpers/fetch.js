export const fetchData = (url, options = {}) => {
    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('There was an error fetching data')
            } else {
                return response
            }
        })
}
