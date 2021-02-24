import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'

const EMAILS_KEY = "emails";

export const emailService = {
    query,
    getEmptyMail,

}

function query() {
    let emails = utilService.loadFromStorage(EMAILS_KEY)
    if (!emails || !emails.length) {
        emails = [getEmptyMail('Rom', 'First Mail', 'כפייםםםם', false, Date.now())];
        utilService.saveToStorage(EMAILS_KEY, emails)
    }
    return storageService.query(EMAILS_KEY);
}

function getEmptyMail(name, subject, body, isRead = false, sentAt) {
    const email = {
        id: utilService.makeId(),
        name,
        subject,
        body,
        isRead,
        sentAt
    }
    return email;
}

