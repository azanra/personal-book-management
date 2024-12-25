import { Books } from "./modules/models/books.js";
import { AddBtn } from "./modules/views/addBtn.js";
import { ReadView } from "./modules/views/read.js";


let bookArr = new Books();

bookArr.newBook("1", "title", "author", "genre", "synopsis");
bookArr.newBook("2", "anotherTitle", "anotherAuthor", "anotherGenre", "anotherSynopsis")

console.log(bookArr);


const createBtn = new AddBtn();
createBtn.setEventListener(bookArr);
const readView = new ReadView();
bookArr.bookContainer();
bookArr.printBook();
bookArr.buttonContainer(bookArr);
