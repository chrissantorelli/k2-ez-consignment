import { Link } from 'react-router-dom';

export function SignUp() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Sign Up</h1>
            <form style={{ display: 'inline-block', textAlign: 'left' }}>
                <label style={{ display: 'block' }}>
                    Full Name:*
                    <input type="text" name="name" />
                </label>
                <label style={{ display: 'block' }}>
                    Username:*
                    <input type="text" name="username" />
                </label>
                <label style={{ display: 'block' }}>
                    Password:*
                    <input type="password" name="password" />
                </label>
                <label style={{ display: 'block' }}>
                    Re-type Password:*
                    <input type="password" name="password" />
                </label>
                <button>Submit</button>
                <br></br>
                <Link to="/login">Already have an account? Login</Link>
            </form>
            
        </div>
    );
}
