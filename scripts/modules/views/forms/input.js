import { Util } from "../../utils/util.js";
import { labelAttr } from "./eleAttr/labelAttr.js";

class Input {
    constructor(type) {
        const fieldsetEle = Util.referenceEle(`.${labelAttr[type].container}`);
        const inputEle = document.createElement("input");
        fieldsetEle.append(inputEle);
        Util.setMultipleAttr(inputEle, labelAttr[type].inputAttr);
    }
}

export {Input};