function findFirstStringInBracket(str){   
    if(str.length > 0){ 
        let indexFirstBracketFound = str.indexOf("(");    	  
        let indexLastBracketFound = str.indexOf(")");    	  
        let wordsAfterFirstBracket = str.substr( indexFirstBracketFound + 1, (indexLastBracketFound - indexFirstBracketFound) -1 );
        
        return(indexFirstBracketFound >= 0 && indexLastBracketFound >= 0)
            ? wordsAfterFirstBracket
            : '' ;
    } else {      
        return ''; 
    } 
}

const task3FindWord = (req, res) => {
    const words = req.query.word;

    if (!words) {
        return res.status(400).send({
            success: false,
            message: "Word is empty, please insert a words with '(' and ')' symbol"
        })
    }

    const word = findFirstStringInBracket(words);

    return res.status(200).send({
        success: true,
        word: word
    })

}

module.exports = {
    task3FindWord
}