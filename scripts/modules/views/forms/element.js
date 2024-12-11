import { Util } from "../../utils/util.js";

class Element {
    constructor(parent, element, attr, text) {
        const root = Util.referenceEle(parent);
        const newEle = document.createElement(element);
        newEle.textContent = text;
        Util.setMultipleAttr(newEle, attr);
        root.append(newEle);
    }
}

export {Element};