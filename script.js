
class Keyboard{
  delay = 100;
  static lang = 'en';
  static case = 'lowerCase';
  static textarea;
  static keyboard_element;
  buttons = [];

  constructor(){
    //creating textarea
    let wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    document.body.appendChild(wrapper)

    Keyboard.textarea = document.createElement('textarea');
    Keyboard.textarea.id = 'textarea';
    Keyboard.textarea.setAttribute('readonly', true);
    wrapper.appendChild(Keyboard.textarea);
    Keyboard.textarea.selectionStart = 0;
  
    Keyboard.keyboard_element = document.createElement('div')
    Keyboard.keyboard_element.classList.add('keyboard')
    Keyboard.keyboard_element.id = 'keyboard'
    wrapper.appendChild(Keyboard.keyboard_element)

    
    let br = document.createElement('br');

    //add buttons
    this.buttons.push(new Button('Backquote', 192, {
      en:{
        upperCase: '~',
        lowerCase: '`',
      },
      ru:{
        upperCase: 'Ё',
        lowerCase: 'ё',
      },
    }));
    this.buttons.push(new Button('Digit1', 49, {
      en:{
        upperCase: '!',
        lowerCase: '1',
      },
      ru:{
        upperCase: '!',
        lowerCase: '1',
      },
    }));
    this.buttons.push(new Button('Digit2', 50, {
      en:{
        upperCase: '@',
        lowerCase: '2',
      },
      ru:{
        upperCase: '"',
        lowerCase: '2',
      },
    }));
    this.buttons.push(new Button('Digit3', 51, {
      en:{
        upperCase: '#',
        lowerCase: '3',
      },
      ru:{
        upperCase: '№',
        lowerCase: '3',
      },
    }));
    this.buttons.push(new Button('Digit4', 52, {
      en:{
        upperCase: '$',
        lowerCase: '4',
      },
      ru:{
        upperCase: ';',
        lowerCase: '4',
      },
    }));
    this.buttons.push(new Button('Digit5', 53, {
      en:{
        upperCase: '%',
        lowerCase: '5',
      },
      ru:{
        upperCase: '%',
        lowerCase: '5',
      },
    }));
    this.buttons.push(new Button('Digit6', 54, {
      en:{
        upperCase: '^',
        lowerCase: '6',
      },
      ru:{
        upperCase: ':',
        lowerCase: '6',
      },
    }));
    this.buttons.push(new Button('Digit7', 55, {
      en:{
        upperCase: '&',
        lowerCase: '7',
      },
      ru:{
        upperCase: '?',
        lowerCase: '7',
      },
    }));
    this.buttons.push(new Button('Digit8', 56, {
      en:{
        upperCase: '*',
        lowerCase: '8',
      },
      ru:{
        upperCase: '*',
        lowerCase: '8',
      },
    }));
    this.buttons.push(new Button('Digit9', 57, {
      en:{
        upperCase: '(',
        lowerCase: '9',
      },
      ru:{
        upperCase: '(',
        lowerCase: '9',
      },
    }));
    this.buttons.push(new Button('Digit0', 48, {
      en:{
        upperCase: ')',
        lowerCase: '0',
      },
      ru:{
        upperCase: ')',
        lowerCase: '0',
      },
    }));
    this.buttons.push(new Button('Minus', 189, {
      en:{
        upperCase: '_',
        lowerCase: '-',
      },
      ru:{
        upperCase: '_',
        lowerCase: '-',
      },
    }));
    this.buttons.push(new Button('Equal', 187, {
      en:{
        upperCase: '+',
        lowerCase: '=',
      },
      ru:{
        upperCase: '+',
        lowerCase: '=',
      },
    }));
    this.buttons.push(new Button('Backspace', 8, {
      en:{
        upperCase: 'Backspace',
        lowerCase: 'Backspace',
      },
      ru:{
        upperCase: 'Backspace',
        lowerCase: 'Backspace',
      },
    }, 'special', 'backspace'));

    Keyboard.keyboard_element.appendChild(br.cloneNode());

    this.buttons.push(new Button('Tab', 9, {
      en:{
        upperCase: 'Tab',
        lowerCase: 'Tab',
      },
      ru:{
        upperCase: 'Tab',
        lowerCase: 'Tab',
      },
    }, 'special', 'tab'));
    this.buttons.push(new Button('KeyQ', 81, {
      en:{
        upperCase: 'Q',
        lowerCase: 'q',
      },
      ru:{
        upperCase: 'Й',
        lowerCase: 'й',
      },
    }));
    this.buttons.push(new Button('KeyW', 87, {
      en:{
        upperCase: 'W',
        lowerCase: 'w',
      },
      ru:{
        upperCase: 'Ц',
        lowerCase: 'ц',
      },
    }));
    this.buttons.push(new Button('KeyE', 69, {
      en:{
        upperCase: 'E',
        lowerCase: 'e',
      },
      ru:{
        upperCase: 'У',
        lowerCase: 'у',
      },
    }));
    this.buttons.push(new Button('KeyR', 82, {
      en:{
        upperCase: 'R',
        lowerCase: 'r',
      },
      ru:{
        upperCase: 'К',
        lowerCase: 'к',
      },
    }));
    this.buttons.push(new Button('KeyT', 69, {
      en:{
        upperCase: 'T',
        lowerCase: 't',
      },
      ru:{
        upperCase: 'Е',
        lowerCase: 'е',
      },
    }));
    this.buttons.push(new Button('KeyY', 89, {
      en:{
        upperCase: 'Y',
        lowerCase: 'y',
      },
      ru:{
        upperCase: 'Н',
        lowerCase: 'н',
      },
    }));
    this.buttons.push(new Button('KeyU', 85, {
      en:{
        upperCase: 'U',
        lowerCase: 'u',
      },
      ru:{
        upperCase: 'Г',
        lowerCase: 'г',
      },
    }));
    this.buttons.push(new Button('KeyI', 73, {
      en:{
        upperCase: 'I',
        lowerCase: 'i',
      },
      ru:{
        upperCase: 'Ш',
        lowerCase: 'ш',
      },
    }));
    this.buttons.push(new Button('KeyO', 79, {
      en:{
        upperCase: 'O',
        lowerCase: 'o',
      },
      ru:{
        upperCase: 'Щ',
        lowerCase: 'щ',
      },
    }));
    this.buttons.push(new Button('KeyP', 80, {
      en:{
        upperCase: 'P',
        lowerCase: 'p',
      },
      ru:{
        upperCase: 'З',
        lowerCase: 'з',
      },
    }));
    this.buttons.push(new Button('BracketLeft', 219, {
      en:{
        upperCase: '{',
        lowerCase: '[',
      },
      ru:{
        upperCase: 'Х',
        lowerCase: 'х',
      },
    }));
    this.buttons.push(new Button('BracketRight', 221, {
      en:{
        upperCase: '}',
        lowerCase: ']',
      },
      ru:{
        upperCase: 'Ъ',
        lowerCase: 'ъ',
      },
    }));
    this.buttons.push(new Button('Backslash', 220, {
      en:{
        upperCase: '|',
        lowerCase: '\\',
      },
      ru:{
        upperCase: '/',
        lowerCase: '\\',
      },
    }));

    Keyboard.keyboard_element.appendChild(br.cloneNode());

    this.buttons.push(new Button('CapsLock', 20, {
      en:{
        upperCase: 'CapsLock',
        lowerCase: 'CapsLock',
      },
      ru:{
        upperCase: 'CapsLock',
        lowerCase: 'CapsLock',
      },
    }, 'special', 'capslock'));
    this.buttons.push(new Button('KeyA', 65, {
      en:{
        upperCase: 'A',
        lowerCase: 'a',
      },
      ru:{
        upperCase: 'Ф',
        lowerCase: 'ф',
      },
    }));
    this.buttons.push(new Button('KeyS', 83, {
      en:{
        upperCase: 'S',
        lowerCase: 's',
      },
      ru:{
        upperCase: 'Ы',
        lowerCase: 'ы',
      },
    }));
    this.buttons.push(new Button('KeyD', 68, {
      en:{
        upperCase: 'D',
        lowerCase: 'd',
      },
      ru:{
        upperCase: 'В',
        lowerCase: 'в',
      },
    }));
    this.buttons.push(new Button('KeyF', 70, {
      en:{
        upperCase: 'F',
        lowerCase: 'f',
      },
      ru:{
        upperCase: 'А',
        lowerCase: 'а',
      },
    }));
    this.buttons.push(new Button('KeyG', 71, {
      en:{
        upperCase: 'G',
        lowerCase: 'g',
      },
      ru:{
        upperCase: 'П',
        lowerCase: 'п',
      },
    }));
    this.buttons.push(new Button('KeyH', 72, {
      en:{
        upperCase: 'H',
        lowerCase: 'h',
      },
      ru:{
        upperCase: 'Р',
        lowerCase: 'р',
      },
    }));
    this.buttons.push(new Button('KeyJ', 74, {
      en:{
        upperCase: 'J',
        lowerCase: 'j',
      },
      ru:{
        upperCase: 'О',
        lowerCase: 'о',
      },
    }));
    this.buttons.push(new Button('KeyK', 75, {
      en:{
        upperCase: 'K',
        lowerCase: 'k',
      },
      ru:{
        upperCase: 'Л',
        lowerCase: 'л',
      },
    }));
    this.buttons.push(new Button('KeyL', 76, {
      en:{
        upperCase: 'L',
        lowerCase: 'l',
      },
      ru:{
        upperCase: 'Д',
        lowerCase: 'д',
      },
    }));
    this.buttons.push(new Button('Semicolon', 186, {
      en:{
        upperCase: ':',
        lowerCase: ';',
      },
      ru:{
        upperCase: 'Ж',
        lowerCase: 'ж',
      },
    }));
    this.buttons.push(new Button('Quote', 222, {
      en:{
        upperCase: '"',
        lowerCase: '\'',
      },
      ru:{
        upperCase: 'Э',
        lowerCase: 'э',
      },
    }));
    this.buttons.push(new Button('Enter', 13, {
      en:{
        upperCase: 'Enter',
        lowerCase: 'Enter',
      },
      ru:{
        upperCase: 'Enter',
        lowerCase: 'Enter',
      },
    }, 'special', 'enter'));

    Keyboard.keyboard_element.appendChild(br.cloneNode());

    this.buttons.push(new Button('ShiftLeft', 16, {
      en:{
        upperCase: 'Shift',
        lowerCase: 'Shift',
      },
      ru:{
        upperCase: 'Shift',
        lowerCase: 'Shift',
      },
    }, 'special', 'shift'));
    this.buttons.push(new Button('KeyZ', 90, {
      en:{
        upperCase: 'Z',
        lowerCase: 'z',
      },
      ru:{
        upperCase: 'Я',
        lowerCase: 'я',
      },
    }));
    this.buttons.push(new Button('KeyX', 88, {
      en:{
        upperCase: 'X',
        lowerCase: 'x',
      },
      ru:{
        upperCase: 'Ч',
        lowerCase: 'ч',
      },
    }));
    this.buttons.push(new Button('KeyC', 67, {
      en:{
        upperCase: 'C',
        lowerCase: 'c',
      },
      ru:{
        upperCase: 'С',
        lowerCase: 'с',
      },
    }));
    this.buttons.push(new Button('KeyV', 86, {
      en:{
        upperCase: 'V',
        lowerCase: 'v',
      },
      ru:{
        upperCase: 'М',
        lowerCase: 'м',
      },
    }));
    this.buttons.push(new Button('KeyB', 66, {
      en:{
        upperCase: 'B',
        lowerCase: 'b',
      },
      ru:{
        upperCase: 'И',
        lowerCase: 'и',
      },
    }));
    this.buttons.push(new Button('KeyN', 78, {
      en:{
        upperCase: 'N',
        lowerCase: 'n',
      },
      ru:{
        upperCase: 'Т',
        lowerCase: 'т',
      },
    }));
    this.buttons.push(new Button('KeyM', 77, {
      en:{
        upperCase: 'M',
        lowerCase: 'm',
      },
      ru:{
        upperCase: 'Ь',
        lowerCase: 'ь',
      },
    }));
    this.buttons.push(new Button('Comma', 188, {
      en:{
        upperCase: '<',
        lowerCase: ',',
      },
      ru:{
        upperCase: 'Б',
        lowerCase: 'б',
      },
    }));
    this.buttons.push(new Button('Period', 190, {
      en:{
        upperCase: '>',
        lowerCase: '.',
      },
      ru:{
        upperCase: 'Ю',
        lowerCase: 'ю',
      },
    }));
    this.buttons.push(new Button('Slash', 191, {
      en:{
        upperCase: '?',
        lowerCase: '/',
      },
      ru:{
        upperCase: ',',
        lowerCase: '.',
      },
    }));
    this.buttons.push(new Button('ArrowUp', 38, {
      en:{
        upperCase: '↑',
        lowerCase: '↑',
      },
      ru:{
        upperCase: '↑',
        lowerCase: '↑',
      },
    }, 'special', 'arrow'));
    this.buttons.push(new Button('ShiftRight', 16, {
      en:{
        upperCase: 'Shift',
        lowerCase: 'Shift',
      },
      ru:{
        upperCase: 'Shift',
        lowerCase: 'Shift',
      },
    }, 'special', 'shift'));

    Keyboard.keyboard_element.appendChild(br);    


    this.buttons.push(new Button('ControlLeft', 17, {
      en:{
        upperCase: 'Ctrl',
        lowerCase: 'Ctrl',
      },
      ru:{
        upperCase: 'Ctrl',
        lowerCase: 'Ctrl',
      },
    }, 'special', 'control'));
    this.buttons.push(new Button('MetaLeft', 91, {
      en:{
        upperCase: 'Win',
        lowerCase: 'Win',
      },
      ru:{
        upperCase: 'Win',
        lowerCase: 'Win',
      },
    }, 'special', 'win'));
    this.buttons.push(new Button('AltLeft', 18, {
      en:{
        upperCase: 'Alt',
        lowerCase: 'Alt',
      },
      ru:{
        upperCase: 'Alt',
        lowerCase: 'Alt',
      },
    }, 'special', 'alt'));
    this.buttons.push(new Button('Space', 32, {
      en:{
        upperCase: '_',
        lowerCase: '_',
      },
      ru:{
        upperCase: '_',
        lowerCase: '_',
      },
    }, 'special', 'space'));
    this.buttons.push(new Button('AltRight', 18, {
      en:{
        upperCase: 'Alt',
        lowerCase: 'Alt',
      },
      ru:{
        upperCase: 'Alt',
        lowerCase: 'Alt',
      },
    }, 'special', 'alt'));
    this.buttons.push(new Button('ControlRight', 17, {
      en:{
        upperCase: 'Ctrl',
        lowerCase: 'Ctrl',
      },
      ru:{
        upperCase: 'Ctrl',
        lowerCase: 'Ctrl',
      },
    }, 'special', 'control'));
    this.buttons.push(new Button('ArrowLeft', 37, {
      en:{
        upperCase: '←',
        lowerCase: '←',
      },
      ru:{
        upperCase: '←',
        lowerCase: '←',
      },
    }, 'special', 'arrow'));
    this.buttons.push(new Button('ArrowDown', 40, {
      en:{
        lowerCase: '↓',
        upperCase: '↓',
      },
      ru:{
        upperCase: '↓',
        lowerCase: '↓',
      },
    }, 'special', 'arrow'));
    this.buttons.push(new Button('ArrowDown', 39, {
      en:{
        lowerCase: '→',
        upperCase: '→',
      },
      ru:{
        upperCase: '→',
        lowerCase: '→',
      },
    }, 'special', 'arrow'));




    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));

  }

  onKeyDown(event){
    this.buttons.forEach((button) => {
      if(button.code == event.code){
        button.onMouseDown();
      }
    });
  }

  onKeyUp(event){
    this.buttons.forEach((button) => {
      if(button.code == event.code){
        button.onMouseUp();
      }
    });
  }
}

class Button{
  constructor(code, key_code, dict, ...class_button){
    this.dict = dict;
    this.key_code = key_code
    this.code = code;
    this.key = dict[Keyboard.lang]['lowerCase'];


    this.element_in_html = document.createElement('div');
    this.element_in_html.innerText = dict[Keyboard.lang][Keyboard.case];
    this.element_in_html.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.element_in_html.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.element_in_html.addEventListener('mouseleave', this.onMouseUp.bind(this));
    this.element_in_html.addEventListener('mouseenter', this.onMouseDownEnter.bind(this));

    this.element_in_html.classList = ["button"];
    if (class_button !== undefined) this.element_in_html.classList.add(...class_button)
    Keyboard.keyboard_element.appendChild(this.element_in_html);

  }

  
  onMouseUp(event){
    this.element_in_html.classList.remove('active');
  }

  onMouseDown(event){
    this.element_in_html.classList.add('active');
    this.writeInTextArea();

  }

  onMouseDownEnter(event){
    if(event.buttons == 1) {
      this.element_in_html.classList.add('active');
      this.writeInTextArea();
    }
  }

  writeInTextArea(){
    let textarea = Keyboard.textarea;
    let cursor_position = textarea.selectionStart;
    let value = textarea.value;

    if(this.dict[Keyboard.lang][Keyboard.case].length == 1){
      if(value.length > cursor_position){
        textarea.value = value.slice(0, cursor_position) + this.dict[Keyboard.lang][Keyboard.case] + value.slice(cursor_position, value.length);
        textarea.selectionStart = cursor_position + 1;
        textarea.selectionEnd = cursor_position + 1;
      }
      else{
        textarea.value += this.dict[Keyboard.lang][Keyboard.case];
      }
    }else{
      if(this.dict[Keyboard.lang][Keyboard.case] == 'Backspace'){
        textarea.value = value.slice(0, textarea.selectionStart) + value.slice(textarea.selectionEnd, value.length);
        textarea.selectionStart = cursor_position - 1;
        textarea.selectionEnd = cursor_position - 1;
      }else if(this.dict[Keyboard.lang][Keyboard.case] == 'Backspace'){

      }
    }
  }
}

let keybord = new Keyboard()