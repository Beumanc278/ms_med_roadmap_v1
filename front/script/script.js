const load_btn = document.getElementById('btn-load-roadmap');
const clear_btn = document.getElementById('btn-clear')


load_btn.addEventListener('click', () => {
    const input_containers = document.getElementsByClassName('input-field')
    for (i = 0; i < input_containers.length; i++) {
        if (input_containers[i].value == "") {
            createErrorNotification(`В поле для Приложения ${i + 1} отсутствует номер`)
        } else {
            if (input_containers[i].value.includes('.')) {
                createNotification("Верно");
            } else {
                createErrorNotification(`В номере приказа для Приложения ${i + 1} отсутствует точка`)
            }
        }
    };
    /*
    var pril1_value = document.getElementById('pril1-input').value
    var pril2_value = document.getElementById('pril2-input').value
    createNotification(`Запущена подготовка маршрутного листа на основании номеров приказа\n${pril1_value} - по Приложению 1\n${pril2_value} - по Приложению 2`);
    */
});

clear_btn.addEventListener('click', () => {
    fields_clear();
});

function fields_clear() {
    document.getElementById('pril1-input').value = ''
    document.getElementById('pril2-input').value = ''
    createNotification("Выбранные номера приказов удалены")
};

function createNotification(text) {
    const container = document.getElementById('notif-container')
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText = text
    container.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function createErrorNotification(text) {
    const container = document.getElementById('notif-container')
    const notif = document.createElement('div');
    notif.classList.add('error-toast');
    notif.innerText = text
    container.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function checkValues() {

}