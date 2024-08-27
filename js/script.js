function validateform() {
    const name= document.forms["message-form"]["full-name"].value;
    const birthdate=document.forms["message-form"]["birth-date"].value;
    const gender=documents.forms["message-form"]["gender"].value;
    const messages=documents.forms["message-form"]["messages"].value;

    if (name == "" || birthdate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setsenderui(name, birthdate, gender, messages);

    return false;
}

function setsenderui(name, birthdate, gender, messages) {
    document.getElementById("sender-full-name") .innerHTML = name;
    document.getElementById("sender-birth-date") .innerHTML = birthdate;
    document.getElementById("sender-gender") .innerHTML = gender;
    document.getElementById("sender-messages") .innerHTML = messages;
}