import React from 'react'
import { Button } from '../../../Components/Styled Components/AppStyle'

const SignRegister = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        console.log(formData)
      };

  return (
    <form onSubmit={handleSubmit}  style={{ margin:'auto', textAlign: 'center', width:'60vh', height:'25vh'}}>
        <h2>Sign Register</h2>
        <p>Are you sure you want to sign the register?</p>
        <br/>
        <Button>Yes</Button>        
    </form>
  )
}

export default SignRegister