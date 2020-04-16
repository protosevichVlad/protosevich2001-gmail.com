import Button from './button.js';

export default class Keyboard {
  constructor(wrapper) {
    this.case = 'lowerCase';
    this.isCaps = false;
    this.specialKeysPressed = [];
    this.buttons = {};

    if (window.localStorage.getItem('lang')) {
      this.lang = window.localStorage.getItem('lang');
    } else {
      this.lang = 'en';
      window.localStorage.setItem('lang', this.lang);
    }
    this.wrapper = wrapper;
  }

  init() {
    this.keyboardElement = document.createElement('div');
    this.keyboardElement.classList.add('keyboard');
    this.keyboardElement.id = 'keyboard';
    this.wrapper.appendChild(this.keyboardElement);

    const elementP = document.createElement('p');
    elementP.innerText = 'Смена языка ввода - \'Ctrl\' + \'Alt\' \n Сделано в ОС Windows';
    this.wrapper.appendChild(elementP);


    const br = document.createElement('br');

    // add buttons
    this.buttons.Backquote = new Button(this, 'Backquote', 192, {
      en: {
        upperCase: '~',
        lowerCase: '`',
      },
      ru: {
        upperCase: 'Ё',
        lowerCase: 'ё',
      },
    });
    this.buttons.Digit1 = new Button(this, 'Digit1', 49, {
      en: {
        upperCase: '!',
        lowerCase: '1',
      },
      ru: {
        upperCase: '!',
        lowerCase: '1',
      },
    });
    this.buttons.Digit2 = new Button(this, 'Digit2', 50, {
      en: {
        upperCase: '@',
        lowerCase: '2',
      },
      ru: {
        upperCase: '"',
        lowerCase: '2',
      },
    });
    this.buttons.Digit3 = new Button(this, 'Digit3', 51, {
      en: {
        upperCase: '#',
        lowerCase: '3',
      },
      ru: {
        upperCase: '№',
        lowerCase: '3',
      },
    });
    this.buttons.Digit4 = new Button(this, 'Digit4', 52, {
      en: {
        upperCase: '$',
        lowerCase: '4',
      },
      ru: {
        upperCase: ';',
        lowerCase: '4',
      },
    });
    this.buttons.Digit5 = new Button(this, 'Digit5', 53, {
      en: {
        upperCase: '%',
        lowerCase: '5',
      },
      ru: {
        upperCase: '%',
        lowerCase: '5',
      },
    });
    this.buttons.Digit6 = new Button(this, 'Digit6', 54, {
      en: {
        upperCase: '^',
        lowerCase: '6',
      },
      ru: {
        upperCase: ':',
        lowerCase: '6',
      },
    });
    this.buttons.Digit7 = new Button(this, 'Digit7', 55, {
      en: {
        upperCase: '&',
        lowerCase: '7',
      },
      ru: {
        upperCase: '?',
        lowerCase: '7',
      },
    });
    this.buttons.Digit8 = new Button(this, 'Digit8', 56, {
      en: {
        upperCase: '*',
        lowerCase: '8',
      },
      ru: {
        upperCase: '*',
        lowerCase: '8',
      },
    });
    this.buttons.Digit9 = new Button(this, 'Digit9', 57, {
      en: {
        upperCase: '(',
        lowerCase: '9',
      },
      ru: {
        upperCase: '(',
        lowerCase: '9',
      },
    });
    this.buttons.Digit0 = new Button(this, 'Digit0', 48, {
      en: {
        upperCase: ')',
        lowerCase: '0',
      },
      ru: {
        upperCase: ')',
        lowerCase: '0',
      },
    });
    this.buttons.Minus = new Button(this, 'Minus', 189, {
      en: {
        upperCase: '_',
        lowerCase: '-',
      },
      ru: {
        upperCase: '_',
        lowerCase: '-',
      },
    });
    this.buttons.Equal = new Button(this, 'Equal', 187, {
      en: {
        upperCase: '+',
        lowerCase: '=',
      },
      ru: {
        upperCase: '+',
        lowerCase: '=',
      },
    });
    this.buttons.Backspace = new Button(this, 'Backspace', 8, {
      en: {
        upperCase: 'Backspace',
        lowerCase: 'Backspace',
      },
      ru: {
        upperCase: 'Backspace',
        lowerCase: 'Backspace',
      },
    }, 'special', 'backspace');

    this.keyboardElement.appendChild(br.cloneNode());

    this.buttons.Tab = new Button(this, 'Tab', 9, {
      en: {
        upperCase: 'Tab',
        lowerCase: 'Tab',
      },
      ru: {
        upperCase: 'Tab',
        lowerCase: 'Tab',
      },
    }, 'special', 'tab');
    this.buttons.KeyQ = new Button(this, 'KeyQ', 81, {
      en: {
        upperCase: 'Q',
        lowerCase: 'q',
      },
      ru: {
        upperCase: 'Й',
        lowerCase: 'й',
      },
    });
    this.buttons.KeyW = new Button(this, 'KeyW', 87, {
      en: {
        upperCase: 'W',
        lowerCase: 'w',
      },
      ru: {
        upperCase: 'Ц',
        lowerCase: 'ц',
      },
    });
    this.buttons.KeyE = new Button(this, 'KeyE', 69, {
      en: {
        upperCase: 'E',
        lowerCase: 'e',
      },
      ru: {
        upperCase: 'У',
        lowerCase: 'у',
      },
    });
    this.buttons.KeyR = new Button(this, 'KeyR', 82, {
      en: {
        upperCase: 'R',
        lowerCase: 'r',
      },
      ru: {
        upperCase: 'К',
        lowerCase: 'к',
      },
    });
    this.buttons.KeyT = new Button(this, 'KeyT', 69, {
      en: {
        upperCase: 'T',
        lowerCase: 't',
      },
      ru: {
        upperCase: 'Е',
        lowerCase: 'е',
      },
    });
    this.buttons.KeyY = new Button(this, 'KeyY', 89, {
      en: {
        upperCase: 'Y',
        lowerCase: 'y',
      },
      ru: {
        upperCase: 'Н',
        lowerCase: 'н',
      },
    });
    this.buttons.KeyU = new Button(this, 'KeyU', 85, {
      en: {
        upperCase: 'U',
        lowerCase: 'u',
      },
      ru: {
        upperCase: 'Г',
        lowerCase: 'г',
      },
    });
    this.buttons.KeyI = new Button(this, 'KeyI', 73, {
      en: {
        upperCase: 'I',
        lowerCase: 'i',
      },
      ru: {
        upperCase: 'Ш',
        lowerCase: 'ш',
      },
    });
    this.buttons.KeyO = new Button(this, 'KeyO', 79, {
      en: {
        upperCase: 'O',
        lowerCase: 'o',
      },
      ru: {
        upperCase: 'Щ',
        lowerCase: 'щ',
      },
    });
    this.buttons.KeyP = new Button(this, 'KeyP', 80, {
      en: {
        upperCase: 'P',
        lowerCase: 'p',
      },
      ru: {
        upperCase: 'З',
        lowerCase: 'з',
      },
    });
    this.buttons.BracketLeft = new Button(this, 'BracketLeft', 219, {
      en: {
        upperCase: '{',
        lowerCase: '[',
      },
      ru: {
        upperCase: 'Х',
        lowerCase: 'х',
      },
    });
    this.buttons.BracketRight = new Button(this, 'BracketRight', 221, {
      en: {
        upperCase: '}',
        lowerCase: ']',
      },
      ru: {
        upperCase: 'Ъ',
        lowerCase: 'ъ',
      },
    });
    this.buttons.Backslash = new Button(this, 'Backslash', 220, {
      en: {
        upperCase: '|',
        lowerCase: '\\',
      },
      ru: {
        upperCase: '/',
        lowerCase: '\\',
      },
    });
    this.buttons.Delete = new Button(this, 'Delete', 46, {
      en: {
        upperCase: 'Del',
        lowerCase: 'Del',
      },
      ru: {
        upperCase: 'Del',
        lowerCase: 'Del',
      },
    }, 'special', 'delete');

    this.keyboardElement.appendChild(br.cloneNode());

    this.buttons.CapsLock = new Button(this, 'CapsLock', 20, {
      en: {
        upperCase: 'CapsLock',
        lowerCase: 'CapsLock',
      },
      ru: {
        upperCase: 'CapsLock',
        lowerCase: 'CapsLock',
      },
    }, 'special', 'capslock');
    this.buttons.KeyA = new Button(this, 'KeyA', 65, {
      en: {
        upperCase: 'A',
        lowerCase: 'a',
      },
      ru: {
        upperCase: 'Ф',
        lowerCase: 'ф',
      },
    });
    this.buttons.KeyS = new Button(this, 'KeyS', 83, {
      en: {
        upperCase: 'S',
        lowerCase: 's',
      },
      ru: {
        upperCase: 'Ы',
        lowerCase: 'ы',
      },
    });
    this.buttons.KeyD = new Button(this, 'KeyD', 68, {
      en: {
        upperCase: 'D',
        lowerCase: 'd',
      },
      ru: {
        upperCase: 'В',
        lowerCase: 'в',
      },
    });
    this.buttons.KeyF = new Button(this, 'KeyF', 70, {
      en: {
        upperCase: 'F',
        lowerCase: 'f',
      },
      ru: {
        upperCase: 'А',
        lowerCase: 'а',
      },
    });
    this.buttons.KeyG = new Button(this, 'KeyG', 71, {
      en: {
        upperCase: 'G',
        lowerCase: 'g',
      },
      ru: {
        upperCase: 'П',
        lowerCase: 'п',
      },
    });
    this.buttons.KeyH = new Button(this, 'KeyH', 72, {
      en: {
        upperCase: 'H',
        lowerCase: 'h',
      },
      ru: {
        upperCase: 'Р',
        lowerCase: 'р',
      },
    });
    this.buttons.KeyJ = new Button(this, 'KeyJ', 74, {
      en: {
        upperCase: 'J',
        lowerCase: 'j',
      },
      ru: {
        upperCase: 'О',
        lowerCase: 'о',
      },
    });
    this.buttons.KeyK = new Button(this, 'KeyK', 75, {
      en: {
        upperCase: 'K',
        lowerCase: 'k',
      },
      ru: {
        upperCase: 'Л',
        lowerCase: 'л',
      },
    });
    this.buttons.KeyL = new Button(this, 'KeyL', 76, {
      en: {
        upperCase: 'L',
        lowerCase: 'l',
      },
      ru: {
        upperCase: 'Д',
        lowerCase: 'д',
      },
    });
    this.buttons.Semicolon = new Button(this, 'Semicolon', 186, {
      en: {
        upperCase: ':',
        lowerCase: ';',
      },
      ru: {
        upperCase: 'Ж',
        lowerCase: 'ж',
      },
    });
    this.buttons.Quote = new Button(this, 'Quote', 222, {
      en: {
        upperCase: '"',
        lowerCase: '\'',
      },
      ru: {
        upperCase: 'Э',
        lowerCase: 'э',
      },
    });
    this.buttons.Enter = new Button(this, 'Enter', 13, {
      en: {
        upperCase: 'Enter',
        lowerCase: 'Enter',
      },
      ru: {
        upperCase: 'Enter',
        lowerCase: 'Enter',
      },
    }, 'special', 'enter');

    this.keyboardElement.appendChild(br.cloneNode());

    this.buttons.ShiftLeft = new Button(this, 'ShiftLeft', 16, {
      en: {
        upperCase: 'Shift',
        lowerCase: 'Shift',
      },
      ru: {
        upperCase: 'Shift',
        lowerCase: 'Shift',
      },
    }, 'special', 'shift');
    this.buttons.KeyZ = new Button(this, 'KeyZ', 90, {
      en: {
        upperCase: 'Z',
        lowerCase: 'z',
      },
      ru: {
        upperCase: 'Я',
        lowerCase: 'я',
      },
    });
    this.buttons.KeyX = new Button(this, 'KeyX', 88, {
      en: {
        upperCase: 'X',
        lowerCase: 'x',
      },
      ru: {
        upperCase: 'Ч',
        lowerCase: 'ч',
      },
    });
    this.buttons.KeyC = new Button(this, 'KeyC', 67, {
      en: {
        upperCase: 'C',
        lowerCase: 'c',
      },
      ru: {
        upperCase: 'С',
        lowerCase: 'с',
      },
    });
    this.buttons.KeyV = new Button(this, 'KeyV', 86, {
      en: {
        upperCase: 'V',
        lowerCase: 'v',
      },
      ru: {
        upperCase: 'М',
        lowerCase: 'м',
      },
    });
    this.buttons.KeyB = new Button(this, 'KeyB', 66, {
      en: {
        upperCase: 'B',
        lowerCase: 'b',
      },
      ru: {
        upperCase: 'И',
        lowerCase: 'и',
      },
    });
    this.buttons.KeyN = new Button(this, 'KeyN', 78, {
      en: {
        upperCase: 'N',
        lowerCase: 'n',
      },
      ru: {
        upperCase: 'Т',
        lowerCase: 'т',
      },
    });
    this.buttons.KeyM = new Button(this, 'KeyM', 77, {
      en: {
        upperCase: 'M',
        lowerCase: 'm',
      },
      ru: {
        upperCase: 'Ь',
        lowerCase: 'ь',
      },
    });
    this.buttons.Comma = new Button(this, 'Comma', 188, {
      en: {
        upperCase: '<',
        lowerCase: ',',
      },
      ru: {
        upperCase: 'Б',
        lowerCase: 'б',
      },
    });
    this.buttons.Period = new Button(this, 'Period', 190, {
      en: {
        upperCase: '>',
        lowerCase: '.',
      },
      ru: {
        upperCase: 'Ю',
        lowerCase: 'ю',
      },
    });
    this.buttons.Slash = new Button(this, 'Slash', 191, {
      en: {
        upperCase: '?',
        lowerCase: '/',
      },
      ru: {
        upperCase: ',',
        lowerCase: '.',
      },
    });
    this.buttons.ArrowUp = new Button(this, 'ArrowUp', 38, {
      en: {
        upperCase: '↑',
        lowerCase: '↑',
      },
      ru: {
        upperCase: '↑',
        lowerCase: '↑',
      },
    }, 'special', 'arrow');
    this.buttons.ShiftRight = new Button(this, 'ShiftRight', 16, {
      en: {
        upperCase: 'Shift',
        lowerCase: 'Shift',
      },
      ru: {
        upperCase: 'Shift',
        lowerCase: 'Shift',
      },
    }, 'special', 'shift');

    this.keyboardElement.appendChild(br);


    this.buttons.ControlLeft = new Button(this, 'ControlLeft', 17, {
      en: {
        upperCase: 'Ctrl',
        lowerCase: 'Ctrl',
      },
      ru: {
        upperCase: 'Ctrl',
        lowerCase: 'Ctrl',
      },
    }, 'special', 'control');
    this.buttons.MetaLeft = new Button(this, 'MetaLeft', 91, {
      en: {
        upperCase: 'Win',
        lowerCase: 'Win',
      },
      ru: {
        upperCase: 'Win',
        lowerCase: 'Win',
      },
    }, 'special', 'win');
    this.buttons.AltLeft = new Button(this, 'AltLeft', 18, {
      en: {
        upperCase: 'Alt',
        lowerCase: 'Alt',
      },
      ru: {
        upperCase: 'Alt',
        lowerCase: 'Alt',
      },
    }, 'special', 'alt');
    this.buttons.Space = new Button(this, 'Space', 32, {
      en: {
        upperCase: ' ',
        lowerCase: ' ',
      },
      ru: {
        upperCase: ' ',
        lowerCase: ' ',
      },
    }, 'space');
    this.buttons.AltRight = new Button(this, 'AltRight', 18, {
      en: {
        upperCase: 'Alt',
        lowerCase: 'Alt',
      },
      ru: {
        upperCase: 'Alt',
        lowerCase: 'Alt',
      },
    }, 'special', 'alt');
    this.buttons.ControlRight = new Button(this, 'ControlRight', 17, {
      en: {
        upperCase: 'Ctrl',
        lowerCase: 'Ctrl',
      },
      ru: {
        upperCase: 'Ctrl',
        lowerCase: 'Ctrl',
      },
    }, 'special', 'control');
    this.buttons.ArrowLeft = new Button(this, 'ArrowLeft', 37, {
      en: {
        upperCase: '←',
        lowerCase: '←',
      },
      ru: {
        upperCase: '←',
        lowerCase: '←',
      },
    }, 'special', 'arrow');
    this.buttons.ArrowDown = new Button(this, 'ArrowDown', 40, {
      en: {
        lowerCase: '↓',
        upperCase: '↓',
      },
      ru: {
        upperCase: '↓',
        lowerCase: '↓',
      },
    }, 'special', 'arrow');
    this.buttons.ArrowRight = new Button(this, 'ArrowRight', 39, {
      en: {
        lowerCase: '→',
        upperCase: '→',
      },
      ru: {
        upperCase: '→',
        lowerCase: '→',
      },
    }, 'special', 'arrow');

    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));
    this.keyboardElement.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.keyboardElement.addEventListener('mouseup', this.onMouseUp.bind(this));
    window.addEventListener('click', () => this.textarea.focus());
  }

  setTextarea(textarea) {
    this.textarea = textarea;
  }

  pressedCapsLock() {
    this.isCaps = !this.isCaps;
    if (this.isCaps) {
      Object.values(this.buttons).forEach((btn) => {
        const button = btn;
        if (!button.elementInHtml.classList.contains('special')) {
          Object.keys(button.dict).forEach((keyLang) => {
            button.dict[keyLang].lowerCase = button.dict[keyLang].lowerCase.toUpperCase();
            button.dict[keyLang].upperCase = button.dict[keyLang].upperCase.toLowerCase();
          });
          button.update();
        }
      });
    } else {
      Object.values(this.buttons).forEach((btn) => {
        const button = btn;
        if (!button.elementInHtml.classList.contains('special')) {
          Object.keys(button.dict).forEach((keyLang) => {
            button.dict[keyLang].lowerCase = button.dict[keyLang].lowerCase.toLowerCase();
            button.dict[keyLang].upperCase = button.dict[keyLang].upperCase.toUpperCase();
          });
          button.update();
        }
      });
    }
  }

  onKeyDown(event) {
    event.preventDefault();
    if (this.buttons[event.code]) this.buttons[event.code].onMouseDown();
  }

  onKeyUp(event) {
    event.preventDefault();
    if (this.buttons[event.code]) this.buttons[event.code].onMouseUp();
  }

  onMouseDown(event) {
    if (event.target.classList.contains('keyboard')) return;
    this.buttons[event.target.id].onMouseDown();
  }

  onMouseUp(event) {
    if (event.target.classList.contains('keyboard')) return;
    this.buttons[event.target.id].onMouseUp();
  }

  updateButtons() {
    Object.values(this.buttons).forEach((button) => {
      button.update();
    });
  }

  printText(text) {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    this.textarea.value = this.textarea.value.slice(0, start) + text
                        + this.textarea.value.slice(end);
    this.textarea.selectionStart = start + 1;
    this.textarea.selectionEnd = start + 1;
  }

  pressedBackspace() {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    const { value } = this.textarea;
    if (end - start > 0) {
      this.textarea.value = value.slice(0, start)
                          + value.slice(end);
      this.textarea.selectionStart = start;
      this.textarea.selectionEnd = start;
    } else if (this.specialKeysPressed.indexOf('Control') !== -1) {
      let newStart = value.lastIndexOf(' ', start);
      newStart = (newStart === -1) ? 0 : newStart;
      this.textarea.value = value.slice(0, newStart)
                      + value.slice(end);
      this.textarea.selectionStart = newStart;
      this.textarea.selectionEnd = newStart;
    } else if (start > 0) {
      this.textarea.value = value.slice(0, start - 1)
                      + value.slice(end);
      this.textarea.selectionStart = start - 1;
      this.textarea.selectionEnd = start - 1;
    }
  }

  pressedDel() {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    const { value } = this.textarea;
    if (end - start > 0) {
      this.textarea.value = value.slice(0, start)
                          + value.slice(end);
    } else if (end < value.length) {
      this.textarea.value = value.slice(0, start)
                      + value.slice(end + 1);
    }
    this.textarea.selectionStart = start;
    this.textarea.selectionEnd = start;
  }

  changeLanguage() {
    if (this.lang === 'en') {
      this.lang = 'ru';
    } else {
      this.lang = 'en';
    }
    window.localStorage.setItem('lang', this.lang);
    this.updateButtons();
  }
}
