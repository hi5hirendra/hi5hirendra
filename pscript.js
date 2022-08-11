//---1---FUNCTION TO CALCULATE SUM OF TWO INPUT NUMBERS

function calc() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    sum = num1 + num2;
    document.getElementById("sum").innerHTML = " = " + sum;
}

//---2---FUNCTION TO GET PRIME NUMBERS BETWEEN TWO VALUES

function prime() {
    const primeval = [];
    let low = Number(document.getElementById("low").value);
    let high = Number(document.getElementById("high").value);
    for (let i = low + 1; i < high; i++) {
        let c = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                c = 1;
            }
        }
        if (i > 1 && c == 0) {
            primeval.push(i);
        }
    }
    document.getElementById("pnum").innerHTML = primeval;
}

//---3---FUNCTION TO CHECK SUBSTRING IN A STRING

function substr() {
    let str1 = document.getElementById("str1").value;
    let str2 = document.getElementById("str2").value;
    if (str2.includes(str1) == true) {
        document.getElementById("subs").innerHTML = "FOUND";
    } else {
        document.getElementById("subs").innerHTML = "NOT FOUND!";
    }
}

//---5--- USED ONLY HTML

//---6--- FUNCTION TO CREATE TABLE & APPEND/DELETE ROWS

function addrow() {
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let td = document.createElement('td');
    let btn = document.createElement('button');
    let textnode = document.createTextNode('Add row');
    btn.appendChild(textnode);
    td.appendChild(btn);
    tr.appendChild(td);
    document.getElementById('dynamictable').appendChild(table);
    btn.onclick = function () {
        btn.textContent = "Delete row";
        btn.onclick = function () {
            table.deleteRow(this);
        }
    }
}

//---7--- FUNCTION TO CREATE BUTTONS OnClick of a BUTTON

function createButton() {
    let i = 1;
    const node = document.createElement("button");
    const textnode = document.createTextNode("Button " + i);
    node.appendChild(textnode);
    document.getElementById("nextButton").appendChild(node);
    document.getElementById("createButton").disabled = true;
    let btn = document.getElementById("nextButton");
    btn.onclick = function () {
        const node = document.createElement("button");
        i++;
        const textnode = document.createTextNode("Button " + i);
        node.appendChild(textnode);
        para = document.getElementById("nextButton").appendChild(document.createElement('p'));
        para.appendChild(node);
    }
}

//---8---FUNCTION TO FIND ROOTS OF A QUADRATIC EQUATION

function findroots() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    d = b * b - 4 * a * c;
    if (a == 0 && b == 0 && c == 0) {
        document.getElementById("roots").innerHTML = "Please enter values for A, B & C.";
    }
    else if (d > 0) {
        let root1 = (-b + Math.sqrt(d)) / (2 * a);
        let root2 = (-b - Math.sqrt(d)) / (2 * a);
        document.getElementById("roots").innerHTML = `The roots are real and different.<br>The roots of quadratic equation are ${root1} and ${root2}`;
    }
    else if (d == 0) {
        root1 = root2 = -b / (2 * a);
        document.getElementById("roots").innerHTML = `The roots are real and equal.<br>The roots of quadratic equation are ${root1} and ${root2}`;
    }
    else {
        real = -b / (2 * a);
        imaginary = (Math.sqrt(-d) / (2 * a)).toFixed(2);
        document.getElementById("roots").innerHTML = `The roots are complex and different.<br>The roots of quadratic equation are ${real} + ${imaginary}i  and ${real} - ${imaginary}i`;
    }

}

//---9---FUNCTION TO DISPLAY CLICKED ELEMENT CONTENT, VALUE, STYLE IN ALERT

const elements = document.querySelectorAll("#common");
elements.forEach(element => {
    element.addEventListener('click', functionA => {
        let cont = element.textContent;
        let val = element.value;
        let sty = element.style.color;
        alert(`Content : ${cont} \nValue: ${val} \nColor: ${sty}`);
    })
})

//---10---FUNCTION TO DISPLAY CLICKED ELEMENT CONTENT, VALUE, STYLE IN ALERT

function toggle() {
    const togg = document.querySelector("#toggle");
    let txtval1 = document.getElementById('txtarea1').value;
    // let txtval2 = document.getElementById('txtarea2').value;
    if (txtval1 == null || txtval1 == undefined || txtval1 == "") {
        // togg.innerText = ">";
    }
    else {
        document.getElementById('txtarea2').innerHTML = txtval1;
        document.getElementById('txtarea1').value = null;
        togg.innerText = "<";
    }
}

//---12---FUNCTION TO REPEAT PROMPTING UNTIL INPUT VALUE IS NOT NULL/UNDEFINED

function promp() {
    let newtab = window.open("");
    let uname;
    do {
        uname = newtab.prompt("Please enter your name:");
    }
    while (uname == null || uname == "");
    newtab.document.write(`<p> Hello ${uname}! <br> How are you?</p>`);
}