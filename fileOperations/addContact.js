const { v4: uuidv4 } = require("uuid");
const fs = require("fs/promises");
const filePath = require("../db/filePath");
const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

async function addContact(name, email, phone, id = uuidv4()) {
  const contacts = await listContacts();
  const newContact = { id, name, email, phone };
  const newContacts = [...contacts, newContact];

  await updateContacts(newContacts);
  return newContact;
}

module.exports = addContact;
