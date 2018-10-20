function randomDice(){ // funktion som skall skapa och lagra 1000 random nummer 
    let array = []; 
    for (i = 0; i < 1000; i++){
        array.push(Math.floor(Math.random() * 6 + 1)); 
    } 
    return array; 
};
console.log(randomDice());
function print(ett=[]){
    for (i = 0; i < 1000; i++){
        if (i = 1){
           let hej = hej.push(ett++);
        }
    }
    return ett;

}
console.log(print());

