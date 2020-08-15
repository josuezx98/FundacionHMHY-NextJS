import { Grid, makeStyles, Box, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    contenedorTexto:{
      margin: '190px',
      '@media (max-width:600px)': {
        margin: 10,
    },
    },
    texto:{
      border: '2px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '3px',
      display: 'inline-block',
      textAlign: 'center',
      padding: '20px 60px',
      color: 'white',
      background: 'rgba(133, 133, 133, 0.6)',
      '@media (max-width:600px)': {
        padding: '10px 30px',
    },
      },

      titulo:{
        "&:hover": {
          fontSize: '28px',
        },
        fontSize: '26px',
        transition: 'font-size 0.50s ease',
      },
      subtitulo:{
        "&:hover": {
          fontSize: '23px',
        },
        fontSize: '21px',
        transition: 'font-size 0.50s ease',
      },
    
}))


const HeaderTop = (props) => {
const classes = useStyles(); 
const img = props.img

    return (
        <div className='contenedor'>
            <Toolbar/>
              <Box align='center' className={classes.contenedorTexto}>
                <Box className={classes.texto}>
                  <h1 className={classes.titulo}>
                  {props.title}
                  </h1>
                  <h2 className={classes.subtitulo}>
                    {props.subtitle}
                  </h2>
                </Box>
              </Box>
            <Toolbar/>
          <style jsx>
              {`
            .contenedor {
                color:white;
                background: url(${img});
                background-size: 100% 100%;
                width: 100%;
                background-position:center;

                max-height:600px;
                cursor:pointer;
            }
              `}
          </style>
        </div>
    )
}
export default HeaderTop;