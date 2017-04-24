import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('http://24.234.203.77:3001')

export function addUser (user){
    socket.emet('addUser', user)
}
    socket.on('newUser', function(user){
        store.dispatch({
            type:'ADD_USER',
            user
        })
    })

export function addMessage(message) {
    socket.emit('addMessage', message)
}

socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})