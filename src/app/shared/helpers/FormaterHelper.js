export const decimalFormat = (x) => {
    if (x) {
        return parseFloat(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } else {
        return '0';
    }
}

export const decimalWithComaFormat = (x) => {
    if (x) {
        var numeroString = parseFloat(x).toFixed(2).replace(".", ",")
        return numeroString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } else {
        return '0';
    }
}
