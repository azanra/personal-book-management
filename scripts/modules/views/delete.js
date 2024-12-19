import { Util } from "../utils/util.js";
import { Fieldset } from "./forms/fieldset.js";
import { Input } from "./forms/input.js";
import { Label } from "./forms/label.js";
import { Legend } from "./forms/legend.js";

class DeleteView {
    constructor() {
        const fieldsetELe = new Fieldset(3);
        const legendEle = new Legend(3);

        const idLabelEle = new Label(0, 3);
        const idInputEle = new Input(0, "delete");

        const deleteBtnContainer = new Element("delete-section", )
    }
}

export {DeleteView};