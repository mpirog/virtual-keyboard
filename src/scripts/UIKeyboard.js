import UIButton from './UIButton';

class UIKeyboard {
  constructor(rows, dataKeys, leng) {
    this.dataKeys = dataKeys;
    this.leng = leng;
    this.rows = rows;

    this.buttons = [];
    this.isActiveCapsLock = false;
    this.isActiveShift = false;
    this.isActiveAlt = false;
    this.isActiveShiftForce = false;
  }

  changeLanguage() {
    this.leng = this.leng === 'en' ? 'ru' : 'en';

    const btns = document.querySelectorAll('.button');

    btns.forEach((btn) => {
      const type = btn.getAttribute('data-type');
      const el = btn;

      el.innerHTML = new UIButton(
        type,
        { width: this.dataKeys[type].width, isAlfabet: this.dataKeys[type].isAlfabet },
        this.dataKeys[type][this.leng],
      ).createButton().innerHTML;
    });
  }

  resetSelectedButtons() {
    this.buttons.forEach((el) => {
      if (el.getAttribute('data-type') !== 'CapsLock') {
        if (!this.isActiveShiftForce) {
          el.classList.remove('button__active');
        }
      }
    });
  }

  changeCase(toUpper) {
    document.querySelectorAll('[data-main_txt]').forEach((elem) => {
      const el = elem;

      if (toUpper) {
        el.textContent = elem.textContent.toUpperCase();
      } else {
        el.textContent = elem.textContent.toLowerCase();
      }
    });

    return this;
  }

  addListeners(textAria) {
    this.buttons.forEach((btn) => {
      btn.addEventListener('mousedown', (event) => {
        this.resetSelectedButtons();

        const type = event.currentTarget.getAttribute('data-type');

        if (type === 'AltLeft') {
          this.isActiveAlt = true;
        }

        if (this.isActiveAlt && type === 'ShiftLeft') {
          this.changeLanguage();
          this.isActiveAlt = false;
        }

        if (this.isActiveShift && type === 'AltLeft') {
          this.changeLanguage();
        }

        event.currentTarget.classList.toggle('button__active');

        let text = this.dataKeys[type][this.leng].value;

        if (type === 'CapsLock') {
          this.isActiveCapsLock = !this.isActiveCapsLock;
        }

        if (type === 'ShiftLeft' || type === 'ShiftRight') {
          this.isActiveShift = this.isActiveShiftForce || !this.isActiveShiftForce;
        }

        if (this.isActiveShift && this.dataKeys[type][this.leng].additionalValue) {
          text = this.dataKeys[type][this.leng].additionalValue;
        }

        if (
          (this.isActiveShift && !this.isActiveCapsLock)
          || (!this.isActiveShift && this.isActiveCapsLock)
        ) {
          text = text.toUpperCase();
        }

        if (type !== 'ShiftLeft' && type !== 'ShiftRight') {
          this.isActiveShift = this.isActiveShiftForce || false;
        }

        const toUpper = (this.isActiveShift && !this.isActiveCapsLock)
          || (!this.isActiveShift && this.isActiveCapsLock);

        this.changeCase(toUpper);

        textAria.changeTexAria(text, type);
      });

      btn.addEventListener('mouseup', (event) => {
        if (event.currentTarget.getAttribute('data-type') !== 'CapsLock') {
          event.currentTarget.classList.remove('button__active');
        }

        if (event.currentTarget.getAttribute('data-type') !== 'ShiftLeft') {
          this.isActiveAlt = false;
        }

        if (
          event.currentTarget.getAttribute('data-type') === 'ShiftLeft'
            || event.currentTarget.getAttribute('data-type') === 'ShiftRight'
        ) {
          this.isActiveShift = this.isActiveShiftForce || false;
        }

        const toUpper = (this.isActiveShift && !this.isActiveCapsLock)
          || (!this.isActiveShift && this.isActiveCapsLock);

        this.changeCase(toUpper);

        textAria.setFocus();
      });
    });

    document.addEventListener('keydown', (event) => {
      if (!this.dataKeys[event.code]) {
        return;
      }

      event.preventDefault();

      if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
        this.isActiveShiftForce = true;
      }

      document.querySelector(`[data-type=${event.code}]`).dispatchEvent(new Event('mousedown'));
    });

    document.addEventListener('keyup', (event) => {
      if (!this.dataKeys[event.code]) {
        return;
      }

      event.preventDefault();

      if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
        this.isActiveShiftForce = false;
      }

      document.querySelector(`[data-type=${event.code}]`).dispatchEvent(new Event('mouseup'));
    });
  }

  getRow(data) {
    const row = document.createElement('div');
    row.classList.add('row');

    data.forEach((type) => {
      const btn = new UIButton(
        type,
        { width: this.dataKeys[type].width, isAlfabet: this.dataKeys[type].isAlfabet },
        this.dataKeys[type][this.leng],
      ).createButton();

      this.buttons.push(btn);
      row.append(btn);
    });

    return row;
  }

  createRows(wrapper, textAria) {
    this.rows.forEach((row) => {
      wrapper.append(this.getRow(row));
    });

    this.addListeners(textAria);

    return this;
  }

  getLenguage() {
    return this.leng;
  }
}

export default UIKeyboard;
