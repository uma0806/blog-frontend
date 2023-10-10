import "./style.css"
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios"
import { useState } from "react";


function Login() {
    const [message, setMessage] = useState(null)
    const [formData, setFormData] = useState({email: "", password: ""})

    const handleOnChange = (e) => setFormData(p => ({...p, [e.target.name]: e.target.value}))
    const handleLogin = async () => {
        setMessage(null)
        try {
            const {data} = await axios.post("http://localhost:5000/login", formData)
            setMessage({msg: data.message, successs: true})
        } catch (error) {
            setMessage({msg: error.response.data.message, successs: false})

        }
    }


  return (
    <div className="container">
        <div  className="topSection">
            <div>
                <h3>Sign in</h3>
                <p>Dont have an acccount? sign up</p>
            </div>
            <div className="form">
                <input type="text" placeholder="Email" name="email" onChange={handleOnChange} />
                <input type="text" placeholder="Password" name="password" onChange={handleOnChange} />
            </div>
            <p className="forgot" >Forgot your password?</p>
            <div style={{display:"flex", justifyContent: "center"}} >
                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                />
            </div>
            <button className="submitBtn" onClick={handleLogin} >Sign in</button>
            {message && <div className={`msg ${message.successs ? 'succ' : "err"}`} >{message.msg}</div>}
            <div className="or">
                <p>or</p>
                <hr></hr>
            </div>
            <div className="oauth">
                <button>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 mr-2"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"></path><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"></path><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"></path><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"></path></svg>
                    Google
                </button>
                <button>
                    <svg viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" className="w-4 mr-2"><g id="Layer_1"></g><g id="Layer_2"><path d="M50 2.5c-58.892 1.725-64.898 84.363-7.46 95h14.92c57.451-10.647 51.419-93.281-7.46-95z" style={{fill: "rgb(24, 119, 242)"}}></path><path d="M57.46 64.104h11.125l2.117-13.814H57.46v-8.965c0-3.779 1.85-7.463 7.781-7.463h6.021V22.101c-12.894-2.323-28.385-1.616-28.722 17.66V50.29H30.417v13.814H42.54V97.5h14.92V64.104z" style={{fill: "rgb(241, 241, 241)"}}></path></g></svg>
                    Facebook
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login