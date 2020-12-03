import './App.css'
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom'
import {GotoProfile, TOTTI_TEXT} from './components/profile'
import {useEffect, useState} from 'react'
import {Field, Form, Formik} from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const FORM_INIT_VALUES = {
    username: '',
    password: ''
}

const STATIC_AUTH_BODY = {
    username: 'superadmin@dstech.it',
    password: 'password123'
}

function App() {

    const [isUserAutherticated, setUserAuth] = useState(false)

    const [jwt, setJwt] = useState(undefined)

    useEffect(() => {
        console.log('isUserAutherticated =>', isUserAutherticated)
    }, [isUserAutherticated])

    const fetchLogin = () => {

        fetch('http://8a81d609aa5e.ngrok.io/winner/login', {
            method: 'POST',
            body: JSON.stringify(STATIC_AUTH_BODY),
            headers: {
                'Content-Type':
                    'application/json'
            }
        })
            .then(response => {
                const res = response.json()

                console.log(response.headers.get('Jwt'))
                setJwt(response.headers.get('Jwt'))
                setUserAuth(res)
            })
    }

    const handleLogOut = () => {
        // todo remove jwt from session
        setUserAuth(false)
    }

    return (
        <Router>
            <div className="App">

                {/* REDIRECT TO LOGIN */}
                <div className="col-6">
                    <Link to="/"><h2 style={{color: 'white'}}>Login</h2></Link>
                </div>
                {/* REDIRECT TO HOME */}
                <div className="col-6">
                    <Link to="/profile"><h2 style={{color: 'white'}}>Profile</h2></Link>
                </div>


                <Switch>

                    {/* ROUTE LOGIN */}
                    <Route path={'/'} exact>
                        <Card className="col-12"
                              style={{
                                  width: 400,
                                  height: 400,
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  textAlign: 'center'
                              }}>

                            <div className="row d-flex flex-column">

                                <h2>Login into our app React app!</h2>

                                <Formik initValues={FORM_INIT_VALUES}
                                    // onSubmit={fetchLogin}
                                >
                                    {(props) => (<Form onSubmit={props.handleSubmit}>


                                        {/* USERNAME */}
                                        <div className="col-8">
                                            <Field
                                                name="username"
                                            >{() => <TextField variant={'outlined'}
                                                               label={'Username'}
                                                               style={{paddingBottom: 20}}/>}
                                            </Field>

                                        </div>

                                        {/* PASSWORD */}
                                        <div className="col-8">
                                            <Field
                                                name="password"
                                            >{() => <TextField variant={'outlined'}
                                                               type="password"
                                                               label={'Password'}
                                                               style={{paddingBottom: 20}}
                                            />}
                                            </Field>
                                        </div>

                                        {/* SUBMIT */}
                                        <div className="col-8">
                                            <Button variant={'outlined'}
                                                    onClick={fetchLogin}
                                                    style={{backgroundColor: '#386dbe', color: 'white'}}>Login</Button>
                                        </div>

                                    </Form>)}

                                </Formik>

                            </div>
                        </Card>
                    </Route>

                    {/* PROFILE LOGIN */}
                    <Route path={'/profile'} exact>
                        {isUserAutherticated ? <Card className="col-12"
                                                     style={{
                                                         width: 400,
                                                         height: 430,
                                                         display: 'flex',
                                                         justifyContent: 'center',
                                                         alignItems: 'center',
                                                         textAlign: 'center'
                                                     }}>

                            <div className="row d-flex flex-column">

                                <h2>Benvenuto nel tuo profilo!</h2>

                                {/* USERNAME */}
                                <div className="col-8">
                                    <Typography variant={'body1'} style={{margin: 30, textAlign: 'justify'}}>
                                        {TOTTI_TEXT}
                                    </Typography>
                                </div>

                                {/* ACTION */}
                                <div className="col-8">
                                    <Button variant={'outlined'}
                                            onClick={handleLogOut}
                                            style={{backgroundColor: '#bf3535', color: 'white'}}>Logout</Button>
                                </div>

                            </div>
                        </Card> : <GotoProfile/>}
                    </Route>

                </Switch>

            </div>

            {isUserAutherticated ? <Redirect to={'/profile'}/> : <Redirect to={'/'}/>}

        </Router>

    )
}

export default App
