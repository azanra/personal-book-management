import { Util } from "../utils/util.js";
import { DetailView } from "../views/detail.js";

class ReadController {
    static detailController(detailBtn) {
        detailBtn.addEventListener("click", () => {
            const containerId = detailBtn.parentNode.id;
            console.log(containerId);
            Util.ifElementExist(Util.referenceEle("#detail-section"));
            const detailView = new DetailView();
        })
    }
}

export {ReadController};