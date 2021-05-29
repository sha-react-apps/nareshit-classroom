class HeaderComponent extends React.Component{

    render() {
        return (
            <>
                <h1 className="bg-primary text-center text-white p-2 mt-2">Amazon Shopping</h1>
            </>
        );
    }
}

class NavComponent extends React.Component{
    render() {
        return (
            <>
            <ul>
                <li>Home</li>      
                <li>About</li>      
                <li>Contact</li>      
            </ul>  
            </>
        );
    }
}

class FooterComponent extends React.Component{

    render() {
        return (
            <div className="bg-dark test-white text-center p-2">
                <p>&copy; Copyright 2021</p>
            </div>
        )
    }
}

class MainComponent extends React.Component{
    render() {
        return (
            <div className="container-fluid">
                <HeaderComponent/>
                <div className="row">


                </div>
            </div>
        )
    }
}