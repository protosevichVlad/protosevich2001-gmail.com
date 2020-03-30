
class Keyboard{
  delay = 100;
  static lang = 'en';
  static case = 'lowerCase';
  static textarea;
  buttons = [];

  constructor(){
    //creating textarea
    Keyboard.textarea = document.createElement('textarea');
    Keyboard.textarea.id = 'textarea';
    Keyboard.textarea.setAttribute('readonly', true);
    document.body.appendChild(Keyboard.textarea);
    Keyboard.textarea.selectionStart = 0;


    //add buttons
    this.buttons.push(new Button('Digit1', 49, {
      'en':{
        'upperCase': '!',
        'lowerCase': '1',
      },
      'ru':{
        'upperCase': '!',
        'lowerCase': '1',
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
  constructor(code, key_code, dict){
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
    document.body.appendChild(this.element_in_html);

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

    console.log('in', cursor_position, value.length);
    

    if(value.length > cursor_position){
      textarea.value = value.slice(0, cursor_position) + this.dict[Keyboard.lang][Keyboard.case] + value.slice(cursor_position, value.length);
      textarea.selectionStart = cursor_position + 1;
      textarea.selectionEnd = cursor_position + 1;
    }
    else{
      textarea.value += this.dict[Keyboard.lang][Keyboard.case];
    }

    console.log('out', textarea.selectionStart, textarea.value.length);

    
  }
}

let keybord = new Keyboard()