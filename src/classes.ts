abstract class Departement {
    static fiscalYear = 2020
    // private id: string ;
    // public name: string;
    protected employees: string[] = [];

    constructor(protected id: string , public name: string) {
        // this.id = id
        // this.name = n;
    }

    static createEmployee(name: string) {
        return { name: name}
    }

    // describe(this: Departement) {
    //     console.log(`Departement (${this.id}): ${this.name}`)
    // }

    abstract describe(this: Departement): void

    addEmployee(employee: string) {

       this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}
class ITDepartement extends Departement {
    admins: string[];
    constructor(id : string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log('IT Departement - ID: ' + this.id)
    }
}

class AccountingDepartement extends Departement {
   private lastReport : string;
   private static instance: AccountingDepartement;

   get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport
        }
        throw new Error('No report found.')
   }

   set mostRecentReport(value: string) {
       if(!value){
         throw new Error('Something is worng ....')
       }
       this.addReport(value)
   }

   private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0]
   }

   static getInstance() {
        if(AccountingDepartement.instance) {
            return this.instance
        }

        this.instance = new AccountingDepartement('d2', [])
   }

   addEmployee(name: string) {
    if(name === 'Max') {
     return ;
    }

    this.employees.push(name)
 }

   addReport(text: string){
    this.reports.push(text)
   }

   describe() {
      console.log('Accounting Deaprtement - ID: ' + this.id)
   }


   printReports() {
    console.log(this.reports)
   }
}

const accpunt = new ITDepartement('d1', ["Hero", "Gini"])
//const accounting = new Departement('d1','Accounting')
// const heli = new AccountingDepartement('d1', [])

const newAccounting = AccountingDepartement.getInstance();
// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');

// // accounting.employees[2] = 'Anna';

// accounting.describe();
// accounting.name = 'NEW NAME'
// accounting.printEmployeeInformation();
// newAccounting.addReport("Hello")
// heli.printReports()
console.log(newAccounting, "HHlow")


// const accountingCopy = { name:"Deto ",describe: accounting.describe};

// accountingCopy.describe();