import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { pink } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  };

const button = {
  color: 'red'
}



const Show = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selected, setSelected] = useState(false)




  return (
    <>
    <Button onClick={handleOpen}>Show Item</Button>
    <Modal
    open={open}
    style={{background: 'transparent'}}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    <h2>{props.name}</h2>
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <img src = {props.image}></img>
    </Typography>
    <IconButton value="check"
    selected={selected}
    onChange={() => {
    setSelected(!selected);}}

    seletexaria-label="add to favorites">
        <FavoriteIcon />
       </IconButton>

       <IconButton value="check"
       selected={selected}
       onChange={() => {
       setSelected(!selected);}}

       seletexaria-label="add to cart">
           <AddShoppingCartIcon />
          </IconButton>

    <Typography>
    <h4>description:</h4>{props.description}
    </Typography>
    <Typography>
      <h4>tags:</h4> {props.tag}
    </Typography><br/>
    <Typography>
      <br/>{props.inStock}
    </Typography>
    <Typography>
      <br/>
      {props.delivery}
    </Typography>
    </Box>
    </Modal>

  </>
  )
};

export default Show;