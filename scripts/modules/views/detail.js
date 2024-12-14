import { Fieldset } from "./forms/fieldset.js";
import { Label } from "./forms/label.js";
import { Legend } from "./forms/legend.js";
import { Input } from "./forms/input.js";
import { Element } from "./forms/element.js";
import { labelAttr } from "./forms/eleAttr/labelAttr.js";

class DetailView {
    constructor() {
        const updateFieldset = new Fieldset(2);
        const updateLegend = new Legend(2);

        const updateIdLabel = new Label(0, 2);
        const updateIdInput = new Input(0, "update");

        const updateTitleLabel = new Label(1, 2);
        const updateTitleInput = new Input(1, "update");

        const updateAuthorLabel = new Label(2, 2);
        const updateAuthorInput = new Input(2, "update");

        const updateGenreLabel = new Label(3, 2);
        const updateGenreInput = new Input(3, "update");

        const updateSynopsisLabel = new Label(4, 2);
        const updateSynopsisArea = new Element(".synopsis-container", "textarea", labelAttr[4].attr);

    }
}


export {DetailView};