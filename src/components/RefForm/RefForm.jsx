import React, { useEffect, useRef } from 'react';

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null)
    
    useEffect(() => {
    nameRef.current.focus()
    emailRef.current.focus()
    passwordRef.current.focus()
},[])


    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name='name' className='border-black border'/>
                <br /><br />
                <input ref={emailRef} defaultValue={'assad@gmail.com'} type="email" name="email" id="email"  className='border-black border'/>
                <br /> <br />
                <input ref={passwordRef} type="password" name="password" id=""  className='border-black border'/>
                <br />
              <input type="submit"  value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;