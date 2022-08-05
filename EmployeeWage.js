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
let empDailyHrsAndWageArr = new Array();
while (totalWorkingDays < numOfWorkingDaysInMonth && totalEmployeeHrs <=maxWorkingHrsInMonth)
{
    totalWorkingDays++
    let empCheck =  Math.floor(Math.random() * 10) % 3;
    let empHrs = getworkinghours(empCheck);
    totalEmployeeHrs +=empHrs;
    empDailyHrsAndWageArr.push(
        {
            dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage:calcDailyWage(empHrs),
        toString(){
            return '\nDay'+this.dayNum + '=> Working Hours is '+this.dailyHours+
            ' And Wage Earned = '+this.dailyWage
        },
        });
}
console.log("Showing Daily Hours and Wage Earned: "+empDailyHrsAndWageArr);
//UC-11A to 11D Using Object Functions along with Arrow functions
//UC-11A total Hours and Wage
let totalWages = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage>0)
                    .reduce((totalWage,dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage,0);
let totalHours = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage>0)
                .reduce((totalHour,dailyHrsAndWage) => totalHour += dailyHrsAndWage.dailyHours,0);
 console.log("Total Hours: "+totalHours+ " Total Wage: "+totalWages);
 //UC-11B full working days using for each
 empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours==8)
                        .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

//UC-11C Part timr Working days using map
let partWorkingDayStrrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours ===4)
                            .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("Part time working days:"+partWorkingDayStrrArr);
//UC-11D Non working Days
let nonWorkingDays = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours==0)
                    .map(dailyHrsAndWage=> dailyHrsAndWage.dayNum);
console.log("Non Working days"+nonWorkingDays);