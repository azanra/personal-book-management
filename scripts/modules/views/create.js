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
        const fieldsetEle = new Fieldset();
        const legendEle = new Legend();

        const idLabelEle = new Label(0);
        const idInputEle = new Input(0)

        const titleLabelEle = new Label(1);
        const titleInputEle = new Input(1);

        const authorLabelEle = new Label(2);
        const authorInputEle = new Input(2);

        const genreLabelEle = new Label(3);
        const genreInputEle = new Input(3);

        const synopsisLabelEle = new Label(4);
        const synopsisAreaEle = new Element(".synopsis-container", "textarea", labelAttr[4].areaAttr);
        

        const submitBtnContainer = new Element("#input-section", "div", btnAttr[0].container);
        const submitBtnEle = new Element (".create-container", "button", btnAttr[0].eleAttr, "Create");
    }
}

export {CreateView};