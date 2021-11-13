const fs = require("fs/promises");
const filePath = require("../db/filePath");
const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

async function removeContact(contactId) {
  const contacts = await listContacts();

  const index = contacts.findIndex((contact) => contact.id === contactId);

  if (index === -1) {
    return null;
  }

  const [removedContact] = contacts.splice(index, 1);

  await updateContacts(contacts);

  return removedContact;
}

module.exports = removeContact;
