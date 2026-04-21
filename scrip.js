function runCode() {
    var code = document.getElementById("codeInput").value;
    var outputArea = document.getElementById("output");
    
    outputArea.innerHTML = "";

    try {
        outputArea.innerHTML = code;
        var scripts = outputArea.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
            eval(scripts[i].innerText);
        }
    } catch (err) {
        outputArea.innerHTML = "<span style='color: red;'>⚠️ Lỗi: " + err.message + "</span>";
    }
}