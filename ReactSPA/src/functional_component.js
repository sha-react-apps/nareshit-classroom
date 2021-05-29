const HeaderComponent = function(){
    return (
        <>
            <h1 className='bg-primary text-white text-center mt-3'>Amazon Shopping</h1>
        </>
    )
}

const NavigationComponent = () => (
    <>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>

    </>
)

const FooterComponent = () => (
    <>
    <div className="bg-dark footer"> &copy; Copyright 2021</div>
    </>
)

const MainComponent = () => (
    <>
        <HeaderComponent/>
        <div className="row">
            <div className="col-2">
                <NavigationComponent/>
            </div>
            <div className="col-10">
                <p>Online Shopping</p>
            </div>
        </div>
        <FooterComponent/>
    </>
)

ReactDOM.render(
    <MainComponent/>,
    document.getElementById('container')
)