//Add the function Add
function addNum(n1:number, n2:number) {
    return n1 + n2 
}

const number1 = 5
const number2 = 2.8 

const result = add(number1, number2); 
console.log(result)

//Add the funciton substraction 
function substraction(n1:number, n2:number) {
    return n1-n2
}

const num1 = 10;
const num2 = 15; 

const res = substraction(num1, num2)
console.log(res)

function toCalculateTemperature(num : number,  category: string) {
    let result = 0
    switch(category) {
        case 'Farenheit':
            result = (9/5*num) + 32
            break;
        case 'Reamur': 
            result = (4/5*num)
            break;
        case 'Kelvin': 
            result = num+ 273
            break;
        default :
             result = num
    }  

    return result
}

console.log(toCalculateTemperature(20, 'Reamur'))