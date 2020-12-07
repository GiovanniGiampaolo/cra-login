import React from 'react'
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

    return <React.Fragment>

        <Typography variant={'h5'}
                    className="col-12 text-center pb-4 font-weight-bold">
            Benvenuto nel tuo profilo!
        </Typography>

        {/* USER DESC */}
        <Typography className="col-12 mb-4 text-justify" variant={'body1'}>
            {TOTTI_TEXT}
        </Typography>

        {/* ACTIONS */}
        <div className="d-flex flex-column align-items-center justify-content-center">
            <Button onClick={handleLogOut}
                    className="col-6 mb-2"
                    style={{
                        backgroundColor: '#bf3535',
                        color: 'white'
                    }}>Logout
            </Button>

            {/* GO TO COMPOSE */}
            <Button className="col-6"
                    style={{backgroundColor: '#d67b1f', color: 'white'}}>
                <Link className={'link-no-style'} to={'/compose'}>Compose</Link>
            </Button>
        </div>

    </React.Fragment>
}

export function GotoProfile() {
    return <div className="d-flex flex-column align-items-center justify-items-center">
        {/* TIPS */}
        <Typography className="col-12 mb-2 text-justify" variant={'body1'}>
            Devi loggarti per vedere questa porzione
        </Typography>

        {/* ACTION */}
        <Link to={'/'}>
            <Button fullWidth style={{backgroundColor: '#bf3535', color: 'white'}}>
                Back to Login
            </Button>
        </Link>
    </div>
}
