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
    const result = str.replace(/\s+/g, '').toUpperCase();
    return result;
}
// checker = onlyCharacter(["hack", "me"] )
// console.log (checker)

// problem 03
function  bestTeam( player1, player2 ) {
     if (typeof player1 !== 'object' || typeof player2 !== 'object'){
        return "Invalid";
     }
    const team1Score = player1.foul + player1.cardY + player1.cardR;
    const team2Score = player2.foul + player2.cardY + player2.cardR;
    if (team1Score < team2Score) {
        return player1.name;
    } else if (team2Score < team1Score) {
        return player2.name;
    } else {
        return ("Tie")
    }

}
// fair_play =bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
// { name: "Sweden", foul: 7, cardY: 4, cardR: 1 })
// console.log(fair_play)

// problem 04
function  isSame(arr1 , arr2 ) {
if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
}
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) { 
            return false;
        }
    }
    return true;
}
// same= isSame([1, undefined , 3] , [1,null ,3])       
// console.log (same)

// problem 05
function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    if (marks.length === 0) {
        return { finalScore:0,pass:0,fail:0 };
    }
    let sum = 0;
    let pass_count = 0;
    let fail_count = 0;
    for (let i of marks){
         sum +=  i
         if (i >= 40){
            pass_count += 1;
         }
         else{
            fail_count +=1;
         }
    }
    let average =Math.round (sum / marks.length)
    return {finalScore:average,pass:pass_count,fail:fail_count}
    
}
// report = resultReport([99,25])
// console.log (report)


