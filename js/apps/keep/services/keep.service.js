import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';
var gNotes = [
  {
    type: "text",
    id: '1',
    info: {
      url: "http://some-img/me",
      title: " oded",
      text: 'shalom ma kore',
    },
    style: {
      backgroundColor: null,
    }
  },
  {
    type: "text",
    id: '2',
    info: {
      url: "http://some-img/me",
      title: "noam",
      text: 'shalom ma kore',
    },
    style: {
      backgroundColor: null,
    }
  },
  {
    type: "text",
    id: '3',
    info: {
      url: "http://some-img/me",
      title: "Rom",
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
  editNote
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
      todos: note.todos,
      audio: note.audio,
      videoSRC: note.videoSRC,
    },
    style: {
      backgroundColor: note.color,
    }
  }
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
