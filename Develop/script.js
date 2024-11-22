// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function() {
  const employees = [];
  let continueAdding = true;

  while (continueAdding) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's first name:");
    const salary = parseFloat(prompt("Enter employee's salary:"));
  
    if (firstName && lastName && !isNaN(salary)) {
      employees.push({ firstName, lastName, salary });
    } else {
      alert("Invalid input. Please try again.")
    }

    continueAdding = confirm("Would you like to add another employee?");
  }

  return employees;
  
};

  // TODO: Get user input to create and return an array of employee objects


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees to calculate salary.");
    return;
  }

  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  console.log(`The average salary is $${averageSalary.toFixed(2)}`);
};

const sortEmployeesByLastName = function (employeesArray) {
  return employeesArray.sort((a,b) => a.lastName.localCompare(b.lastName));

};


  // TODO: Calculate and display the average salary


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees available for selection.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  console.log("Random Employee:", employeesArray[randomIndex]);
};


// TODO: Select and display a random employee
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
