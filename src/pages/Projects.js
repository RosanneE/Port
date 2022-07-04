const Projects = () => {

    return (
        <div>
            <h1>Projects</h1>
            <div class="projects baseCSS">
                <h2><a href='https://pour-choices-app.herokuapp.com/drinks/'>Pour Choices</a></h2>
                <p>
                    Pour Choices is a website designed to help people find out what drinks they can make with their at home bar setup.
                </p>
                <br />
                <p>
                    Pour Choices is designed with Django (both front and backend).  It uses PostgreSQL as a database, and Python, HTML, and CSS programing languages. It has been deployed using Heroku.
                </p>
            </div>
            <br /> <br />
            <div class="projects baseCSS">
                <h2><a href='https://subtle-profiterole-48ae37.netlify.app/'>Hues Your Own Adventure</a></h2>
                <p>
                    I designed this website to help people find and select colors to use in web design, art projects, and any other computer color needs.
                </p>
                <br />
                <p>
                    Hues Your Own Adventure was created using React, MongoDB, Javascript, HTML, and CSS.  It used a third party API (<a href ='https://github.com/meodai/color-names'>Color Names</a>, by <a href ='https://github.com/meodai/color-names'>David Aerne / meodai</a>)
                </p>
            </div>
            <br /> <br />
            <div class="projects baseCSS">
                <h2><a href='https://glacial-atoll-73729.herokuapp.com/'>R&#38;D Books</a></h2>
                <p>
                    This website was designed to allow people to browse books by author, title, and genre.  The idea was to make a version of an existing website and add our own spin on it.  
                </p>
                <br />
                <p>
                    R&#38;D Books was a partnered project, and focused on managing Git branches and merging content.  It was designed to include one to many and many to one relationships between database models, and was our first Full CRUD assignment. It was created using Express, RESTful Routes, Templating with EJS, MongoDB, Javascript, HTML, and CSS.  The app was deployed to Heroku.
                </p>
            </div>
        </div>
    )
}

//export
export default Projects 