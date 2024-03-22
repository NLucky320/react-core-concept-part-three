

import Grandpa from './components/Grandpa/Grandpa'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {


const handleSignUpSubmit = data => {
console.log(data)
}
  
  const handleUpdateProfile = data => {
console.log(data)
  }

  return (
    <>
      <div className='text-center p-4'>
        <h2>Form Master</h2>
        {/* <SimpleForm></SimpleForm> */}
        {/* <StatefulForm></StatefulForm> */}
        {/* <RefForm></RefForm> */}
        {/* <HookForm></HookForm> */}
        {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
          <div>
            <h2>Sign Up</h2>
            <p>Please sign up right now</p>
          </div>
        </ReusableForm>
        <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitButtonText='Update'>
             <div>
            <h2>Update Profile
            </h2>
            <p>Please Keep Updated your Profile</p>
          </div>
        </ReusableForm> */}
        <Grandpa></Grandpa>
 </div>
    </>
  )
}

export default App
