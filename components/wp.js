import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles(theme => ({
  whatsApp: {
    position:"fixed",
    width:"60px",
    height:"60px",
    bottom:"40px",
    right:"40px",
    backgroundColor:"#25d366",
    color:"black",
    borderRadius:"50px",
    textAlign: "center"},
iconWhatsApp: {
    fontSize: 25},
}))

 const Wp = () => {
    const classes = useStyles();
     
    return(
    <Button variant="contained" className={classes.whatsApp} href="https://wa.me/1126334988/?text=Hola%20HelpMeHelpYou...">
        <WhatsAppIcon className={classes.iconWhatsapp}/>
    </Button>
)}

export default Wp;