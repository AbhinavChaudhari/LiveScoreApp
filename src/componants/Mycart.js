import { Button, Card, CardActions, CardContent,  Grid, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import vs from "../img/vs.png"

const Mycart = ({match}) => {
    return (
          
        <Card style={{marginTop:15}}>
            <CardContent  >

                   <Grid container justify="center" alignItems="center" spacing={8}>
                       <Grid item>
                            <Typography>
                                {match['team-1']}
                            </Typography>
                       </Grid>
                       <Grid item>
                           <img style={{width:85}} alt="img" src={vs} />
                       </Grid>
                       <Grid item>
                     
                           <Typography>
                               {match['team-2']}
                           </Typography>
                       </Grid>
                       
                   </Grid>
               
                <CardActions >
                  <Grid container justify="center" >
                  <Button item variant="outlined"  color="secondary">
                       Show
                   </Button>
                   <Button style={{marginLeft:10}} variant="outlined"  color="primary">
                       {match["dateTimeGMT"]}
                   </Button>
                  </Grid>
                </CardActions>
            </CardContent>
        </Card>

)
}

export default Mycart;