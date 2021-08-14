if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 400);

}

var x = 0;

var titleText = ["C", "Co", "Cou", "Coun", "Count", "Counte", "Counter", "Counter-", "Counter-S", "Counter-St", "Counter-Str", "Counter-Stri", "Counter-Strik", "Counter-Strike", "Counter-Strike C", "Counter-Strike Ca", "Counter-Strike Caf", "Counter-Strike Café", "Counter-Strike Café", "Counter-Strike Café", "ounter-Strike Café", "unter-Strike Café", "nter-Strike Café", "ter-Strike Café", "er-Strike Café", "r-Strike Cafe", "-Strike Café", "Strike Café", "trike Café", "rike Café", "ike Café", "ke Café", "e Café", "Café", "afé", "fé", "é",];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];

}