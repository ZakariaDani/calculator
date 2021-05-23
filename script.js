function f(val) {
    switch(val) {
        case '+':
            b = val;
            a = document.fo.in1.value ;
            document.fo.in1.value = null;
        break;
        case '-' :
            b = val;
            a = document.fo.in1.value ;
            document.fo.in1.value = null;
        break;
        case 'x' :
            b = val;
            a = document.fo.in1.value ;
            document.fo.in1.value = null;
        break;
        case '/' :
            b = val ;
            a = document.fo.in1.value ;
            document.fo.in1.value = null;    
        break;
        case '1' :
        document.fo.in1.value += '1';
        break;
        case '2' :
        document.fo.in1.value += '2';
        break;
        case '3' :
        document.fo.in1.value += '3';
        break;
        case '4' :
        document.fo.in1.value += '4';
        break;
        case '5' :
        document.fo.in1.value += '5';
        break;
        case '6' :
        document.fo.in1.value += '6';
        break;
        case '7' :
        document.fo.in1.value += '7';
        break;
        case '8' :
        document.fo.in1.value += '8';
        break;
        case '9' :
        document.fo.in1.value += '9';
        break;
        case '0' :
        document.fo.in1.value += '0';
        break;
        case 'C' :
        document.fo.in1.value = null ;
        a = null;
        break;
        case '.' :
            document.fo.in1.value += '.' ;
        break;
        case 'D' :
            r= 1*document.fo.in1.value;
            document.fo.in1.value = 1*(r + "").split(".");
        case '=': 
            switch (b) {
                case '+' :
                document.fo.in1.value = 1*a +  1*document.fo.in1.value;
                break;
                case 'x' :
                document.fo.in1.value = a*1*document.fo.in1.value;
                break;
                case '-' :
                document.fo.in1.value = 1*a -  1*document.fo.in1.value;
                break;
                case '/' :
                    if (document.fo.in1.value != 0)
                    document.fo.in1.value = 1*a / document.fo.in1.value;
                    else
                    document.fo.in1.value = "Division impossible";
                break;
            }
        break;  
    }
}
function g1() {
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    document.getElementById("title").style.color = "white";
    document.getElementById("th").style.color = "white";
    document.getElementById("equ").style.color = "hsl(225, 21%, 49%)";
    document.getElementById("button").style.backgroundColor = "hsl(223, 31%, 20%)";
    document.getElementById("rd2").style.backgroundColor = "hsl(223, 31%, 20%)";
    document.getElementById("blue").style.backgroundColor = "hsl(225, 21%, 49%)";
    document.getElementsByClassName("reset")[0].style.backgroundColor = "hsl(225, 21%, 49%)";
    document.getElementById("res").style.backgroundColor = "hsl(224, 36%, 15%)";
    document.getElementById("res").style.color = "hsl(0, 0, 100%)";
    document.getElementById("equ").style.backgroundColor = "hsl(6, 63%, 50%)";
    var c =document.getElementsByClassName("b1");
    for (var i=0; i< c.length; i++)
        {
            c[i].style.backgroundColor = "hsl(30, 25%, 89%)";
            c[i].style.color = "hsl(221, 14%, 31%)";
        } 
}
function g2() {
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    document.getElementById("title").style.color = "hsl(60, 10%, 19%)";
    document.getElementById("th").style.color = "hsl(60, 10%, 19%)";
    document.getElementById("equ").style.color = "white";
    document.getElementById("button").style.backgroundColor = "hsl(0, 5%, 81%)";
    document.getElementById("rd2").style.backgroundColor = "hsl(0, 5%, 81%)";
    document.getElementById("blue").style.backgroundColor = "hsl(185, 42%, 37%)";
    document.getElementsByClassName("reset")[0].style.backgroundColor = "hsl(185, 42%, 37%)";
    document.getElementById("res").style.backgroundColor = "hsl(0, 0%, 93%)";
    document.getElementById("res").style.color = "hsl(60, 10%, 19%)";
    document.getElementById("equ").style.backgroundColor = "hsl(25, 98%, 40%)";
    var c =document.getElementsByClassName("b1");
    for (var i=0; i< c.length; i++)
        {
            c[i].style.backgroundColor = "hsl(45, 7%, 89%)";
            c[i].style.color = "hsl(60, 10%, 19%)";
        } 
}
function g3() {
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    document.getElementById("title").style.color = "hsl(52, 100%, 62%)";
    document.getElementById("th").style.color = "hsl(52, 100%, 62%)";
    document.getElementById("equ").style.color = "hsl(198, 20%, 13%)";
    document.getElementById("button").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.getElementById("rd2").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.getElementById("blue").style.backgroundColor = "hsl(281, 89%, 26%)";
    document.getElementsByClassName("reset")[0].style.backgroundColor = "hsl(281, 89%, 26%)";
    document.getElementById("res").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.getElementById("res").style.color = "hsl(52, 100%, 62%)";
    document.getElementById("equ").style.backgroundColor = "hsl(176, 100%, 44%)";
    var c =document.getElementsByClassName("b1");
    for (var i=0; i< c.length; i++)
        {
            c[i].style.backgroundColor = "hsl(268, 47%, 21%)";
            c[i].style.color = "hsl(52, 100%, 62%)";
        } 
}
