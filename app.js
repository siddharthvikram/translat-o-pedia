var txtInput =  document.querySelector("#txt-input");
var btn = document.querySelector("#txt-button1");
var btn2 = document.querySelector("#txt-button2");
var btn3 = document.querySelector("#txt-button3");
var outputDiv = document.querySelector("#outputbox1");
var outputDiv2 = document.querySelector("#outputbox2");
var outputDiv3 = document.querySelector("#outputbox3");


var server = "https://api.funtranslations.com/translate/yoda.json"
var server2 = "https://api.funtranslations.com/translate/ferb-latin.json"
var server3 = "https://api.funtranslations.com/translate/pig-latin.json"

function getTranslateUrl(text){
    return server + "?" + "text=" + text
}

function getTranslateUrl2(text2){
    return server2 + "?" + "text=" + text2
}

function getTranslateUrl3(text3){
    return server3 + "?" + "text=" + text3
}

function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslateUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var traslate = json.contents.translated;
        outputDiv.innerText = traslate;
    })

}

function clickHandler2(){
    var inputText = txtInput.value;

    fetch(getTranslateUrl2(inputText))
    .then(response => response.json())
    .then(json => {
        var traslate = json.contents.translated;
        outputDiv2.innerText = traslate;
    })

}

function clickHandler3(){
    var inputText = txtInput.value;

    fetch(getTranslateUrl3(inputText))
    .then(response => response.json())
    .then(json => {
        var traslate = json.contents.translated;
        outputDiv3.innerText = traslate;
    })

}

btn.addEventListener("click", clickHandler)
btn2.addEventListener("click", clickHandler2)
btn3.addEventListener("click", clickHandler3)