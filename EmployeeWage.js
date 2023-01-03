function getAttendance() {

    let checkStatus =  Math.floor(Math.random() * 10) %  2;

    if(checkStatus == 0) {
        console.log("Employee is Absent");
    } else {
        console.log("Employee is Present");
    }
}
    getAttendance();