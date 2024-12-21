import { ReadView } from "../views/read.js";
import { Book } from "./book.js";

class Books {
    constructor() {
        this.bookArr = [];
    }
    newBook(id, title, author, genre, synopsis) {
        let createBook = new Book(id, title, author, genre, synopsis);
        this.bookArr.push(createBook); 
        return createBook;
    }
    updateAttr(inputId, inputTitle, inputAuthor, inputGenre, inputSynopsis) {
        for(let i = 0; i < this.bookArr.length; i++) {
            if(this.bookArr[i].id === inputId){
                this.bookArr[i].title = inputTitle;
                this.bookArr[i].author = inputAuthor;
                this.bookArr[i].genre = inputGenre;
                this.bookArr[i].synopsis = inputSynopsis;
            }
        }   
    }
    printBook() {
        for(let i = 0; i < this.bookArr.length; i++) {
            ReadView.printBookEle(this.bookArr[i], this.bookArr[i].id);
        }
    }
    bookContainer() {
        for(let i = 0; i < this.bookArr.length; i++){
            ReadView.bookContainer(this.bookArr[i].id);      
        }
    }
    buttonContainer(bookArr) {
        for(let i = 0; i < this.bookArr.length; i++) {
            ReadView.bookButton(this.bookArr[i].id, bookArr);
        }
    }
    deleteBook(inputId) {
        for(let i = 0; i < this.bookArr.length; i++) {
            if(this.bookArr[i].id === inputId){
                this.bookArr.splice(i, 1);
            }
        } 
    }
    findBook(inputId) {
        for(let i = 0; i < this.bookArr.length; i++){
            if(inputId === this.bookArr[i].id){
                return this.bookArr[i];
            }
        }
    }
}

export {Books};