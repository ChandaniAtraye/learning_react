import reactLogo from '../assets/react.svg'
const Home=()=>{
    return(
        <>
        <section>
            <div className="container">
                <div className="row mt-5 pt-5">
                    <div className="col-md-6">
                        <h1>Welcome to React Routing</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas explicabo sequi voluptatem voluptates illum earum incidunt minus nihil, facere vel dolore a ipsum nisi ipsam molestias assumenda officiis! Dolore, adipisci?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur iusto inventore vero soluta quibusdam labore temporibus nulla, voluptatibus minima doloremque mollitia fuga magnam sed quaerat, maiores sunt, corrupti nam! Sapiente.</p>
                    </div>
                    <div className="col-md-6 pt-10 ">
                        <img src={reactLogo} alt='logo' className='img-fluid w-100'/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};
export default Home