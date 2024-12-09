import { Util } from "../../utils/util.js";

class Label {
    constructor(type) {
        const labelAttr = [
            {
                for : "id-input",
                textContent : "Id :"
            },
            {
                for : "title-input",
                textContent : "Title :"
            },
            {
                for : "author-input",
                textContent : "Author :"
            },
            {
                for : "genre-input",
                textContent : "Genre :"
            },
            {
                for : "synopsis-input",
                textContent : "Synopsis",
            }

        ]
        const fieldsetEle = Util.referenceEle("#input-section");
        const controlDiv = document.createElement("div");
        fieldsetEle.append(controlDiv);
        controlDiv.setAttribute("class", "control-div");
        const labelEle = document.createElement("label");
        controlDiv.append(labelEle);
        labelEle.setAttribute("for", labelAttr[type].for);
        labelEle.textContent = labelAttr[type].textContent;
    }
}

export {Label};