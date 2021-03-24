/*eslint-env browser*/

window.document.addEventListener("DOMContentLoaded", () => {
let form = document.getElementById('signup');
form.addEventListener('submit', (evt) => {
    const $ = selector => document.querySelector(selector);
    const id = $("#id").value;
    const name = $("#name").value;
    const ext = $("#ext").value;
    const email = $("#email").value;
    const department = $("#department").value;

    evt.preventDefault();
    
    window.console.log("ID: " + id +'\n' + 
    "Name: " + name + '\n ' +
    "ext: " + ext + '\n' + 
    "email: " + email + '\n' +
    "department: " + department)
})
});
