import { Util } from "../../utils/util.js";
import { fieldsetAttr } from "./eleAttr/fieldsetAttr.js";

class Fieldset {
    constructor(type) {

        const rootEle = Util.referenceEle(".root");
        const fieldsetEle = document.createElement("fieldset");
        rootEle.append(fieldsetEle);
        fieldsetEle.setAttribute("id", fieldsetAttr[type])
    }
}

export {Fieldset};