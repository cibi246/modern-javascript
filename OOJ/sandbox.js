function User(username, email){
    this.username = username;
    this.email = email;
}

User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
}

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
}

function Admin(username, email, title){
    User.call(this, username, email);
    this.title = title;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(){

};

const userOne = new User('Mani', 'manivannan.baski@gmail.com');
const userTwo = new User('Pravee', 'praveena1228c@gmail.com');
const userThree = new User('ManiCibi', 'mani.cibi@gmail.com','Associate consultant');
console.log(userOne, userTwo, userThree);
userOne.login();
userTwo.logout();