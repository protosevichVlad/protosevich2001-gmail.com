
class Keyboard{
  delay = 100;
  static lang = 'en';
  static case = 'lowerCase';
  static textarea;
  static keyboard_element;
  static special_keys_pressed = [];
  buttons = [];

  constructor(){
    //creating textarea
    let wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    document.body.appendChild(wrapper)

    Keyboard.textarea = document.createElement('textarea');
    Keyboard.textarea.id = 'textarea';
    wrapper.appendChild(Keyboard.textarea);
    Keyboard.textarea.selectionStart = 0;
  
    Keyboard.keyboard_element = document.createElement('div')
    Keyboard.keyboard_element.classList.add('keyboard')
    Keyboard.keyboard_element.id = 'keyboard'
    wrapper.appendChild(Keyboard.keyboard_element)

    
    let br = document.createElement('br');

    //add buttons
    this.buttons.push(new Button(this, 'Backquote', 192, {
      en:{
        upperCase: '~',
        lowerCase: '`',
      },
      ru:{
        upperCase: 'Ё',
        lowerCase: 'ё',
      },
    }));
    this.buttons.push(new Button(this, 'Digit1', 49, {
      en:{
        upperCase: '!',
        lowerCase: '1',
      },
      ru:{
        upperCase: '!',
        lowerCase: '1',
      },
    }));
    this.buttons.push(new Button(this, 'Digit2', 50, {
      en:{
        upperCase: '@',
        lowerCase: '2',
      },
      ru:{
        upperCase: '"',
        lowerCase: '2',
      },
    }));
    this.buttons.push(new Button(this, 'Digit3', 51, {
      en:{
        upperCase: '#',
        lowerCase: '3',
      },
      ru:{
        upperCase: '№',
        lowerCase: '3',
      },
    }));
    this.buttons.push(new Button(this, 'Digit4', 52, {
      en:{
        upperCase: '$',
        lowerCase: '4',
      },
      ru:{
        upperCase: ';',
        lowerCase: '4',
      },
    }));
    this.buttons.push(new Button(this, 'Digit5', 53, {
      en:{
        upperCase: '%',
        lowerCase: '5',
      },
      ru:{
        upperCase: '%',
        lowerCase: '5',
      },
    }));
    this.buttons.push(new Button(this, 'Digit6', 54, {
      en:{
        upperCase: '^',
        lowerCase: '6',
      },
      ru:{
        upperCase: ':',
        lowerCase: '6',
      },
    }));
    this.buttons.push(new Button(this, 'Digit7', 55, {
      en:{
        upperCase: '&',
        lowerCase: '7',
      },
      ru:{
        upperCase: '?',
        lowerCase: '7',
      },
    }));
    this.buttons.push(new Button(this, 'Digit8', 56, {
      en:{
        upperCase: '*',
        lowerCase: '8',
      },
      ru:{
        upperCase: '*',
        lowerCase: '8',
      },
    }));
    this.buttons.push(new Button(this, 'Digit9', 57, {
      en:{
        upperCase: '(',
        lowerCase: '9',
      },
      ru:{
        upperCase: '(',
        lowerCase: '9',
      },
    }));
    this.buttons.push(new Button(this, 'Digit0', 48, {
      en:{
        upperCase: ')',
        lowerCase: '0',
      },
      ru:{
        upperCase: ')',
        lowerCase: '0',
      },
    }));
    this.buttons.push(new Button(this, 'Minus', 189, {
      en:{
        upperCase: '_',
        lowerCase: '-',
      },
      ru:{
        upperCase: '_',
        lowerCase: '-',
      },
    }));
    this.buttons.push(new Button(this, 'Equal', 187, {
      en:{
        upperCase: '+',
        lowerCase: '=',
      },
      ru:{
        upperCase: '+',
        lowerCase: '=',
      },
    }));
    this.buttons.push(new Button(this, 'Backspace', 8, {
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

    this.buttons.push(new Button(this, 'Tab', 9, {
      en:{
        upperCase: 'Tab',
        lowerCase: 'Tab',
      },
      ru:{
        upperCase: 'Tab',
        lowerCase: 'Tab',
      },
    }, 'special', 'tab'));
    this.buttons.push(new Button(this, 'KeyQ', 81, {
      en:{
        upperCase: 'Q',
        lowerCase: 'q',
      },
      ru:{
        upperCase: 'Й',
        lowerCase: 'й',
      },
    }));
    this.buttons.push(new Button(this, 'KeyW', 87, {
      en:{
        upperCase: 'W',
        lowerCase: 'w',
      },
      ru:{
        upperCase: 'Ц',
        lowerCase: 'ц',
      },
    }));
    this.buttons.push(new Button(this, 'KeyE', 69, {
      en:{
        upperCase: 'E',
        lowerCase: 'e',
      },
      ru:{
        upperCase: 'У',
        lowerCase: 'у',
      },
    }));
    this.buttons.push(new Button(this, 'KeyR', 82, {
      en:{
        upperCase: 'R',
        lowerCase: 'r',
      },
      ru:{
        upperCase: 'К',
        lowerCase: 'к',
      },
    }));
    this.buttons.push(new Button(this, 'KeyT', 69, {
      en:{
        upperCase: 'T',
        lowerCase: 't',
      },
      ru:{
        upperCase: 'Е',
        lowerCase: 'е',
      },
    }));
    this.buttons.push(new Button(this, 'KeyY', 89, {
      en:{
        upperCase: 'Y',
        lowerCase: 'y',
      },
      ru:{
        upperCase: 'Н',
        lowerCase: 'н',
      },
    }));
    this.buttons.push(new Button(this, 'KeyU', 85, {
      en:{
        upperCase: 'U',
        lowerCase: 'u',
      },
      ru:{
        upperCase: 'Г',
        lowerCase: 'г',
      },
    }));
    this.buttons.push(new Button(this, 'KeyI', 73, {
      en:{
        upperCase: 'I',
        lowerCase: 'i',
      },
      ru:{
        upperCase: 'Ш',
        lowerCase: 'ш',
      },
    }));
    this.buttons.push(new Button(this, 'KeyO', 79, {
      en:{
        upperCase: 'O',
        lowerCase: 'o',
      },
      ru:{
        upperCase: 'Щ',
        lowerCase: 'щ',
      },
    }));
    this.buttons.push(new Button(this, 'KeyP', 80, {
      en:{
        upperCase: 'P',
        lowerCase: 'p',
      },
      ru:{
        upperCase: 'З',
        lowerCase: 'з',
      },
    }));
    this.buttons.push(new Button(this, 'BracketLeft', 219, {
      en:{
        upperCase: '{',
        lowerCase: '[',
      },
      ru:{
        upperCase: 'Х',
        lowerCase: 'х',
      },
    }));
    this.buttons.push(new Button(this, 'BracketRight', 221, {
      en:{
        upperCase: '}',
        lowerCase: ']',
      },
      ru:{
        upperCase: 'Ъ',
        lowerCase: 'ъ',
      },
    }));
    this.buttons.push(new Button(this, 'Backslash', 220, {
      en:{
        upperCase: '|',
        lowerCase: '\\',
      },
      ru:{
        upperCase: '/',
        lowerCase: '\\',
      },
    }));
    this.buttons.push(new Button(this, 'Delete', 46, {
      en:{
        upperCase: 'Del',
        lowerCase: 'Del',
      },
      ru:{
        upperCase: 'Del',
        lowerCase: 'Del',
      },
    }, 'special', 'delete'));

    Keyboard.keyboard_element.appendChild(br.cloneNode());

    this.buttons.push(new Button(this, 'CapsLock', 20, {
      en:{
        upperCase: 'CapsLock',
        lowerCase: 'CapsLock',
      },
      ru:{
        upperCase: 'CapsLock',
        lowerCase: 'CapsLock',
      },
    }, 'special', 'capslock'));
    this.buttons.push(new Button(this, 'KeyA', 65, {
      en:{
        upperCase: 'A',
        lowerCase: 'a',
      },
      ru:{
        upperCase: 'Ф',
        lowerCase: 'ф',
      },
    }));
    this.buttons.push(new Button(this, 'KeyS', 83, {
      en:{
        upperCase: 'S',
        lowerCase: 's',
      },
      ru:{
        upperCase: 'Ы',
        lowerCase: 'ы',
      },
    }));
    this.buttons.push(new Button(this, 'KeyD', 68, {
      en:{
        upperCase: 'D',
        lowerCase: 'd',
      },
      ru:{
        upperCase: 'В',
        lowerCase: 'в',
      },
    }));
    this.buttons.push(new Button(this, 'KeyF', 70, {
      en:{
        upperCase: 'F',
        lowerCase: 'f',
      },
      ru:{
        upperCase: 'А',
        lowerCase: 'а',
      },
    }));
    this.buttons.push(new Button(this, 'KeyG', 71, {
      en:{
        upperCase: 'G',
        lowerCase: 'g',
      },
      ru:{
        upperCase: 'П',
        lowerCase: 'п',
      },
    }));
    this.buttons.push(new Button(this, 'KeyH', 72, {
      en:{
        upperCase: 'H',
        lowerCase: 'h',
      },
      ru:{
        upperCase: 'Р',
        lowerCase: 'р',
      },
    }));
    this.buttons.push(new Button(this, 'KeyJ', 74, {
      en:{
        upperCase: 'J',
        lowerCase: 'j',
      },
      ru:{
        upperCase: 'О',
        lowerCase: 'о',
      },
    }));
    this.buttons.push(new Button(this, 'KeyK', 75, {
      en:{
        upperCase: 'K',
        lowerCase: 'k',
      },
      ru:{
        upperCase: 'Л',
        lowerCase: 'л',
      },
    }));
    this.buttons.push(new Button(this, 'KeyL', 76, {
      en:{
        upperCase: 'L',
        lowerCase: 'l',
      },
      ru:{
        upperCase: 'Д',
        lowerCase: 'д',
      },
    }));
    this.buttons.push(new Button(this, 'Semicolon', 186, {
      en:{
        upperCase: ':',
        lowerCase: ';',
      },
      ru:{
        upperCase: 'Ж',
        lowerCase: 'ж',
      },
    }));
    this.buttons.push(new Button(this, 'Quote', 222, {
      en:{
        upperCase: '"',
        lowerCase: '\'',
      },
      ru:{
        upperCase: 'Э',
        lowerCase: 'э',
      },
    }));
    this.buttons.push(new Button(this, 'Enter', 13, {
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

    this.buttons.push(new Button(this, 'ShiftLeft', 16, {
      en:{
        upperCase: 'Shift',
        lowerCase: 'Shift',
      },
      ru:{
        upperCase: 'Shift',
        lowerCase: 'Shift',
      },
    }, 'special', 'shift'));
    this.buttons.push(new Button(this, 'KeyZ', 90, {
      en:{
        upperCase: 'Z',
        lowerCase: 'z',
      },
      ru:{
        upperCase: 'Я',
        lowerCase: 'я',
      },
    }));
    this.buttons.push(new Button(this, 'KeyX', 88, {
      en:{
        upperCase: 'X',
        lowerCase: 'x',
      },
      ru:{
        upperCase: 'Ч',
        lowerCase: 'ч',
      },
    }));
    this.buttons.push(new Button(this, 'KeyC', 67, {
      en:{
        upperCase: 'C',
        lowerCase: 'c',
      },
      ru:{
        upperCase: 'С',
        lowerCase: 'с',
      },
    }));
    this.buttons.push(new Button(this, 'KeyV', 86, {
      en:{
        upperCase: 'V',
        lowerCase: 'v',
      },
      ru:{
        upperCase: 'М',
        lowerCase: 'м',
      },
    }));
    this.buttons.push(new Button(this, 'KeyB', 66, {
      en:{
        upperCase: 'B',
        lowerCase: 'b',
      },
      ru:{
        upperCase: 'И',
        lowerCase: 'и',
      },
    }));
    this.buttons.push(new Button(this, 'KeyN', 78, {
      en:{
        upperCase: 'N',
        lowerCase: 'n',
      },
      ru:{
        upperCase: 'Т',
        lowerCase: 'т',
      },
    }));
    this.buttons.push(new Button(this, 'KeyM', 77, {
      en:{
        upperCase: 'M',
        lowerCase: 'm',
      },
      ru:{
        upperCase: 'Ь',
        lowerCase: 'ь',
      },
    }));
    this.buttons.push(new Button(this, 'Comma', 188, {
      en:{
        upperCase: '<',
        lowerCase: ',',
      },
      ru:{
        upperCase: 'Б',
        lowerCase: 'б',
      },
    }));
    this.buttons.push(new Button(this, 'Period', 190, {
      en:{
        upperCase: '>',
        lowerCase: '.',
      },
      ru:{
        upperCase: 'Ю',
        lowerCase: 'ю',
      },
    }));
    this.buttons.push(new Button(this, 'Slash', 191, {
      en:{
        upperCase: '?',
        lowerCase: '/',
      },
      ru:{
        upperCase: ',',
        lowerCase: '.',
      },
    }));
    this.buttons.push(new Button(this, 'ArrowUp', 38, {
      en:{
        upperCase: '↑',
        lowerCase: '↑',
      },
      ru:{
        upperCase: '↑',
        lowerCase: '↑',
      },
    }, 'special', 'arrow'));
    this.buttons.push(new Button(this, 'ShiftRight', 16, {
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


    this.buttons.push(new Button(this, 'ControlLeft', 17, {
      en:{
        upperCase: 'Ctrl',
        lowerCase: 'Ctrl',
      },
      ru:{
        upperCase: 'Ctrl',
        lowerCase: 'Ctrl',
      },
    }, 'special', 'control'));
    this.buttons.push(new Button(this, 'MetaLeft', 91, {
      en:{
        upperCase: 'Win',
        lowerCase: 'Win',
      },
      ru:{
        upperCase: 'Win',
        lowerCase: 'Win',
      },
    }, 'special', 'win'));
    this.buttons.push(new Button(this, 'AltLeft', 18, {
      en:{
        upperCase: 'Alt',
        lowerCase: 'Alt',
      },
      ru:{
        upperCase: 'Alt',
        lowerCase: 'Alt',
      },
    }, 'special', 'alt'));
    this.buttons.push(new Button(this, 'Space', 32, {
      en:{
        upperCase: ' ',
        lowerCase: ' ',
      },
      ru:{
        upperCase: ' ',
        lowerCase: ' ',
      },
    }, 'special', 'space'));
    this.buttons.push(new Button(this, 'AltRight', 18, {
      en:{
        upperCase: 'Alt',
        lowerCase: 'Alt',
      },
      ru:{
        upperCase: 'Alt',
        lowerCase: 'Alt',
      },
    }, 'special', 'alt'));
    this.buttons.push(new Button(this, 'ControlRight', 17, {
      en:{
        upperCase: 'Ctrl',
        lowerCase: 'Ctrl',
      },
      ru:{
        upperCase: 'Ctrl',
        lowerCase: 'Ctrl',
      },
    }, 'special', 'control'));
    this.buttons.push(new Button(this, 'ArrowLeft', 37, {
      en:{
        upperCase: '←',
        lowerCase: '←',
      },
      ru:{
        upperCase: '←',
        lowerCase: '←',
      },
    }, 'special', 'arrow'));
    this.buttons.push(new Button(this, 'ArrowDown', 40, {
      en:{
        lowerCase: '↓',
        upperCase: '↓',
      },
      ru:{
        upperCase: '↓',
        lowerCase: '↓',
      },
    }, 'special', 'arrow'));
    this.buttons.push(new Button(this, 'ArrowRight', 39, {
      en:{
        lowerCase: '→',
        upperCase: '→',
      },
      ru:{
        upperCase: '→',
        lowerCase: '→',
      },
    }, 'special', 'arrow'));

    textarea.addEventListener('keydown', (event) => {
      event.preventDefault();
    })

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

  updateButtons(){
    this.buttons.forEach((button) => {
      button.update();
    });
  }
}

class Button{
  constructor(keyboard, code, key_code, dict, ...class_button){
    this.keyboard = keyboard;
    this.dict = dict;
    this.key_code = key_code;
    this.code = code;

    this.element_in_html = document.createElement('div');
    this.element_in_html.innerHTML = dict[Keyboard.lang][Keyboard.case];
    this.element_in_html.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.element_in_html.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.element_in_html.addEventListener('mouseleave', this.onMouseUp.bind(this));
    this.element_in_html.addEventListener('mouseenter', this.onMouseDownEnter.bind(this));

    this.element_in_html.classList = ["button"];
    if (class_button !== undefined) this.element_in_html.classList.add(...class_button)
    Keyboard.keyboard_element.appendChild(this.element_in_html);

  }

  update(){
    this.element_in_html.innerHTML = this.dict[Keyboard.lang][Keyboard.case];
  }
  
  onMouseUp(event){
    this.element_in_html.classList.remove('active');

    if(this.key_code == 17){
      Keyboard.special_keys_pressed = Keyboard.special_keys_pressed.filter((elem) => elem != 'Control');
    }
    else if(this.key_code == 18){
      Keyboard.special_keys_pressed = Keyboard.special_keys_pressed.filter((elem) => elem != 'Alt');
    }
    else if(this.key_code == 16){
      Keyboard.special_keys_pressed = Keyboard.special_keys_pressed.filter((elem) => elem != 'Shift')
    }
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
    let cursor_position_start = textarea.selectionStart;
    let cursor_position_end = textarea.selectionEnd;

    let value = textarea.value;

    if(this.key_code == 17){
      Keyboard.special_keys_pressed.push('Control')
    }
    else if(this.key_code == 18){
      Keyboard.special_keys_pressed.push('Alt')
    }
    else if(this.key_code == 16){
      Keyboard.special_keys_pressed.push('Shift')
    }
    else if(this.key_code == 8){ // Backspace 
      if(cursor_position_end - cursor_position_start > 0){
        textarea.value = value.slice(0, textarea.selectionStart) + value.slice(textarea.selectionEnd, value.length);
        textarea.selectionStart = cursor_position_start;
        textarea.selectionEnd = cursor_position_start;
      }
      else{
        if(cursor_position_start > 0){
          textarea.value = value.slice(0, textarea.selectionStart - 1) + value.slice(textarea.selectionEnd, value.length);
          textarea.selectionStart = cursor_position_start - 1;
          textarea.selectionEnd = cursor_position_start - 1;
        }
      }
    }
    else if(this.key_code == 46){ //Delete
      if(cursor_position_end - cursor_position_start > 0){
        textarea.value = value.slice(0, textarea.selectionStart) + value.slice(textarea.selectionEnd, value.length);
        textarea.selectionStart = cursor_position_start;
        textarea.selectionEnd = cursor_position_start;
      }
      else{
        if(cursor_position_end < value.length){
          textarea.value = value.slice(0, textarea.selectionStart) + value.slice(textarea.selectionEnd + 1, value.length);
          textarea.selectionStart = cursor_position_start;
          textarea.selectionEnd = cursor_position_start;
        }
      }
    }else if(this.key_code == 46){ //Delete
      if(cursor_position_end - cursor_position_start > 0){
        textarea.value = value.slice(0, textarea.selectionStart) + value.slice(textarea.selectionEnd, value.length);
        textarea.selectionStart = cursor_position_start;
        textarea.selectionEnd = cursor_position_start;
      }
      else{
        if(cursor_position_end < value.length){
          textarea.value = value.slice(0, textarea.selectionStart) + value.slice(textarea.selectionEnd + 1, value.length);
          textarea.selectionStart = cursor_position_start;
          textarea.selectionEnd = cursor_position_start;
        }
      }
    }
    else{
      textarea.value = value.slice(0, cursor_position_start) + this.dict[Keyboard.lang][Keyboard.case] + value.slice(cursor_position_end, value.length);
      textarea.selectionStart = cursor_position_start + 1;
      textarea.selectionEnd = cursor_position_start + 1;
    }
    
    if(Keyboard.special_keys_pressed.indexOf('Control') != -1 && Keyboard.special_keys_pressed.indexOf('Alt') != -1){
      if(Keyboard.lang == 'en') Keyboard.lang = 'ru';
      else Keyboard.lang = 'en';
      this.keyboard.updateButtons();      
    }
  }
}

let keyboard = new Keyboard()