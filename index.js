const data = {
    passwordTable: {
        button: document.querySelector("button[data-name='passwordTable']"),
        element: document.querySelector("div[data-name='passwordTable']")
    },
    password: {
        button: document.querySelector("button[data-name='password']"),
        element: document.querySelector("div[data-name='password']")
    }
}

const handleClick = (evt) => {
    const { target } = evt;
    const { element } = data[evt.target.dataset.name];

    if (target.classList.contains('button-container__button_not_selected')) {
        target.classList.remove('button-container__button_not_selected');
        target.classList.add('button-container__button_selected');
        target.textContent = 'Скрыть ответ';
        element.classList.remove('row_hidden');
    } else {
        target.classList.add('button-container__button_not_selected');
        target.classList.remove('button-container__button_selected');
        target.textContent = 'Узнать ответ';
        element.classList.add('row_hidden');
    }
    
}

data.passwordTable.button.addEventListener('click', handleClick);
data.password.button.addEventListener('click', handleClick);