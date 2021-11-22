import React, {useState, useEffect, Fragment} from 'react';
import {Typography, Paper} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import API from '../API_Interface/API_Interface';

const usersTableAttributes = [
    {
        attributeName: 'User Name',
        attributeDBName: 'userName',
        align: 'left'
    },
    {
        attributeName: 'High Score',
        attributeDBName: 'highScore',
        align: 'left'
    }
];

let keyID = 0;
const nextKey = () => keyID++;
export default function HighScores(props)
{
    const [users, setUsers] = useState([]);
    console.log(`HighScores table contains the following accounts: ${JSON.stringify(users)}`);

    useEffect( () => {
        const api = new API();

        async function getUsers() {
            console.log(`HighScores.js::useEffect(): getUsers() called`);
            const usersJSONString = await api.highScores();
            console.log(`HighScores.js::useEffect(): users from the database: ${JSON.stringify(usersJSONString)}`);
            setUsers(usersJSONString.data);
        }

        getUsers();
    }, [])

    return <Fragment>
        {
            users.length > 0 &&
            <Typography component="div" variant='h3'>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="High Scores table">
                        <TableHead>
                            <TableRow key={nextKey()}>
                                {
                                    usersTableAttributes.map(attr => <TableCell key={nextKey()}
                                                                                   align={attr.align}>{attr.attributeName}</TableCell>)
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow
                                    key={nextKey()}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    {
                                        usersTableAttributes.map(attr => <TableCell key={nextKey()}
                                                                                       align={attr.align}>{user[attr.attributeDBName]}</TableCell>)
                                    }
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Typography>
        }
    </Fragment>
}