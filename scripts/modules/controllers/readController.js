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
    static updateController(updateBtn, bookArr) {
        updateBtn.addEventListener("click", () => {
            Util.ifElementExist(Util.referenceEle("#input-section"));
            Util.ifElementExist(Util.referenceEle("#detail-section"));
            Util.ifElementExist(Util.referenceEle("#update-section"));
            const containerId = updateBtn.parentNode.id;
            const updateView = new UpdateView(bookArr.findBook(containerId));
            ReadController.updateListener(bookArr);
        })
    }
    static updateListener(bookArr) {
        const updateSubmitBtn = Util.referenceEle("#update-submit-btn");
        updateSubmitBtn.addEventListener("click", () => {
            const idInput = Util.storeId();
            const titleInput = Util.storeTitle();
            const authorInput = Util.storeAuthor();
            const genreInput = Util.storeGenre();
            const synopsisInput = Util.storeSynopsis();

            bookArr.updateAttr(idInput, titleInput, authorInput, genreInput, synopsisInput);
            console.log(bookArr);
            ReadController.updateBookView(bookArr);

            Util.ifElementExist(Util.referenceEle('#update-section'));
        })
    }
    static updateBookView(bookArr) {
        Util.ifElementExist(Util.referenceEle(`.read-container`));
        const readView = new ReadView();
        bookArr.bookContainer();
        bookArr.printBook();
        bookArr.buttonContainer(bookArr);
    }
}

export {ReadController};