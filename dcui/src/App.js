import {Fragment} from "react";
import MainMenu from "./Menu/MainMenu";

export default function App({user, logoutAction}) {
  return (
      <Fragment>
        <MainMenu user={user} logoutAction={logoutAction}/>
      </Fragment>
  )
}

// Saving in case we decide to repurpose:
/*
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const UserBanner = ({user, title, logoutAction}) => {

  return (
      <Box sx={{ display: 'flex', width: '100%', minWidth: 600, justifyContent: 'center' }}>

        <Grid sx={{ flexGrow: 1, width: '100%' }} container spacing={1}>
          <Grid item justifyContent='center' xs={12}>
            <Typography variant="h3"  component="div">{user}</Typography>
          </Grid>

          <Grid item xs={12} justifyContent='center'>
            <Button onClick={() => logoutAction()}>Logout</Button>
          </Grid>

        </Grid>
      </Box>

  )
};
*/