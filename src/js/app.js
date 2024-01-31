import Collapse from './widgets/collapse';
import Chat from './widgets/chat';

const container = document.querySelector('.container');

const collapse = new Collapse(container);
collapse.bindToDom();

const chat = new Chat(container);
chat.bindToDom();
