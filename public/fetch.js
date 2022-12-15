const viewEmployees = document.getElementById('viewEmployees');
const viewCountries = document.getElementById('viewCountries');
const output = document.getElementById('output');
const jsonURL = document.getElementById('jsonURL');


const fetchCountries = () =>{
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://restcountries.com/v2/all', true)
    
    xhr.onload = function() {
        if(xhr.status == 200) {
            let countries = JSON.parse(this.response)
            console.log(countries)
            countries.forEach(country => {
                const countryCard = document.createElement('div')
                countryCard.innerHTML = country.name
                output.appendChild(countryCard)
            });
        }
    }
    xhr.send();


}

const fetchEmployees = () =>{
    let xhr = new XMLHttpRequest()
    let url = new URL(jsonURL.value)
    xhr.open('GET', url, true)
    
    xhr.onload = function() {
        if(xhr.status == 200) {
            let employees = JSON.parse(this.response).record;
            console.log(employees)
            employees.forEach(employee => {
                const employeeCard = document.createElement('div')
                employeeCard.innerHTML = `${employee.firstName} ${employee.lastName}`
                output.appendChild(employeeCard)
            });
        }
    }
    xhr.send();


}


viewEmployees.addEventListener('click', fetchEmployees);
viewCountries.addEventListener('click', fetchCountries);


//Employees: https://api.jsonbin.io/v3/qs/6399cf6015ab31599e1bf936