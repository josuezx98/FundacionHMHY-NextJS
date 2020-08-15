import Container from '../components/container'
import {makeStyles, Box, Typography, Button } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import HeaderTop from '../components/headertop';
import SectionFirst from '../components/sectionFirst';
import SectionImage from '../components/sectionImage';
import Fade from 'react-reveal/Fade';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles(theme => ({
        sections:{
          display: 'flex',
          flexWrap:'wrap',
          justifyContent: 'space-around',
        },
        section:{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
        },
        titlesection:{
          margin:'10px'
        },
        section:{
          width:"30%",
          background: '#181734',
          padding: 10,
          transition: 'padding 0.50s ease',
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
        },
        About:{
          width:'70%',
        },
      home: {
        width:'100%',
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '50px',
        marginBottom:'50px',
      },      
      contenedorHome:{
        width: '80%',
        paddingTop: 15,
        paddingBottom: 15,
    },
    aboutInfoCurso:{
        width: '80%',
        margin: 10,
        webkitBoxShadow: '0px 0px 8px 5px rgba(0,0,0,0.30)',
          mozBoxShadow: '0px 0px 12px 5px rgba(0,0,0,0.30)',
          boxShadow: '0px 0px 8px 5px rgba(0,0,0,0.30)',
        '@media (max-width:600px)': {
            width:'90%',
            margin: 0,
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
    },
    boxImage:{
            width:'80%'
    },
    titlesectionCurso:{
        background: '#4B66FE',
        fontSize:37,
        color:'white',
        '@media (max-width:600px)': {
          fontSize:32,
      },
    },
    objetivo:{
      "&:hover": {
        color: '#4B66FE',
              },
        padding:15,
        borderBottom: '1px solid black',
        transition: 'padding 0.1s ease, color 0.1s ease',
    },
    aboutcurso:{
        padding:20,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    accordion:{
      width:'90',
      display: 'flex',
      flexDirection: 'column'
    },
    module:{
      "&:hover": {
        color: '#4B66FE',
              },
      padding: 20,
      webkitBoxShadow: '0px 0px 2px 2px rgba(0,0,0,0.30)',
            mozBoxShadow: '0px 0px 6px 2px rgba(0,0,0,0.30)',
            boxShadow: '0px 0px 2px 2px rgba(0,0,0,0.30)',
            margin: '2px',
            transition: 'padding 0.1s ease, color 0.1s ease',
              

    },
    finish:{
      display:'flex',
      width: '100%',
      justifyContent: 'center',
      marginBottom:50,
      marginTop: 50,
    },
    finishcontent:{
    width:'80%',
    margin: 10,
    webkitBoxShadow: '0px 0px 8px 5px rgba(0,0,0,0.30)',
      mozBoxShadow: '0px 0px 12px 5px rgba(0,0,0,0.30)',
      boxShadow: '0px 0px 8px 5px rgba(0,0,0,0.30)',
    '@media (max-width:600px)': {
        width:'90%',
        margin: 0,
    },
  }
}))

const Psicodrama = () => {
  const classes= useStyles();
  const modulouno =  [
    {description:'Origen e historia del psicodrama, Su creador Jacob Levi Moreno.'},
    {description:'Fundamentos teóricos (I), Espontaneidad. Conserva cultural. El proceso espontáneo-creador. La idea del Momento. Encuentro. Tele. Catarsis.'},
    {description:'El Psicodrama Pedagógico, Diferencias con el psicodrama terapéutico.'},
    {description:'Instrumentos del psicodrama, El Grupo. Director/a. Protagonista. Yo auxiliares. Público. Observador/a.'},
    {description:'Fases de una sesión: Caldeamiento. Dramatización. Eco o Comentario Grupal.'},
  ]
  const modulodos =  [
    {description:'Teoría de las Matrices, Identidad, familiar, social.'},
    {description:'Teoría de los Roles, Rol, contra-rol, yo operativo.'},
    {description:'Átomo cultural y social.'},
    {description:'Teoría de la escena. El sistema-escena. Leer en Escenas. Lo manifiesto y lo latente.'},
  ]
  const modulotres =  [
    {description:'Aproximación a la teoría de  los grupos: fases, momentos, dinámicas.'},
    {description:'Introducción al pensamiento y mirada sistémico, Su relación con la escena psicodramatica.'},
    {description:'Aporte de J.L. Moreno, Concepto del Co-inconsciente. Su relación con el insconsciente colectivo de C. Jung.'},
  ]
  const modulocuatro =  [
    {description:'Las técnicas esenciales: Cambio de roles. Espejo. Doble y doblaje. Soliloquio. Multiplicación dramática. La silla vacía. La escultura. Su relación con la teoría evolutiva de las Matrices Moreniana (matriz de identidad, familiar, social).'},
    {description:'Objetos intermediarios: Portadores de un rol y facilitadores de comunicación (cojines, objetos, dibujos, plastilina).'},
    {description:'Identificar y asignar roles simbólicos. Integración en la escena psicodramática. Ayudar a desvelar significados para el/la protagonista.'},
  ]
    return (
      <Container>
      <HeaderTop
       title="Psicodrama."
       subtitle="Formacion profesional"
       img='psico.jpg'
     />
     <SectionFirst
       title='Psicodrama'
       description='El psicodrama es una forma de psicoterapia, ideada por Jacob Levy Moreno y concebida inicialmente como terapia grupal o psicoterapia profunda de grupo. A lo largo del siglo xx se han desarrollado planteamientos que han llevado el psicodrama a la psicoterapia individual: la psicoterapia psicodramática bipersonal.'
     />
     <SectionImage
       title='Es mas de lo que parece..'
       description='En el Psicodrama interviene el cuerpo en acción e interacción con otros. A través de la acción se van poniendo en escena el pasado, el presente o el futuro, lo vivido, lo imaginado o fantaseado, teniendo la posibilidad de vivirlo desde el aquí y el ahora, con todas las emociones y sentimientos que aparecen ante la situación que se está abordando.'
       img='psicouno.jpg'
       side={true}
     />
     <SectionImage
       title='Arteterapia en los niños'
       description='En el Psicodrama interviene el cuerpo en acción e interacción con otros. A través de la acción se van poniendo en escena el pasado, el presente o el futuro, lo vivido, lo imaginado o fantaseado, teniendo la posibilidad de vivirlo desde el aquí y el ahora, con todas las emociones y sentimientos que aparecen ante la situación que se está abordando.'
       img='psicodos.jpg'
       side={false}
     />
     <Fade bottom>
       <Box className={classes.home}>
           <Box align='center'>
               <Box className={classes.aboutInfoCurso}>
                 <Typography color="default" className={classes.titlesectionCurso}>
                     Descripcion del curso
                 </Typography>
                 <Typography align='left' variant="subtitle1" color="initial" className={classes.aboutcurso}>
                 Aunque sea un programa 100% online, combinaremos la base de la formación teórica técnica del psicodrama con encuentros online EN VIVO de Mentoring y Prácticas Vivenciales, porque gracias a la tecnología, podemos recrear nuestros encuentros presenciales e igualmente compartir ejercicios prácticos y dinámicos a través de la pantalla de un ordenador.
                 </Typography>
                 </Box>
           </Box>
       </Box>
     </Fade>
     <Fade bottom>
     <Box className={classes.Home}>
       <Box align='center'>
       <Box className={classes.aboutInfoCurso}>
       <Accordion>
         <AccordionSummary
           expandIcon={<ExpandMoreIcon />}>
           <Box align='left' className={classes.accordion}>
             <Typography variant="h6">Modulo 1</Typography>
             
           </Box>
           
         </AccordionSummary>
         {modulouno.map((modulo)=>(
           <AccordionDetails className={classes.module}>
             <Typography align="left">                
                 {modulo.description}
             </Typography>
           </AccordionDetails>
         ))}
         </Accordion>
       <Accordion>
         <AccordionSummary
         expandIcon={<ExpandMoreIcon />}>
           <Box align='left' className={classes.accordion}>
             <Typography variant="h6">Modulo 2</Typography>
             
           </Box>
         </AccordionSummary>
         {modulodos.map((modulo)=>(
           <AccordionDetails className={classes.module}>
             <Typography align='left'>                
                 {modulo.description}
             </Typography>
           </AccordionDetails>
         ))}
       </Accordion>
       <Accordion>
         <AccordionSummary
         expandIcon={<ExpandMoreIcon />}>
           <Box align='left' className={classes.accordion}>
             <Typography variant="h6">Modulo 3</Typography>
             
           </Box>
         </AccordionSummary>
         {modulotres.map((modulo)=>(
           <AccordionDetails className={classes.module}>
             <Typography align='left'>                
                 {modulo.description}
             </Typography>
           </AccordionDetails>
         ))}
         </Accordion>
       <Accordion>
         <AccordionSummary
         expandIcon={<ExpandMoreIcon />}>
           <Box align='left' className={classes.accordion}>
             <Typography variant="h6">Modulo 4</Typography>
           </Box>
         </AccordionSummary>
         {modulocuatro.map((modulo)=>(
           <AccordionDetails className={classes.module}>
             <Typography align='left'>                
                 {modulo.description}
             </Typography>
           </AccordionDetails>
         ))}
       </Accordion>
       </Box>
       </Box>
     </Box>
     </Fade>
     <Fade bottom>
       <Box className={classes.finish}>
           <Box className={classes.finishcontent}>
                 <Typography align='center' variant="h3" color="default" className={classes.titlesectionCurso}>
                     Al acabar el curso
                 </Typography>
                 <Typography align='left' variant="subtitle1" color="initial" className={classes.objetivo}>
                 Integra: cuerpo, mente y corazón en relación a los otros/as.
                 </Typography>
                 <Typography align='left' variant="subtitle1" color="initial" className={classes.objetivo}>
                 Amplia: conciencia y entrena en habilidades socio-emocionales
                 </Typography>
                 <Typography align='left' variant="subtitle1" color="initial" className={classes.objetivo}>
                 Estimula: la imaginación y la creatividad para crear recursos propios.
                 </Typography>
                 <Typography align='left' variant="subtitle1" color="initial" className={classes.objetivo}>
                 Maximiza: el repertorio de roles interiorizados y su adecuada ejecución según exija la situación presente.
                 </Typography>
           </Box>
         </Box>
     </Fade>
   </Container>
    )
}
export default Psicodrama 
