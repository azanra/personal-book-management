import { btnAttr } from "./forms/btnAttr/btnAttr.js";
import { paraAttr } from "./forms/eleAttr/paraAttr.js";
import { Element } from "./forms/element.js";

class ReadView {
    constructor() {
        const readContainer = new Element(".root", "div", btnAttr[4].container);
        
    }
    static printBookEle(arrayBook) {
        const bookPara = new Element(".read-container", "p", paraAttr[0], `id : ${arrayBook.id}, title : ${arrayBook.title}, author : ${arrayBook.author}, genre : ${arrayBook.genre}`);
    }
}

export {ReadView};