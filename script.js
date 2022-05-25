//@ts-check

import Box from "./Box.js"
import mul from "./zutils.js"

let c = mul(10,20)
console.log(c)

let b = new Box('Mike')
b.sayHello()

let afterTakeOffCheckList = {
    gear :'up',
    flaps: '0',
    climbSpeed: 'selected'
}

for (const key in afterTakeOffCheckList) {
    if (Object.hasOwnProperty.call(afterTakeOffCheckList, key)) {
        const element = afterTakeOffCheckList[key];
        console.log(`${key}: ${element}`)
    }
}

