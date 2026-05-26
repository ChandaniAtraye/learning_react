const ConditionalStatement = () => {
    const age = 18;
    const isAdmin = true;
    const hasPermmision = true;

    function Admin(){
        return <h4> Admin Panel</h4>
    }
    function User(){
        return <h4> User Dashboard</h4>
    }
    const isAdminOrUser = true;
    const marks = 25;

    const items =[1,2,2,8];

  return (
    <>
    <div className="container">
        <h2> Ex4 : Render Different Components based on condition </h2>
        {isAdminOrUser ?<Admin/> : <User/>}
        <hr/>
        <h2>Ex1 Simple Conditional Example</h2>
        <h4> Your age : {age} </h4>
        {age>=18 ? <p>You are eligible for vote</p> : <p> you are not eligible </p>}
        <hr/>
        <h2> Ex2 Show only if Condition True </h2>
        {isAdmin && <p>Welcome Admin</p>}
        <hr/>
        <h2> Ex3 Hide content based on condition</h2>
        {hasPermmision ? <p> Access granted</p> : <p> Access Denied </p>  }
        <hr/>
        <h2>Ex5 marks Result  </h2>
        <h2 style={{
            color:marks>=35 ? "green" : "red",
            fontweight:900,
            fontSize:30
            }}>{marks>=35 ? "Pass" : "Fail"}</h2>
        <hr/>
        <h2> Ex6 array items length example </h2>
        {items.length>0 ? <p> you have {items.length} items</p> : <p> items Not found</p>}
        <hr/>
        

    </div>
    </>
  )
}

export default ConditionalStatement