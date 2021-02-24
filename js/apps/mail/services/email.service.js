import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'

const EMAILS_KEY = "emails";
const DRAFTS_KEY = "drafts"

export const emailService = {
    query,
    getEmptyMail,
    addEmail,

}

function query() {
    let emails = utilService.loadFromStorage(EMAILS_KEY)
    if (!emails || !emails.length) {
        emails = [getEmptyMail('Rom', 'First Mail', 'rom@gmail.com', 'כפייםםםם', true, false, Date.now()), getEmptyMail('Oded', 'First Mail', 'oded@gmail.com', 'כפייםםםם', false, false, Date.now()), getEmptyMail('Noam', 'First Mail', 'noam@gmail.com', 'כפייםםםם', true, false, Date.now())];
        utilService.saveToStorage(EMAILS_KEY, emails)
    }
    return storageService.query(EMAILS_KEY);
}

function addEmail(newEmail) {
    let emails = utilService.loadFromStorage(EMAILS_KEY);
    let email = getEmptyMail('Rom', newEmail.subject, newEmail.emailAddress, newEmail.body, false, false, newEmail.sentAt)
    emails.push(email);
    utilService.saveToStorage(EMAILS_KEY, emails)
}


function getEmptyMail(name, subject, emailAddress, body, isRead = false, isPreview = false, sentAt) {
    const email = {
        id: utilService.makeId(),
        name,
        emailAddress,
        subject,
        body,
        isRead,
        isPreview,
        sentAt
    }
    return email;
}

