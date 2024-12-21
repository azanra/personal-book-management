import { Util } from "../../utils/util.js";
import { labelAttr } from "./eleAttr/labelAttr.js";

class Input {    
    constructor(type, operation, valueInput) {
        const labelEle = Util.referenceEle(`.${labelAttr[type].container}`);
        const inputEle = document.createElement("input");
        Util.ifValueExist(inputEle, valueInput);
        labelEle.append(inputEle);
        Util.CheckIfInputIs(inputEle, labelAttr, type, operation);
    
    }
}

export {Input};