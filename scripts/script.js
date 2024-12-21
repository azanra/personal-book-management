import { Books } from "./modules/models/books.js";
import { Book } from "./modules/models/book.js";
import { AddBtn } from "./modules/views/addBtn.js";
import { CreateView } from "./modules/views/create.js";
import { UpdateView } from "./modules/views/update.js";
import { DetailView } from "./modules/views/detail.js";
import { ReadView } from "./modules/views/read.js";
import { DeleteView } from "./modules/views/delete.js";

let bookArr = new Books();

bookArr.newBook("1", "title", "author", "genre", "synopsis");
bookArr.newBook("2", "anotherTitle", "anotherAuthor", "anotherGenre", "anotherSynopsis")

console.log(bookArr);


// let anotherArr = new Books();
// anotherArr.newBook("id", "title", "author", "genre", "synopsis");
// console.log(anotherArr)
// anotherArr.updateAttr("id", "three days of happiness", "sugaru miaki", "romance", "-");

// anotherArr.newBook("3", "title", "author", "genre", "synopsis");
// console.log(anotherArr)
// anotherArr.deleteBook("3");

let createBtn = new AddBtn();
createBtn.setEventListener();
let readView = new ReadView();
bookArr.bookContainer();
bookArr.printBook();
bookArr.buttonContainer();


// let createViewEle = new CreateView();
// let updateViewEle = new UpdateView();
// let detailView = new DetailView();
// let deleteView = new DeleteView();