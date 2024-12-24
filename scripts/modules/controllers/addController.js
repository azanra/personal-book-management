import { Util } from "../utils/util.js";
import { CreateView } from "../views/create.js";
import { ReadController } from "./readController.js";

class AddController {
    constructor(bookArr) {
        const addBtn = Util.referenceEle(".addBtn");
        addBtn.addEventListener("click", () => {
            Util.ifElementExist(Util.referenceEle("#detail-section"));
            Util.ifElementExist(Util.referenceEle("#input-section"));
            Util.ifElementExist(Util.referenceEle("#update-section"));
            const createView = new CreateView();
            AddController.createListener(bookArr);
        })   
    }
    static createListener(bookArr) {
        const createBtn = Util.referenceEle("#create-btn");
        createBtn.addEventListener("click", () => {
            const idInput = Util.storeId();
            const titleInput = Util.storeTitle();
            const authorInput = Util.storeAuthor();
            const genreInput = Util.storeGenre();
            const synopsisInput = Util.storeSynopsis();
    
            bookArr.newBook(idInput, titleInput, authorInput, genreInput, synopsisInput);
            console.log(bookArr);
            ReadController.updateBookView(bookArr);

            Util.ifElementExist(Util.referenceEle('#input-section'));
        })
    }
}

export {AddController};