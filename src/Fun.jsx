function Fun() {
    let numbers = [1,2,3,4,5,6,7,8,9,10]
    return (
      <>
      <ul>
        { numbers.map((evenNumbers)=> (
            
               evenNumbers % 2 === 0 ? (<li key={evenNumbers}>{evenNumbers}</li>) : null
             
        ))} 
      </ul>
          
      </>
    )
  }
  
  export default Fun