import { Util } from "../../utils/util.js";

class Legend {
    constructor() {
        const legendTextContent = {
            create: "Create Book",
            update: "Update Book",
            delete: "Delete Book",
            detail: "Detail Pages"
        }
        const fieldsetEle = Util.referenceEle("#input-section");
        const legendEle = document.createElement("legend");
        fieldsetEle.append(legendEle);
        legendEle.textContent = legendTextContent.create;
    }
}

export {Legend};