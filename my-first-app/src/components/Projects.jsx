const Projects = () => {
    return (
        <>
            <section id="projects" className=" mt-3 p-3">
                <div className="container">
                    <div className="row col-md-8 mb-4">
                        <h4>Healthcare Website (2026)</h4>
                        <p>Developed a responsive healthcare website using HTML, CSS and
                            Bootstrap.
                            Implemented multiple pages with responsive layout using
                            Bootstrap components.
                            Used Bootstrap grid system and components to ensure responsive
                            design across different devices.
                            Worked in a team to design and develop the website interface.
                            <a href="https://chandaniatraye.github.io/healthcare-hospital/" target="_blank"> Live Demo </a>
                        </p>
                        
                    </div>
                    <div className="row col-md-8 mb-4">
                        <h4>Final year Project - Edible oil quality detection system
                            (2023 - 2024) </h4>
                        <p> Developed a system to detect adulteration in oil using the Adafruit
                            TCS34725 color sensor.
                            Extracted RGB values from oil samples and compared them with
                            predefined RGB values of pure and adulterated samples.
                            Displayed the analysis results on an I2C LCD module for easy
                            identification.</p>

                    </div>
                </div>
            </section>
            <hr />
        </>

    )
}
export default Projects