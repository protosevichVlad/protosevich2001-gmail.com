export default class Button {
  constructor(keyboard, code, keyCode, dict, ...classButton) {
    this.keyboard = keyboard;
    this.dict = dict;
    this.keyCode = keyCode;
    this.code = code;

    this.elementInHtml = document.createElement('div');
    this.elementInHtml.innerHTML = dict[this.keyboard.lang][this.keyboard.case];
    this.elementInHtml.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.elementInHtml.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.elementInHtml.addEventListener('mouseleave', this.onMouseUp.bind(this));
    this.elementInHtml.addEventListener('mouseenter', this.onMouseDownEnter.bind(this));

    this.elementInHtml.classList = ['button'];
    if (classButton !== undefined) this.elementInHtml.classList.add(...classButton);
    this.keyboard.keyboardElement.appendChild(this.elementInHtml);
  }

  update() {
    this.elementInHtml.innerHTML = this.dict[this.keyboard.lang][this.keyboard.case];
  }

  onMouseUp() {
    if (!(this.keyboard.isCaps && this.keyCode === 20)){
      this.elementInHtml.classList.remove('active');
    }

    if (this.keyCode === 17) {  //Control
      this.keyboard.specialKeysPressed = this.keyboard.specialKeysPressed.filter(
        (elem) => elem !== 'Control',
      );
    } else if (this.keyCode === 18) { //Alt
      this.keyboard.specialKeysPressed = this.keyboard.specialKeysPressed.filter(
        (elem) => elem !== 'Alt',
      );
    } else if (this.keyCode === 16) { //Shift
      this.keyboard.specialKeysPressed = this.keyboard.specialKeysPressed.filter(
        (elem) => elem !== 'Shift',
      );
      this.keyboard.case = 'lowerCase';
      this.keyboard.updateButtons();
    } 
  }

  onMouseDown() {
    this.elementInHtml.classList.add('active');
    this.writeInTextArea();
  }

  onMouseDownEnter(event) {
    if (event.buttons === 1) {
      this.elementInHtml.classList.add('active');
      this.writeInTextArea();
    }
  }

  writeInTextArea() {
    const { textarea } = this.keyboard;
    const cursorPositionStart = textarea.selectionStart;
    const cursorPositionEnd = textarea.selectionEnd;

    const { value } = textarea;


    switch (this.keyCode){
      case 17: // Control
        this.keyboard.specialKeysPressed.push('Control');
        if (this.keyboard.specialKeysPressed.indexOf('Alt') !== -1) {
          if (this.keyboard.lang === 'en') {
            this.keyboard.lang = 'ru';
          } else {
            this.keyboard.lang = 'en';
          }
          this.keyboard.updateButtons();
        }
        break;

      case 18: // Alt
        this.keyboard.specialKeysPressed.push('Alt');
        if (this.keyboard.specialKeysPressed.indexOf('Control') !== -1) {
          if (this.keyboard.lang === 'en') {
            this.keyboard.lang = 'ru';
          } else {
            this.keyboard.lang = 'en';
          }
          this.keyboard.updateButtons();
        }
        break;

      case 16: // Shift
        this.keyboard.specialKeysPressed.push('Shift');
        this.keyboard.case = 'upperCase';
        this.keyboard.updateButtons();
        break;

      case 20: // CapsLock
        this.keyboard.pressCapsLock();
        break;

      case 9: // Tab
        textarea.value = value.slice(0, textarea.selectionStart) + '\t' +
                       + value.slice(textarea.selectionEnd, value.length);
        textarea.selectionStart = cursorPositionStart + '\t'.length;
        textarea.selectionEnd = cursorPositionStart + '\t'.length;
        break;

      case 8: // Backspace
        if (cursorPositionEnd - cursorPositionStart > 0) {
          textarea.value = value.slice(0, textarea.selectionStart)
                            + value.slice(textarea.selectionEnd, value.length);
          textarea.selectionStart = cursorPositionStart;
          textarea.selectionEnd = cursorPositionStart;
        } else if (this.keyboard.specialKeysPressed.indexOf('Control') !== -1) {
          let newCursorPositionStart = value.lastIndexOf(' ', cursorPositionStart);
          newCursorPositionStart = (newCursorPositionStart == -1) ? 0: newCursorPositionStart;
          textarea.value = value.slice(0, newCursorPositionStart)
                          + value.slice(textarea.selectionEnd, value.length);
          textarea.selectionStart = newCursorPositionStart;
          textarea.selectionEnd = newCursorPositionStart;
        }else if (cursorPositionStart > 0) {
          textarea.value = value.slice(0, textarea.selectionStart - 1)
                          + value.slice(textarea.selectionEnd, value.length);
          textarea.selectionStart = cursorPositionStart - 1;
          textarea.selectionEnd = cursorPositionStart - 1;
        } 
        break;
      
      case 91: // Win
        break;

      case 46: // Delete
        if (cursorPositionEnd - cursorPositionStart > 0) {
          textarea.value = value.slice(0, textarea.selectionStart)
                          + value.slice(textarea.selectionEnd, value.length);
          textarea.selectionStart = cursorPositionStart;
          textarea.selectionEnd = cursorPositionStart;
        } else if (cursorPositionEnd < value.length) {
          textarea.value = value.slice(0, textarea.selectionStart)
                          + value.slice(textarea.selectionEnd + 1, value.length);
          textarea.selectionStart = cursorPositionStart;
          textarea.selectionEnd = cursorPositionStart;
        }
        break;

      case 37: // ArrowLeft
        if (cursorPositionStart > 0) {
          textarea.selectionStart = cursorPositionStart - ((cursorPositionEnd - cursorPositionStart) ? 0: 1);
          textarea.selectionEnd = cursorPositionStart - ((cursorPositionEnd - cursorPositionStart) ? 0: 1);
        }
        break;

      case 39: // ArrowRigth
        if (cursorPositionEnd < value.length) {
          textarea.selectionStart = cursorPositionEnd + ((cursorPositionEnd - cursorPositionStart) ? 0: 1);
          textarea.selectionEnd = cursorPositionEnd + ((cursorPositionEnd - cursorPositionStart) ? 0: 1);
        }
        break;

      default:
        textarea.value = value.slice(0, cursorPositionStart)
                        + this.dict[this.keyboard.lang][this.keyboard.case]
                        + value.slice(cursorPositionEnd, value.length);
        textarea.selectionStart = cursorPositionStart + 1;
        textarea.selectionEnd = cursorPositionStart + 1;
        break;
    }
  }
}
