function print() {
    console.log("Hello Tea");
}

// Exporta a função para que ela possa ser utilizada por outros módulos
module.exports = {
    print: print
};
