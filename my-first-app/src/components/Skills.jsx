import HtmlImage from "../assets/images/html.png";
import CssImage from "../assets/images/css-3.png";
import JsImage from "../assets/images/java-script.png";
import DbImage from "../assets/images/database.png";

const Skills = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img src={HtmlImage} className="mx-auto card-img-top" alt="HTML_img" style={{ height: "200px"  }}/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                </div>
                            </div>

                        </div> 
                        <div className="col-md-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img src={CssImage} className="card-img-top" alt="Css_img" style={{ height: "200px" }} />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img src={JsImage} className="card-img-top" alt="Js_img" style={{ height: "200px" }}/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                </div>
                            </div>

                        </div>
                        
                        <div className="col-md-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img src={DbImage} className="card-img-top" alt="Db_img" style={{ height: "200px" }}/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skills