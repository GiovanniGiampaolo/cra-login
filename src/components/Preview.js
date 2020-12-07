import React from 'react'
import {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export function Preview() {

    const [prev, setPrev] = useState(null)

    useEffect(() => {
        var prev = window.sessionStorage.getItem('preview')

        setPrev(JSON.parse(prev))
        // eslint-disable-next-line
    }, [])

    const handleGoBack = () => {
        window.sessionStorage.removeItem('preview')
        window.close()
    }

    return <React.Fragment>
        {prev &&
        <Typography className="col-12 font-weight-bold text-center mb-2" variant={'h5'}>{prev.title}</Typography>}
        {prev && <Typography className="col-12 mb-4 text-justify" variant={'body1'}>{prev.description}</Typography>}

        <div className="col-12 d-flex justify-content-center">
            <Button variant={'outlined'}
                    onClick={handleGoBack}
                    style={{backgroundColor: '#386dbe', color: 'white'}}>Go back</Button>
        </div>

    </React.Fragment>
}
