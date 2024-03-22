

const ReusableForm = ({formTitle, handleSubmit, submitButtonText='Submit', children}) => {
    
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            tel: e.target.phone.value,
        }
        handleSubmit(data)
}

    return (
        <div>
            {/* <h2>{ formTitle}</h2> */}
            <h2>{ children}</h2>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name='name' className='border-black border'/>
                <br /><br />
                <input type="email" name="email" id="email"  className='border-black border'/>
                <br /> <br />
                <input type="tel" name="phone" id="phone"  className='border-black border'/>
                <br />
              <input type="submit"  value={submitButtonText} />
            </form>
        </div>
    );
};

export default ReusableForm;