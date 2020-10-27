'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {

    var count = 0;
    var color = 0;
//sort pile to make it easier to work with 
    ar.sort()

//test size of sock pile
    if(n < 1 || n > 100 || ar.length === 0 || ar.length > n){
        return;
    }

    
    for(var i = 0; i <  ar.length; i += 1){
//test color viability
        if(ar[i] <= 0 || ar[i] > 100){
            return;
//catch and record match
        }else if(ar[i] === color){
            count += 1;
            color = 0;
        }else{
//hold a spare
            color = ar[i];
        }
    }
    return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
