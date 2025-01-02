import React, {useState} from 'react'
import './register.css'

function Register() {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

  return (
    <>
{/* <div class="container">
    <h1>Register</h1>
    <form>
        <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required/>
        </div>
        <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required/>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Create a password" required/>
        </div>
        <div class="form-group">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required/>
        </div>
        <div class="form-group">
            <button type="submit">Register</button>
        </div>
        <div class="form-group">
            <p>Already have an account? <a href="#">Login here</a></p>
        </div>
    </form>
</div> */}

<div className="App">
            <button onClick={toggleModal} className="open-modal-button">
                Open Registration Form
            </button>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <h1>Register</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Create a password" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    name="confirm-password"
                                    placeholder="Confirm your password"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit">Register</button>
                            </div>
                        </form>
                        <button onClick={toggleModal} className="close-modal-button">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
</>
  )
}

export default Register