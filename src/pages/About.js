import Skills from "./Skills"

const About = () => {

  return (
    <div className="about">
      <h2>About Me</h2>
      <div class="about baseCSS">
        <p>
          Hello! I'm Rosanne, a Software Engineer based in Baltimore, MD. I graduated
          from General Assembly's Software Engineering boot camp 6/2022, and am
          currently job hunting, experimenting with what I've learned, and building up
          new skills. I'm a quick learner who enjoys a challenge and I can't wait to
          see where coding leads me. <br />
          <br />
          Outside of coding, I like collecting hobbies. I've been swing dancing for
          over a decade, and know most ballroom and latin dances, I play piano and
          ukulele, rock climb, sketch, paint, learned some aerial silks, lira, and
          trapeze, playing Starcraft, Don't Starve, and DOTA, and about a million
          other things. I think the best way to keep your brain agile is to practice
          doing things you are bad at. On slow days, I enjoy yoga, reading a good
          book, and taking long walks with my puppy.
        </p>
      </div>
      <br/>
      <Skills />

    </div>

  )
}

//export
export default About 