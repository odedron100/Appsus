// Publisher - Subscriber
export const eventBus = new Vue()

// Emits, but no one will be notified

eventBus.$on('event-msg', val => {
    document.querySelector('.bus-msg').style.display = 'flex';
    document.querySelector('.bus-msg').innerText = val.txt;
    setTimeout(val => {
        document.querySelector('.bus-msg').style.display = 'none';
        document.querySelector('.bus-msg').innerText = '';
    }, 1500);
})

// Debug Technique:
window.myBus = eventBus;
