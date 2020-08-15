import Container from '../components/container';
import {makeStyles, Box, Typography, Button } from "@material-ui/core";
import Link from "next/link";
import HeaderTop from '../components/headertop';
import SectionFirst from '../components/sectionFirst';
import SectionImage from '../components/sectionImage';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(theme => ({
        sections:{
          display: 'flex',
          flexWrap:'wrap',
          justifyContent: 'space-around',
        },
        section:{
          "&:hover": {
            webkitBoxShadow: '0px 0px 12px 7px rgba(0,0,0,0.40)',
            mozBoxShadow: '0px 0px 13px 6px rgba(0,0,0,0.40)',
            boxShadow: '0px 0px 12px 7px rgba(0,0,0,0.40)',
                  },
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          width:"300px",
          borderRadius: '10px',
          transition: 'boxShadow 0.50s ease, mozBoxShadow 0.50s ease, webkitBoxShadow 0.50s ease',
          webkitBoxShadow: '0px 0px 8px 5px rgba(0,0,0,0.30)',
          mozBoxShadow: '0px 0px 12px 5px rgba(0,0,0,0.30)',
          boxShadow: '0px 0px 8px 5px rgba(0,0,0,0.30)',
          padding:5,
          '@media (max-width:600px)': {
            margin:30,
        },
          
        },
        contenedorTextoSections:{
          width: '100%',
          marginTop: '50px',
          marginBottom:'50px',
          paddingTop: 30,
          paddingBottom: 30,
        },
    imgedu:{
        "&:hover": {
        filter: 'drop-shadow(0 0 10px grey)',
              },
        width: '80%',
        borderRadius: 10,
        filter: 'drop-shadow(0 0 5px grey)',
        transition: 'width 0.50s ease, height 0.50s ease, filter 0.50s ease',
        height:'70%',
    },
    titlecurso:{
      '@media (max-width:600px)': {
        fontSize:25,
    },
    }
}))


const Pagedos = () => {
const classes = useStyles()

const sections =[
  {img:'psico.jpg', name:'Psicodrama', link:'/psicodrama'},
  {img:'lengua.png', name:'Lengua de señas', link:'/lengua'},
  {img:'artetwo.jpg', name:'Arteterapia', link:'/arteterapia'}
]

return(
        <Container>
          <HeaderTop
            title="Help Me Help You."
            subtitle="Formacion profesional"
            img='Educacion.jpg'
          />
          <SectionFirst
            title='Como funciona'
            description='En Terapeu, conectamos a personas con psicólogos. Las sesiones se llevan a cabo en forma online para mayor comodidad y privacidad. Estamos convencidos de que hacer terapia funciona y puede ayudar a mucha gente!'
          />
          <SectionImage
            title='Aprende sin límites y a tu propio ritmo'
            description='Cada curso incluye video clases, lecturas y actividades prácticas, que puedes completar a tu propio ritmo, durante tus horarios de disponibilidad y desde cualquier dispositivo conectado a internet.'
            img='eduone.png'
            side={true}
          />
          <SectionImage
            title='Recibe respuesta a tus dudas'
            description='Cada curso cuenta con su propia comunidad de aprendizaje, donde los estudiantes realizan aportes, además formulan y responden preguntas al instante.'
            img='edutwo.png'
            side={false}
          />
          <Fade bottom>
              <Box align='center' className={classes.contenedorTextoSections}>
                  <Typography variant="h3" color="default" className={classes.titlecurso}>
                    Cursos
                  </Typography>
              </Box>
              <Box align='center' className={classes.contenedorTextoSections}>
                  <Box className={classes.sections}>
                      {sections.map((section) => (
                        <Box className={classes.section}>
                        <img src={section.img} alt='ahre' className={classes.imgedu}/>
                        <Typography variant="h6" color="initial">
                          {section.name}
                        </Typography>
                        <Button variant="contained" color="primary" size="small">
                        <Link href={section.link}>
                            <a className='button'>Acerca del curso</a>
                        </Link>
                        </Button>
                      </Box>
                      ))}
                  </Box>
              </Box>
          </Fade>
        </Container>
)}
export default Pagedos;