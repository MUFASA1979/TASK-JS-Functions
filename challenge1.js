/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName(name){
    console.log (`My name is ${name}`)
}
printName("Mustafa Fakhruddin")
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birthYear){
    console.log (`My age is ${birthYear}`);
}
printAge(2023-1979)
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello (name, language){
    if (language === "en"){
        console.log (`Hello ${name}`);}
    else if (language === "es"){
        console.log (`Hola ${name}`);}
    else if (language === "fr"){
        console.log (`Bonjour ${name}`);}
    else if (language === "tr") {
        console.log (`Merhaba ${name}`);}
}
printHello ("Mustafa", "tr" )
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax (DigitB, DigitA ){
    if (DigitA>DigitB){
        console.log (`Bigger Number is ${DigitA}`);}
    else {console.log (`SMaller Number is ${DigitB}`);}
}
printMax(55, 100)