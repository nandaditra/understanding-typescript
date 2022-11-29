"use strict";
class Departement {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Departement: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Departement('Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.employees[2] = 'Anna';
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map