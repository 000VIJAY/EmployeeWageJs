let isPartTime = 1;
let isFullTime = 2;
const partTimeWorkingHrPerDay = 4;
const fullTimeWorkingHr = 8;
const wagePerHr = 20;
let empWage =0;
let empCheck =  Math.floor(Math.random() * 10) % 3;
if(empCheck==isFullTime)
{ 
      console.log("Employee is full time");
      empWage = fullTimeWorkingHr * wagePerHr;
}
else if(empCheck===isPartTime)
{
    console.log("Employee is part time");
    empWage = partTimeWorkingHrPerDay * wagePerHr;
}
else
{
    console.log("Employee is Absent");
}
console.log("Employee Wage per day: "+empWage);