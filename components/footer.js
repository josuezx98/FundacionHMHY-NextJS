import {makeStyles, Box, Toolbar, Typography, Button, Grid, Container, ListItemText,  ListItem, List } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
    container:{
        background:'#181734',
        color: '#D1D1D1',
        fontFamily: 'Roboto, sans-serif',
    },
    root: {
        background: '#181734',
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      list:{
        background: '#181734',
      },
}))

const Footer = () => {
    const classes = useStyles();
    return (
    <Box className={classes.container}>
        <Grid container direction="row">
            <Grid item xs={12} sm={8} md={8}>
                <Box m={5}>
                    <Typography variant="h4" color="initial">
                        Help Me Help You
                    </Typography>
                    <Typography variant="h6" color="initial">
                        Help Me Help You ofrece cursos online de alta calidad. Nos especializamos en el desarrollo y perfeccionamiento profesional – donde quiera que estés, a cualquier hora.
                    </Typography>
                </Box>
                <Box m={5}>
                    <Button color='primary' size="small" href="https://josuerodriguezresume.netlify.app/">
                                Web Developer Josue Rodriguez   
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
                <Box m={5}>
                    <Typography variant="h5" color="initial">
                        Atajos:
                    </Typography>
                    <div className={classes.root}>
                        <List component="nav" aria-label="secondary mailbox folders" className={classes.list}>
                            <Link href="/">
                                <a><ListItemText primary="Inicio"/></a>
                            </Link>
                            <Link href="/educacion">
                                <a><ListItemText primary="Educacion" /></a>
                            </Link>
                            <Link href="/arteterapia">
                                <a><ListItemText primary="Arteterapia" /></a>
                            </Link>
                            <Link href="/lengua">
                                <a><ListItemText primary="Lengua de señas" /></a>
                            </Link>
                            <Link href="/psicodrama">
                                <a><ListItemText primary="Psicodrama" /></a>
                            </Link>
                            
                        </List>
                        
                    </div>
                </Box>
            </Grid>
        </Grid>
    </Box>
    )
}
export default Footer;