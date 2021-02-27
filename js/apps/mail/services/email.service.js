import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'

const EMAILS_KEY = "emails";
const DRAFTS_KEY = "drafts"

export const emailService = {
    query,
    getEmptyMail,
    addEmail,
    draftsQuery,
    addDraft,
    removeEmail,

}

function query() {
    let emails = utilService.loadFromStorage(EMAILS_KEY)
    if (!emails || !emails.length) {
        emails = gEmails;
        utilService.saveToStorage(EMAILS_KEY, emails)
    }
    return storageService.query(EMAILS_KEY);
}

function draftsQuery() {
    let drafts = utilService.loadFromStorage(DRAFTS_KEY)
    if (!drafts || !drafts.length) {
        drafts = [];
        utilService.saveToStorage(DRAFTS_KEY, drafts)
    }
    return storageService.query(DRAFTS_KEY);
}

function addEmail(newEmail) {
    let emails = utilService.loadFromStorage(EMAILS_KEY);
    let email = getEmptyMail(newEmail.name, newEmail.subject, newEmail.emailAddress, newEmail.body, false, false, newEmail.sentAt, true, false)
    emails.push(email);
    utilService.saveToStorage(EMAILS_KEY, emails)
}

function addDraft(newDraft) {
    let drafts = utilService.loadFromStorage(DRAFTS_KEY);
    let draft = getEmptyMail(newDraft.name, newDraft.subject, newDraft.emailAddress, newDraft.body, true, false, newDraft.sentAt)
    drafts.push(draft);
    utilService.saveToStorage(DRAFTS_KEY, drafts)
}


function removeEmail(emailId) {
    let emails = utilService.loadFromStorage(EMAILS_KEY)
    const emailIdx = emails.findIndex(email => email.id === emailId);
    emails.splice(emailIdx, 1);
    utilService.saveToStorage(EMAILS_KEY, emails)
}


function getEmptyMail(name, subject, emailAddress, body, isRead = false, isPreview = false, sentAt, isSent = false, isStarred = false) {
    const email = {
        id: utilService.makeId(),
        name,
        emailAddress,
        subject,
        body,
        isRead,
        isPreview,
        sentAt,
        isSent,
        isStarred,
    }
    return email;
}


var gEmails = [
    {
        "id": "tidW3",
        "name": "rom",
        "emailAddress": "DAvia@gmail.com",
        "subject": "dasdasd",
        "body": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content . Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n",
        "isRead": true,
        "isPreview": false,
        "sentAt": 1614331602972,
        "isSent": true,
        "isStarred": true
    },
    {
        "id": "FBRMs",
        "name": "moshe",
        "emailAddress": "Oded@gmail.com",
        "subject": "whts up",
        "body": "vlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
        "isRead": false,
        "isPreview": false,
        "sentAt": 1614334969580,
        "isSent": true,
        "isStarred": false
    },
    {
        "id": "XdBBu",
        "name": "david",
        "emailAddress": "rom@gmail.com",
        "subject": "come the house",
        "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
        "isRead": true,
        "isPreview": false,
        "sentAt": 1614335016616,
        "isSent": true,
        "isStarred": false
    },
    {
        "id": "5zz6i",
        "name": "rom",
        "emailAddress": "Oded@gmail.com",
        "subject": "Neque porro quisquam",
        "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
        "isRead": true,
        "isPreview": false,
        "sentAt": 1614335049051,
        "isSent": true,
        "isStarred": true
    },
    {
        "id": "Zh93n",
        "name": "daniel",
        "emailAddress": "noam@gmail.com",
        "subject": "gever !",
        "body": "ok whats aspp",
        "isRead": false,
        "isPreview": false,
        "sentAt": 1614447812282,
        "isSent": true,
        "isStarred": false
    },
    {
        "id": "gUxKk",
        "name": "yona",
        "emailAddress": "rom@gmail.com",
        "subject": "dasdas",
        "body": "dsadadsad",
        "isRead": false,
        "isPreview": false,
        "sentAt": 1614447962748,
        "isSent": true,
        "isStarred": false
    },
    {
        "id": "gxhyv",
        "name": "daniel",
        "emailAddress": "rom@gmail.com",
        "subject": "helo",
        "body": "dasdasdasdas",
        "isRead": false,
        "isPreview": false,
        "sentAt": 1614447952514,
        "isSent": true,
        "isStarred": false
    },
    {
        "id": "1qz3X",
        "name": "eva",
        "emailAddress": "Oded@gmail.com",
        "subject": "standard",
        "body": "standardstandardstandardstandardstandard",
        "isRead": false,
        "isPreview": false,
        "sentAt": 1614447943764,
        "isSent": true,
        "isStarred": false
    },
    {
        "id": "3X9x0",
        "name": "rom",
        "emailAddress": "Oded@gmail.com",
        "subject": "standard",
        "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker inclu",
        "isRead": false,
        "isPreview": false,
        "sentAt": 1614447928879,
        "isSent": true,
        "isStarred": false
    },
    {
        "id": "EApLH",
        "name": "dorin",
        "emailAddress": "Oded@gmail.com",
        "subject": "dasdasd",
        "body": "dasdasdasdasda",
        "isRead": true,
        "isPreview": false,
        "sentAt": 1614447895266,
        "isSent": true,
        "isStarred": false
    },
    {
        "id": "fDW05",
        "name": "moshe",
        "emailAddress": "Oded@gmail.com",
        "subject": "dasdasd",
        "body": "sdasdadasdsa",
        "isRead": false,
        "isPreview": false,
        "sentAt": 1614447886035,
        "isSent": true,
        "isStarred": false
    },
    {
        "id": "JHTEb",
        "name": "eva",
        "emailAddress": "DAvia@gmail.com",
        "subject": "sda",
        "body": "ddddsaaas",
        "isRead": false,
        "isPreview": false,
        "sentAt": 1614447871292,
        "isSent": true,
        "isStarred": false
    },
    {
        "id": "G4iSG",
        "name": "david",
        "emailAddress": "rom@gmail.com",
        "subject": "saslo!",
        "body": "dladskl;asdk",
        "isRead": false,
        "isPreview": false,
        "sentAt": 1614447858858,
        "isSent": true,
        "isStarred": false
    },
    {
        "id": "cn5dE",
        "name": "moshe",
        "emailAddress": "rom@gmail.com",
        "subject": "geel",
        "body": "dasdasdasd",
        "isRead": false,
        "isPreview": false,
        "sentAt": 1614447837701,
        "isSent": true,
        "isStarred": false
    }

]

