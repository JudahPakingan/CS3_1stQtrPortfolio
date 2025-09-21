rli = require('readline').createInterface({ input: process.stdin }).on('line', get_line)
function get_line(line){
    line == 'END' ? rli.close() : solve(line)
}

function solve(age){
    // put your code below vvvvv
    var age = 0
    
    if(0 <= age && age <= 12){
        console.log("You can watch movies with ratings: G and PG (with a parent).");
    }
    else if(0 <= age && age <= 15){
        console.log("You can watch movies with ratings: G, PG, and R-13.");
    }
    else if(0 <= age && age <= 17){
        console.log("You can watch movies with ratings: G, PG, R-13, R-16.");
    }
    else{
        console.log("You can watch movies with ratings: G, PG, R-13, R-16, and R-18.");
    }
    
    process.exit()

}