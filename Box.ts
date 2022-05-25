/**
 * Documentation
 * @param {number} a Some number
 * @param {number} b same
 * @returns {number} a x b
 */
function mul(a: number,b: number): number {
    return a*b
}

/**
 * 
 */
class Box {
    name: string
    /**
     * 
     * @param name 
     */
    constructor(name:string) {
        this.name = name
    }

    /**
     * 
     */
    sayHello() {
        console.log(`Hello ${this.name}`)
    }
}

let b = new Box('Mike')
b.sayHello()