

const weather = () => {
    let nummer = Math.floor(Math.random()* 4) + 1;
    
    switch (nummer) {
        case 1:
            console.log("Snö")
            break
        case 2:
            console.log("Sol")
            break
        case 3:
            console.log("Regn")
            break
        default:
            console.log("we do not know")
            break
    }
}



