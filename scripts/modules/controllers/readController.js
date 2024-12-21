import { Books } from "../models/books.js";
import { Util } from "../utils/util.js";
import { DetailView } from "../views/detail.js";

class ReadController {
    static detailController(detailBtn, bookArr) {
        detailBtn.addEventListener("click", () => {
            const containerId = detailBtn.parentNode.id;
            Util.ifElementExist(Util.referenceEle("#detail-section"));
            const detailView = new DetailView(bookArr.findBook(containerId));
        })
    }
}

export {ReadController};