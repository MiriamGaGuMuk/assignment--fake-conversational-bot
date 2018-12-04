let greeting = document.querySelector(".greeting");
let work = document.querySelector(".work");
let likes = document.querySelector(".likes");
let greeting2 = document.querySelector('.greeting2');
let enter = document.querySelector("#enter")
let longShortName = document.querySelector(".longShortName");
let farewell = document.querySelector(".farewell");

let getName = document.querySelector("#getName");


setTimeout(function () {
    greeting.style.display = "block";
}, 1000);

setTimeout(function () {
    work.style.display = "block";
}, 2000);

setTimeout(function () {
    likes.style.display = "block";
}, 3000);

setTimeout(function () {
    getName.style.display = "block";

    document.querySelector('#getName').addEventListener('keypress', function (e) {
        let char = e.which || e.keyCode;


        if (char === 13) { 


            if (getName.value.length > 1) {

                if (getName.value.length > 6) {

                    longShortName.textContent = "That’s a long name."
                    longShortName.style.display = "block";
                    

                } else if (getName.value.length < 6) {

                    longShortName.innerHTML = "That’s a short name."
                    longShortName.style.display = "block";
                    
                }

                setTimeout(function () {

                    farewell.style.display = "block"
                    farewell.textContent = "Nice to meet you, " + getName.value + "!";
                }, 1000);

            } else {
                enter.textContent = "What's your name? Need it complete boss.";
            }

        }

    });
}, 4000);