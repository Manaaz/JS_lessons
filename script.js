var admin = "";
var name = "";

function convertCelsiusToFarenheit(Tc){
    Tf = (9/5)*Tc+32; 
    alert("Температура: по цельсию: 50; по фаренгейту: " + Tf);
}

function setAdmin(){
    admin = name;
    alert("admin: " + admin);
}

convertCelsiusToFarenheit(50);

name = "Василий";
setAdmin();

var a = 1000;
alert(a+"108");
