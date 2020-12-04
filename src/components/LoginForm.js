import {Field, Form, Formik} from 'formik'
import {FORM_INIT_VALUES, IS_DEV_MODE, STATIC_AUTH_BODY} from '../constants'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'

export function LoginForm(props) {

    const fetchLogin = () => {

        !IS_DEV_MODE ? fetch('http://8a81d609aa5e.ngrok.io/winner/login', {
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
                props.setJwt(response.headers.get('Jwt'))
                props.setUserAuth(res)
            }) : props.setUserAuth(true)
    }


    return <Card className="col-12"
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
}
