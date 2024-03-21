import React from 'react';
import useInputState from '../../hooks/useInputState';

const HookForm = () => {
// const [name, handleNameChange] =useInputState('ROJONI')

    const emailState=useInputState('rojoni@go.co')
    
    const handleSubmit = e => {
        console.log('form', name)
        console.log('form', emailState.value)
        e.preventDefault();

}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name='name' className='border-black border'/>
                <br /><br /> */}
                <input {...emailState} type="email" name="email" id="email"  className='border-black border'/>
                <br /> <br />
                <input type="password" name="password" id=""  className='border-black border'/>
                <br />
              <input type="submit"  value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;