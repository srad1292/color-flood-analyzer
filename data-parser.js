// background-color: (([a-z])*)?(rgb\([0-9]*, [0-9]*, [0-9]*\))?;
// red|cyan|yellow|purple|rgb\(0, 187, 0\)|rgb\(255, 204, 102\)
const fs = require('fs');
const getHtml = require('./html-data');

function main() {
    let squares = generateSquares();
    if(squares.length !== 196) {
        console.log("Squares length should be 196, got: ", squares.length);
        return;
    }

    let gameResults = analyzeCurrentGame(squares);    
    console.log(gameResults);

    let log = readLog();
    log.push(gameResults);  

    writeLog(log);
}

main();

function generateSquares() {
    let gameHtml = getHtml();
    return gameHtml.match(/red|cyan|yellow|purple|rgb\(0, 187, 0\)|rgb\(255, 204, 102\)/g)
    .map(color => { 
        return {counted: false, color: color}
    });
}

function analyzeCurrentGame(squares){
    let red = 0, yellow = 0, purple = 0, blue = 0, green = 0, tan = 0;
    let biggestBlock = 1;
    let singleBlocks = 0;
    let multiBlocks = 0;
    let biggestBlockIndex = 0;

    let currentBlockSize = 0;
    squares.forEach((square, index) => {
        currentBlockSize = 0;
        if(square.color === 'red') { red++; }
        if(square.color === 'yellow') { yellow++; }
        if(square.color === 'purple') { purple++; }
        if(square.color === 'cyan') { blue++; }
        if(square.color === 'rgb(0, 187, 0)') { green++; }
        if(square.color === 'rgb(255, 204, 102)') { tan++; }
        if(square.counted === false) {
            currentBlockSize = getBlockSize(squares, index, square.color);
            if(currentBlockSize === 1) {
                singleBlocks++;
            } else {
                multiBlocks++;
            }
            if(currentBlockSize > biggestBlock) {
                biggestBlock = currentBlockSize;
                biggestBlockIndex = index;
            }
        }
        
    });

    return {
        red, yellow, purple, blue, green, tan, 
        singleBlocks, multiBlocks, 
        biggestBlock, biggestBlockIndex,
        solved: false 
    };
}


function getBlockSize(squares, index, color) {
    if(squares[index].counted) { return 0; }
    if(squares[index].color !== color) { return 0; }

    squares[index].counted = true;
    let canCheckAbove = index%14 !== 0;
    let canCheckBelow = (index+1)%14 !== 0;
    let canCheckLeft = index>13;
    let canCheckRight = index<182;

    return (canCheckAbove ? getBlockSize(squares, index-1, color) : 0) + 
    (canCheckBelow ? getBlockSize(squares, index+1, color) : 0) + 
    (canCheckLeft ? getBlockSize(squares, index-14, color) : 0) + 
    (canCheckRight ? getBlockSize(squares, index+14, color) : 0) + 
    1;
    // above = -1 -> if idx % 14 !== 0
    // bottom = +1 -> if idx % 13 !== 0
    // left = -14 -> if idx > 13
    // right = +14 -> if idx < 182
}

function readLog() {
    let log = [];
    try {
        let content = fs.readFileSync('log.json', 'utf8');
        log = JSON.parse(content);
    } catch(error) {
        console.log("Error restoring log from file");
    }

    return log;
}

async function writeLog(log) {
    fs.writeFile('log.json', JSON.stringify(log), (err) => {
        if(err) {
            console.log("Error writing to file");
            console.error(err);
        }
    });
}
