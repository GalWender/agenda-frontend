import { Logo } from '../cmps/logo'
import { checkUsername, login, signup } from '../store/user/user.action'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Navigate, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { ReactComponent as RightArrowSvg } from '../assets/icons/right-arrow.svg'
import { eventBusService } from '../services/event-bus.service'
import { MdDoNotDisturbAlt } from 'react-icons/md'

export const LoginSignup = () => {

  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (params['*'] !== 'login' && params['*'] !== 'signup') navigate('/auth/login')
  }, [params])

  const onUserSignup = (ev) => {
    ev.preventDefault()
  }
  return (
    <section className="login-signup">
      {/* {params['*'] !== 'login' &&
                <Login/>} */}

      {/* {params['*'] !== 'signup' &&
                <NavLink to='/auth/signup'>Signup</NavLink>} */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </section>
  )
}

const Signup = (props) => {
  const dispatch = useDispatch()
  const [signupFields, handleSignupChange, setSignupFields] = useForm({
    fullname: '',
    username: '',
    password: '',
  })


  const onUserSignup = (ev) => {
    ev.preventDefault()
  }
  return (
    <section className="signup">
      <div className="flex signup-split-container">
        <div className="signup-content-wrapper">
          <div className="signup-content">
            <div className="signup-titles">
              <h1 className="title">Welcome to agenda.com</h1>
              <h2 className="sub-title">Get started - it's free. No credit card needed.</h2>
            </div>
            <form className="flex column form form-user-login-signup"
              onSubmit={(ev) => onUserSignup(ev)}>
              <label className="label-username" htmlFor="username">Enter email</label>
              <input className="input input-username"
                name="username"
                type="text"
                // value={username}
                placeholder="name@company.com"
              // onChange={handleChange} 
              />
              {/* <input className="input input-password"
                    name="password"
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={handleChange}
                /> */}
              <input type="submit" hidden />
              <button className="btn btn-svg btn-next">Continue</button>
            </form>
            <div className="flex justify-center align-center login-signup-separator split-line">
              <span className="separator-line"></span>
              <h2>OR</h2>
              <span className="separator-line"></span>
            </div>
            <button className="btn btn-login-google">
              <img className="img img-login-logo" src="https://cdn.monday.com/images/logo_google_v2.svg" aria-hidden="true" alt="" />
              <span>Continue with Google</span>
            </button>
            <div className="suggest-signup">
              <span className="suggest-signup-prefix">Already have an account?</span>
              <NavLink to='/auth/login'>Log in</NavLink>
            </div>
          </div>
        </div>
        <div className="side-img-wrapper">
          <div className="img-container">
            <img className="img" src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/soft-welcome.png" />
          </div>
          <div className="side-text-wrapper side-text">
            Trusted by <b>152,000+</b> customers worldwide
          </div>
        </div>
      </div>
    </section>
  )
}

const Login = (props) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isUsernameVerified, setUserNameVerified] = useState(false)

  const [loginFields, handleLoginChange, setLoginFields] = useForm({
    username: '',
    password: '',
  })

  const unsubscribeRef = useRef()

  useEffect(() => {
    unsubscribeRef.current = eventBusService.on('username-verify', (isVerified) => {
      console.log('username-verify:', isVerified)
      setUserNameVerified(isVerified)
    })
    return () => { unsubscribeRef.current() }
  })

  useEffect(() => {
    if (isUsernameVerified === 'LOGGEDIN_SUCCESSFULLY') {
      navigate('/workspace/home')
    }
  })

  const onUserLogin = (ev) => {
    ev.preventDefault()
    const { username, password } = loginFields
    if (isUsernameVerified !== 'VERIFIED' && password === '') {
      dispatch(checkUsername(username))
    }
    if (isUsernameVerified === 'VERIFIED') {
      dispatch(login(loginFields))
    }
    console.log('loginFields:', loginFields)
  }

  return (
    <Fragment>
      <Header />
      <section className="flex align-center column login">
        {isUsernameVerified === 'VERIFIED' ?
          <h1 className="title"><span>Log</span>In</h1> :
          <h1 className="title">Log in to your account</h1>}
        {isUsernameVerified === 'NOT_FOUND' &&
          <div className="flex align-center username-not-found">
            <div className="icon icon-svg"><MdDoNotDisturbAlt /></div>
            <div className="flex column align-center not-found-txt">
              <span className="msg">We couldn't find this email. Would you like to</span>
              <NavLink to='/auth/signup'>sign up instead?</NavLink>
            </div>
          </div>}
        <form className="flex column form form-user-login-signup"
          onSubmit={(ev) => onUserLogin(ev)}>
          {isUsernameVerified === 'VERIFIED' ?
            <label className="label-username verified" htmlFor="username">Email</label>
            :
            <label className="label-username" htmlFor="username">Enter your work email address</label>
          }
          <input className="input input-username"
            name="username"
            type="text"
            value={loginFields.username}
            placeholder="Example@company.com"
            onChange={handleLoginChange}
          />
          {isUsernameVerified === 'VERIFIED' &&
            <Fragment>
              <label className="label-username verified" htmlFor="password">Password</label>
              <input className="input input-password"
                name="password"
                type="password"
                value={loginFields.password}
                placeholder="password"
                onChange={handleLoginChange}
              />
            </Fragment>
          }
          <input type="submit" hidden />
          {isUsernameVerified === 'VERIFIED' ?
            <button className="btn btn-svg btn-next"><span>Log</span>In<RightArrowSvg /></button>
            :
            <button className="btn btn-svg btn-next">Next<RightArrowSvg /></button>
          }
        </form>
        <div className="flex justify-center align-center login-signup-separator split-line">
          <span className="separator-line"></span>
          <h2>Or Sign in with</h2>
          <span className="separator-line"></span>
        </div>
        <button className="btn btn-login-google">
          <img className="img img-login-logo" src="https://cdn.monday.com/images/logo_google_v2.svg" aria-hidden="true" alt="" />
          <span>Google</span>
        </button>
        <div className="suggest-signup">
          <span className="suggest-signup-prefix">Don't have an account yet?</span>
          <NavLink to='/auth/signup'>Sign up</NavLink>
        </div>
      </section>
    </Fragment>
  )
}

const Header = () => {
  return (
    <header className="main-header main-layout full">
      <div className="main-header-container main-layout">
        <Logo />
      </div>
    </header>
  )
}