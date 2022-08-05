let isPartTime = 1;
let isfullTime = 2;
const partTimeWorkingHrPerDay = 4;
const fullTimeWorkingHr = 8;
const wagePerHr = 20;
function getworkinghours(empCheck)
{
    switch(empCheck)
    {
        case isPartTime:
            console.log("Employee is part time");
            return partTimeWorkingHrPerDay;
        case isfullTime:
            console.log("Employee is full time");
            return fullTimeWorkingHr;
        default:
            console.log("Employee is absent")
            return 0;
    }   
}
let empHrs =0;
let empCheck =  Math.floor(Math.random() * 10) % 3;
empHrs = getworkinghours(empCheck)
let empWage = empHrs * wagePerHr;
console.log("Emp Wage: "+empWage);