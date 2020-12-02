import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function Login() {
    return <Card className="col-12"
                 style={{
                     width: 400,
                     height: 430,
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     textAlign: 'center'
                 }}>

        <div className="row d-flex flex-column">

            <h2>Login into our app React app!</h2>

            {/* USERNAME */}
            <div className="col-8">
                <TextField variant={'outlined'} label={'Username'} style={{paddingBottom: 20}}/>
            </div>

            {/* PASSWORD */}
            <div className="col-8">
                <TextField variant={'outlined'} label={'Password'} style={{paddingBottom: 20}}/>

            </div>

            {/* SUBMIT */}
            <div className="col-8">
                <Button variant={'outlined'} style={{backgroundColor: '#386dbe', color: 'white'}}>Login</Button>
            </div>

        </div>
    </Card>

}

export default Login
