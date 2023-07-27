function number_format(number, decimals = 0,seperator = ",",decimal_seperator=".") {
    let array,
      integerPart,
      decimalPart,
      copyArray = [];
    array = String(number).split(".")[0].split("").reverse();
    array.forEach((number, index) => {
        copyArray.push(number);
        if ( (index + 1) % 3 == 0 && index + 1 != array.length && array.length > 3) {
            copyArray.push(seperator);
        }
    });
    integerPart = copyArray.reverse().join("");
    decimalPart = decimals ? (String(number).split(".")[1] ? decimal_seperator + String((Number("0."+String(number).split(".")[1]).toFixed(decimals))).split(".")[1] : "") : ""

    return integerPart+decimalPart;
}
