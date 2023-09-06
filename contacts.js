import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const movies = await listContacts();
  const result = movies.find((item) => item.contactId === contactId);
  return result || null;
}

async function removeContact(contactId) {
  const movies = await listContacts();
  const index = movies.findIndex((item) => item.contactId === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = movies.splice(index, 1);

  return result;
}

async function addContact(name, email, phone) {
  const movies = await listContacts();
  const newMovie = {
    name,
    email,
    phone,
  };
  movies.push(newMovie);

  return newMovie;
}

export default { getContactById, removeContact, addContact, listContacts };
