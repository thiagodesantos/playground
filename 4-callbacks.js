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



//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (soma1, soma2, callback) =>{
        setTimeout(()=>{
            console.log('dois segundos passaram')        
            callback(soma1 + soma2)
        }, 2000)
    }


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
 

