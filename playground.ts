
//  type Person= {name: string , age: number}
// or
// interface Person {
//     name: String,
//     age: number
// }

// what is the difference between type and interface ? TS recommends to use interface

// interface iyi baraye tabee
interface PersonLoggerFN {
    (name: string, age: number): string
}


// class hamun interface hast ba in farg ke megdare avaliye midi behesh, ya ham constructor barash mizari, ba class ha mituni new Person dorost koni
class Person {
    // name: String= "myname"
    // age:number = 25
    name: String
    age?: number=0
    // ? yani optionale e mitune bashe ya nabashe

    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age=0
        // 0 yani meghdare avaliye dadim
    }
}


// debugger YaNİ UNJA VAYSA BEBİNAM CHİ EJRA MİSHE

const play = () => {
    // debugger
    console.log("HELLO WORLS PLAY")

    const person : Person = {
        name: "zahra.ganji",
        age: 30
    }

    const LogPersonInfo: PersonLoggerFN = (personName: string, personAge: number) => {
        const info = `name:${personName},age : ${personAge}`
        // console.log (`name:${personName},age : ${personAge}`);
        return info
    }


    //    const LogPersonInfo2 =(person :{name: string , age: number})=>{
    // or
    const LogPersonInfo2 = (person: Person) => {
        const infoo = `name:${person.name},age : ${person.age}`
        console.log(`name:${person.name},age : ${person.age}`);
        return infoo
    }


    LogPersonInfo("Zara", 30);
    LogPersonInfo2(new Person("zahrggggg"));
}
export default play;