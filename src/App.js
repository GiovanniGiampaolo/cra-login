import './App.css'
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom'
import {GotoProfile, ProfileComponent} from './components/Profile'
import {useEffect, useState} from 'react'
import {ComposeForm} from './components/ComposeForm'
import {Preview} from './components/Preview'
import {LoginForm} from './components/LoginForm'

function App() {

    const [isUserAutherticated, setUserAuth] = useState(false)

    const [isPreviweMode, setPreviewMode] = useState(false)

    const [jwt, setJwt] = useState(undefined)

    useEffect(() => {
        var prev = window.sessionStorage.getItem('preview')
        prev && setPreviewMode(!isPreviweMode)
    }, [])

    useEffect(() => {
        console.log('isUserAutherticated =>', isUserAutherticated, jwt)
    }, [isUserAutherticated])


    return (
        <Router>
            <div className="App">

                {/* REDIRECT TO LOGIN */}
                <Link className={'col-6 link-no-style'} to="/"><h2 style={{color: 'white'}}>Login</h2></Link>
                {/* REDIRECT TO HOME */}
                <Link className={'col-6 link-no-style'} to="/profile"><h2 style={{color: 'white'}}>Profile</h2></Link>

                <Switch>

                    {/* ROUTE LOGIN */}
                    <Route path={'/'} exact>
                        <LoginForm setUserAuth={setUserAuth} setJwt={setJwt}/>
                    </Route>

                    {/* ROUTE PROFILE */}
                    <Route path={'/profile'} exact>
                        {isUserAutherticated ? <ProfileComponent setUserAuth={setUserAuth}/> : <GotoProfile/>}
                    </Route>

                    {/* COMPOSE FORM */}
                    <Route path={'/compose'}>
                        <ComposeForm/>
                    </Route>

                    {/* PREVIEW */}
                    <Route path={'/preview'}>
                        <Preview/>
                    </Route>

                </Switch>

            </div>

            {/* REDIRECT AUTH */}
            {isUserAutherticated ? <Redirect to={'/profile'}/> : <Redirect to={'/'}/>}

            {/* ACCESS PREV MODE */}
            {isPreviweMode && <Redirect to={'/preview'}/>}

        </Router>

    )
}

export default App
