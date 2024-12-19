import { Util } from "../../utils/util.js";
import { fieldsetAttr } from "./eleAttr/fieldsetAttr.js";

class Legend {
    constructor(type) {
        const legendTextContent = [
            "Create Book",
            "Update Book",
            "Detail Pages",
            "Delete Book"
        ]
        const fieldsetEle = Util.referenceEle(`#${fieldsetAttr[type]}`);
        const legendEle = document.createElement("legend");
        fieldsetEle.append(legendEle);
        legendEle.textContent = legendTextContent[type];
    }
}

export {Legend};