function customRender(reactElem, container){
    /*
    // version 1
    const domElement = document.createElement(reactElem.type);
    domElement.innerHTML = reactElem.children;
    domElement.setAttribute('href',reactElem.props.href);
    domElement.setAttribute('target',reactElem.props.target);

    container.appendChild(domElement);
    */

    // version 2
    const domElement = document.createElement(reactElem.type);
    domElement.innerHTML = reactElem.children;
    for (const prop in reactElem.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElem.props[prop]);    
    }
    
    container.appendChild(domElement);
}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'Click me to open google'
}

const mainContainer = document.getElementById('root');

customRender(reactElement,mainContainer)