import Collapse from './widgets/collapse';
import Chat from './widgets/chat';
import LikeBtn from './widgets/likeBtn';

const container = document.querySelector('.container');

const collapse = new Collapse(container);
collapse.bindToDom();

const chat = new Chat(container);
chat.bindToDom();

const likeBtn = new LikeBtn(container);
likeBtn.bindToDom();
