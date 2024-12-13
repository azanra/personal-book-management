import { Fieldset } from "./forms/fieldset.js";
import { Input } from "./forms/input.js";
import { Label } from "./forms/label.js";
import { Legend } from "./forms/legend.js";


class UpdateView {
    constructor() {
        const updateFieldset = new Fieldset(1);
        const updateLegend = new Legend(1);

        const updateIdLabel = new Label(0, 1);
        const updateIdInput = new Input(0, "update");

    }
}

export {UpdateView};