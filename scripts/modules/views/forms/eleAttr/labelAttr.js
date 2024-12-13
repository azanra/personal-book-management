const labelAttr = [
    {
        for : "id-input",
        textContent : "Id : ", 
        container : "id-container",
        inputAttr : {
            "type" : "text",
            "id" : "id-input",
            "name" : "id",
            "required" : ""
        },
        updateInput : {
            "type" : "text",
            "id" : "id-update",
            "name" : "id",
            "readonly" : ""
        }
    },
    {
        for : "title-input",
        textContent : "Title : ",
        container : "title-container",
        inputAttr : {
            "type" : "text",
            "id" : "title-input",
            "name" : "title"
        },
        updateAttr : {
            "type" : "text",
            "id" : "title-update",
            "name" : "title"
        }
    },
    {
        for : "author-input",
        textContent : "Author : ",
        container : "author-container",
        inputAttr : {
            "type" : "text",
            "id" : "author-input",
            "name" : "author"
        },
        updateAttr : {
            "type" : "text",
            "id" : "author-update",
            "name" : "author"
        }
    },
    {
        for : "genre-input",
        textContent : "Genre : ",
        container : "genre-container",
        inputAttr : {
            "type" : "text",
            "id" : "genre-input",
            "name" : "genre"
        },
        updateAttr : {
            "type" : "text",
            "id" : "genre-update",
            "name" : "genre"
        }
    },
    {
        for : "synopsis-input",
        textContent : "Synopsis : ",
        container : "synopsis-container",
        areaAttr : {
            "id" : "synopsis-input",
            "name" : "synopsis",
            "rows" : "5",
            "col" : "25"
        },
        areaUpdateAttr : {
            "id" : "synopsis-update",
            "name" : "synopsis",
            "rows" : "5",
            "col" : "25"
        }
    }

]

export {labelAttr};