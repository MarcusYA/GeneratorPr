let tryck = document.getElementById("knapp");
let visruta = document.getElementById("visa");
let MarcIn = 
[
    "Född: 13 Juli", 
    "Mellannamn: Yates",
    "Längd: 192cm",
]

let MarcNr = 
[
    "Nr 1", 
    "Nr 2",
    "Nr 3",
]


tryck.addEventListener("click", function() {
    let avgNr = Math.floor(Math.random() * MarcIn.length)
    console.log(avgNr)
    let informat = MarcIn[avgNr];
    visa.innerHTML = informat;

    let informatNr = MarcNr[avgNr];
    NrVisa.innerHTML = informatNr;
})



/*
tryck.addEventListener("click", function() {
    let informat = MarcIn[Math.floor(Math.random() * MarcIn.length)];
    visa.innerHTML = informat;
})
*/