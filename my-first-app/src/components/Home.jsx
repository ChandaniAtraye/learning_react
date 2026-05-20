import HomeImage from "../assets/images/html.png";
import style from "../components/Home.module.css";
const headingColor={
    color:"red",
    backgroundColor:"aqua",
    fontSize:50
}

const Home = () =>{

    const paraColor={
        color:"blue",
        border:"3px solid red",
        padding:20
    }
    return(
        <>
        <section id="home" className="mb-3" style={{background:"linear-Gradient(to right,#1d9bf0,#4338ca)"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-12 p-4">
                    <h1 className={style.h1}> Chandani Atraye </h1>
                    <h4 className={style.h4}> Frontend Developer | React.js Developer</h4>
                    <div className={style.span}><span><a className ="text-white" href="chandaniatraye5010@gmail.com">chandaniatraye5010@gmail.com</a></span>
                    <span> |</span>
                    <span> <a className ="text-white" href="tel:+91XXXXXXXXXX"> +91XXXXXXXXXX</a></span>
                    </div>
                    
                    {/* <h2 style={{color:"blue",backgroundColor:"yellow",fontSize:"50px"}}> Its inline Css</h2> */}
                    {/* <h3 style={headingColor}>Hello (internal css)</h3> */}
                    {/* <h5 className={style.heading5}> India won ( external css)</h5> */ } 
                    {/* <p style={paraColor}>(uing function) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ea sapiente illo labore libero esse commodi illum similique officia! Veniam eum neque sint tempora esse ab corporis quidem, asperiores iste!</p> */}
                    
                </div>
            </div>
        </div>
        </section>
        </>
    )
}
export default Home