import ReactCarousel from '../components/ReactCarousel'

const Projects = () => {

    return (
        <div>
            <h2>Projects</h2>
            <div class="projects baseCSS">
                <h2><a className = 'projLink' href='https://pour-choices-app.herokuapp.com/drinks/'>Pour Choices</a></h2>
                <p>
                    Pour Choices is a website designed to help people find out what drinks they can make with their at home bar setup.  You can add items from your bar into a list that checks to see what drinks in it's database contain only the listed ingredients.  The app then presents a menue of cocktails you can make with what you already own.  It also allows you to browse the list of cocktails for inspiration and so you know what you need to buy to make any of the cocktails.
                </p>
                <div className='imgGal'>
                <ReactCarousel centerMode = {true} props={'Pour'}/>
                </div>
                <br/>
                <p>
                    Pour Choices is a Full CRUD app, designed with Django (both front and backend).  It uses PostgreSQL as a database, and Python, HTML, and CSS programing languages. It has been deployed using Heroku.
                </p>
            </div>
            <br />
            <br />
            <div class="projects baseCSS">
                <h2><a className = 'projLink' href='https://subtle-profiterole-48ae37.netlify.app/'>Hues Your Own Adventure</a></h2>
                <p>
                    I designed this website to help people find and select colors to use in web design, art projects, and any other computer color needs.  I used React to create interactive components that allow users to select a color, then expiriment with tone, tint, hue, and contrast to determine what RGB or Hex Code works best for the projects they are working on.
                </p>
                <br /><ReactCarousel props={'Hues'}/> <br/>
                <p>
                    Hues Your Own Adventure was created using React, MongoDB, Javascript, HTML, and CSS.  It used a third party API: <a href='https://github.com/meodai/color-names'>Color Names</a>, by <a href='https://github.com/meodai/color-names'>David Aerne / meodai</a>.   The app was deployed using Heroku and Netlify.
                </p>
            </div>
            <br /> <br />
            <div class="projects baseCSS">
                <h2><a className = 'projLink'  href='https://glacial-atoll-73729.herokuapp.com/'>R&#38;D Books</a></h2>
                <p>
                    This website was designed to allow people to browse books by author, title, and genre.  The idea was to make a version of an existing website and add our own spin on it.  My partner and I chose to create a book store - if it was a good enough start for Amazon, we figured we would follow in those footsteps.  we acheived MVP for the project, but still hope to add additional functions such as user logins.
                </p>
                <br /><ReactCarousel props={'R'}/> <br/>
                <p>
                    R&#38;D Books was a partnered project, and focused on managing Git branches and merging content.  It was designed to include one to many and many to one relationships between database models, and was our first Full CRUD assignment. It was created using Express, RESTful Routes, Templating with EJS, MongoDB, Javascript, HTML, and CSS.  The app was deployed to Heroku.
                </p>
            </div>
        </div>
    )
}

//export
export default Projects 