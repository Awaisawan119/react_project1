

function customRender(reactElements, container) {
    const domElement = document.createElement(reactElements.type)
    domElement.innerHTML = reactElements.Children
    for (const prop in reactElements.props ) {
        // If we use Children without quotes (prop === Children), JavaScript will throw an error.
        // This is because JavaScript interprets Children as a variable, not a string.
        // Since the key in an object is always a string, we must use "Children" in quotes to compare it correctly.
        // Example:
        // - Without quotes: prop === Children -> Error (Children is undefined unless declared as a variable)
        // - With quotes: prop === "Children" -> Correct comparison
        domElement.setAttribute(prop, reactElements.props[prop])
    }
    container.appendChild(domElement)
}



const reactElements ={
    type:'a',
    props:
    { 
        href :'https:google.com',
       
        target :'_blank'



    },
     Children :'click on it to google'
}



const mainContainer = document.querySelector('#root')
customRender(reactElements,mainContainer)