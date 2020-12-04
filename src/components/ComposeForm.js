import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import {TOTTI_TEXT} from './Profile'

const EXAMPLE_OBJ_PREW = {
    title: 'Il Capitano',
    description: TOTTI_TEXT
}

export function ComposeForm() {

    const handlePreview = () => {
        window.sessionStorage.setItem('preview', JSON.stringify(EXAMPLE_OBJ_PREW))
        window.open('/preview', '_blank')
    }

    return <Card className="col-12"
                 style={{
                     width: 600,
                     height: 500,
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     textAlign: 'center'
                 }}>

        <div className="row d-flex flex-column">

            <h2>Genera la tua pagina dinamicamente</h2>

            <form>

                {/* TITLE */}
                <div className="col-8">
                    <TextField variant={'outlined'}
                               label={'Title'}
                               disabled={true}
                               value={'Il capitano'}
                               style={{paddingBottom: 20}}/>
                </div>

                {/* SUBTITLE */}
                <div className="col-8">
                    <TextField variant={'outlined'}
                               label={'Subtitle'}
                               disabled={true}
                               multiline
                               value={TOTTI_TEXT}
                               style={{paddingBottom: 20, width: 400}}
                    />
                </div>

                {/* SUBTITLE */}
                <div className="col-8">
                    <Button variant={'outlined'}
                            onClick={handlePreview}
                            style={{backgroundColor: '#386dbe', color: 'white'}}>Preview</Button>
                </div>

            </form>

        </div>
    </Card>
}
