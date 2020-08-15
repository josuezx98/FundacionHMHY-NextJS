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


const lenguadeseñas = () => {
    const classes= useStyles();
    const modulouno =  [
      {description:'Historia de la discapacidad'},
      {description:'¿qué es la discapacidad?'},
      {description:'Aspectos básicos del concepto de discapacidad'},
      {description:'Modelos y enfoques de la discapacidad'},
      {description:'El modelo social de la discapacidad'},
    ]
    const modulodos =  [
      {description:'Configuraciones en lenguaje de señas'},
    ]
    const modulotres =  [
      {description:'Los colores'},
      {description:'El abecedario'},
      {description:'Los números'},
      {description:'La familia'},
      {description:'La familia 2.'},
      {description:'los alimentos'},
      {description:'Los alimentos dos'},
    ]
    const modulocuatro =  [
      {description:'Verbos'},
      {description:'Verbos 2'},
      {description:'Verbos 3'},
      {description:'Los pronombres'},
      {description:'Los posesivos'},
      {description:'Preguntas'},
    ]
    return (
      <Container>
      <HeaderTop
       title="Lengua de señas."
       subtitle="Formacion profesional"
       img='lengua.png'
     />
     <SectionFirst
       title='Lengua de señas'
       description='La lengua de señas o lengua de signos es una lengua natural de expresión y configuración gesto-espacial y percepción visual (o incluso táctil por ciertas personas con sordoceguera),1​ gracias a la cual, los sordos pueden establecer un canal de comunicación con su entorno social, sea este conformado por otros sordos o por cualquier persona que conozca la lengua de señas empleada. Mientras que la lengua oral se basa en la comunicación a través de un canal vocal-auditivo, la lengua de señas lo hace por un canal gesto-viso-espacial'
     />
     <SectionImage
       title='que es..'
       description='La lengua de señas es la lengua natural de las personas Sordas. Una lengua que como cualquier otra, posee y cumple todas las leyes lingüísticas y se aprende dentro de la comunidad de usuarios a quienes facilita resolver todas las necesidades comunicativas y no comunicativas propias del ser humano, social y cultural. Existen muchos y excelentes trabajos publicados por diferentes especialistas sobre la lengua de señas que demuestran científicamente estas realidades.'
       img='lenguaimage.jpg'
       side={true}
     />
     <SectionImage
       title='A quien afecta'
       description='La lengua de señas es la lengua natural de las personas Sordas. Una lengua que como cualquier otra, posee y cumple todas las leyes lingüísticas y se aprende dentro de la comunidad de usuarios a quienes facilita resolver todas las necesidades comunicativas y no comunicativas propias del ser humano, social y cultural. Existen muchos y excelentes trabajos publicados por diferentes especialistas sobre la lengua de señas que demuestran científicamente estas realidades.'
       img='lenguados.jpg'
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
                 El curso de lengua de señas argentina tiene el propósito que el estudiante conozca, comprenda y aplique los fundamentos de la lengua de señas, con el fin de fomentar la inclusión, la comunicación y la interacción con las personas que posean alguna discapacidad auditiva. Es fácil de aprender y es recomendado para personas con alguna condición de sordera o individuos que deseen capacitarse para la atención de personas con dicha condición.
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
             <Typography >Fundamentos en inclusión y discapacidad auditiva</Typography>
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
             <Typography >Introducción</Typography>
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
             <Typography >Vocabulario: Señas básicas</Typography>
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
             <Typography >Léxico básico del lenguaje de señas argentina</Typography>
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
                     Al acabar el curso vas a:
                 </Typography>
                 <Typography variant="subtitle1" color="initial" className={classes.objetivo}>
                 Conocer los principios básicos de la comunicación en lenguaje de señas argentina.
                 </Typography>
                 <Typography variant="subtitle1" color="initial" className={classes.objetivo}>
                 Asimilar el vocabulario básico e intermedio del lenguaje de señas argentina.
                 </Typography>
                 <Typography variant="subtitle1" color="initial" className={classes.objetivo}>
                 Comprender las reglas léxicas del lenguaje de señas argentina.
                 </Typography>
                 <Typography variant="subtitle1" color="initial" className={classes.objetivo}>
                 Aplicar la comunicación en diferentes situaciones comunes.
                 </Typography>
           </Box>
         </Box>
     </Fade>
   </Container>
    )
}
export default lenguadeseñas;