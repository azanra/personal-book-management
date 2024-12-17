import { btnAttr } from "./forms/btnAttr/btnAttr.js";
import { paraAttr } from "./forms/eleAttr/paraAttr.js";
import { Element } from "./forms/element.js";


class ReadView {
    constructor() {
        const readContainer = new Element(".root", "div", btnAttr[4].container);
    }
    static printBookEle(arrayBook, index) {
        const bookPara = new Element(`#container-${index}`, "p", paraAttr[0], `id : ${arrayBook.id}, title : ${arrayBook.title}, author : ${arrayBook.author}, genre : ${arrayBook.genre}`);
    }
    static bookContainer(index) {
        const bookContainer = document.createElement("div");
        bookContainer.setAttribute("id", `container-${index}`);
        const refBookContainer = document.querySelector(".read-container");
        refBookContainer.append(bookContainer); 
    }
}

export {ReadView};