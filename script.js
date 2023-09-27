let bincan = document.getElementById("login");
let loginBtn = document.getElementById("login_btn");
let image = document.getElementById("img");
let intext = document.getElementById("introtext");
let isLogin = false;

function logClick() {
    let AID = bincan.value;

    if (isLogin == true) {
        image.style.display = "none";
        bincan.style.display = "block";
        intext.style.display = "none";
        loginBtn.textContent = "로그인 버튼";
        isLogin = false; // 로그아웃 상태로 변경
    } else {
        if (AID == "김지환") {
            image.style.display = "block";
            bincan.style.display = "none";
            intext.style.display = "inline-block";
            loginBtn.textContent = "로그아웃";
            isLogin = true; // 로그인 상태로 변경
        }
    }
}



// 여기부터 영역 2, 3

const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const rcontent = document.getElementById('rightcontent');

let text1 ="Let me introduce myself"
let text2 ="Unexpected"



button1.str = text1;
button2.str = text2;
button3.str = "";




function btn1() {
    if (button1.str !== "") {
        rcontent.textContent = button1.str;
    }
    else{
        button1.str = rcontent.textContent;
        if (rcontent.textContent == button2.str) {
            button2.str=""
        }
        else if(rcontent.textContent == button3.str){
            button3.str=""
        }
        else{
            alert("No contents");
        }
        rcontent.textContent = "Saved";
    }
}
function btn2() {
    if (button2.str !== "") {
        rcontent.textContent = button2.str;
    }
    else{
        button2.str = rcontent.textContent;
        if (rcontent.textContent == button1.str) {
            button1.str=""
        }
        else if(rcontent.textContent == button3.str){
            button3.str=""
        }
        else{
            alert("No contents");
        }
        rcontent.textContent = "Saved";
    }
}
function btn3() {
    if (button3.str !== "") {
        rcontent.textContent = button3.str;
    }
    else{
        button3.str = rcontent.textContent;
        if (rcontent.textContent == button1.str) {
            button1.str=""
        }
        else if(rcontent.textContent == button2.str){
            button2.str=""
        }
        else{
            alert("No contents");
        }
        rcontent.textContent = "Saved";
    }
}