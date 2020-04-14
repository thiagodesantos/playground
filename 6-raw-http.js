const https = require('https')
const url = 'https://api.darksky.net/forecast/cba4de4061cfcadff8e8a459302c4546/45,-75?units=si&lang=pt'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk)=> {
        data = data + chunk.toString()        
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('Um Erro', error)
})

request.end()

