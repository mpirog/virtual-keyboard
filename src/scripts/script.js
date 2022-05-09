import UIKeyboard from './UIKeyboard';
import UITextAria from './UITextAria';
import { rows, dataKeys } from './data';
import '../styles/main.scss';

let leng = 'en';

const getLocalStorage = () => {
  if (localStorage.getItem('leng')) {
    leng = localStorage.getItem('leng');
  }
};

const body = document.querySelector('body');

// --------------- Creations -----------------

const createKeyboardWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  return wrapper;
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

// ----------------- Builder ---------------------

getLocalStorage();

const wrapper = createKeyboardWrapper();

const textAria = new UITextAria();

const keyBoard = new UIKeyboard(rows, dataKeys, leng).createRows(wrapper, textAria);

wrapper.prepend(textAria.getElement());
wrapper.prepend(createTitle());
wrapper.append(createDescription());

body.append(wrapper);

const setLocalStorage = () => {
  localStorage.setItem('leng', keyBoard.getLenguage());
};

// ----------------- Listeners --------------------
window.addEventListener('beforeunload', setLocalStorage);
