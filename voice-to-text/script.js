let form = document.querySelector("form");
let sr = window.webkitSpeechRecognition || window.SpeechRecognition;
let spRec = new sr();
spRec.lang = "en";
spRec.continuous = true;
spRec.interimResults = true;
// console.log(spRec);
form.addEventListener("submit", e => {
    e.preventDefault();
    spRec.start();
})
spRec.onresult = res => {
    let text = Array.from(res.results)
        .map(r => r[0])
        .map(txt => txt.transcript)
        .join("");
    form[0].value = text;
    // console.log(text);
}
form[2].addEventListener("click", () => {
    spRec.stop()
})