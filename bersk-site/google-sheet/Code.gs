/**
 * Bersk leads -> Google Sheet
 *
 * Setup (5 minutes):
 *  1. Create a new Google Sheet. Name it "Bersk Leads".
 *  2. Extensions > Apps Script. Delete everything there and paste this whole file. Save.
 *  3. Deploy > New deployment > type "Web app".
 *       Execute as: Me
 *       Who has access: Anyone
 *     Click Deploy, approve the permissions, and copy the "Web app URL".
 *  4. Paste that URL into SHEET_ENDPOINT in src/lib/leads.js (or send it to Claude).
 *
 * Each lead becomes one row on a tab called "Leads". Edit the Status column by hand.
 */

const SHEET_NAME = 'Leads'

// column header -> key sent by the website
const COLUMNS = [
  ['Received', null],
  ['Status', null],
  ['Name', 'name'],
  ['WhatsApp', 'whatsapp'],
  ['Phone', 'phone'],
  ['Email', 'email'],
  ['Company', 'company'],
  ['Wants built', 'wants_built'],
  ['Budget band', 'budget'],
  ['Wants to start', 'start'],
  ['Message', 'message'],
  ['Source', 'source'],
  ['Headline variant', 'variant'],
  ['utm_source', 'utm_source'],
  ['utm_medium', 'utm_medium'],
  ['utm_campaign', 'utm_campaign'],
  ['utm_content', 'utm_content'],
  ['utm_term', 'utm_term'],
  ['fbclid', 'fbclid'],
]

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME)
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS.map((c) => c[0]))
    sheet.setFrozenRows(1)
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight('bold')
    // dropdown for the Status column
    const rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(['New', 'Replied', 'Call booked', 'Proposal sent', 'Won', 'Lost', 'Budget too low'], true)
      .build()
    sheet.getRange(2, 2, 1000, 1).setDataValidation(rule)
  }
  return sheet
}

function doPost(e) {
  const lock = LockService.getScriptLock()
  lock.waitLock(15000)
  try {
    const data = JSON.parse(e.postData.contents)
    const sheet = getSheet_()
    const row = COLUMNS.map(([header, key]) => {
      if (header === 'Received') return new Date()
      if (header === 'Status') return 'New'
      return key && data[key] != null ? String(data[key]) : ''
    })
    sheet.appendRow(row)
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(ContentService.MimeType.JSON)
  } finally {
    lock.releaseLock()
  }
}

// Opening the web app URL in a browser just shows this, handy to confirm it's deployed.
function doGet() {
  return ContentService.createTextOutput('Bersk leads endpoint is live.')
}
