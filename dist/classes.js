"use strict";
class Departement {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Departement.fiscalYear = 2020;
class ITDepartement extends Departement {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Departement - ID: ' + this.id);
    }
}
class AccountingDepartement extends Departement {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Something is worng ....');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartement.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartement('d2', []);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    describe() {
        console.log('Accounting Deaprtement - ID: ' + this.id);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accpunt = new ITDepartement('d1', ["Hero", "Gini"]);
const newAccounting = AccountingDepartement.getInstance();
console.log(newAccounting, "HHlow");
//# sourceMappingURL=classes.js.map