

interface Person {
    name:string,
    age: number
}

interface BusinessPerson extends Person {
    salary : number
}

interface AcademicPerson extends Person {
    projects: number
}


// TYPE VOİD BARAYE YE FUNC YANİ İN TABEE CHİZİ NEMİKHAD BARGARDUNE





const play2 = () => {
    // Array<number>  and number[]  yeki hastan
    // Array<string> and string[] yeki hastan
    const numbers : number[] = [1,2,3,4];
    const names : string[] =["hey","you","like"];

    const AcademicPersonLog : AcademicPerson={
        name: "zahra",
        age: 30,
        projects:100
    } 

    const BusinessPersonLog : BusinessPerson={
        name: "zahra",
        age: 30,
        salary: 2000
    }


console.log(AcademicPersonLog.projects + "/n"+ BusinessPersonLog.salary);


    // alan in random az jense ya  stringe ya adad ,alan noesho chi bezarim?
    const random = Math.random() > 0.5 ? "Hello" : [1, 2]

    const upper= typeof random === "string" ? random.toUpperCase() : console.log(random);
}
export default play2;