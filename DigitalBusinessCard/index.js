function Main(){
    return(
        <main>
            <div className="parent">
                <div className="parent2">
                    <img src="308110582_2405728546247348_6816286241454637714_n.jpg" alt="My Photo" className="logo" />
                    <h1 className="heading">Jan Swidzinski</h1>
                    <h2 className="sub-heading">Software Developer</h2>
                </div>
                <ul className="main-items">
                    <li>Email</li>
                    <li>Linkedin</li>
                </ul>
                <h2 className="sub-heading">About Me</h2>
                <p className="about-me">I am a software developer with a passion for learning new technologies. I am currently working on a project to create a digital business card using React. I am also working on a project to create a website for my local church using React and Firebase.</p>
                <h2 className="sub-heading">Interests</h2>
                <p className="interests">I enjoy playing video games, watching movies, and reading books. I also enjoy spending time with my family and friends.</p>
            </div>
        </main>
    )
}

function App(){
    return (
        <div className="container">
            <Main />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);

