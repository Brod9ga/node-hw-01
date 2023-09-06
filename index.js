import contacts from "./contacts.js";
import yargs from "yargs";


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
     const allMovies = await contacts.listContacts();
     return console.table(allMovies);
      break;

    case 'get':
      const oneMovie = await contacts.getContactById(id);
      return console.log(oneMovie);
      break;

    case 'add':
      const newMovie = await contacts.addContact({ name, email, phone });
      return console.log(newMovie);
      break;

    case 'remove':
      const deleteMovie = await contacts.removeContact(contactId);
      return console.log(deleteMovie);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);