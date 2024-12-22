import { Util } from "../utils/util.js";
import { CreateView } from "../views/create.js";

class AddController {
    constructor() {
        const addBtn = Util.referenceEle(".addBtn");
        addBtn.addEventListener("click", () => {
            Util.ifElementExist(Util.referenceEle("#detail-section"));
            Util.ifElementExist(Util.referenceEle("#input-section"));
            Util.ifElementExist(Util.referenceEle("#update-section"));
            const createView = new CreateView();
        })
    }
}

export {AddController};