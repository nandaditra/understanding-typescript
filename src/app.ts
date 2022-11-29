class Departement {
    public name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Departement) {
        console.log('Departement: '+ this.name)
    }

    addEmployee(employee: string) {
       this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Departement('Accounting')

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.employees[2] = 'Anna';

accounting.describe();
accounting.name = 'NEW NAME'
accounting.printEmployeeInformation();
// const accountingCopy = { name:"Deto ",describe: accounting.describe};

// accountingCopy.describe();