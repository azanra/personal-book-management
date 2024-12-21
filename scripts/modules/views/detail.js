import { Fieldset } from "./forms/fieldset.js";
import { Label } from "./forms/label.js";
import { Legend } from "./forms/legend.js";
import { Input } from "./forms/input.js";
import { Element } from "./forms/element.js";
import { labelAttr } from "./forms/eleAttr/labelAttr.js";

class DetailView {
    constructor(book) {
        const detailFieldset = new Fieldset(2);
        const detailLegend = new Legend(2);

        const detailIdLabel = new Label(0, 2, book.id);
        const detailIdInput = new Input(0, "detail");

        const detailTitleLabel = new Label(1, 2);
        const detailTitleInput = new Input(1, "detail");

        const detailAuthorLabel = new Label(2, 2);
        const detailAuthorInput = new Input(2, "detail");

        const detailGenreLabel = new Label(3, 2);
        const detailGenreInput = new Input(3, "detail");

        const detailSynopsisLabel = new Label(4, 2);
        const detailSynopsisArea = new Element(".synopsis-container", "textarea", labelAttr[4].detailAttr);

    }
}


export {DetailView};