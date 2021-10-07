function sortStrChars(str) {
    if (!str) {
        return;
    }
    str = str.split('');
    str = str.sort();
    str = str.join('');
    console.log(str);
    return str;
}

function getGroupedAnagrams(words) {
    const anagrams = {};
    words.forEach((word) => {
        const sortedWord = sortStrChars(word);
        if (anagrams[sortedWord]) {
            return anagrams[sortedWord].push(word);
        }
        console.log(anagrams); 
        anagrams[sortedWord] = [word];
    });
    console.log(anagrams);
    return anagrams;
}

const task4Anagram = (req, res) => {
    const   words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'],
            groupedAnagrams = getGroupedAnagrams(words),
            anagramResult = [];
    
    for (const sortedWord in groupedAnagrams) {
       anagramResult.push(groupedAnagrams[sortedWord])
    }

    res.status(200).send({
        success: true,
        results: anagramResult
    })
}

module.exports = {
    task4Anagram
}
