import { Util } from "../../utils/util.js";
import { labelAttr } from "./eleAttr/labelAttr.js";

class Label {
    constructor(type) {
        const fieldsetEle = Util.referenceEle("#input-section");
        const controlDiv = document.createElement("div");
        fieldsetEle.append(controlDiv);
        controlDiv.setAttribute("class", labelAttr[type].container);
        const labelEle = document.createElement("label");
        controlDiv.append(labelEle);
        labelEle.setAttribute("for", labelAttr[type].for);
        labelEle.textContent = labelAttr[type].textContent;
    }
}

export {Label};