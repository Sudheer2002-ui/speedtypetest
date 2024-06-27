let quote = document.getElementById("quoteDisplay");
let spinnerEl = document.getElementById("spinner");

function sudheer() {
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let quo = JSON.stringify(jsonData.content);
            quote.textContent = JSON.parse(quo);
        });
}
let spanEl = document.getElementById("timer");
let result = document.getElementById("result");
let counter = 0;
let tym = null
let timerid = setInterval(function() {
    spanEl.textContent = counter;
    counter += 1;
}, 1000);
tym = timerid;
sudheer();
let b = null;
let submit = document.getElementById("submitBtn");
let reset = document.getElementById("resetBtn");
let quoteIn = document.getElementById("quoteInput");
reset.addEventListener("click", function() {
    clearInterval(b);
    let a = 0;
    let aa = setInterval(function() {
        spanEl.textContent = a;
        a += 1;
    }, 1000);
    sudheer();
    clearInterval(tym);
    b = aa;
    quoteIn.value = "";
    result.textContent = "";
});
submit.addEventListener("click", function() {
    if (quoteIn.value === quote.textContent) {
        clearInterval(tym);
        clearInterval(b);
        result.textContent = "You typed in " + spanEl.textContent + " seconds";
        result.classList.add("color1");
    } else {
        result.textContent = "You typed incorrect sentence";
        result.classList.remove("color1");
        result.classList.add("color");
    }
});