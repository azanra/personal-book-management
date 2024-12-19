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
}

export {Util};