const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
    
function readNumber() {
    readline.question(`Enter ODD number betweeb 2 and 10000 please:`, (consoleNumber) => {
        if(consoleNumber % 2 && consoleNumber > 2 && consoleNumber < 10000) {
            n = consoleNumber;
            createMMlogo(n);
            readline.close();
        } else {
            console.log('Bad input!!!');
            readNumber();
        }
    })
}

function createMMlogo(n) {
    function createEle(ele, length) {
        let str = '';
        for(let i = 0; i < length; i++) {
            str += ele;
        }
    
        return str;
    }
    
    function buildUpperPart() {
        let leftRigthFillers = createEle('-', n);
        let middleSection = createEle('-', n);
        let mainParts = createEle('*', n);
        
        console.log(`N = ${n}`);

        while(middleSection.length) {
            console.log(`${leftRigthFillers}${mainParts}${middleSection}${mainParts}${leftRigthFillers}${leftRigthFillers}${mainParts}${middleSection}${mainParts}${leftRigthFillers}`);
            middleSection = createEle('-', middleSection.length - 2);
            leftRigthFillers = createEle('-', leftRigthFillers.length - 1);
            mainParts = createEle('*', mainParts.length + 2);
        }
    }
    
    function buildLowerPart() {
        let sideFillers = createEle('-', Math.floor(n / 2));
        let leftRigthMains = createEle('*', n);
        let middleSection = createEle('*', (n * 2) - 1);
        let middleFillers = createEle('-', 1);
    
        while(middleFillers.length <= n) {
            console.log(`${sideFillers}${leftRigthMains}${middleFillers}${middleSection}${middleFillers}${leftRigthMains}${sideFillers}${sideFillers}${leftRigthMains}${middleFillers}${middleSection}${middleFillers}${leftRigthMains}${sideFillers}`);
            sideFillers = createEle('-', sideFillers.length - 1);
            middleFillers = createEle('-', middleFillers.length + 2);
            middleSection = createEle('*', middleSection.length -2);
        }
    }
    
    buildUpperPart();
    buildLowerPart();
}

readNumber()