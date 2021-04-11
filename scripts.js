
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
function getGender() {
    let gender;
    if ((form.gender[0].checked == true) || (form.gender[1].checked == true)) {
        if (form.gender[0].checked == true) {
            gender = 0;
        } else if (form.gender[1].checked == true) {
            gender = 1;
        }
        return gender;
    } else {
        alert("Please select your gender!");
        return;
    }
}
function computeName() {
    let selectedGender = getGender();
    let dayOfWeek = getDayOfBirth();
    if ((!!dayOfWeek.valueOf() === true) || (dayOfWeek == 0))  {
        if (selectedGender === 0) {
            let result = "Your Akan name is " + maleNames[dayOfWeek] + ".";
            document.getElementById("result").innerHTML = result;
        } else if (selectedGender === 1) {
            let result = "Your Akan name is " + femaleNames[dayOfWeek] + ".";
            document.getElementById("result").innerHTML = result;
        }
    }else{
        return;
    }
}