var text = document.getElementById("input-text");

var btn = document.getElementById("copy-text");

btn.onclick = function() {
    text.select();    
    document.execCommand("copy");
}