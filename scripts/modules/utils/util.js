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
        if(operation === "create"){
            Util.setMultipleAttr(inputEle, labelAttr[type].inputAttr);
        }
        if(operation === "update"){
            Util.setMultipleAttr(inputEle,  labelAttr[type].updateAttr)
        }
    }
    static checkDivParent(type, operation) {
        let temp = "";
        if(operation === "create"){
            return temp = `${labelAttr[type].container}`;
        }
        if(operation === "update"){
            return temp = `${labelAttr[type].container}`;
        }
    }
    static checkEleParent(type, operation) {
        let temp = "";
        if(operation === "create"){
            return temp = Util.referenceEle(`.${labelAttr[type].container}`);
        }
        if(operation === "update"){
            return  temp = Util.referenceEle(`.${labelAttr[type].container}`);
        }
    }
}

export {Util};