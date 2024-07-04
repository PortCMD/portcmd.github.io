let TRIGGER_URL = "cloud.portcmd.ru";

var now_url = window.location.hostname;

if (now_url == TRIGGER_URL) {
    alert("1");
    var html_code = document.documentElement.innerHTML;
    html_code = html_code.replace("Sr-Cloud", "Cmd-Cloud");
    html_code = html_code.replace("SR-CLOUD", "CMD-CLOUD");
    html_code = html_code.replace("SrCloud", "CmdCloud");
    document.documentElement.innerHTML = html_code;
}

// Подключить только в конец файла!
