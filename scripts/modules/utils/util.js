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
}

export {Util};