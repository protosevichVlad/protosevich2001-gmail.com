import Keyboard from './src/keyboard.js';


const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

const textarea = document.createElement('textarea');
textarea.id = 'textarea';
wrapper.appendChild(textarea);
textarea.focus();
textarea.selectionStart = 0;

const keyboard = new Keyboard(wrapper);
keyboard.setTextarea(textarea);
keyboard.init();
