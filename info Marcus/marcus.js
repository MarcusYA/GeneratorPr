let tryck = document.getElementById("knapp");
let visruta = document.getElementById("visa");
let MarcIn = [
    "Född: 13 Juli", 
    "Mellannamn: Yates",
    "Längd: 192cm",
]

tryck.addEventListener("click", function() {
    let informat = MarcIn[Math.floor(Math.random() * MarcIn.lenth)];
    visruta.innerHTML = informat;
})