const users = [];

const addUser = ({ id, name, room }) => {
    // Tahmid Khandokar = tahmidkhandokar

    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // check user is already here, if yes then no need to create user
    const existingUser = users.find(user => user.name === name && user.room === room);
    if(existingUser){
        return { err: "User is already in"}
    }

    // create user
    const user = { id, name, room };
    users.push(user);

    return { user }
}

const removeUser = ({ id }) => {
    const index = users.findIndex(user => user.id === id)
    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}

const getUser = ({ id }) => users.find(user => user.id === id)

const getUsersInRoom = ({ room }) => users.filter(user => user.room === room)


module.exports = { addUser, removeUser, getUser, getUsersInRoom };