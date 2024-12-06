class Util {
    static referenceEle(ele) {
        let element = document.querySelector(ele);
        return element;
    }
    static setMultipleAttr(element, attr) {
        for(const key in attr) {
            element.setAttribute(key, attr[key]);
        }
    }
}

export {Util};