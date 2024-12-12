import { Util } from "../../utils/util.js";
import { fieldsetAttr } from "./eleAttr/fieldsetAttr.js";
import { labelAttr } from "./eleAttr/labelAttr.js";


class Label {
    constructor(type, parentIndex, operation) {
        const fieldsetEle = Util.referenceEle(`#${fieldsetAttr[parentIndex]}`);
        const controlDiv = document.createElement("div");
        fieldsetEle.append(controlDiv);
        let divAttr = Util.checkDivParent(type, operation);
        JSON.stringify(divAttr);
        controlDiv.setAttribute("class", divAttr);
        const labelEle = document.createElement("label");
        controlDiv.append(labelEle);
        labelEle.setAttribute("for", labelAttr[type].for);
        labelEle.textContent = labelAttr[type].textContent;
    }
}

export {Label};