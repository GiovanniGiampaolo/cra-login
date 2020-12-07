import React from 'react'
import './App.css'
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom'
import {GotoProfile, ProfileComponent} from './components/Profile'
import {useEffect, useState} from 'react'
import {ComposeForm} from './components/ComposeForm'
import {Preview} from './components/Preview'
import {LoginForm} from './components/LoginForm'
import Card from '@material-ui/core/Card'

function App() {

    const [isUserAutherticated, setUserAuth] = useState(false)

    const [isPreviweMode, setPreviewMode] = useState(false)

    const [jwt, setJwt] = useState('no jwt')

    useEffect(() => {
        var prev = window.sessionStorage.getItem('preview')
        prev && setPreviewMode(!isPreviweMode)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        console.log('isUserAutherticated =>', isUserAutherticated, jwt)
    }, [isUserAutherticated, jwt])


    return (
        <React.Fragment>

            {/* BASE ROUTING */}
            <Router>
                <div className="App">


                    <div className="row mb-5">
                        {/* REDIRECT TO LOGIN */}
                        <Link className="col-md-6 col-12 align-content-center text-center link-no-style" to="/"><h2
                            style={{color: 'white'}}>Login</h2>
                        </Link>
                        {/* REDIRECT TO HOME */}
                        <Link className="col-md-6 col-12 align-content-center text-center link-no-style" to="/profile">
                            <h2 style={{color: 'white'}}>Profile</h2>
                        </Link>
                    </div>


                    <Card className="row container align-content-center justify-content-center flex-column p-5 w-auto" style={{maxWidth: 600}}>
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

                            {/* REDIRECT AUTH */}
                            {isUserAutherticated ? <Redirect to={'/profile'}/> : <Redirect to={'/'}/>}

                            {/* ACCESS PREV MODE */}
                            {isPreviweMode && <Redirect to={'/preview'}/>}

                        </Switch>
                    </Card>
                </div>
            </Router>
        </React.Fragment>

    )
}

export default App
