class UITextAria {
  constructor() {
    this.textAria = document.createElement('textarea');
    this.textAria.setAttribute('rows', '10');
    this.textAria.setAttribute('autofocus', '1');
    this.textAria.classList.add('textaria');
  }

  getElement() {
    return this.textAria;
  }

  setFocus() {
    this.textAria.focus();
  }

  changeTexAria = (text, type) => {
    let start = this.textAria.selectionStart - (type === 'Backspace' ? 1 : 0);

    if (start < 0) {
      start = 0;
    }

    let end = this.textAria.selectionEnd;
    const { value } = this.textAria;
    const finText = value.substring(0, start) + text + value.substring(end);

    this.textAria.value = finText;
    this.textAria.focus();

    end -= (type === 'Backspace' ? 1 : 0);

    if (type === 'ArrowLeft') {
      end -= 1;
    }

    if (type === 'ArrowRight') {
      end += 1;
      this.textAria.selectionStart = end;
    }

    const nextRowPos = this.textAria.value.substring(start).indexOf('\n');
    const prevRowPos = this.textAria.value.substring(0, start).lastIndexOf('\n');

    if (type === 'ArrowDown') {
      if (nextRowPos !== -1) {
        let nextRowPos2 = this.textAria.value.substring(start + nextRowPos + 1).indexOf('\n');

        if (nextRowPos2 < 0) {
          nextRowPos2 = this.textAria.value.length;
        } else {
          nextRowPos2 = nextRowPos2 + start + nextRowPos;
        }

        start = start + nextRowPos + (start - prevRowPos);

        this.textAria.selectionStart = start > nextRowPos2 + 1 ? nextRowPos2 + 1 : start;
      }

      end = this.textAria.selectionStart;
    }

    if (type === 'ArrowUp') {
      if (prevRowPos !== -1) {
        const prevRowPos2 = this.textAria.value.substring(0, prevRowPos).lastIndexOf('\n');
        start = prevRowPos2 + (start - prevRowPos);
        this.textAria.selectionStart = start > prevRowPos ? prevRowPos : start;
      }

      end = this.textAria.selectionStart;
    }

    if (end < 0) {
      end = 0;
    }

    if (start === end) {
      end += text.length;
    }

    this.textAria.selectionEnd = end;
  };
}

export default UITextAria;
