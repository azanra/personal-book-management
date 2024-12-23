import { Books } from "../models/books.js";
import { Util } from "../utils/util.js";
import { DetailView } from "../views/detail.js";
import { ReadView } from "../views/read.js";
import { UpdateView } from "../views/update.js";

class ReadController {
    static detailController(detailBtn, bookArr) {
        detailBtn.addEventListener("click", () => {
            const containerId = detailBtn.parentNode.id;
            Util.ifElementExist(Util.referenceEle("#input-section"));
            Util.ifElementExist(Util.referenceEle("#detail-section"));
            Util.ifElementExist(Util.referenceEle("#update-section"));
            const detailView = new DetailView(bookArr.findBook(containerId));
        })
    }
    static updateController(updateBtn, bookArr, uniqueId) {
        updateBtn.addEventListener("click", () => {
            Util.ifElementExist(Util.referenceEle("#input-section"));
            Util.ifElementExist(Util.referenceEle("#detail-section"));
            Util.ifElementExist(Util.referenceEle("#update-section"));
            const containerId = updateBtn.parentNode.id;
            const updateView = new UpdateView(bookArr.findBook(containerId));
            ReadController.updateListener(bookArr, uniqueId);
        })
    }
    static updateListener(bookArr, uniqueId) {
        const updateSubmitBtn = Util.referenceEle("#update-btn");
        updateSubmitBtn.addEventListener("click", () => {
            const idInput = Util.storeId();
            const titleInput = Util.storeTitle();
            const authorInput = Util.storeAuthor();
            const genreInput = Util.storeGenre();
            const synopsisInput = Util.storeSynopsis();

            Util.ifElementExist(Util.referenceEle(`.read-container`));
            bookArr.updateAttr(idInput, titleInput, authorInput, genreInput, synopsisInput);
            console.log(bookArr);
            const readView = new ReadView();
            bookArr.bookContainer(uniqueId);
            bookArr.printBook();

        })
    }
}

export {ReadController};