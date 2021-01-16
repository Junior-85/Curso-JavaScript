function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandom(1, 5))



function numAleatorio(max, min) {
    const valorAleatorio = Math.random() * (max -min) + min
    return valorAleatorio.toFixed(2)
}

console.log(numAleatorio(1, 5))