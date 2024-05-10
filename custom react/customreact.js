
function mainContainer(reactElement,container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    // domElement.setAttribute("href",reactElement.props.href);
    // domElement.setAttribute("target",reactElement.target)
    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement);
}
const reactElement = {
    type: 'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'Click here to visit google website'
}

const containers = document.querySelector('#root')

mainContainer(reactElement,containers)