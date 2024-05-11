import React from 'react'

function loginPage() {
  return (
    <>

    <div className='loginPage'>  LoginPage </div>

    
    


<div className='email'>UserEmail: </div>
<div className='emaile'>
   <input type="email" />
</div>
<br />
 <div className='text'>  Password: </div>

<div className='password'>

  <input type="password" />
  

  </div>
  The password should contain specail character,number and one capital letter 

<div className='button'>
  <input type="button" value="Login" />
</div>
      </>
  )
}

export default loginPage;