export default class Button {
  constructor(keyboard, code, keyCode, dict, ...classButton) {
    this.keyboard = keyboard;
    this.dict = dict;
    this.keyCode = keyCode;
    this.code = code;

    this.elementInHtml = document.createElement('div');
    this.elementInHtml.innerHTML = dict[this.keyboard.lang][this.keyboard.case];
    this.elementInHtml.classList = ['button'];
    this.elementInHtml.id = code;
    if (classButton !== undefined) this.elementInHtml.classList.add(...classButton);
    this.keyboard.keyboardElement.appendChild(this.elementInHtml);
  }

  update() {
    this.elementInHtml.innerHTML = this.dict[this.keyboard.lang][this.keyboard.case];
  }

  onMouseUp() {
    if (!(this.keyboard.isCaps && this.keyCode === 20)) {
      this.elementInHtml.classList.remove('active');
    }

    if (this.keyCode === 17) { // Control
      this.keyboard.specialKeysPressed = this.keyboard.specialKeysPressed.filter(
        (elem) => elem !== 'Control',
      );
    } else if (this.keyCode === 18) { // Alt
      this.keyboard.specialKeysPressed = this.keyboard.specialKeysPressed.filter(
        (elem) => elem !== 'Alt',
      );
    } else if (this.keyCode === 16) { // Shift
      this.keyboard.specialKeysPressed = this.keyboard.specialKeysPressed.filter(
        (elem) => elem !== 'Shift',
      );
      this.keyboard.case = 'lowerCase';
      this.keyboard.updateButtons();
    }
  }

  onMouseDown() {
    this.elementInHtml.classList.add('active');

    const { textarea } = this.keyboard;
    const cursorPositionStart = textarea.selectionStart;
    const cursorPositionEnd = textarea.selectionEnd;
    const { value } = textarea;


    switch (this.keyCode) {
      case 17: // Control
        this.keyboard.specialKeysPressed.push('Control');
        if (this.keyboard.specialKeysPressed.indexOf('Alt') !== -1) {
          this.keyboard.changeLanguage();
        }
        break;

      case 18: // Alt
        this.keyboard.specialKeysPressed.push('Alt');
        if (this.keyboard.specialKeysPressed.indexOf('Control') !== -1) {
          this.keyboard.changeLanguage();
        }
        break;

      case 16: // Shift
        this.keyboard.specialKeysPressed.push('Shift');
        this.keyboard.case = 'upperCase';
        this.keyboard.updateButtons();
        break;

      case 20: // CapsLock
        this.keyboard.pressedCapsLock();
        break;

      case 9: // Tab
        this.keyboard.printText('\t');
        break;

      case 8: // Backspace
        this.keyboard.pressedBackspace();
        break;

      case 91: // Win
        break;

      case 13: // Enter
        this.keyboard.printText('\n');
        break;

      case 46: // Delete
        this.keyboard.pressedDel();
        break;

      case 37: // ArrowLeft
        if (cursorPositionStart > 0) {
          let temp = 1;
          if (cursorPositionEnd - cursorPositionStart) temp = 0;
          textarea.selectionStart = cursorPositionStart - temp;
          textarea.selectionEnd = cursorPositionStart - temp;
        }
        break;

      case 39: // ArrowRigth
        if (cursorPositionEnd < value.length) {
          let temp = 1;
          if (cursorPositionEnd - cursorPositionStart) temp = 0;
          textarea.selectionStart = cursorPositionEnd + temp;
          textarea.selectionEnd = cursorPositionEnd + temp;
        }
        break;

      default:
        this.keyboard.printText(this.dict[this.keyboard.lang][this.keyboard.case]);
        break;
    }
  }
}
