import { Util } from "../utils/util.js";
import { Fieldset } from "./forms/fieldset.js";
import { Label } from "./forms/label.js";
import { Legend } from "./forms/legend.js";
import { Input } from "./forms/input.js";
import { Element } from "./forms/element.js";
import { labelAttr } from "./forms/eleAttr/labelAttr.js";
import { btnAttr } from "./forms/btnAttr/btnAttr.js";

class CreateView {
    constructor() {
        const fieldsetEle = new Fieldset(0);
        const legendEle = new Legend(0);

        const idLabelEle = new Label(0, 0);
        const idInputEle = new Input(0, "create")

        const titleLabelEle = new Label(1, 0);
        const titleInputEle = new Input(1, "create");

        const authorLabelEle = new Label(2, 0);
        const authorInputEle = new Input(2, "create");

        const genreLabelEle = new Label(3, 0);
        const genreInputEle = new Input(3, "create");

        const synopsisLabelEle = new Label(4, 0);
        const synopsisAreaEle = new Element(".synopsis-container", "textarea", labelAttr[4].areaAttr);
        

        const submitBtnContainer = new Element("#input-section", "div", btnAttr[0].container);
        const submitBtnEle = new Element (".create-container", "button", btnAttr[0].eleAttr, "Create");
    }
}

export {CreateView};