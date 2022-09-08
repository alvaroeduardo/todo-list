import { Button, Container, Paper, TextField } from '@mui/material';
import React from 'react';

function Form() {
    return (
        <Paper style={{padding: "1rem"}}>

            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <TextField id="outlined-basic" label="Tarefa" variant="outlined" fullWidth/>
                <Button variant="text">ADD</Button>
            </div>


        </Paper>
    );
}

export default Form;