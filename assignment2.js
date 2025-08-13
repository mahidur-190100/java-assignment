// problem 01
function totalFine(fare){
    if ( typeof fare !== 'number' || fare <= 0 ){
        return "Invalid";
    }
    const extra_charge =30;
    const charge = 0.2;
    total_fine = fare + (fare * charge) + extra_charge;
    return total_fine;
}
// tt= totalFine(552);
// console.log (tt);

// problem 02
function  onlyCharacter( str ) {
    if (typeof str !== 'string') {
        return "Invalid";
    }
    const result = str.replace('').toUpperCase();
    return result;
}
checker = onlyCharacter("  h e llo wor   ld" )
console.log (checker)
