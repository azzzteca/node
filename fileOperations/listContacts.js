const fs = require("fs/promises");
const contactsPath = require("../db/filePath");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return (contacts = JSON.parse(data));
}

module.exports = listContacts;
