/**
 * 
 */
 export default class Box {


    /**
     * @param {string} name
     */
    constructor(name) {
        this.name = name
    }

    /**
     * 
     */
    sayHello() {
        console.log(`Hello ${this.name}`)
    }
}