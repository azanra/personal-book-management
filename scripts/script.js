import { Books } from "./modules/models/books.js";
import { Book } from "./modules/models/book.js";
import { AddBtn } from "./modules/views/addBtn.js";
import { CreateView } from "./modules/views/create.js";
import { UpdateView } from "./modules/views/update.js";

let bookArr = new Books();
bookArr.newBook("1", "title", "author", "genre", "synopsis");
bookArr.newBook("2", "anotherTitle", "anotherAuthor", "anotherGenre", "anotherSynopsis")
console.log(bookArr);

let anotherArr = new Books();
anotherArr.newBook("id", "title", "author", "genre", "synopsis");
console.log(anotherArr)
anotherArr.updateAttr("id", "three days of happiness", "sugaru miaki", "romance", "-");

anotherArr.newBook("3", "title", "author", "genre", "synopsis");
console.log(anotherArr)
anotherArr.deleteBook("3");


console.log(anotherArr);

let createBtn = new AddBtn();
let createViewEle = new CreateView();
// let updateViewEle = new UpdateView();