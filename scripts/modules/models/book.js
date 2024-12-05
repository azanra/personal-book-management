class Book {
    constructor(id, title, author, genre, synopsis) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.synopsis = synopsis;
    }

    get id() {
        return this.id;
    }

    set id(newId) {
        this.id = newId;
    }

    get title() {
        return this.title;
    }

    set title(newTitle) {
        this.title = newTitle
    }

    get author() {
        return this.author;
    }

    set author(newAuthor) {
        this.author = newAuthor;
    }

    get genre() {
        return this.genre;
    }

    set genre(newGenre) {
        this.genre = newGenre;
    }

    get synopsis(){
        return this.synopsis;
    }

    set synopsis(newSynopsis){
        this.synopsis = newSynopsis;
    }
}