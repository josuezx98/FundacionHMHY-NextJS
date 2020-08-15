import Link from "next/link";
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
AppBar: {
    background: 'white',
}
}))

const Navigation = () => {
const classes = useStyles()

    return(
  <AppBar className={classes.AppBar}>
  <Grid container>
        <Grid item xs={6} sm={6} md={6}>
            <img src='/me.png' alt="help"  className='imagen'/>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
            <div className='nav'>
                <Link href="/">
                    <a className='button'>Inicio</a>
                </Link>
                <Link href="/educacion">
                    <a className='button'>Educacion</a>
                </Link>
            </div>
        </Grid>
    </Grid>
        <style jsx>
        {`
        .imagen {
            width: 60%;
        }
        .nav {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-end;
            align-items: center;
            align-content: stretch;
            padding:10px;
            margin: 10px;
        }
        .button {
            color: grey;
            font-size: 30px;
            margin: 10px;
            border-bottom: 1px solid black;
            padding: 10px;
            border-radius: 5px;
            transition: color 0.50s ease, border-color 0.50s ease,
            background 0.50s ease;
        }
        .button:hover,
        .button:focus,
        .button:active{
            color: black;
            background: #f0f0f0;
        }
        @media (max-width: 700px) {
            .button {
              font-size: 15px;
              margin: 5px;
              padding: 5px;
            }
            .imagen {
                width: 100%;
            }
            .nav {
                padding:2px;
                margin: 2px;
            }
          }
        `}
        </style>
    </AppBar>
)};

export default Navigation;
