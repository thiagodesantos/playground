const fs = require('fs')


const databuffer = fs.readFileSync('1-json.json')
const dataJSON = databuffer.toString()
const data = JSON.parse(dataJSON)

 data.name = 'thiago'
 data.planet = 'Astar'
 data.age = '29'

const dataJSON2 = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataJSON2)

