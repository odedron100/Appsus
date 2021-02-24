import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';
var gNotes = [
  {
    type: "NoteImg",
    info: {
      url: "http://some-img/me",
      title: " oded",
      text: 'shalom ma kore',
    },
    style: {
      backgroundColor: "#00d"
    }
  },
  {
    type: "NoteImg",
    info: {
      url: "http://some-img/me",
      title: "noam",
      text: 'shalom ma kore',
    },
    style: {
      backgroundColor: "#00d"
    }
  },
  {
    type: "NoteImg",
    info: {
      url: "http://some-img/me",
      title: "Rom",
      text: 'shalom ma kore',
    },
    style: {
      backgroundColor: "#00d"
    }
  },
  {
    info: {
      url: "http://some-img/me",
      title: "Shahar",
      text: 'shalom ma kore',
    },
    style: {
      backgroundColor: "#00d"
    }
  },
];

const NOTES_KEY = 'notes';

export const keepService = {
  query,
  getById,
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

// function getNextBookId(bookId) {
//   let books = utilService.loadFromStorage(BOOKS_KEY);
//   var foundBook = books.find(book => bookId === book.id)
//   const bookIdx = books.findIndex(book => foundBook.id === book.id)
//   const nextBookId = books[bookIdx + 1].id
//   return nextBookId;
// }

// function getPrevBookId(bookId) {
//   let books = utilService.loadFromStorage(BOOKS_KEY);
//   var foundBook = books.find(book => bookId === book.id)
//   const bookIdx = books.findIndex(book => foundBook.id === book.id)
//   const prevBookId = books[bookIdx - 1].id
//   return prevBookId;
// }