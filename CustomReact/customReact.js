

function customRender(reactElements,container){
    const domElement = document.createElement(reactElements.type)
    domElement.innerHTML = reactElements.Children
    for (const prop in reactElements.props) {
        if (prop === reactElements.Children /* 'Children'*/) continue;// we use also use Children but for this i have to enclosed Children into
        // quotes because without quotes javascript thought it is variable that is not declared 
        // and give error .key of object is always in string so you thought that is way we we have to
        // to enclosed Children into quotes but to solve this we can use == (prop==Children)
        // to avoid type comparison but it stills give erorr because main reason is 
        // is still is that without quotes javascript takes Children as a string
        domElement.setAttribute(prop , reactElements.props[prop])
   
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