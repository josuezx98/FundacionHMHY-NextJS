import { Grid, makeStyles, Box, Toolbar, Typography } from "@material-ui/core";
import Fade from 'react-reveal/Fade';
const useStyles = makeStyles(theme => ({
contenedorTextoSections:{
    width: '100%',
    marginTop: '100px',
    marginBottom:'100px',
    paddingTop: 30,
    paddingBottom: 30,
    '@media (max-width:600px)': {
      paddingTop: 15,
      paddingBottom: 15,
      marginTop: '50px',
      marginBottom:'50px',
  },
  },
  titlesection:{
    margin:'42px',
    '@media (max-width:600px)': {
      margin:"10px",
  },
  },
  About:{
    width:'50%',
    '@media (max-width:600px)': {
      width:"80%",
  },
  },
}))

const SectionFirst = (props) => {
    const classes= useStyles();
    return (
        <Fade bottom>
            <Box align='center' className={classes.contenedorTextoSections}>
                  <Typography variant="h5" color="initial" className={classes.titlesection}>
                        {props.title}
                  </Typography>
                  <Typography variant="h6" color="initial" className={classes.About}>
                        {props.description}
                  </Typography>
            </Box>
        </Fade>
    )
}

export default SectionFirst;
