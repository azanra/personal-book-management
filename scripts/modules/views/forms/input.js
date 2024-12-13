import { Util } from "../../utils/util.js";
import { labelAttr } from "./eleAttr/labelAttr.js";

class Input {    
    constructor(type, operation) {
        const labelEle = Util.referenceEle(`.${labelAttr[type].container}`);
        const inputEle = document.createElement("input");
        labelEle.append(inputEle);
        Util.CheckIfInputIs(inputEle, labelAttr, type, operation);
    
    }
}

export {Input};