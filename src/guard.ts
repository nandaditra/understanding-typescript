type Bos = {
    name: string;
    privileges: string[]
}

type Manager = {
    name: string;
    startDate: Date;
}

type BosiGer = Bos & Manager 

const p2: BosiGer = {
    name: "Adam Girvil",
    privileges: ["create-server"],
    startDate : new Date()
}

type Combination = string | number;
type Num = number | boolean 

type Univ = Combination & Num;

function AddComponent(a: Combination, b: Combination) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}
