const isPartTime = 1;
const isfullTime = 2;
const partTimeWorkingHrPerDay = 4;
const fullTimeWorkingHr = 8;
const wagePerHr = 20;
const numOfWorkingDaysInMonth =20;
const maxWorkingHrsInMonth = 160;
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
function calcDailyWage(empHrs)
{
    return empHrs * wagePerHr;
}
let totalEmployeeHrs =0;
let totalWorkingDays =0;
let empDailyWageArr = new Array();
while (totalWorkingDays < numOfWorkingDaysInMonth && totalEmployeeHrs <=maxWorkingHrsInMonth)
{
    totalWorkingDays++
    let empCheck =  Math.floor(Math.random() * 10) % 3;
    let empHrs = getworkinghours(empCheck);
    totalEmployeeHrs +=empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let employeeWage = calcDailyWage(totalEmployeeHrs);
console.log("Total days: "+totalWorkingDays + " Employee Hrs: " +totalEmployeeHrs+ " Employee Wage: "+employeeWage);
console.log(empDailyWageArr);