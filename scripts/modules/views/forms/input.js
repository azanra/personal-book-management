import { Util } from "../../utils/util.js";
import { labelAttr } from "./eleAttr/labelAttr.js";

class Input {    
    constructor(type, operation) {
        const fieldsetEle = Util.checkEleParent(type, operation);
        const inputEle = document.createElement("input");
        fieldsetEle.append(inputEle);
        Util.CheckIfInputIs(inputEle, labelAttr, type, operation);
    
    }
}

export {Input};