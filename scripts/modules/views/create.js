import { Util } from "../utils/util.js";
import { Fieldset } from "./forms/fieldset.js";
import { Label } from "./forms/label.js";
import { Legend } from "./forms/legend.js";
import { Element } from "./forms/element.js";

class CreateView {
    constructor() {
        const fieldsetEle = new Fieldset();
        const legendEle = new Legend();
        const labelEle = new Label(0);
    }
}

export {CreateView};