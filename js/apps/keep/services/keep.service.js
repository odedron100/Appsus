import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';
var gNotes = [
  {
    type: "text",
    id: '1',
    title: "oded",
    info: {
      url: "http://some-img/me",
      text: 'shalom ma kore',
    },
    style: {
      backgroundColor: null,
    }
  },
  {
    type: "text",
    id: '2',
    title: "noam",
    info: {
      url: "http://some-img/me",
      text: 'shalom ma kore',
    },
    style: {
      backgroundColor: null,
    }
  },
  {
    type: "text",
    id: '3',
    title: "Rom",
    info: {
      url: "http://some-img/me",
      text: 'shalom ma kore',
    },
    style: {
      backgroundColor: null,
    }
  },
];

const NOTES_KEY = 'notes';

export const keepService = {
  query,
  getById,
  createNewNote,
  removeNote,
  editNote,
  pinNoteInList
}

function query() {
  let notes = utilService.loadFromStorage(NOTES_KEY)
  if (!notes || !notes.length) {
    notes = gNotes;

    utilService.saveToStorage(NOTES_KEY, notes)
  }
  return storageService.query(NOTES_KEY);
}

function getById(id) {
  return storageService.get(NOTES_KEY, id)
}

function createNewNote(note) {
  console.log('note', note);
  let notes = utilService.loadFromStorage(NOTES_KEY);
  let newNote = getEmptyNote(note)
  notes.push(newNote);
  utilService.saveToStorage(NOTES_KEY, notes)
}

function getEmptyNote(note) {
  console.log('note', note);
  return {
    id: utilService.makeId(),
    title: note.title,
    type: note.type,
    info: {
      imgURL: note.imgURL,
      text: note.text,
      todos: createTodos(note.todos),
      audio: note.audio,
      videoSRC: note.videoSRC,
      pin: false
    },
    style: {
      backgroundColor: note.color,
    }
  }
}

function createTodos(todos) {
  console.log('todos', todos);
  let todosArr = todos.split(',')
  let newTodos = [];
  todosArr.forEach(todo => {
    newTodos.push(
      { text: todo, isDone: false }
    )
  });
  return newTodos;
}

function editNote(note) {
  return storageService.put(NOTES_KEY, note)
}

function removeNote(id) {
  let notes = utilService.loadFromStorage(NOTES_KEY);
  console.log('notes', notes);
  const nooteToRemove = notes.findIndex(note => {
    return id === note.id
  })
  notes.splice(nooteToRemove, 1);
  utilService.saveToStorage(NOTES_KEY, notes)
}

function pinNoteInList(noteId) {
  let notes = utilService.loadFromStorage(NOTES_KEY);
  let notesToOverride = [];
  notes.forEach(note => {
    if (note.id === noteId) {
      note.pin = !note.pin;
    }

    notesToOverride.push(note);
  });
  utilService.saveToStorage(NOTES_KEY, notesToOverride)
}
