import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'
import {IS_DEV_MODE} from '../constants'

export const TOTTI_TEXT = 'Francesco Totti nasce a Roma il 27 settembre 1976. Dimostra sin da piccolo grande confidenza con la sfera di cuoio. La sua prima squadra è la Fortitudo, piccola società del quartiere San Giovanni, dove vive la famiglia. Dalla Fortitudo di Trillò, Francesco passa alla Smit Trastevere, alla corte di Pergolati e Paolucci.'

export function ProfileComponent(props) {

    const handleLogOut = () => {
        sessionStorage.removeItem('Jwt')

        IS_DEV_MODE && props.setUserAuth(false)
    }

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
                        style={{
                            backgroundColor: '#bf3535',
                            color: 'white',
                            marginBottom: 20
                        }}>Logout</Button>
            </div>


            {/* GO TO COMPOSE */}
            <div className="col-8">
                <Button variant={'outlined'}
                        style={{backgroundColor: '#d67b1f', color: 'white'}}>
                    <Link className={'link-no-style'} to={'/compose'}>Compose</Link>
                </Button>
            </div>

        </div>
    </Card>
}

export function GotoProfile() {
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

            {/* USERNAME */}
            <div className="col-8">
                <Typography variant={'body1'} style={{margin: 30, textAlign: 'justify'}}>
                    Devi loggarti per vedere questa porzione
                </Typography>
            </div>

            {/* ACTION */}
            <div className="col-8">
                <Link to={'/'}>
                    <Button variant={'outlined'} style={{backgroundColor: '#bf3535', color: 'white'}}>Back to
                        Login</Button>
                </Link>
            </div>

        </div>
    </Card>
}
