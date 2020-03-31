
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
    Keyboard.keyboard_element.appendChild(br);
    this.buttons.push(new Button('Tab', 9, {
      en:{
        upperCase: 'Tab',
        lowerCase: 'Tab',
      },
      ru:{
        upperCase: 'Tab',
        lowerCase: 'Tab',
      },
    }, 'special', 'backspace'));

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