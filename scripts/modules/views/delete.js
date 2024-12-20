import { Util } from "../utils/util.js";
import { btnAttr } from "./forms/btnAttr/btnAttr.js";
import { Fieldset } from "./forms/fieldset.js";
import { Input } from "./forms/input.js";
import { Label } from "./forms/label.js";
import { Legend } from "./forms/legend.js";
import { Element } from "./forms/element.js";

class DeleteView {
    constructor() {
        const fieldsetELe = new Fieldset(3);
        const legendEle = new Legend(3);

        const idLabelEle = new Label(0, 3);
        const idInputEle = new Input(0, "delete");

        const deleteBtnContainer = new Element("#delete-section", "div", btnAttr[5].container);
        const deletBtnEle = new Element(".delete-container", "button", btnAttr[5].eleAttr, "Delete");
    }
}

export {DeleteView};