// === FIRST IFRAME ===
let timer1Started = false;
let time1Left = 15;
let timer1;

const scrollContainer1 = document.getElementById("scrollContainer1");
const iframe1 = document.getElementById("iframe1");
const timeLabel1 = document.getElementById("time1");
const btn1 = document.getElementById("btn1");

iframe1.addEventListener("load", function() {
    alert("News loaded. Please scroll down to continue.");

    scrollContainer1.addEventListener("scroll", function() {
        if (timer1Started) return;
        const scrollTop = scrollContainer1.scrollTop;
        const scrollHeight = scrollContainer1.scrollHeight;
        const clientHeight = scrollContainer1.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight - 20) {
            timer1Started = true;
            startTimer1();
        }
    });
});

function startTimer1() {
    alert("Thanks for scrolling! Timer started.");
    timer1 = setInterval(function() {
        time1Left--;
        timeLabel1.textContent = time1Left;
        if (time1Left <= 0) {
            clearInterval(timer1);
            btn1.style.display = "block";
        }
    }, 1000);
}

btn1.addEventListener("click", function() {
    alert("Scroll Down for Step 2");
    loadSecondIframe();
    btn1.style.display="none";
    iframe1.style.display="none"
    scrollContainer1.style.display="none";
    document.getElementById('label1').style.display="none";
});


// === SECOND IFRAME ===
let timer2Started = false;
let time2Left = 15;
let timer2;

const scrollContainer2 = document.getElementById("scrollContainer2");
const iframe2 = document.getElementById("iframe2");
const timeLabel2 = document.getElementById("time2");
const text2 = document.getElementById("text2");

function loadSecondIframe() {
    scrollContainer2.style.display = "block";
    text2.style.display = "block";
    iframe2.src = "https://nz.vayambharat.com/Lnk/SRWR202507091059521459984729";

    iframe2.addEventListener("load", function onload2() {
        alert("Second news loaded. Please scroll down.");
        scrollContainer2.addEventListener("scroll", function() {
            if (timer2Started) return;
            const scrollTop = scrollContainer2.scrollTop;
            const scrollHeight = scrollContainer2.scrollHeight;
            const clientHeight = scrollContainer2.clientHeight;

            if (scrollTop + clientHeight >= scrollHeight - 20) {
                timer2Started = true;
                startTimer2();
            }
        });
        iframe2.removeEventListener("load", onload2);
    });
}

function startTimer2() {
    alert("Thanks for scrolling! Final timer started.");
    timer2 = setInterval(function() {
        time2Left--;
        timeLabel2.textContent = time2Left;
        if (time2Left <= 0) {
            clearInterval(timer2);
            showFinalButton();
        }
    }, 1000);
}


// === FINAL BUTTON ===
const finalBtn = document.getElementById("finalBtn");

function showFinalButton() {
    finalBtn.style.display = "block";
}

finalBtn.addEventListener("click", function() {
    alert("Here is your code : 520990");
});
