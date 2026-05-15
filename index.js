console.log('===STUDENT MARKS CALCULATOR===');
console.log('   using normal function   ');
    //function one: store student's chapters and addition to all.
function 
    //you can change chapters and add new
      studentChapters(math,biology,physics,science) {
    //if you change also change here
            
    let add = math + biology + physics + science;
    return add;
}
    //function two: students marks multiply with their chapters quatities and devide with 100 for percentage
function total() {
    // main calculation formula here
    let calculate = chapters/300*100;
    // for printing result
    console.log(calculate)
}
    // students marks assign here
let chapters = studentChapters(55,66,35,79);
    // call function two
(total());

    // How to works?
    //Ans: The function one has parameters like (math, bio...) as chapters.
    //     when passing argument eg.(55,66,35,79)
    //     the function one return their addition eg, math+biology ....
    //     retrun addition stored in function two and their calculate using main formula (chapters/300*100) with console.log for printing
    //     when call total(), function two play... 