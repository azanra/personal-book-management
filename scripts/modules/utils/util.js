import { labelAttr } from "../views/forms/eleAttr/labelAttr.js";
import { Input } from "../views/forms/input.js";

class Util {
    static referenceEle(ele) {
        let element = document.querySelector(ele);
        return element;
    }
    static setMultipleAttr(element, obj) {
        for(const key in obj) {
            element.setAttribute(key, obj[key]);
        }
    }
    static CheckIfInputIs(inputEle, labelAttr, type, operation) {
        if(operation === "create" || operation === "delete"){
            Util.setMultipleAttr(inputEle, labelAttr[type].inputAttr);
        }
        if(operation === "update"){
            Util.setMultipleAttr(inputEle,  labelAttr[type].attr)
        }
        if(operation === "detail") {
            Util.setMultipleAttr(inputEle, labelAttr[type].detailAttr);
        }
    }
    static ifElementExist(ele) {
        if(ele != null){
            ele.remove();
        }
    }
    static ifValueExist(element, inputValue) {
        if(inputValue != null) {
            element.value = inputValue
        }
    }
    static storeId() {
        const idInput = Util.referenceEle("#id-input");
        const idValue = idInput.value;
        return idValue;
    }
    static storeTitle() {
        const titleInput = Util.referenceEle("#title-input");
        const titleValue = titleInput.value;
        return titleValue;
    }

    static storeAuthor() {
        const authorInput = Util.referenceEle("#author-input");
        const authorValue = authorInput.value;
        return authorValue;
    }
    static storeGenre() {
        const genreInput = Util.referenceEle("#genre-input");
        const genreValue = genreInput.value;
        return genreValue;
    }
    static storeSynopsis() {
        const synopsisInput = Util.referenceEle("#synopsis-input");
        const synopsisValue = synopsisInput.value;
        return synopsisValue;
    }
}

export {Util};