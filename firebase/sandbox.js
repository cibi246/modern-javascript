const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

const addReceipe = (receipe, id) =>{
    console.log('inside add receipe');
    let html = `
        <li data-id="${id}">
            <div>${receipe.title}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `;
    list.innerHTML+= html;
}

//remove receipes from DOM
const deleteReceipe = (id) =>{
    const receipes = document.querySelectorAll('li');
    receipes.forEach(receipe =>{
        if(receipe.getAttribute('data-id') === id){
            receipe.remove();
        }
    });
}

//Real time listener 
const unsub = db.collection('receipes').onSnapshot(snapshot =>{
    console.log(snapshot);
    snapshot.docChanges().forEach(change =>{
        const doc = change.doc;
        if(change.type === 'added'){
            addReceipe(doc.data(), doc.id);
        }else if(change.type === 'removed'){
            deleteReceipe(doc.id);
        }
    });
});

//get documents
// db.collection('receipes').get().then((snapshot)=>{
//     console.log(snapshot.docs);
//     snapshot.docs.forEach(doc=>{
//         addReceipe(doc.data(), doc.id);
//     });
// }).catch((err)=>{
//     console.log(err);
// });

//add documents
form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const now = new Date();
    const receipe = {
        title: form.receipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    }
    db.collection('receipes').add(receipe).then(()=>{
        console.log('receipe added');
    }).catch(err=>{
        console.log(err);
    });

    form.reset();
    // addReceipe(receipe);
});

//deleting data
list.addEventListener('click', e=>{
    if(e.target.tagName === 'BUTTON'){
        console.log('button');
        const deleteDcoumentId = e.target.parentElement.getAttribute('data-id');
        db.collection('receipes').doc(deleteDcoumentId).delete().then(()=>{
            console.log('receipe deleted');
        });
    }
});

button.addEventListener('click',()=>{
    unsub();
});

