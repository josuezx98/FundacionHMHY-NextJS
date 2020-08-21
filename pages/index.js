import Container from '../components/container'
import {makeStyles, Box, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import ForumIcon from '@material-ui/icons/Forum';
import Fade from 'react-reveal/Fade';
import HeaderTop  from '../components/headertop';
import SectionFirst from '../components/sectionFirst';
import SectionImage from '../components/sectionImage';

const useStyles = makeStyles(theme => ({
  sections:{
    display: 'flex',
    flexWrap:'wrap',
    justifyContent: 'space-around',
  },
  titlesection:{
    margin:'42px'
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
    width:200,
    background: '#E5F8FC',
    padding: 30,
    margin:'20px',
    borderRadius: '10px',
    webkitBoxShadow: '0px 0px 8px 5px rgba(0,0,0,0.30)',
    mozBoxShadow: '0px 0px 12px 5px rgba(0,0,0,0.30)',
    boxShadow: '0px 0px 8px 5px rgba(0,0,0,0.30)',
  },
  contenedorTextoSections:{
    width: '100%',
    marginTop: '100px',
    marginBottom:'100px',
    paddingTop: 30,
    paddingBottom: 30,
  },
  icon:{
    fontSize: 50,
    transition: 'font-size 0.20s ease',
  },
}))

const Home = () => {
  const classes = useStyles()
  const rows = [
    {title:'Encontra', description:'el mejor psicólogo para trabajar tu problema o malestar.', icon:<SearchIcon className={classes.icon}/>},
    {title:'Profesionalismo', description:'Todos nuestros psicólogos son certificados y con experiencia.', icon:<CardMembershipIcon className={classes.icon}/>},
    {title:'Comodidad', description:'Ganá tiempo y hacé terapia desde donde estés', icon:<ImportantDevicesIcon className={classes.icon}/>},
    {title:'Seguimiento', description:'Contá con nosotros para lo que necesites durante toda la duración del tratamiento.', icon:<ForumIcon className={classes.icon}/>}
  ];

  const steps = [
    {num:'1', description:'Manda un whats app con la palabra consulta'},
    {num:'2', description:'Un psicólogo te contacta para entender tu consulta en una entrevista inicial gratuita.'},
    {num:'3', description:'Pagás la siguiente sesión por medios electrónicos.'},
    {num:'4', description:'Empezás terapia por videollamada con tu psicólogo.'},
  ]

  return (
      <Container>
          <HeaderTop
            title="Convertite en la mejor versión de vos mismo."
            subtitle="¡Hacer terapia funciona y puede ayudarte!"
            img='oscar.jpg'
          />
          <SectionFirst
          title='Sobre Help Me Help You'
          description='En Help Me Help You, conectamos a personas con psicólogos. Las sesiones se llevan a cabo en forma online para mayor comodidad y privacidad. Estamos convencidos de que hacer terapia funciona y puede ayudar a mucha gente!'
          />
          <Fade bottom>
            <Box align='center' className={classes.contenedorTextoSections}>
              <Box className={classes.sections}> 
                {rows.map((row)=>(
                  <Box className={classes.section}>
                    <Box align='center'>
                      {row.icon}
                    </Box>
                      <Typography variant="h6" color="initial">
                          {row.title}
                      </Typography>
                      <Typography variant="subtitle1" color="initial">
                          {row.description}
                      </Typography>
                  </Box>
                ))}
                </Box>
            </Box>
          </Fade>
          <SectionImage
            title='Hablá con tu psicólogo desde la comodidad de tu hogar'
            description='La vida está llena de actividades y el tiempo es nuestro bien más preciado. Por eso, en Terapeu te conectamos con un psicólogo en línea para que lleves adelante tus sesiones desde donde estés. No pierdas tiempo viajando. Si necesitas seguir estudiando, llegás cansado del trabajo o tenes que cuidar a tus hijos, hacer terapia desde tu casa te puede resultar conveniente! Vas a poder encontrar tu mejor versión sin alterar tus actividades.'
            img='home.jpg'
            side='false'
          />
          <Fade bottom>
              <Box align='center' className={classes.contenedorTextoSections}>
                <Typography variant="h5" className={classes.titlesection}>
                  ¿Cómo empiezo? Es muy sencillo:
                </Typography>
                <Box className={classes.sections}>
                  {steps.map((step)=> (
                  <Box className={classes.section}>
                    <Typography variant="h2" color="initial" className={classes.icon}>{step.num}</Typography>
                    <Typography variant="subtitle1" color="initial">
                      {step.description}
                    </Typography>
                  </Box>
                  ))}
                </Box>
              </Box>
          </Fade>
      </Container>
  )
}
export default Home;