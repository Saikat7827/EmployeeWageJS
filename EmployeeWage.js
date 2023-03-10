const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NO_OF_WORKING_DAYS = 20;

//using function
function getWorkingHrs(empCheck) {
switch(empCheck) {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
    default:
        return 0;    
}
}

//Calculate daily wage method
function CalcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

//initialize variables
let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHrs(empCheck);
    empDailyWageArr.push(CalcDailyWage(empHrs));
}

let empWage = CalcDailyWage(totalEmpHrs);  
console.log(`
Total Days : ${totalWorkingDays}
Total Hrs  : ${totalEmpHrs}
Emp Wage   : ${empWage}`);