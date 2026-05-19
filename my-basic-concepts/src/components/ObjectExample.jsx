const UserCard = () =>{
    const user = {
        name:"Chandani",
        city:"Nagpur",
        profession:"Learner"
    };
    const user2 = {
        name:"CA",
        city:"Pune",
        profession:"Dev"
    };
    const employee1={
        name:"Amit",
        dept:"IT",
        address:{
            city:"Nashik",
            pincode:411018
        }
    }
    const employee2={
        name:"Anu",
        dept:"HR",
        address:{
            city:"Pune",
            pincode:410501
        }
    }
    const products = [
        {
            id:101,
            name:"Laptop",
            price:52000,
            specs:{
                ram:"8 GB",
                storage:"512 GB SSD"
            }

        },
        {
            id:102,
            name:"Mobile",
            price:64000,
            specs:{
                ram:"16 GB",
                storage:"512 GB IOS"
            }

        },
        {
            id:103,
            name:"Tablet",
            price:30000,
            specs:{
                ram:"4 GB",
                storage:"216 GB "
            }

        },
        {
            id:104,
            name:"SmartWatch",
            price:52000,
            specs:{
                ram:"4 GB",
                storage:"64 GB"
            }

        }
    ]
    return(
        <>
        <h2> User Details 1 object Example</h2>
        <div className= "container border border-rounded">
        <p><b>Name :</b>{user.name}</p>
        <p><b>City :</b>{user.city}</p>
        <p><b>Profession :</b>{user.profession}</p>
        </div>
        <div className= "container border border-rounded">
        <p><b>Name :</b>{user2.name}</p>
        <p><b>City :</b>{user2.city}</p>
        <p><b>Profession :</b>{user2.profession}</p>
        </div>
        <hr/>
        <div className="container border border-square ">
        <h2>User Details 1 object Example</h2>
        <p><b>Name :</b>{employee1.name}</p>
        <p><b>Dept :</b>{employee1.dept}</p>
        <p><b>City :</b>{employee1.address.city}</p>
        <p><b>Pincode :</b>{employee1.address.pincode}</p>

        <p><b>Name :</b>{employee2.name}</p>
        <p><b>Dept :</b>{employee2.dept}</p>
        <p><b>City :</b>{employee2.address.city}</p>
        <p><b>Pincode :</b>{employee2.address.pincode}</p>
        </div>
        <hr/>
        <h2> Complex object in array Example</h2>
        {products.map((p) =>(
            <div key={p.id} className="border p-3 m-4 border-rounded">
                <h3>Name : {p.name}</h3>
                <h3>Price : {p.price}</h3>
                <h3>Ram : {p.specs.ram}</h3>
                <h3>Storage : {p.specs.storage}</h3>

            </div>
        ))}
        </>
    )
};
export default UserCard
