function FruitListArray() {
    const fruits =["Apple","Banana","Mango","orange"];
    const vegetable1 =["spinach","potato","tomato","fenugreek"];
    const vegetable2=["Carrot","onion"];
    const combinedItems =[...vegetable1,...vegetable2];
    const names =["Aman","Tanymay","Manoj","Anuj","Aakash","Anand"];
    const result = names.filter((names)=>{
        return names.startsWith("A");
    })
    
    const num=[1,2,3,4,5,6];
    const sortnum=[...num].sort((a,b)=>b-a);
    const reversenum=[...num].reverse();

  return (     
    <>
    <div className="container">
        
        <h2> Fruit list array Example </h2>
    <ul>
        {fruits.map((item,index)=>(
            <li key={index}> {item}</li>
        ))}
    </ul>
    <h2> Combined Array Example </h2>
    <ul>
        {combinedItems.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
    </ul>
    <h2> Filter Example</h2>
    {result.map((item,index)=>(
        <li key={index}>{item}</li>
    ))}

    <h2>Sort Number</h2>
    <ul>
        {sortnum.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
    </ul>


    <h2>Reverse Number</h2>
    <ul>
        {reversenum.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
    </ul>
   
    </div>
    </>
  )
}

export default FruitListArray