import {useState, useEffect} from 'react';
import axios from 'axios'
import {render} from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import App from "../App";
import '../css/review.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [newName, setNewName] = useState('')
  const [newSubject, setNewSubject] = useState('');
  const [newImage, setNewImage] = useState('')
  const [newDescription, setNewDescription] = useState('');

  useEffect(()=>{
    axios
    .get('http://localhost:3000/reviews/')
    .then((response)=>{
      setReviews(response.data);
    })
  },[])


  const handleNewNameChange = (event)=>{
    setNewName(event.target.value);
  }
  const handleNewSubjectChange = (event)=>{
    setNewSubject(event.target.value);
  }

  const handleNewImageChange = (event)=>{
  setNewImage(event.target.value);
  }

  const handleNewDescriptionChange = (event)=>{
    setNewDescription(event.target.value);
  }


  const handleDelete = (reviewData)=>{
    axios
    .delete(`http://localhost:3000/reviews/${reviewData._id}`)
      .then(()=>{
        axios
        .get('http://localhost:3000/reviews/')
        .then((response)=>{
          setReviews(response.data)
        })
      })
    }

    const handleEdit = (reviewData)=>{
            axios
                .put(
                    `http://localhost:3000/reviews/${reviewData._id}`,
                    {
                      name:reviewData.name,
                      subject:reviewData.subject,
                      image:reviewData.image,
                      description:reviewData.description
                    }
                )
                .then(()=>{
                    axios
                        .get('http://localhost:3000/reviews')
                        .then((response)=>{
                            setReviews(response.data)
                        })
                })
        }


  const handleNewReviewFormSubmit = (event)=>{
      event.preventDefault();
      axios.post(
          'http://localhost:3000/reviews/',
          {
              name:newName,
              subject:newSubject,
              image: newImage,
              description: newDescription
            }).then(()=>{
          axios
              .get('http://localhost:3000/reviews/')
              .then((response)=>{
                  setReviews(response.data)
              })
          })
    }

return (
    <>
    <h2>Review</h2>
    <div className = "review-container">

    <div className = "info-container">
       {
           reviews.map((review)=>{
               return <li onClick={ (event)=>{ handleEdit(review) } }>
               {<h3>{review.name}</h3>}
               {<h4>{review.subject}</h4>}
               {<li><img src = {review.image}/></li>}
               {<li className="text-area">{review.description}</li>}
                     <button onClick={ (event)=>{ handleDelete(review) } }>Delete</button>

               </li>
           })
       }
   </div>


    <div className = 'review-form'>
    <h3>Write a review</h3>
    <form onSubmit={handleNewReviewFormSubmit}>
      Name: <input type = 'text' onChange={handleNewNameChange}/><br/>
      Subject: <input type = 'text' onChange={handleNewSubjectChange}/><br/>
      Image URL: <input type = 'text'  onChange={handleNewImageChange}/><br/>
      Description: <input type = 'text' onChange={handleNewDescriptionChange}/><br/>
      <input type = 'submit' value = 'Post review' />
      </form>
      </div>
      </div>
    </>
  )
}

export default Reviews
