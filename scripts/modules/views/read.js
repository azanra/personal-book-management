import { ReadController } from "../controllers/readController.js";
import { btnAttr } from "./forms/btnAttr/btnAttr.js";
import { paraAttr } from "./forms/eleAttr/paraAttr.js";
import { Element } from "./forms/element.js";


class ReadView {
    constructor() {
        const readContainer = new Element(".root", "div", btnAttr[4].container);
    }
    static printBookEle(arrayBook, uniqueId) {
        //needed because queryselector can't reference that start with number
        const bookPara = new Element(`[id='${uniqueId}']`, "p", paraAttr[0], `id : ${arrayBook.id}, title : ${arrayBook.title}, author : ${arrayBook.author}, genre : ${arrayBook.genre}`);
    }
    static bookContainer(containerId) {
        const bookContainer = document.createElement("div");
        bookContainer.setAttribute("id", `${containerId}`);
        const refBookContainer = document.querySelector(".read-container");
        refBookContainer.append(bookContainer); 
    }

    static bookButton(uniqueId, bookArr) {
        const detailButton = new Element(`[id='${uniqueId}']`, "button", btnAttr[3].eleAttr, "Detail");
        const eleDetail = document.querySelector("#detail-btn");
        eleDetail.setAttribute("id", `detail-btn-${uniqueId}`);
        ReadController.detailController(eleDetail, bookArr);

        const updateButton = new Element(`[id='${uniqueId}']`, "button", btnAttr[1].eleAttr, "Update");
        const eleUpdate =  document.querySelector("#update-btn");
        eleUpdate.setAttribute("id", `update-btn-${uniqueId}`);
        ReadController.updateController(eleUpdate, bookArr, uniqueId);

        const deleteButton = new Element(`[id='${uniqueId}']`, "button", btnAttr[2].eleAttr, "Delete");
        const eleDelete = document.querySelector("#delete-btn");
        eleDelete.setAttribute("id", `delete-btn-${uniqueId}`);
        ReadController.deleteController(eleDelete, uniqueId, bookArr);
    }   

}

export {ReadView};