const employees=[
    {
        empId: 101,
        empName: "Mahesh",
        empCompany: "Google",
        empSalary: 90000,
        empAddress: { empCity: "Hyderabad", 
            Area: "Kompally" }
    },
    {
        empId: 101,
        empName: "sandeep",
        empCompany: "Microsoft",
        empSalary: 90000,
        empAddress: { empCity: "Hyderabad", 
            Area: "KPHB" }
    },
    {
        empId: 101,
        empName: "Arjun",
        empCompany: "Google",
        empSalary: 90000,
        empAddress: { empCity: "Mahabubnagar", 
            Area: "Bahadurpally" }
    },
    {
        empId: 101,
        empName: "Srinivas",
        empCompany: "HCL",
        empSalary: 90000,
        empAddress: { empCity: "Hyderabad", 
            Area: "Bahadurpally" }
    },
    {
        empId: 101,
        empName: "Varun",
        empCompany: "TCS",
        empSalary: 90000,
        empAddress: { empCity: "Hyderabad",
             Area: "Kompally" }
    }
];
function generateTable(data) {
    let table = `<table>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Salary</th>
                        <th>City</th>
                        <th>Area</th>
                    </tr>`;

    data.forEach(emp => {
        table += `<tr>
                    <td>${emp.empId}</td>
                    <td>${emp.empName}</td>
                    <td>${emp.empCompany}</td>
                    <td>${emp.empSalary}</td>
                    <td>${emp.empAddress.empCity}</td>
                    <td>${emp.empAddress.Area}</td>
                  </tr>`;
    });

    table += `</table>`;
    document.getElementById("tableContainer").innerHTML = table;
}

generateTable(employees);
