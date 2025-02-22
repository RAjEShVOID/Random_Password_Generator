const passval= document.getElementById("password");

const len = 8;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const no = "0123456789";
const symbols = "~!@#$%^&*()_+-=[]{}\|;:<>?/";

const allChars = uppercase + lowercase + no + symbols;

function passgenerator(){
    let password = "";

    password+= uppercase[ Math.floor(Math.random() * uppercase.length)];
    password+= lowercase[ Math.floor(Math.random() * lowercase.length)];
    password+= no[ Math.floor(Math.random() * no.length)];
    password+= symbols[ Math.floor(Math.random() * symbols.length)];

    while(password.length< len){
        password+= allChars[ Math.floor(Math.random() * allChars.length)];
    }

    passval.value= password;
}

function copyPass(){
    passval.select();
    navigator.clipboard.writeText(passval.value);
}

