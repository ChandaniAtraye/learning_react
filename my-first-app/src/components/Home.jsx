import HomeImage from "../assets/images/dog_img1.jpg";

const Home = () =>{
    return(
        <>
        <section id="home" className="mt-4 mb-3">
        <div className="container">
            <div className="row">
                <div className="col-md-6 p-4">
                    <h1>Welcome To React Home Component</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ea sapiente illo labore libero esse commodi illum similique officia! Veniam eum neque sint tempora esse ab corporis quidem, asperiores iste!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias culpa fugit quisquam dolor ipsa repellendus officia numquam obcaecati at quibusdam vitae quo aperiam mollitia sint blanditiis quia modi, repellat asperiores?</p>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={HomeImage} alt="HomeImage"/>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}
export default Home