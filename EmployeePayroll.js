class EmployeeePayrollData
{
    id;
    salary;
    name;
    constructor(id,salary,name)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    toString()
    {
        return "id = "+this.id+", name = "+this.name+", salary = "+this.salary ; 
    }
}
let employeePayrolldata = new EmployeeePayrollData(1,'Vijay',50000);
console.log(employeePayrolldata.toString());