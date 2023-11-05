

const weather = () => {
    let nummer = Math.floor(Math.random()* 10) + 1;
    
    switch (nummer) {
        case 1:
            console.log("Snö")
            ("#snow").html "Snö"
            break
        case 2:
            console.log("Sol")
            ("#snow").html "Sol"
            break
        case 3:
            console.log("Regn")
            ("#snow").html "Regn"
            break
        default:
            console.log("we do not know")
            ("#snow").html "We do not know"
            break
    }
}



