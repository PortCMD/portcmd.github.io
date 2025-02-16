let m = document.getElementsByClassName('main')[0];
let ip = "";
let know = true;

function focusInput() {
    const input = document.getElementById('focus');
    input.focus();
}

window.onload = focusInput;

function addInputListener() {
    const input = document.getElementById('focus');
    input.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            let command = input.value;

            let old_input = document.getElementById('focus');
            old_input.remove();

            document.getElementsByClassName('curs')[0].remove();

            document.getElementsByClassName('enter')[0].innerHTML += " " + command;
            document.getElementsByClassName('enter')[0].classList.remove('enter');

            know = false;

            if (command === "clear") {
                m.innerHTML = "";
                know = true;
            }

            if (command === "ls") {
                know = true;
                m.innerHTML += "<br>password.txt<span class='hide-txt'>1111</span>secret.png"
            }

            if (command === "help") {
                know = true;
                m.innerHTML += "<br>Доступные команды сайта: <br>help - вызвать меню помощи<br>about - стартовый текст 'Обо мне'<br>github - перейти на мой GitHub<br>tg - связаться со мной в Telegram<br>port - Портфолио<br>Доступны некоторые команды Linux, как посхалки"
            }

            if (command === "about") {
                know = true;
                m.innerHTML += '<br>Добро пожаловать на мой личный сайт! <br><br>Мой ник - PortCMD, и я веб-разработчик. Из этого следует, что я знаю HTML, CSS, JS (верстать умею), пишу backend на PHP, Python, Node JS. <br><br>Имею опыт работы как над небольшими проектами, так и над более-менее крупными. Имею скилы в разработке всевозможных базовых скриптов для сайтов: системы аккаунтов, разработка собственного API, использование стороннего, приём платежей и всякое прочее... Опыт разработки в вебе - около 3 лет. <br><br>Чтобы взаимодействовать с моим сайтом, воспользуйтесь "терминалом" ниже, <b>используйте help для вызова списка доступных команд.</b><br><br>';
            }

            if (command === "github") {
                know = true;
                window.open('http://github.com/portcmd', '_blank');
            }

            if (command === "tg") {
                know = true;
                window.open('http://t.me', '_blank');
            }

            if (command === "port") {
                know = true;
                m.innerHTML += '<br>E: Сайт в разработке, этот раздел пока не готов.'
            }

            if (know === false) {
                m.innerHTML += "<br>Команда «" + command + "» не найдена."
            }

            m.innerHTML += '<br><br><span class="enter">guest@portcmd.ru:~$ <input type="text" id="focus" size="1" oninput="this.size=Math.max(this.value.length, 1)"><div class="curs"></div></span>';

            addInputListener();
            focusInput();
        }
    });
}

addInputListener();

document.addEventListener('click', function(event) {
    const input = document.getElementById('focus');
    if (!input.contains(event.target)) {
        input.focus();
    }
});
