

const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
 console.log(e.target.name.value)
 console.log(e.target.email.value)
 console.log(e.target.phone.value)
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' className='border-black border'/>
                <br /><br />
                <input type="email" name="email" id="email"  className='border-black border'/>
                <br /> <br />
                <input type="tel" name="phone" id="phone"  className='border-black border'/>
                <br />
              <input type="submit"  value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;