const Projects = () => {

    return (
        <div>
            <h1>Projects</h1>
            <div class="projects baseCSS">
                <h2><a href='https://pour-choices-app.herokuapp.com/drinks/'>Pour Choices</a></h2>
                <p>
                    Pour Choices is a website designed to help people find out what drinks they can make with their at home bar setup.  </p>
                <br/>
                <p>Pour Choices is designed with Django (both front and backend).  It uses PostgreSQL as a database, and Python, HTML, and CSS programing languages. It has been deployed using Heroku.
                </p>
            </div>
            <br/> <br/>
            <div class="projects baseCSS">
                <h2><a href='https://subtle-profiterole-48ae37.netlify.app/'>Hues Your Own Adventure</a></h2>
                <p>
                    This website is designed to help people find and select colors to use in web design, art projects, and any other computer color needs.  </p>
                <br/>
                <p>Hues Your Own Adventure was created using React, MongoDB, Javascript, HTML, and CSS.
                </p>
            </div>
        </div>
    )
}

//export
export default Projects 