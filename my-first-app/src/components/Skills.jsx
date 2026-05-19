import HtmlImage from "../assets/images/html.png";
import CssImage from "../assets/images/css-3.png";
import JsImage from "../assets/images/java-script.png";
import DbImage from "../assets/images/database.png";
import "./Skills.css"

const Skills = () => {
    return (
        <>
            <section id="skills" className="mt-4 mb-3 ">
                <div className="container">
                    <h3 className="mb-3">My skills</h3>
                    
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card" style={{width: "18rem"}}>
                                <img src={HtmlImage} className="card-img-top" alt="HTML_img"/>
                                <div className="card-body">
                                    <p className="card-text">Semantic webpage structure and responsive layouts.</p>
                                </div>
                            </div>

                        </div> 
                        <div className="col-md-3">
                            <div className="card" style={{width: "18rem"}}>
                                <img src={CssImage} className="card-img-top" alt="Css_img"  />
                                <div className="card-body">
                                    <p className="card-text">Styling modern responsive websites using CSS and Flexbox.</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="card" style={{width: "18rem"}}>
                                <img src={JsImage} className="card-img-top" alt="Js_img" />
                                <div className="card-body">
                                    <p className="card-text">Adding interactivity and dynamic functionality to web pages .</p>
                                </div>
                            </div>

                        </div>
                        
                        <div className="col-md-3">
                            <div className="card" style={{width: "18rem"}}>
                                <img src={DbImage} className="card-img-top" alt="Db_img" />
                                <div className="card-body">
                                    <p className="card-text">Managing and querying relational databases using SQL.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <hr/>
        </>
    )
}
export default Skills