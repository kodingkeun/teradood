const axios = require('axios')

const terabox = url => {
    return new Promise( async (resolve, reject) => {
        var base_url = 'https://api.hunternblz.com/terabox'
        try {
            var { data } = await axios.post(base_url, {
                pesan: 'API+INI+BEBAS+DIPAKAI',
                url,
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
            })
            resolve(data)
        } catch ({ response: { data } }) {
            reject(data)
        }
    })
}

module.exports = { terabox }
