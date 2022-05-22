import React, {useState} from 'react'

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
      }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      }

    const handleSubmit = () => {
    console.log('New subscription with Name :"' + name +
         + '" and Email :"' + email + '"');
    
    }
    return (
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%'
        }}>  
            <form onSubmit={(e) => { handleSubmit(e) }} style={{
                padding: "30px",
                alignContent: "center"
            }}>
                    <h2> Sign Up</h2>
                    <label >
                        Name:
                    </label><br />
                    <input type="text" value={name} required onChange={(e)=> { handleChange(e) }} /><br />
                    <label>
                        Email:
                    </label><br />
                    <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
                    <label>
                        Password:
                    </label><br />
                    <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
                    <br />
                    <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SignUp;