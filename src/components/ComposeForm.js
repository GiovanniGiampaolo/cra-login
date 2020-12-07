import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {TOTTI_TEXT} from './Profile'
import {Formik} from 'formik'
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

const EXAMPLE_OBJ_PREW = {
    title: 'Il Capitano',
    description: TOTTI_TEXT
}

export function ComposeForm() {

    const handlePreview = (values) => {
        window.sessionStorage.setItem('preview', JSON.stringify(values))
        window.open('/preview', '_blank')
    }

    return <React.Fragment>

        <Typography className="col-12 mb-4 font-weight-bold" variant={'h5'}>Genera la tua pagina
            dinamicamente</Typography>

        <Formik initialValues={EXAMPLE_OBJ_PREW}
                onSubmit={handlePreview}
        >
            {props => (<form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                             onSubmit={props.handleSubmit}>

                {/* TITLE */}
                <TextField
                    className="col-8 mb-4"
                    variant={'outlined'}
                    id="title"
                    name="title"
                    label="Title"
                    value={props.values.title}
                    onChange={props.handleChange}
                />

                {/* SUBTITLE */}
                <TextField
                    className="col-12 mb-4"
                    variant={'outlined'}
                    id="description"
                    name="description"
                    label="Dynamic text"
                    multiline
                    placeholder={'Write here text'}
                    value={props.values.description}
                    onChange={props.handleChange}
                />

                {/* SUBMIT */}
                <Button className="col-8 mb-2"
                        color="primary" variant="contained" type="submit">
                    Preview
                </Button>

                {/* GO BACK TO PROFILE */}
                <Button className="col-8"
                        color="secondary" variant="contained"
                >
                    <Link className={'link-no-style'} to="/profile">Go back to profile</Link>
                </Button>

            </form>)}
        </Formik>
    </React.Fragment>
}
