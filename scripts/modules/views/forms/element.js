import { Util } from "../../utils/util.js";

class Element {
    constructor(parent, element, attr) {
        const root = Util.referenceEle(parent);
        const newEle = document.createElement(element);
        Util.setMultipleAttr(newEle, attr);
        root.append(newEle);
    }
}

export {Element};