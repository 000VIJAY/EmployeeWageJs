let isPartTime = 1;
let isfullTime = 2;
const partTimeWorkingHrPerDay = 4;
const fullTimeWorkingHr = 8;
const wagePerHr = 20;
const numOfWorkingDaysInMonth =20;
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
let totalEmployeeHrs =0;
for (let day =0; day<numOfWorkingDaysInMonth;day++)
{
    let empCheck =  Math.floor(Math.random() * 10) % 3;
    totalEmployeeHrs += getworkinghours(empCheck);
}
let empWage = totalEmployeeHrs * wagePerHr;
console.log("Hour: "+totalEmployeeHrs+", Emp Wage: "+empWage);