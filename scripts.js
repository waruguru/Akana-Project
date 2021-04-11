
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getDayOfBirth(){
 let dateInput = document.getElementById("date").value;
 let date = new Date(dateInput);

if (!!date.valueOf()) {
    let year = date.getFullYear().toString();
    let dayOfWeek = date.getDay();
        return dayOfWeek;
    } else {
        alert("Please select your birthday.");
        return;
    }
}