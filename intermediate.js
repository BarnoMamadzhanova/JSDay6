

let employees = `
 [{
     "uniqueID": "0010",
     "firstName": "David",
     "lastName": "Jonathan",
     "fullName" : "David Jonathan",
     "emailAddress": "david.jonathan@gmail.com",
     "jobTitle" : "Junior Developer",
     "salary": "2200"
 }, {
     "uniqueID": "0011",
     "firstName": "Eliza",
     "lastName": "Murrey",
     "fullName" : "Eliza Murrey",
     "emailAddress": "eliza123@gmail.com",
     "jobTitle" : "Designer",
     "salary": "3000"
 }, {
     "uniqueID": "0012",
     "firstName": "Patrik",
     "lastName": "McCartney",
     "fullName" : "Patrik McCartney",
     "emailAddress": "patrik.mc@gmail.com",
     "jobTitle" : "Developer",
     "salary": "3300"
 }, {
     "uniqueID": "0013",
     "firstName": "Sam",
     "lastName": "Becker",
     "fullName" : "Sam Becker",
     "emailAddress": "s.becker99@gmail.com",
     "jobTitle" : "Analyst",
     "salary": "3000"
 }, {
     "uniqueID": "0014",
     "firstName": "Michael",
     "lastName": "Bosh",
     "fullName" : "Michael Bosh",
     "emailAddress": "michaelb@gmail.com",
     "jobTitle" : "Lead Manager",
     "salary": "5000"
 }, {
     "uniqueID": "0015",
     "firstName": "Kayle",
     "lastName": "Benson",
     "fullName" : "Kayle Benson",
     "emailAddress": "k.benson@gmail.com",
     "jobTitle" : "Head of Department",
     "salary": "5250"
 }, {
     "uniqueID": "0016",
     "firstName": "Suzanna",
     "lastName": "Bawerman",
     "fullName" : "Suzanna Bawerman",
     "emailAddress": "suzanna.bawerman@gmail.com",
     "jobTitle" : "Junior employee",
     "salary": "2000"
 }, {
     "uniqueID": "0017",
     "firstName": "Tomas",
     "lastName": "Ngoyi",
     "fullName" : "Tomas Ngoyi",
     "emailAddress": "tomas7889@gmail.com",
     "jobTitle" : "Manager",
     "salary": "3000"
 }, {
     "uniqueID": "0018",
     "firstName": "Matos",
     "lastName": "Nicolas",
     "fullName" : "Matos Nicolas",
     "emailAddress": "matos.nicolas@gmail.com",
     "jobTitle" : "Lead Analyst",
     "salary": "4000"
 }, {
     "uniqueID": "0019",
     "firstName": "Peter",
     "lastName": "Prayer",
     "fullName" : "Peter Prayer",
     "emailAddress": "p.prayer@gmail.com",
     "jobTitle" : "Designer Assistent",
     "salary": "2500"
 }]`

 const resultEmp = document.querySelector('#result');
 employees = JSON.parse(employees);
//  console.log(employees);

employees.forEach((employee) => {
    resultEmp.innerHTML += `<div>
    <div class="card my-4" style="width: 18rem;">
         <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg" class="card-img-top"  alt="">
         <div class="card-body my-2 p-2">
           <h5 class="card-title">${employee.fullName}</h5>
           <p class="card-text">Employee's unique ID is ${employee.uniqueID}.</p>
         </div>
         <ul class="list-group list-group-flush my-2 p-2">
            <li class="list-group-item">${employee.jobTitle}</li>
            <li class="list-group-item">${employee.salary}</li>
            <li class="list-group-item">${employee.emailAddress}</li>
         </ul>
    </div>
    </div>
    `;  
})





//  <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">An item</li>
//     <li class="list-group-item">A second item</li>
//     <li class="list-group-item">A third item</li>
//   </ul>
//   <div class="card-body">
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>