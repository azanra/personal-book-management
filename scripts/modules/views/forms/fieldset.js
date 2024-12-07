import { Util } from "../../utils/util.js";

class Fieldset {
    constructor() {
        const fieldsetAttr = {
            "id": "input-section"
        }
        const rootEle = Util.referenceEle(".root");
        const fieldsetEle = document.createElement("fieldset");
        rootEle.append(fieldsetEle);
        Util.setMultipleAttr(fieldsetEle, fieldsetAttr);
    }
}

export {Fieldset};