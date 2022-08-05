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
function totalWages(totalWage,dailyWage)
{
    return totalWage + dailyWage;
}
let employeeWage = calcDailyWage(totalEmployeeHrs);
console.log("Total days: "+totalWorkingDays + " Employee Hrs: " +totalEmployeeHrs+ " Employee Wage: "+employeeWage);
console.log(empDailyWageArr);
//Array Helper function
//UC-7A foreach
let totalEmpWage =0;
function sum(dailyWage)
{
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days: " +totalWorkingDays +" Employee Hrs: " +totalEmployeeHrs+ " Employee Wage: "+employeeWage);
//using reduce
function totalWages(totalWage,dailyWage)
{
    return totalWage + dailyWage;
}
console.log("Employee Wage with reduce: " + empDailyWageArr.reduce(totalWages,0));
//UC-7B 
let dailyCntr =0;
function mapDailyWithWage(dailyWage)
{
    dailyCntr++;
    return dailyCntr + " = " +dailyWage;
}
let mapDailyWithWageArr = empDailyWageArr.map(mapDailyWithWage);
console.log("Daily Wage Map");
console.log(mapDailyWithWageArr);
//UC-7C 
function fullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDailyWithWageArr.filter(fullTimeWage);
console.log("Wage filter when fulltime wage earned");
console.log(fullDayWageArr);
//UC-7D Find the full time occurance when full timr wage was earned using find function
function findFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let findFullTimeWageOccurance = mapDailyWithWageArr.find(findFullTimeWage);
console.log("First time full time wage was earned on Daye: "+findFullTimeWageOccurance);
//Uc-7E check if Every Element of full time wage id truely holding Full timr wage
function isAllFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let truelyHoldingFullTimeWage = fullDayWageArr.every(isAllFullTimeWage);
console.log("Check All element have full time wage: " +truelyHoldingFullTimeWage);
//UC-7F Check if there is any Part Time Wage
function isPartTimeWage(dailyWage)
{
return dailyWage.includes("80");
}
let isPartTimeAvl = mapDailyWithWageArr.some(isAllFullTimeWage);
console.log("Check is Any Part Time Wage: "+isPartTimeAvl); 
//UC-7G Find the number of days the employee Worked
function numOfDaysEmpWorked(numOfDays,dailyWage)
{
    if(dailyWage>0)
    {
        return numOfDays+1;
    }
    return numOfDays;
}
let totalDays = empDailyWageArr.reduce(numOfDaysEmpWorked,0);
console.log("Number of days employee worked in a month: "+totalDays);