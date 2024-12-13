import { Util } from "../../utils/util.js";
import { fieldsetAttr } from "./eleAttr/fieldsetAttr.js";
import { labelAttr } from "./eleAttr/labelAttr.js";


class Label {
    constructor(type, parentIndex) {
        const fieldsetEle = Util.referenceEle(`#${fieldsetAttr[parentIndex]}`);
        const controlDiv = document.createElement("div");
        fieldsetEle.append(controlDiv);
        controlDiv.setAttribute("class", `${labelAttr[type].container}`);
        const labelEle = document.createElement("label");
        controlDiv.append(labelEle);
        labelEle.setAttribute("for", labelAttr[type].for);
        labelEle.textContent = labelAttr[type].textContent;
    }
}

export {Label};