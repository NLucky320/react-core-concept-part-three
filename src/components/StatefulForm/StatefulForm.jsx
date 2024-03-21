import { useState } from "react";

const StatefulForm = () => {
    const [email, setEmail] = useState(null);
    const[password,setPassword]=useState(null)
    const [name, setName] = useState('')
    const[error,setError]=useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
    setError('password must be 6 character or longer')
        } else {
            setError('')
}

        console.log(email, password, name)
    }
        const handleEmailChange = e => {
       
            console.log(e.target.value)
            setEmail(e.target.value)
        }

        const handlePasswordChange = e => {
            console.log(e.target.value)
            setPassword(e.target.value)
        }

        const handleNameChange = e => {
            console.log(e.target.value)
            setName(e.target.value)
        }
    
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" value={name} name='name' className='border-black border'/>
                <br /><br />
                <input
                onChange={handleEmailChange} type="email" name="email" id="email" className='border-black border' />
                <br /> <br />
                <input type="tel" name="phone" id="phone"  className='border-black border'/>
                <br /> <br />
                <input onChange={handlePasswordChange} type="password" name="password" id=""  className='border-black border' required/>
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p className="text-black">{ error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;