// // var feetToMile=function(feet){
// //     let mile=feet/5280;
// //     return mile;
// // }
// // var tempOne=feetToMile(60);
// // console.log(tempOne);

// var tinyFriend=["Babu","Zakia","Munibah","Boby","Joy"];
// var minLength=tinyFriend[0].length;
// for(var i = 0; i < tinyFriend.length; i++ ){
//     if (minLength > tinyFriend[i].length) {
//         minLength = tinyFriend[i].length
//     }
// }

// console.log("lowest value is", minLength);

function woodCalculator(chair,table,bed) {
    var woodForChair=2;
    var woodForTable=3;
    var woodForBed=5;
    var total= (chair*woodForChair)+(table*woodForTable)+(bed*woodForBed);
    return total;
}
var calc=woodCalculator(6,12,20);
console.log(calc);