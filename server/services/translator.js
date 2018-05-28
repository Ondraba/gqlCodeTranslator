
const dictionary = [
    [0," ", "  ","   "],
    [1,"a","b","c"],
    [2,"e","f","g"],
    [3,"h","i","j"],
    [4,"k","l","m"],
    [5,"n","o","p"],
    [6,"q","r","s"],
    [7,"t","u","v"],
    [8,"w","x","y"],
    [9,"z",",","."]
]

const getRandomizedResult = (max = 3, min = 1) => {
    const randomize = (max,min) => {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    return randomize(max,min)
}  

const charReplace = dictionary => char => {
  let iterate = dictionary.filter(item => item[0] == char)
  return iterate[0][getRandomizedResult()]
}

const translate = phrase => {
    let splited = String(phrase).split('')
    let translated =  splited.map(char => charReplace(dictionary)(char))
    return translated.join('')
}   

module.exports = { getRandomizedResult, charReplace, translate };