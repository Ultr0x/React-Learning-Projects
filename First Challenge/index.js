function Header(){
    return (
        <header>
            <nav className="nav">
                <img className ="nav-logo" src="png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="React Logo" width="40px" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </nav>
        </header>
    )
}

function Main(){
    return (
        <div>
        <h1 className="heading">Hello JSX</h1>
            <ul className ="main-items">
                <li>was released dasd</li>
                <li>About</li>
                <li>Contact</li>
                <li>About</li>
                <li>asfianf sfsafaf sfs ewd ss ss wwfgtasf ssetg sss fgke bbc e</li>
            </ul>
        </div>
    )
}
function Footer(){
    return (
        <footer className="footer">
            <small>2023 Jan Swidzinski. All rights reserved.</small>
        </footer>
    )
}
//PascalCase

function App(){
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

//render the element
ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
     );




