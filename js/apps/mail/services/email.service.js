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
        emails = [];
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
    let email = getEmptyMail('Rom', newEmail.subject, newEmail.emailAddress, newEmail.body, false, false, newEmail.sentAt, true, false)
    emails.push(email);
    utilService.saveToStorage(EMAILS_KEY, emails)
}

function addDraft(newDraft) {
    let drafts = utilService.loadFromStorage(DRAFTS_KEY);
    let draft = getEmptyMail('Rom', newDraft.subject, newDraft.emailAddress, newDraft.body, true, false, newDraft.sentAt)
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

