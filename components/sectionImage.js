import {useEffect} from "react";
import { Grid, makeStyles, Box, Toolbar, Typography } from "@material-ui/core";
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(theme => ({
home: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 100,
    marginLeft: 50,
    marginBottom:100,
    marginRight:50,

  }, 
boxImage:{
    width:'50%',
    '@media (max-width:600px)': {
        width:'100%',
    },
},
contenedorHome:{
    display:'flex',
    flexDirection:'column',
    flexWrap: 'nowrap',
	justifyContent: 'center',
	alignItems: 'center',
    width: '50%',
    paddingTop: 10,
    paddingBottom: 10,
    '@media (max-width:600px)': {
        width:'100%',
        paddingTop: 0,
        paddingBottom: 0,
        marginBottom: 20,
        marginTop:20,
    },
},
img:{
    "&:hover": {
    width: '85%',
    filter: 'drop-shadow(0 0 10px grey)',
          },
    width: '80%',
    filter: 'drop-shadow(0 0 5px grey)',
    transition: 'width 0.50s ease, filter 0.50s ease',
    '@media (max-width:600px)': {
        width:'100%',
    },
},
titlesection:{
    margin:'15px',
    '@media (max-width:600px)': {
        margin:'10px',
    },

  },
About:{
    width:'80%',
    '@media (max-width:600px)': {
        width:'100%',
    },
},
}))

const SectionImage = ({img, title, description, side}) => {
    const classes= useStyles();

    return (
    <Fade bottom>
    {side ? (
            <Box className={classes.home}>
                <Box align='center' className={classes.boxImage}>
                    <img src={img} alt='ahre' className={classes.img}/>
                </Box>
                <Box align='center' className={classes.contenedorHome}>
                    <Typography variant="h6" color="initial" className={classes.titlesection}>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="initial" className={classes.About}>
                        {description}
                    </Typography>
                </Box>
            </Box>
          ) 
          : 
          (<Box className={classes.home}>
                <Box align='center' className={classes.contenedorHome}>
                    <Typography variant="h6" color="initial" className={classes.titlesection}>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="initial" className={classes.About}>
                        {description}
                    </Typography>
                </Box>
                <Box align='center' className={classes.boxImage}>
                    <img src={img} alt='ahre' className={classes.img}/>
                </Box>
            </Box>
            )}
    </Fade>
    )
}
export default SectionImage;