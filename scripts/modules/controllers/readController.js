import { Books } from "../models/books.js";
import { Util } from "../utils/util.js";
import { DetailView } from "../views/detail.js";
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
        })
    }
}

export {ReadController};