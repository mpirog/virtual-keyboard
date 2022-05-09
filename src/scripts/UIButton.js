class UIButton {
  constructor(type, property, data) {
    this.type = type;
    this.property = property;
    this.data = data;
  }

  createButton() {
    const btn = document.createElement('div');

    btn.setAttribute('data-type', this.type);
    btn.classList.add('button');

    if (this.property.width) {
      btn.style.minWidth = this.property.width;
    }

    if (this.property.isAlfabet) {
      btn.classList.add('button__alfabet');
    }

    if (this.data.additionalValue) {
      const textAddition = document.createElement('div');
      textAddition.classList.add('text');
      textAddition.classList.add('text__addition');
      textAddition.innerHTML = this.data.additionalValue;
      btn.append(textAddition);
    }

    const text = document.createElement('div');
    text.classList.add('text');

    text.innerHTML = this.data.desc;

    if (this.property.isAlfabet) {
      text.setAttribute('data-main_txt', '1');
    }

    btn.append(text);

    return btn;
  }
}

export default UIButton;
