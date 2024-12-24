import { labelAttr } from "./forms/eleAttr/labelAttr.js";
import { Fieldset } from "./forms/fieldset.js";
import { Input } from "./forms/input.js";
import { Label } from "./forms/label.js";
import { Legend } from "./forms/legend.js";
import { Element } from "./forms/element.js";
import { btnAttr } from "./forms/btnAttr/btnAttr.js";

class UpdateView {
    constructor(book) {
        const updateFieldset = new Fieldset(1);
        const updateLegend = new Legend(1);

        const updateIdLabel = new Label(0, 1);
        const updateIdInput = new Input(0, "update", book.id);

        const updateTitleLabel = new Label(1, 1);
        const updateTitleInput = new Input(1, "update");

        const updateAuthorLabel = new Label(2, 1);
        const updateAuthorInput = new Input(2, "update");

        const updateGenreLabel = new Label(3, 1);
        const updateGenreInput = new Input(3, "update");

        const updateSynopsisLabel = new Label(4, 1);
        const updateSynopsisArea = new Element(".synopsis-container", "textarea", labelAttr[4].attr);

        const updateBtnContainer = new Element("#update-section", "div", btnAttr[2].container);
        const updateBtn = new Element(".update-container", "button", btnAttr[1].eleAttr, "Update");
        const btnEle = document.querySelector('#update-btn');
        btnEle.setAttribute("id", "update-submit-btn");
    }
}

export {UpdateView};