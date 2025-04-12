function transform(line) {
    var values =line.split(",");
    if (values[0]==="EmployeeID") {
        return null; //skip header row
    }
    var obj =new Object();
    obj.EmployeeID=parseInt(values[0]);
    obj.FirstName =values[1];
    obj.LastName =values[2];
    obj.job_title =values[3];   
    obj.department =values[4];
    obj.email =values[5];
    obj.address =values[6];
    obj.phone_number =values[7];
    obj.salary =parseInt(values[8]);
    
    var jsonString = JSON.stringify(obj);
    return jsonString;
}