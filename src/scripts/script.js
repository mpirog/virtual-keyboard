import { rows, dataKeys } from './data.js';

let leng = 'en';

let isActiveCapsLock = false;
let isActiveShift = false;
let isActiveAlt = false;
let isActiveShiftForce = false;

const buttons = [];

const body = document.querySelector('body');

// --------------- Creations -----------------

const createButton = (type) => {
  const btn = document.createElement('div');

  btn.setAttribute('data-type', type);
  btn.classList.add('button');

  if (dataKeys[type].width) {
    btn.style.minWidth = dataKeys[type].width;
  }

  if (dataKeys[type].isAlfabet) {
    btn.classList.add('button__alfabet');
  }

  if (dataKeys[type][leng].additionalValue) {
    const textAddition = document.createElement('div');
    textAddition.classList.add('text');
    textAddition.classList.add('text__addition');
    textAddition.innerHTML = dataKeys[type][leng].additionalValue;
    btn.append(textAddition);
  }

  const text = document.createElement('div');
  text.classList.add('text');

  text.innerHTML = dataKeys[type][leng].desc;

  if (dataKeys[type].isAlfabet) {
    text.setAttribute('data-main_txt', '1');
  }

  btn.append(text);

  return btn;
};

const createRow = (data) => {
  const row = document.createElement('div');

  row.classList.add('row');

  data.forEach((type) => {
    const btn = createButton(type);
    buttons.push(btn);
    row.append(btn);
  });

  return row;
};

const createKeyboardWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  return wrapper;
};

const createTextAria = () => {
  const textAria = document.createElement('textarea');
  textAria.setAttribute('rows', '10');
  textAria.setAttribute('autofocus', '1');
  textAria.classList.add('textaria');

  return textAria;
};

const createTitle = () => {
  const el = document.createElement('div');
  el.classList.add('title');
  el.innerText = 'RSS Виртуальная клавиатура';
  return el;
};

const createDescriptionText = (text) => {
  const el = document.createElement('li');
  el.innerText = text;
  return el;
};

const createDescription = () => {
  const conteiner = document.createElement('ul');
  conteiner.classList.add('description');

  conteiner.append(createDescriptionText('Для переключения языка комбинация: левыe ALT + Shift или Shift + ALT'));
  conteiner.append(createDescriptionText(
    'Для переключения языка с помощью мыши: нажмите на Shift (ALT), удерживая, переместите курсор на ALT (Shift), нажмите еще раз',
  ));
  conteiner.append(createDescriptionText(
    'Для набора доп. символов с помощью мыши: нажмите на Shift, удерживая, переместите курсор на выбранную клавишу, нажмите еще раз',
  ));

  return conteiner;
};

const wrapper = createKeyboardWrapper();

const textAria = createTextAria();

// --------------- Actions --------------------

const changeUpperCase = (toUpper) => {
  document.querySelectorAll('[data-main_txt]').forEach((elem) => {
    const el = elem;

    if (toUpper) {
      el.textContent = elem.textContent.toUpperCase();
    } else {
      el.textContent = elem.textContent.toLowerCase();
    }
  });
};

const changeLanguage = () => {
  leng = leng === 'en' ? 'ru' : 'en';

  const btns = document.querySelectorAll('.button');

  btns.forEach((btn) => {
    const el = btn;
    el.innerHTML = createButton(btn.getAttribute('data-type')).innerHTML;
  });
};

const changeTexAria = (text, type) => {
  let start = textAria.selectionStart - (type === 'Backspace' ? 1 : 0);

  if (start < 0) {
    start = 0;
  }

  let end = textAria.selectionEnd;
  const finText = textAria.value.substring(0, start) + text + textAria.value.substring(end);

  textAria.value = finText;
  textAria.focus();

  end -= (type === 'Backspace' ? 1 : 0);

  if (type === 'ArrowLeft') {
    end -= 1;
  }

  if (type === 'ArrowRight') {
    end += 1;
    textAria.selectionStart = end;
  }

  const nextRowPos = textAria.value.substring(start).indexOf('\n');
  const prevRowPos = textAria.value.substring(0, start).lastIndexOf('\n');

  if (type === 'ArrowDown') {
    if (nextRowPos !== -1) {
      let nextRowPos2 = textAria.value.substring(start + nextRowPos + 1).indexOf('\n');

      if (nextRowPos2 < 0) {
        nextRowPos2 = textAria.value.length;
      } else {
        nextRowPos2 = nextRowPos2 + start + nextRowPos;
      }

      start = start + nextRowPos + (start - prevRowPos);

      textAria.selectionStart = start > nextRowPos2 + 1 ? nextRowPos2 + 1 : start;
    }

    end = textAria.selectionStart;
  }

  if (type === 'ArrowUp') {
    if (prevRowPos !== -1) {
      const prevRowPos2 = textAria.value.substring(0, prevRowPos).lastIndexOf('\n');
      start = prevRowPos2 + (start - prevRowPos);
      textAria.selectionStart = start > prevRowPos ? prevRowPos : start;
    }

    end = textAria.selectionStart;
  }

  if (end < 0) {
    end = 0;
  }

  if (start === end) {
    end += text.length;
  }

  textAria.selectionEnd = end;
};

const resetSelectedButtons = () => {
  buttons.forEach((el) => {
    if (el.getAttribute('data-type') !== 'CapsLock') {
      if (!isActiveShiftForce) {
        el.classList.remove('button__active');
      }
    }
  });
};

// -------------- Local Storage ------------------

const setLocalStorage = () => {
  localStorage.setItem('leng', leng);
};

const getLocalStorage = () => {
  if (localStorage.getItem('leng')) {
    leng = localStorage.getItem('leng');
  }
};

// ----------------- Builder ---------------------
getLocalStorage();

rows.forEach((row) => {
  wrapper.append(createRow(row));
});

wrapper.prepend(textAria);
wrapper.prepend(createTitle());
wrapper.append(createDescription());

body.append(wrapper);

// ----------------- Listeners --------------------

buttons.forEach((btn) => {
  btn.addEventListener('mousedown', (event) => {
    resetSelectedButtons();

    const type = event.currentTarget.getAttribute('data-type');

    if (type === 'AltLeft') {
      isActiveAlt = true;
    }

    if (isActiveAlt && type === 'ShiftLeft') {
      changeLanguage();
      isActiveAlt = false;
    }

    if (isActiveShift && type === 'AltLeft') {
      changeLanguage();
    }

    event.currentTarget.classList.toggle('button__active');

    let text = dataKeys[type][leng].value;

    if (type === 'CapsLock') {
      isActiveCapsLock = !isActiveCapsLock;
    }

    if (type === 'ShiftLeft' || type === 'ShiftRight') {
      isActiveShift = isActiveShiftForce || !isActiveShiftForce;
    }

    if (isActiveShift && dataKeys[type][leng].additionalValue) {
      text = dataKeys[type][leng].additionalValue;
    }

    if ((isActiveShift && !isActiveCapsLock) || (!isActiveShift && isActiveCapsLock)) {
      text = text.toUpperCase();
    }

    if (type !== 'ShiftLeft' && type !== 'ShiftRight') {
      isActiveShift = isActiveShiftForce || false;
    }

    changeUpperCase((isActiveShift && !isActiveCapsLock) || (!isActiveShift && isActiveCapsLock));

    changeTexAria(text, type);
  });

  btn.addEventListener('mouseup', (event) => {
    if (event.currentTarget.getAttribute('data-type') !== 'CapsLock') {
      event.currentTarget.classList.remove('button__active');
    }

    if (event.currentTarget.getAttribute('data-type') !== 'ShiftLeft') {
      isActiveAlt = false;
    }

    if (
      event.currentTarget.getAttribute('data-type') === 'ShiftLeft'
            || event.currentTarget.getAttribute('data-type') === 'ShiftRight'
    ) {
      isActiveShift = isActiveShiftForce || false;
    }

    changeUpperCase((isActiveShift && !isActiveCapsLock) || (!isActiveShift && isActiveCapsLock));

    textAria.focus();
  });
});

document.addEventListener('keydown', (event) => {
  if (!dataKeys[event.code]) {
    return;
  }

  event.preventDefault();

  if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
    isActiveShiftForce = true;
  }

  document.querySelector(`[data-type=${event.code}]`).dispatchEvent(new Event('mousedown'));
});

document.addEventListener('keyup', (event) => {
  if (!dataKeys[event.code]) {
    return;
  }

  event.preventDefault();

  if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
    isActiveShiftForce = false;
  }

  document.querySelector(`[data-type=${event.code}]`).dispatchEvent(new Event('mouseup'));
});

window.addEventListener('beforeunload', setLocalStorage);
