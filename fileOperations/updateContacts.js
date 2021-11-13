const fs = require("fs/promises");
const filePath = require("../db/filePath");

async function updateContacts(contacts) {
  await fs.writeFile(filePath, JSON.stringify(contacts));
}

module.exports = updateContacts;
