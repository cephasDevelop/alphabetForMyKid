//{/* <div id="alphabets"></div>
//        <div id="lists"></div> */}

const alphabeArray = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
];
const wordObj = {
    'A': ['apple', 'arm', 'ankle', 'aunt', 'ant'],
    'B': ['ball', 'bell', 'back', 'black', 'bag','brother'],
    'C': ['cat', 'car', 'cake','chicken','chilli','chalk','church'],
    'D': ['dog', 'donkey', 'duck', 'dolphine','daiper','daddy'],
    'E': ['egg', 'elbow', 'elephant', 'ear', 'eye'],
    'F': ['fruite', 'food', 'fish', 'frog', 'far', 'fat','flute','flag','foot'],
    'G': ['grapes', 'goat', 'good', 'good night','girl','grade'],
    'H': ['hat', 'hot', 'horse', 'head', 'hair','hen'],
    'I': ['ice cream', 'ice'],
    'J': ['jeep', 'jump', 'jet'],
    'K': ['key', 'knife', 'knee'],
    'L': ['lion', 'leap', 'lip', 'leg'],
    'M': ['monster', 'monkey', 'motor cycle','mother'],
    'N': ['nest', 'nice', 'near', 'nose','neck'],
    'O': ['orange', 'ok', 'on', 'owl'],
    'P': ['parrot', 'pants', 'pot','phone'],
    'Q': ['queen', 'quill'],
    'R': ['ring', 'right', 'run','red','rain'],
    'S': ['sleep', 'solider', 'sheep', 'ship','sister','scissors','sun'],
    'T': ['tiger', 'tea', 'tounge', 'teeth'],
    'U': ['umbrella', 'up', 'uncle'],
    'V': ['violine'],
    'W': ['watch', 'water', 'write', 'white','witch','wrong'],
    'X': ['xylophone','x-ray'],
    'Y': ['yellow', 'you', 'yak'],
    'Z': ['zebra','zip']
};

const letterDivArr = []

const alphabets = document.getElementById('alphabets');
const showLetter = document.getElementById('show-letter');
const showWords = document.getElementById('show-letter');


// create alphabets
function createLetters() {
    for (let i = 0; i < alphabeArray.length; i++){
        let letter = document.createElement('div');
        letter.setAttribute('id', alphabeArray[i]);
        letter.classList.add('letter');
        letter.innerHTML = alphabeArray[i];
        alphabets.appendChild(letter);
        letterDivArr.push(letter);

        letter.addEventListener('click',()=>displayWords(alphabeArray[i]));
    }
}
createLetters();

function displayWords(abcd) { 
    showLetter.innerHTML = abcd;
    // let tempoWords = wordObj[abcd].map((val, idx) => (<p key='idx'>{`${val}`}</p>))
    for (let i = 0; i < wordObj[abcd].length; i++) {
        tempoWord = document.createElement('p');
        tempoWord.classList.add('word');
        tempoWord.innerHTML = wordObj[abcd][i];
        showWords.appendChild(tempoWord)
     }
    
}