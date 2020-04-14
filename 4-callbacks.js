// setTimeout(()=>{
//     console.log('2 segundos passaram')
// }, 2000)

// const names = ['Thiago', 'Aline', 'Mario', 'Brenda']
// const shortNames = names.filter((name) =>{
//     return name.length <= 4
// })

// const geocode = (address, callback) =>{
//     setTimeout(()=>{
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
    
//         callback(data)
//     }, 2000)
// }

// geocode('Rio de Janeiro', (data)=>{
//     console.log(data)
// })

const add = (soma1, soma2, callback) =>{
        setTimeout(()=>{
            console.log('dois segundos passaram')        
            callback(soma1 + soma2)
        }, 2000)
    }


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
 

