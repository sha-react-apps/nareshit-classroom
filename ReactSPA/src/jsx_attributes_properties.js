
//wrong way
// const element = (
//     <>
//         <h1 class="effects">Welcome to React JS.</h1>
//     </>
// )

const style= "effects";
const element = (
    <>
        <h1 className={style}>Welcome to React JS</h1>
    </>
)
ReactDOM.render(
    element,
    document.getElementById('container')
)