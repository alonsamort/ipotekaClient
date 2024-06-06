function checkMailtoSupport(email) {
    const isMailtoSupported = document.createElement('a');
    isMailtoSupported.href = `mailto:${email}`;
    if (isMailtoSupported.protocol === 'mailto:') {
        window.location.href = `mailto:${email}`;
    } else {
        alert('Ваш браузер не поддерживает mailto ссылки');
    }
}

export const footer = {

    subtitle: 'Центр ипотеки и страхования',

    sections: [
        {
            title: 'Компания',
            items: [
                {label: 'О нас', footerId:'about'},
                {label: 'Команда', footerId:"comand"},
                {label: 'Ипотека', footerId:"programs"},
                {label: 'Услуги', footerId:'service'},
                {label: 'Отзывы', footerId:'review'},
            ],
        },
        {
            title: 'Соц сети',
            items: [
                {label: 'Wattsap', url: 'https://wa.me/79883487755'},
                {label: 'Почта', onClick: () => checkMailtoSupport('ipoteka.Zdes@yandex.ru')},
                {label: 'Telegram', url: '#!'},
            ],
        },
        {
            title: 'Информация',
            items: [
                {label: 'Лицензия', url: '#!'},
                {label: 'Политика', url: '#!'},
            ],
        },
    ],
    organizationDetails: [
        '© 2023 ipotekazdes. Все права защищены',
        'ИНН: 503113605694',
        'ОГРНИП: 322508100419700',

    ],


};