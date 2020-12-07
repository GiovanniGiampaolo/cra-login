import React from 'react'
import {Formik} from 'formik'
import {IS_DEV_MODE, STATIC_AUTH_BODY} from '../constants'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const FORM_INIT_VALUES = {
    username: '',
    password: ''
}

export function LoginForm(props) {

    const fetchLogin = (values) => {

        !IS_DEV_MODE ? fetch('http://8a81d609aa5e.ngrok.io/winner/login', {
            method: 'POST',
            body: JSON.stringify(IS_DEV_MODE ? STATIC_AUTH_BODY : values),
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


    return <React.Fragment>

        <Typography variant={'h5'}
                    className="col-12 pb-4 text-center font-weight-bold">
            Login into our React app!
        </Typography>

        <Formik initialValues={IS_DEV_MODE ? STATIC_AUTH_BODY : FORM_INIT_VALUES}
                onSubmit={fetchLogin}
        >
            {props => (<form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                             onSubmit={props.handleSubmit}>

                {/* TITLE */}
                <TextField
                    className="col-8 pb-4"
                    variant={'outlined'}
                    id="username"
                    name="username"
                    label="Username"
                    value={props.values.username}
                    onChange={props.handleChange}
                />

                {/* SUBTITLE */}
                <TextField
                    className="col-8 pb-4"
                    variant={'outlined'}
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={props.values.password}
                    onChange={props.handleChange}
                />

                {/* SUBMIT */}
                <Button color="primary"
                        className="col-6"
                        variant="contained" type="submit">
                    login
                </Button>


            </form>)}
        </Formik>

    </React.Fragment>
}
