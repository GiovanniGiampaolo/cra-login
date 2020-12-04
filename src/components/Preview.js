import {useEffect, useState} from 'react'
import Card from '@material-ui/core/Card'
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

    return <div className="App row">
        {prev && <Card style={{
            width: 600,
            height: 500,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <Typography variant={'h3'}>{prev.title}</Typography>
            <Typography style={{margin: 30, textAlign: 'justify'}}>{prev.description}</Typography>

            <Button variant={'outlined'}
                    onClick={handleGoBack}
                    style={{backgroundColor: '#386dbe', color: 'white'}}>Go back</Button>
        </Card>
        }
    </div>
}
