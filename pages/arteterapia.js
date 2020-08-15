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
}))

const Arteterapia = () => {
    const classes = useStyles(); 

    const modulouno =  [
      {description:'¿Por qué la arteterapia no es lo mismo que las clases de arte convencionales ?'},
      {description:'Cómo utilizar diferentes métodos no verbales de trabajo con las personas que tienen problemas a la hora de expresar sus pensamientos y sentimientos, para que sirvan de forma educativa y clínica en el proceso de la intervención terapéutica.'},
      {description:'Uso de arteterapia en los pacientes diagnosticados con un determinado problema: Cómo el tratamiento con el arte puede desenvolver la expresión de sí mismo, enriquecer el desarrollo cognitivo y ayudar con las adicciones, trastornos de ansiedad o problemas emocionales.'},
      {description:'Cómo organizar las sesiones diagnósticas previas al trabajo terapéutico: Familiarízate con los problemas del paciente y evalúa la naturaleza y el grado de dificultad del problema al que se enfrenta.'},
      {description:'Especialmente para los participantes del curso – revisión de los estudios clínicos que confirman la eficacia de la arteterapia como proceso terapéutico.'},
      {description:'Mostraremos cómo utilizar los métodos actuales para crear un programa arte terapéutico aún más eficaz.'},
    ]
    const modulodos =  [
      {description:'¿Con qué métodos e instrumentos de trabajo podemos llevar a cabo una evaluación sistemática y controlar el progreso?'},
      {description:'Cómo los arteterapeutas estadounidenses utilizan las pruebas estructuradas de carácter proyectivo'},
      {description:'Entiende de forma más profunda los problemas del paciente – explicaremos cómo usar pruebas tipo Dibujo de un Puente, Hombre cogiendo una manzana del árbol.'},
      {description:'¿Cómo concentrarse durante el diagnóstico en los procesos de pensamiento inconscientes del paciente?'},
      {description:'Prácticas basadas en las pruebas, para una terapia en pro de vivir nuevas experiencias.'},
      {description:'Especialmente para los participantes del curso: ¿Cómo crear una hoja de evaluación, que ayudará al terapeuta en un control continuo del estado actual del paciente?'},
    ]
    const modulotres =  [
      {description:'¿Cómo corregir los problemas emocionales de niños y adolescentes a través del contacto con el arte?'},
      {description:'Conjunto de ejercicios arteterapéuticos eficaces en la terapia de trastornos emocionales'},
      {description:'Biblioterapia y cuentoterapia: Papel que pueden desempeñar en la prevención y tratamiento de los trastornos de comportamiento y de ansiedad'},
      {description:'¿Cómo preguntar por la "obra de arte" no aceptando el punto de vista del paciente?'},
      {description:'Animálo a reflexionar sobre su creación – ejemplos de preguntas acerca de la fantasía, orden espacial, forma, colores, etc.'},
      {description:'¿Cómo trabajar con el paciente para que la comunicación verbal y el mensaje por medio de las artes plásticas se complementen mutuamente?'},
      {description:'Aplicacion del psicodibujo'},
      {description:'Estudio de casos: Cómo gracias al dibujo y contacto con el arte se construye un sentido de identidad del paciente – ejemplo de escenario de actividad basado en dicho objetivo, órdenes para ejecutar y preguntas terapéuticas'},
      {description:'Materiales adicionales: Paquete de ejercicios "Arteterapia en el trabajo con niños como forma de mejoramiento de la integración sensorial", Escenarios de talleres para obtener un nivel de tranquilidad y relajación en los niños; cuentos de relajación para niños "Aventura marina", "Sobre la Abejita, que no sabía descansar".'},
    ]
    const modulocuatro =  [
      {description:'Terapia Sandplay'},
      {description:'¿De qué forma a través de la proyección utilizar la Terapia Sandplay como método terapéutico o herramienta de diagnóstico, para estimular las asociaciones y poder formular con los pacientes interpretaciones correctas?'},
      {description:'Estudio de casos'},
      {description:'Receptive Music therapy y el método GIM: ¿Cómo se utiliza la música para estimular y mantener las experiencias internas, para visualizar los sentidos, sentimientos, pensamientos y para evocar los recuerdos en el proceso terapéutico?'},
      {description:'Fototerapia y de Fotografía Terapéutica: ¿Cómo utilizar las fotografías y qué técnicas aplicar para activar lo que evoca la fotografía? Explicaremos, cómo aplicar con destreza las técnicas de Fototerapia y de Fotografía Terapéutica'},
      {description:'Dramaterapia: ¿Cómo trabajar con la metáfora para proyectar las informaciones inconscientes sobre el papel jugado o material usado durante el encuentro (figuras, títeres, muñecas)?'},
      {description:'Arte bilateral como técnica de arteterapia referente a los procesos neurobiológicos'},
      {description:'Cómo activar ambas manos y ambos hemisferios del cerebro del paciente y qué beneficios esto puede aportar'},
      {description:'Material extra de revistas especializadas: "¿Los niños sienten el blues? Estimulación del desarrollo cerebral y la activación de la expresión de emociones en los niños a través de la música y el movimiento"; "Terapias que utilizan música en la vejez"'},
    ]
      
    return (
        <Container>
           <HeaderTop
            title="Arteterapia."
            subtitle="Formacion profesional"
            img='arte.jpg'
          />
          <SectionFirst
            title='Arteterapia'
            description='La Arteterapia es un tipo de terapia artística que consiste en la utilización del arte como vía terapéutica para sanar trastornos psicológicos, tratar miedos, bloqueos personales, traumas del pasado y otros trastornos.'
          />
          <SectionImage
            title='Es mas de lo que parece..'
            description='es una técnica de desarrollo personal, de autoconocimiento y de expresión emocional. Por tanto no es necesario poseer ningún trastorno psicológico, sino simplemente sentir la necesidad de explorarnos a través del arte.
            Si bien inicialmente comenzó a usarse la arteterapia con fines meramente terapéuticos, actualmente ha ampliado su ámbito de actuación...'
            img='artetwo.jpg'
            side={true}
          />
          <SectionImage
            title='Arteterapia en los niños'
            description='La Arteterapia es igualmente eficaz para paliar el fracaso escolar, trastornos de atención u otra serie de dificultades que muchos niños tienen en la actualidad. Además gran parte de la pedagogía Waldorf, está basada en fundamentos similares en los que el arte como método pedagógico ha aportado interesantes resultados.'
            img='artethree.jpg'
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
                      Inscribiéndote al curso aprenderás a utilizar el valor terapéutico procedente del arte en el trabajo diario con los pacientes que sufren de traumas, lesiones, enfermedades somáticas y psicosomáticas, con trastornos de ansiedad y con problemas emocionales.
                      Es un Curso formativo para socioterapeutas, terapeutas ocupacionales, psicólogos, psicoterapeutas, maestros, pedagogos escolares, personas que trabajan en clínicas y centros de asistencia social.
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
                  <Typography >Introduccion a los metodos de arteterapia</Typography>
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
                  <Typography >Cómo realizar el diagnóstico y la evaluación de la gravedad del problema o trastorno a través de los instrumentos de la arteterapia</Typography>
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
                  <Typography >Cómo utilizar la arteterapia en el tratamiento de la depresión, trastornos de ansiedad o de vínculos</Typography>
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
                  <Typography >Métodos actuales de arteterapia – cómo utilizarlos con el objetivode controlar los efectos de la terapia</Typography>
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
            <Box className={classes.home}>
              <Box align='center'>
                <Box className={classes.aboutInfoCurso}>
                      <Typography variant="h3" color="default" className={classes.titlesectionCurso}>
                          Al acabar el curso
                      </Typography>
                      <Typography align='left' variant="subtitle1" color="initial" className={classes.objetivo}>
                      Mejorarás la eficacia de la terapia psicológica, psico-pedagógica y educativa, a través de un enfoque clínico innovador, usando la arteterapia, para reducir el estrés y curar las enfermedades somáticas, psicosomáticas, trastornos de ansiedad y depresión.
                      </Typography>
                      <Typography align='left' variant="subtitle1" color="initial" className={classes.objetivo}>
                      Adquirirás conocimientos prácticos sobre una forma efectiva de emplear métodos innovadores y avalados por The American Art Therapy Association y British Association of Art Therapist, tales como Sandplay Therapy, Foto Terapia o Receptive Music Therapy.
                      </Typography>
                      <Typography align='left' variant="subtitle1" color="initial" className={classes.objetivo}>
                      Sabrás que sin un profundo diagnóstico y un enfoque bien definido dentro de la terapia de los pacientes no será posible emplear las posibilidades terapéuticas que proporciona la arteterapia.
                      </Typography>
                      <Typography align='left' variant="subtitle1" color="initial" className={classes.objetivo}>
                      Aprenderás a tu propio ritmo en cualquier momento y en cualquier lugar gracias a la metodología de estudio online ofrecida por la Academia de Arteterapia, la cual es garante de la eficacia del apoyo psicológico y psicoterapéutico suministrado.
                      </Typography>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Container>
    )
}
export default Arteterapia
