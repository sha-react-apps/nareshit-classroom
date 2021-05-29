const element = {
    type: 'div',
    props: {
        className: 'container',
        align: 'center',
        children: ['Welcome to ReactJS']
    }
};
//This is not going to work unless we use this element in a component.

ReactDOM.render(
    element,
    document.getElementById('container')
)