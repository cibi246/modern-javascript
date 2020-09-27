const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const chatRooms = document.querySelector('.chat-rooms');
const userNameUpdatedDiv = document.querySelector('.update-msg');

newChatForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message).then(()=>{
        newChatForm.reset();
    }).catch(err=> console.log(err));
});

newNameForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const userName = newNameForm.name.value.trim();
    chatroom.updateName(userName);
    newNameForm.reset();
    userNameUpdatedDiv.innerText = "User name is Updated";
    setTimeout(()=>{
        userNameUpdatedDiv.innerText = '';
    },3000);
});

chatRooms.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log(event.target.tagName, event.target.id);
    if(event.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(event.target.id);
        chatroom.getChats(chat => chatUI.render(chat));
    }
    const allRooms = chatRooms.querySelectorAll('button');
    allRooms.forEach(room=>{
        if(room.classList.contains('current-room')){
            room.classList.remove('current-room');
        }
    });
    event.target.classList.add('current-room');
});

const chatUI = new ChatUI(chatList);
const room = localStorage.getItem('currentRoom') ? localStorage.getItem('currentRoom') : 'general';
const user = localStorage.getItem('userName') ? localStorage.getItem : 'anon';
const chatroom = new Chatroom(room, user);

chatroom.getChats((data)=>{
    console.log('before renderUI');
    chatUI.render(data);
});

