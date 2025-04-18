let input = document.createElement('input');
let div = document.getElementById('divtag');
input.setAttribute("id","textinput");
input.setAttribute("placeholder","0");
input.className = "textinput";
console.log("Hello Worl");
div.appendChild(input);

let butonclr = document.createElement('button');
butonclr.setAttribute("id","buttons");
butonclr.setAttribute("onclick","Clear()");
let butword = document.createTextNode('C');
butonclr.className = "clear";
butonclr.appendChild(butword);
div.appendChild(butonclr);

let butonback = document.createElement('button');
butonback.setAttribute("id","buttons");
butonback.setAttribute("onclick","del()");
let butback = document.createTextNode("<--");
butonback.appendChild(butback);
div.appendChild(butonback);


let butondis1 = document.createElement('button');
butondis1.setAttribute("id","buttons");
butondis1.setAttribute("onclick","display('.')");
let butdis1 = document.createTextNode(".");
butondis1.appendChild(butdis1);
div.appendChild(butondis1);

let butondis2 = document.createElement('button');
butondis2.setAttribute("id","buttons");
butondis2.setAttribute("onclick","display('/')");
let butdis2 = document.createTextNode("/");
butondis2.appendChild(butdis2);
div.appendChild(butondis2);

let butondis3 = document.createElement('button');
butondis3.setAttribute("id","buttons");
butondis3.setAttribute("onclick","display('7')");
let butdis3 = document.createTextNode("7");
butondis3.appendChild(butdis3);
div.appendChild(butondis3);


let butondis4 = document.createElement('button');
butondis4.setAttribute("id","buttons");
butondis4.setAttribute("onclick","display('8')");
let butdis4 = document.createTextNode("8");
butondis4.appendChild(butdis4);
div.appendChild(butondis4);

let butondis5 = document.createElement('button');
butondis5.setAttribute("id","buttons");
butondis5.setAttribute("onclick","display('9')");
let butdis5 = document.createTextNode("9");
butondis5.appendChild(butdis5);
div.appendChild(butondis5);

let butondis6 = document.createElement('button');
butondis6.setAttribute("id","buttons");
butondis6.setAttribute("onclick","display('*')");
let butdis6 = document.createTextNode("*");
butondis6.appendChild(butdis6);
div.appendChild(butondis6);

let butondis7 = document.createElement('button');
butondis7.setAttribute("id","buttons");
butondis7.setAttribute("onclick","display('4')");
let butdis7 = document.createTextNode("4");
butondis7.appendChild(butdis7);
div.appendChild(butondis7);

let butondis8 = document.createElement('button');
butondis8.setAttribute("id","buttons");
butondis8.setAttribute("onclick","display('5')");
let butdis8 = document.createTextNode("5");
butondis8.appendChild(butdis8);
div.appendChild(butondis8);

let butondis9 = document.createElement('button');
butondis9.setAttribute("id","buttons");
butondis9.setAttribute("onclick","display('6')");
let butdis9 = document.createTextNode("6");
butondis9.appendChild(butdis9);
div.appendChild(butondis9);

let butondis10 = document.createElement('button');
butondis10.setAttribute("id","buttons");
butondis10.setAttribute("onclick","display('-')");
let butdis10 = document.createTextNode("-");
butondis10.appendChild(butdis10);
div.appendChild(butondis10);

let butondis11 = document.createElement('button');
butondis11.setAttribute("id","buttons");
butondis11.setAttribute("onclick","display('1')");
let butdis11 = document.createTextNode("1");
butondis11.appendChild(butdis11);
div.appendChild(butondis11);


let butondis12 = document.createElement('button');
butondis12.setAttribute("id","buttons");
butondis12.setAttribute("onclick","display('2')");
let butdis12 = document.createTextNode("2");
butondis12.appendChild(butdis12);
div.appendChild(butondis12);

let butondis13 = document.createElement('button');
butondis13.setAttribute("id","buttons");
butondis13.setAttribute("onclick","display('3')");
let butdis13 = document.createTextNode("3");
butondis13.appendChild(butdis13);
div.appendChild(butondis13);

let butondis14 = document.createElement('button');
butondis14.setAttribute("id","buttons");
butondis14.setAttribute("onclick","display('+')");
let butdis14 = document.createTextNode("+");
butondis14.appendChild(butdis14);
div.appendChild(butondis14);

let butondis15 = document.createElement('button');
butondis15.setAttribute("id","buttons");
butondis15.setAttribute("onclick","display('0')");
let butdis15 = document.createTextNode("0");
butondis15.appendChild(butdis15);
div.appendChild(butondis15);

let butondis16 = document.createElement('button');
butondis16.setAttribute("id","buttons");
butondis16.setAttribute("onclick","display('00')");
let butdis16 = document.createTextNode("00");
butondis16.appendChild(butdis16);
div.appendChild(butondis16);

let butondis17 = document.createElement('button');
butondis17.setAttribute("id","buttons");
butondis17.setAttribute("onclick","Calculate()");
butondis17.className = "equal";
let butdis17 = document.createTextNode("=");
butondis17.appendChild(butdis17);
div.appendChild(butondis17);

let outputScreen = document.getElementById("textinput");

outputScreen.addEventListener('onclick',display);


function display(num){
    outputScreen.value += num; 
      
}

function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }catch(err){
        alert("Only numbers are allowed")
    }
}

function Clear(){
    outputScreen.value = '';
}

function del(){
    console.log("hello world");
    outputScreen.value = outputScreen.value.slice(0,-1);
}