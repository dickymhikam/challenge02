function changeWord(selectedText, changeText, text) {
    return text.replace(selectedText,changeText)
}

const kalimat1 ='Andini sangat mencintai kamu selamanya'
const kalimat2 ='Gunung bromo tak akan mampu menggambakan besarnya cintaku padamu'

console.log(changeWord('mencintai','membenci',kalimat1));
console.log(changeWord('bromo','semeru',kalimat2));