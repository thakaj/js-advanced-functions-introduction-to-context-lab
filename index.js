
function createEmployeeRecord([firstName, familyName, title, payPerHour]){        
    const testEmployee = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }   
    return testEmployee
}

function createEmployeeRecords(inputArray){
    const employeeArray = [];
    for(let i = 0; i < inputArray.length; i++){
        employeeArray.push(createEmployeeRecord(inputArray[i]))
    }return employeeArray
}

function createTimeInEvent(employee,time){
    const splitTime = time.split(" ")
    const d = {
         type: "timeIm",
         date: splitTime[0],
         hour: splitTime[1],
    }
    employee.timeInEvents.push(d)
    return employee
}