


// input 
let inputName = document.querySelector("#input-data input[name= 'nome']");
let inputKm = document.querySelector("#input-data input[name= 'km']");
let age = document.querySelector("#input-data select[name= 'eta']");


// button
let btnCreate = document.querySelector("#input-data button[name='btnCreate']")
let btnDelete = document.querySelector("#input-data button[name='btnDelete']")


// output
let outputName = document.querySelector("table tr td:nth-child(1)");
let outputOffer = document.querySelector("table tr td:nth-child(2)");
let outputCarr = document.querySelector("table tr td:nth-child(3)");
let outputCap = document.querySelector("table tr td:nth-child(4)");
let outputPrice = document.querySelector("table tr td:nth-child(5)");

// variables
let sc20 = 0.8;
let sc40 = 0.6;
let priceKm = 0.21
let priceTotale = inputKm.value * priceKm;
let offer = "";
let carrozza = Math.floor(Math.random() * (8 - 1) + 1);
let cap = Math.floor(Math.random() * (99998 - 10000) + 1);




btnCreate.addEventListener("click", function() {
    outputName.innerHTML = inputName.value;
    outputCarr.innerHTML = carrozza;
    outputCap.innerHTML = cap;
    

    if(age.value == "1"){
        outputOffer.innerText = "Promo40%";
        priceTotale = priceTotale * sc40;
        outputPrice.innerHTML = priceTotale;

    } else {
        outputOffer.innerText = "Promo20%"
        priceTotale = priceTotale * sc20;
        outputPrice.innerHTML = priceTotale;
    }
})


btnDelete.addEventListener("click", function() {
    outputName.innerHTML = "";
    outputCarr.innerHTML = "";
    outputCap.innerHTML = "";
    outputPrice.innerHTML = "";
    outputOffer.innerText = "";
})











