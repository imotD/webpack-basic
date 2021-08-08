import _ from "lodash"

function hello() {
    const element = document.createElement('div')
    element.innerHTML = _.join(["Hello", "Webpack"], " ")
    return element
}

document.body.appendChild(hello())