import { Util } from "../utils/util.js";

class AddController {
    constructor() {
        const addBtn = Util.referenceEle(".addBtn");
        addBtn.addEventListener("click", () => {
            Util.ifElementExist(Util.referenceEle("#input-section"));
        })
    }
}

export {AddController};