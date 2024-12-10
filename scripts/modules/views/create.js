import { Util } from "../utils/util.js";
import { Fieldset } from "./forms/fieldset.js";
import { Label } from "./forms/label.js";
import { Legend } from "./forms/legend.js";
import { Input } from "./forms/input.js";

class CreateView {
    constructor() {
        const fieldsetEle = new Fieldset();
        const legendEle = new Legend();
        const idLabelEle = new Label(0);
        const idInputEle = new Input(0)
    }
}

export {CreateView};