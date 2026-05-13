const Contact = () => {
    return(
        <>
        <section id="contact" className="mt-4 mb-3 ">
            <form>
                <div className="container">
                    <div className="row">
                        <h3 className=" contact_heading mt-3 mb-3"> Contact Us</h3>
                        
                        <div className="col-md-6 border border-dark info_form">
                            <div className="row p-3">
                                <div className="col-md-6 mb-3">
                                    <label for="forname" className="form-label">Enter name</label>
                                    <input type="text" className="form-control" id="forname" placeholder="Enter name"/>
                                </div>
                                <div className="col-md-6  mb-3">
                                    <label for="forname" className="form-label">Enter email address</label>
                                    <input type="email" className="form-control" id="forname" placeholder="Enter Email"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="fornumber" className="form-label">Enter number</label>
                                    <input type="number" className="form-control" id="fornumber" placeholder="Enter number"/>
                                </div>
                                <div className="col-md-6  mb-3">
                                    <label for="fornumber" className="form-label">Enter alternate number</label>
                                    <input type="number" className="form-control" id="fornumber"
                                        placeholder="Enter alternate number"/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select Country</option>
                                        <option value="1">India</option>
                                        <option value="2">USA</option>
                                        <option value="3">UK</option>
                                        <option value="4">Australia</option>
                                        <option value="5">Germany</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select State</option>
                                        <option value="1">Maharashtra</option>
                                        <option value="2">Gujrat</option>
                                        <option value="3">UP</option>
                                        <option value="4">MP</option>
                                        <option value="5">Goa</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select City</option>
                                        <option value="1">Pune</option>
                                        <option value="2">Mumbai</option>
                                        <option value="3">Kolhapur</option>
                                        <option value="4">Nagpur</option>
                                        <option value="5">Nashik</option>
                                    </select>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="col-md-3">
                                    <button type="submit" className=" submit_btn btn btn-success">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="  col-md-6 P-3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d60278.274760335524!2d72.95155640833875!3d19.221732869330697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEzJzAxLjgiTiA3MsKwNTgnNTIuMiJF!5e0!3m2!1sen!2sin!4v1778667584459!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            
                        </div>
                       
                    </div>
                </div>
            </form>

        </section>

        </>
    )
}
export default Contact


