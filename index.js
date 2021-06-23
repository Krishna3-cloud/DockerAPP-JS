function dock() {
    var i = document.getElementById("input").value
    var res = new XMLHttpRequest()

    res.open("GET", "http://192.168.0.104/cgi-bin/dockjs.py?cmd=" + i, true);
    res.send();
    res.onload = function() {
        var output = res.responseText;
        document.getElementById("out").innerHTML = output;

    }
}