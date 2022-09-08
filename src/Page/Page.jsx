import React from 'react';

import GlobalStyle from '../GlobalStyle';

import Form from '../Components/Form';
import TodoItem from '../Components/TodoItem';
import { Container, List } from '@mui/material';

function Page() {
    return (
        <Container maxWidth="xs" style={{marginTop: "1rem"}}>
            <GlobalStyle/>

            <Form/>

            <List sx={{bgcolor: 'background.paper', marginTop: "1rem" }}>
                <TodoItem/>
            </List>

            
        </Container>
    );
}

export default Page;