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

    const users=[
        {id:1,name:"kaustubh"},
        {id:2,name:"John"},
        {id:3,name:"Kumar"}
    ];
    const user =users.find(u=>u.id===1);

    const fruits1 =["Apple","Banana","Mango","orange"];
    const fruitIndex =fruits1.findIndex((fruit)=>fruit ==="Apple")

     const numbers=[1,2,3,4,5,6];
     const res = numbers.reduce((sum,num)=>{
        return sum+num;
     },0);

     const names1 =["mayuri","pallavi","Bunty","Bittu","Gaurav"];
     const results1 = names1.filter(name=>name.includes("B"));

     const names2 =["mayuri","pallavi","Bunty","Bittu","Gaurav","Vaishavi"];
     const checkName = names2.some((item)=>item.startsWith("V"));

     const numbers3 =[10,20,30,40];
     const result3 = numbers3.every((num)=>num > 5);

  return (     
    <>
    <div className="container">
        
        <h2> Fruit list array Example </h2>
    <ul>
        {fruits.map((item,index)=>(
            <li key={index}> {item}</li>
        ))}
    </ul>
    <hr/>
    <h2> Combined Array Example </h2>
    <ul>
        {combinedItems.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
    </ul>
    <hr/>
    <h2> Filter Example</h2>
    {result.map((item,index)=>(
        <li key={index}>{item}</li>
    ))}
    <hr/>

    <h2>Sort Number</h2>
    <ul>
        {sortnum.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
    </ul>
    <hr/>


    <h2>Reverse Number</h2>
    <ul>
        {reversenum.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
    </ul>
    <hr/>

    <h2> find Example</h2>
    <div className="className">
        <h2>{user.name}</h2>
    </div>
    <hr/>

    <h2> Find Index Example</h2>
    <h4> {fruitIndex}</h4>
    <hr/>

    <h2> Reduce Example </h2>
    <h3> {res}</h3>
    <hr/>

    <h2> Includes Example </h2>
    <h3>{results1}</h3>
    <hr/>

    <h2>Some Method example</h2>
    <h3>{checkName ? "V name found": "No name found"}</h3>
    <hr/>


    <h2>Every Example </h2>
    <h3>Numbers :{numbers3.join(".  ")}</h3>
    <h3> Result:{result3 ? "All numbers are greater than 5":"Some numbers are smaller"}</h3>

   
    </div>
    </>
  )
}

export default FruitListArray