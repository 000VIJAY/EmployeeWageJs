class EmployeeePayrollData
{
    id;
    salary;
    name;
    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
        get gender() {return this._gender;}
        set gender(gender){this._gender = gender;}
        get startDate() {return this._startDate;}
        set startDate(startDate) {this._startDate = startDate;}
    toString()
    {
        const option = {year: 'numeric' , month: 'long', day: 'numeric'};
        const empDate = this.startDate === undefined ? "undefined":new Date().toLocaleDateString("en-us",option);
        return "id = "+this.id+", name = "+this.name+", salary = "+this.salary +", Gender = "+this.gender+" , StartDate = "+empDate;  
    }
}
let employeePayrolldata = new EmployeeePayrollData(1,'Vijay',50000);
console.log(employeePayrolldata.toString());
let newEmployeePayrolldata = new EmployeeePayrollData(1,'Shiva',50000,"M",new Date());
console.log(newEmployeePayrolldata.toString());