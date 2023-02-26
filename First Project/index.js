function Header(){
    return (
        <div>
            <nav className="nav">
                <img className ="nav-logo" src="React-icon.svg.png" alt="React Logo" />
                <h3 className="nav-title">ReactFacts</h3>
                <h4 className="nav-subtitle">React Course - Project 1</h4>
            </nav>
        </div>
    )
}
function Main(){
    return(
        <main>
            <h1 className="heading">Fun facts about React</h1>
            <ul className="main-items">
                <li>React was released in 2013</li>
                <li>React is a JavaScript library</li>
                <li>React is a front-end library</li>
                <li>React is a component based library</li>
                <li>React is a declarative library</li>
            </ul>
        </main>
    )
}

function App(){
    return (
        <div className="container">
            <Header />
            <Main />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);

