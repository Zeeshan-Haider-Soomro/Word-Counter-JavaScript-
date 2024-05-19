
let date = new Date()
let yearChanger = document.querySelector("#yearChanger");
yearChanger.innerText = date.getFullYear()

function counterApplication(){
    let paragraph = document.querySelector("textarea")
    
    let words = document.querySelector("#words")
    let sentences = document.querySelector("#sentences")
    let character = document.querySelector("#character")
    let para = document.querySelector("#para")

    let characters = paragraph.value.length
    let word = paragraph.value.split(" ").length;
    let sentence = paragraph.value.split(".").length
    let paras = paragraph.value.split("\n").length

    words.innerText = ` Total Words ${word} `
    sentences.innerText = ` Total Sentences ${sentence} `
    character.innerText = ` Total Characters ${characters} `
    para.innerText = ` Total Paragraphs ${paras} `
}