// // area of circle
// function area(radius) {
//     let a = radius.map((x) => Math.PI * x * x)
//     console.log(a);    
// }
// area([3,1,2,4])

// //circumference
// function circumference(radius) {
//     let a = radius.map((x) => 2 * Math.PI * x)
//     console.log(a);    
// }
// circumference([3,1,2,4])

// //diameter
// function diameter(radius) {
//     let a = radius.map((x) => 2 * x)
//     console.log(a);    
// }
// diameter([3,1,2,4])

// //using for loop
// function area1(radius){
//     let output = [];
//     for(i = 0; i < radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     console.log(output);
    
// }
// area1([3,1,2,4])



//now make it less complexive and more efficient by using functional programming.
let radius = [3,1,2,4]

let area = function (radius){
    return Math.PI * radius * radius;
}

let circumference = function (radius) {
    return 2 * Math.PI * radius;  
}

let diameter = function (radius){
    return 2 * radius;
}

// function calculate(radius, logic) {
//     let output = []
//     for(i=0; i<radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     console.log(output);
    
// }
// calculate(radius, area)
// calculate(radius, circumference)
// calculate(radius, diameter)

//also use map here inplace of calculate
// console.log(radius.map(area));
// console.log(radius.map(circumference));
// console.log(radius.map(diameter));





