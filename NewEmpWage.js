// UC1
{
    const Is_Absent = 0;
    let empCheck = Math.floor(Math.random() * 10) %2;
    if (empCheck == Is_Absent){
    console.log("Employee is ABSENT");
    }
    else{
    console.log("Employee is PRESENT");
    }
}
// UC2
const IS_Part_Time = 1;
const IS_Full_Time = 2;
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const Wage_Per_Hours = 20;

{
    let emphrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch(empCheck){
        case IS_Part_Time: emphrs = Part_Time_Hours; break;
        case IS_Full_Time: emphrs = Full_Time_Hours; break;
        default: emphrs = 0;
    }
    let empWage = emphrs * Wage_Per_Hours;
    console.log("Employee wage is : "+ empWage); 


// UC3

    function getWorkingHours(empCheck){
        switch(empCheck){
            case IS_Part_Time: return Part_Time_Hours; break;
            case IS_Full_Time: return Full_Time_Hours; break;
            default: return 0;
        }
    }
    console.log("Emp hours are : "+ emphrs + "Emp wage is : "+ empWage);
}
