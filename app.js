const Galeria = document.querySelectorAll(".galeria img");
const Popup = document.querySelector(".popup");
const Popup_close = document.querySelector(".popup__close");
const Popup_img = document.querySelector(".popup__img");
const Arrow_left = document.querySelector(".popup__arrow--left");
const Arrow_right = document.querySelector(".popup__arrow--right");

let currentImgIndex;

const showNextImg = () => {
    if (currentImgIndex === Galeria.length - 1) {
        currentImgIndex = 0;
    } else {
        currentImgIndex++;
    }
    Popup_img.src = Galeria[currentImgIndex].src;
};

const showPreviousImg = () => {
    if (currentImgIndex === 0) {
        currentImgIndex = Galeria.length - 1;
    } else {
        currentImgIndex--;
    }
    Popup_img.src = Galeria[currentImgIndex].src;
};

const closePopup = () => {
    Popup.classList.add("fade-out");
    setTimeout(() => {
        Popup.classList.add("hidden");
        Popup.classList.remove("fade-out");
    }, 300)
};

Galeria.forEach((galeria, index) => {
    galeria.addEventListener("click", (event) => {
        Popup.classList.remove("hidden");
        Popup_img.src = event.target.src;
        currentImgIndex = index;
    });
});

Popup_close.addEventListener("click", closePopup);

Arrow_right.addEventListener("click", showNextImg);

Arrow_left.addEventListener("click", showPreviousImg);


document.addEventListener("keydown", (e) => {
    if (!Popup.classList.contains("hidden")) {
        if (e.code === "ArrowRight" || e.keyCode === 39) {
            showNextImg();
        }
        if (e.code === "ArrowLeft" || e.keyCode === 37) {
            showPreviousImg();
        }
        if (e.code === "Escape" || e.keyCode === 27) {
            closePopup();
        }
    }
});

Popup.addEventListener("click", (e) => {
    if (e.target === Popup) {
        closePopup();
    }
});




const inputNamiot = document.getElementById("namiot");
const inputParkiet = document.getElementById("parkiet");
const inputStół = document.getElementById("stół");
const inputKrzesła = document.getElementById("krzesła");
const inputZastawa = document.getElementById("zastawa");
const inputOzdoby = document.getElementById("ozdoby");
const inputOświetlenie = document.getElementById("oświetlenie");
const inputNagrzewnice = document.getElementById("nagrzewnice");
const inputObsługa = document.getElementById("obsługa");
const inputOblicz = document.getElementById("oblicz")

//let finalMoney = namiot + parkiet + stoły + krzesła + zastawa + ozdoby + oświetlenie + obsługa;
//console.log("finalMoney");

function calculateAll (namiot,parkiet,stół,krzesła,zastawa,ozdoby,oświetlenie,nagrzewnice,obsługa){
    return inputNamiot.value* 1000 + inputParkiet.value*1000 + inputStół.value*50 + inputKrzesła.value*15+inputZastawa.value*15+inputOzdoby.value*300+inputOświetlenie.value*200+inputNagrzewnice.value*150+inputObsługa.value*500

};


document.getElementById("calculate").addEventListener("click", function(){
let namiot = inputNamiot.value;
let parkiet = inputParkiet.value;
let stół = inputStół.value;
let krzesła = inputKrzesła.value;
let zastawa = inputZastawa.value;
let ozdoby = inputOzdoby.value;
let oświetlenie = inputOświetlenie.value
let nagrzewnice = inputNagrzewnice.value;
let obsługa = inputObsługa.value;

let result = calculateAll(namiot,parkiet,stół,krzesła,zastawa,ozdoby,oświetlenie,nagrzewnice,obsługa);
inputOblicz.value = result + " " + " zł" ;

});