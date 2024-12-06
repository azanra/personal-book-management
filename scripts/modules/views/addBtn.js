import { Util } from "../utils/util.js";

class AddBtn {
    constructor() {
        const containerAttr = {
            "class": "addContainer"
        }

        const btnAttr = {
            "class": "addBtn",
            "type": "button",
        }
        const rootELe =  Util.referenceEle(".root");
        const addDiv = document.createElement("div");
        rootELe.append(addDiv);
        Util.setMultipleAttr(addDiv, containerAttr);

        const addBtn = document.createElement("button");
        const refAddDiv = Util.referenceEle(".addContainer");
        refAddDiv.append(addBtn);
        Util.setMultipleAttr(addBtn, btnAttr);
        addBtn.textContent = "Add";
    }
}

export {AddBtn};