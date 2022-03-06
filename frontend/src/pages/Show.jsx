import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Nunito from '../Nunito/static/Nunito-Bold.ttf'
import '../css/show.css';


const style = {

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  fontFamily: 'Nunito-Bold',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

  };


const Show = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selected, setSelected] = useState(false)
  const [heartColor, setHeartColor] = useState('grey')
  const [cartColor, setCartColor] = useState('grey')

  const heartColorChange = () => {
    if (heartColor === 'grey') {
      setHeartColor('red')
    }else {
      setHeartColor('grey')
    }
  }

  const cartColorChange = () => {
    if (cartColor === 'grey') {
      setCartColor('blue')
    }else {
      setCartColor('grey')
    }
  }


  return (
    <>
    <Button style = {{color: 'black', fontFamily: 'Nunito', fontWeight: 'bold', backgroundColor: 'transparent'}} onClick={handleOpen}>Item Details</Button>
    <Modal
    open={open}
    style={{background: 'transparent'}}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box className = 'showModal' sx={style}>
    <Typography  variant="h6" component="h2">
    <h2 className = "showName">{props.name}</h2>
    </Typography>
    <Typography  className = 'modalImage' sx={{ mt: 2 }}>
    <img src = {props.image}></img>
    </Typography>
    <Typography className = "heartAndCart">
    <IconButton value="check"
    selected={selected}
    onChange={() => {
    setSelected(!selected);}}
    onClick = {heartColorChange}
    seletexaria-label="add to favorites">
        <FavoriteIcon style={{color: heartColor}}/>
       </IconButton>

       <IconButton value="check"
       selected={selected}
       onChange={() => {
       setSelected(!selected);}}
       onClick = {cartColorChange}
       seletexaria-label="add to cart">
      <AddShoppingCartIcon style={{color: cartColor}}/>
          </IconButton>
      </Typography>
    <Typography style = {{marginLeft: '8%'}}>
    <Typography style= {{fontFamily:"Nunito"}}>
      <br/><h4 className = "showInfo">price:</h4>{props.price}
    </Typography>
    <Typography style={{fontFamily:"Nunito"}}>
    <h4 className = "showInfo">description:</h4>{props.description}
    </Typography>
    <Typography>
      <h4 className = "showInfo">tags:</h4> {props.tag}
    </Typography><br/>
    <Typography style={{fontFamily:"Nunito", fontWeight:"700"}}>
      <br/><p className = "showInfo">{props.inStock}</p>
    </Typography>
    <Typography style={{fontFamily:"Nunito", fontWeight:"700"}}>
      <br/>
      {props.delivery}
    </Typography>
    </Typography>
    </Box>
    </Modal>

  </>
  )
};

export default Show;
