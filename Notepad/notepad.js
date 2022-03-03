function save(){
    var tt = document.getElementById("tt").value;
    var bd = document.getElementById("bd").value;
    var save = document.createElement("a");
    save.setAttribute("href","data:text/plain;charset=utf-8," + encodeURIComponent(bd));
    save.setAttribute("download", tt)
    document.body.appendChild(save);
    save.click();
}