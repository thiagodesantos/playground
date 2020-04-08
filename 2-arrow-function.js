// const square = function (x){
//     return x * x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(2))

const event = {
    name: 'BirthDay Party',
    guestList: ['Andre', 'Thiago', 'Aline'],
    printQuestList() {
        console.log('Guest list For ' + this.name)

        this.guestList.forEach((quest)=>{
            console.log(quest + ' Esta indo ' + this.name)
        });
    }
}

event.printQuestList()