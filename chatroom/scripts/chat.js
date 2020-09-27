//adding new chat documents
//setting up a real-time listener to get new chats
//updating the username
//updating the room

class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chatrooms');
        this.unsub;
    }

    async addChat(message){
        const now = new Date();
        const chat = {
            message, 
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        const response = await this.chats.add(chat);
        return response;
    }

    getChats(callback){
        const unsub = this.chats
        .where('room','==',this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change=>{
                if(change.type === 'added'){
                    callback(change.doc.data());
                }
            })
        });
    }

    updateName(username){
        this.username = username;
        localStorage.setItem('username', username);
    }
    updateRoom(room){
        this.room = room;
        localStorage.setItem('currentRoom', room);
        console.log('room updated');
        if(this.unsub){
            this.unsub();
        }

    }
}



// setTimeout(()=>{
//     chatroom.updateRoom('gaming');
//     chatroom.updateName('Yoshi');
//     chatroom.getChats((data) =>{
//         console.log(data);
//     });
//     chatroom.addChat('hello');
// },3000);


