import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { pink } from '@mui/material/colors';
import axios from 'axios'
import '../css/edit.css';



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



const Edit = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selected, setSelected] = useState(false)

  const [newName, setNewName] = useState('')
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newStock, setNewStock] = useState(false);
  const [newTag, setNewTag] = useState([])
  const [newDelivery, setNewDelivery] = useState(false)
  const [groceries, setGroceries] = useState([])

  const handleNewNameChange = (event)=>{
    setNewName(event.target.value);
  }

  const handleNewDescriptionChange = (event)=>{
    setNewDescription(event.target.value);
  }

  const handleNewStockChange = (event)=>{
  setNewStock(event.target.checked);
  }

  const handleNewDeliveryChange = (event)=>{
  setNewDelivery(event.target.checked);
  }

  const handleNewTagChange = (event)=>{
  setNewTag(event.target.value);
  }

  const handleNewImageChange = (event)=>{
  setNewImage(event.target.value);
  }
  const handleNewPriceChange = (event)=>{
  setNewPrice(event.target.value);
  }

  const handleToggleStock = (groceryData)=>{
      axios
          .put(
              `https://floating-crag-29031.herokuapp.com/groceries/${groceryData._id}`,
              {
                  name: groceryData.name,
                  image: groceryData.image,
                  description:groceryData.description,
                  price: groceryData.price,
                  inStock:!groceryData.inStock,
                  delivery: !groceryData.delivery,
                  tag: groceryData.tag
              }
          )
          .then(()=>{
              axios
                  .get('https://floating-crag-29031.herokuapp.com/groceries')
                  .then((response)=>{
                      setGroceries(response.data)
                  })
          })
  }



  return (
    <>
    <Button onClick={handleOpen}>Edit</Button>
    <Modal
    open={open}
    style={{background: 'transparent'}}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    <h2>Edit a grocery</h2>
    <div className = "edit-container">
    <form onSubmit={handleToggleStock}>
      Name: <input type = 'text' onChange={handleNewNameChange}/><br/>
      Image URL: <input type = 'text' onChange={handleNewImageChange}/><br/>
      Description: <input type = 'text' onChange={handleNewDescriptionChange}/><br/>
      Price: <input type = 'text' onChange={handleNewPriceChange}/><br/>
      In Stock: <input type = 'checkbox' onChange={handleNewStockChange}/><br/>
      Available for Delivery: <input type = 'checkbox' onChange={handleNewDeliveryChange}/><br/>
      Tag: <input type = 'text' onChange={handleNewTagChange}/><br/>
      <input type = 'submit' value = 'Edit grocery' />
      </form>
      </div>
    </Typography>
    </Box>
    </Modal>

  </>
  )

};

export default Edit;