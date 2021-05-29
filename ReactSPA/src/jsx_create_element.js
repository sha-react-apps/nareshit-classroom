const element = React.createElement(
    "div",
    {
        className: "container",
        align: "center"
    },
    "Welcome to ReactJS"
);

const imageElement = React.createElement(
    "img",
    {
        height: '200px',
        width: '200px',
        src: '../assets/' 
    }
)

const nestedElement = React.createElement(
    "div",
    {
        className: 'container',
        align: 'center'
    },
    "Welcome to ReactJS",
    React.createElement(
        "h2",
        {
            align: 'center'
        },
        "JSX Introduction"
    ),
    React.createElement(
        "p",
        null,//element without properties
        "This is a paragraph"
    ),
    imageElement
)

ReactDOM.render(
    nestedElement,
    document.getElementById("container")
);