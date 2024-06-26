import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { useState } from 'react';
import { addVideoApi } from '../services/apllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Add({setAddStatus}) {
  //create a state  to hold data from input
  const [video, setVideo] = useState({
    caption: "",
    image: "",
    url: ""
  })
  const [show, setShow] = useState(false);

  const handleClose = () =>{
    { setShow(false);}
      setVideo({
      caption: "",
      image: "",
      url: ""
    })}
      
  const handleShow = () => setShow(true);
 
  const validateLink= (e)=>{
    // console.log(e.target.value);
    const link = e.target.value
    if (link.endsWith('?feature=shared')) {
      const yTkey = link.slice(-26, -15)
      // console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({ ...video, url: embedLink })
    } else if (link.startsWith('https://youtu.be')) {
      const yTkey = link.slice(17, 28)
      // console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({ ...video, url: embedLink })

    } else if (link.startsWith('https://www.youtube.com/watch?v=')) {
      const yTkey = link.slice(-11)
      // console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({ ...video, url: embedLink })
    }
    else {
      const yTkey = link.slice(-11)
      // console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({ ...video, url: embedLink })
      



  
  }
  
  

  }
  const  handleUpload = async(e) => {
    e.preventDefault()
    const { caption, image, url } = video
    if (!caption || !image || !url) {
      toast.info('Please fill the form completely')
    } else{
      const result =await  addVideoApi(video)
      // console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success('Video uploaded successfully')
        setAddStatus(result.data)
        handleClose()
      }else{
        toast.error('Something went wrong')
      }
    }
     
    }
    // console.log(video);

  return (
    <div>
      <div className='d-flex align-items-center'>
        <h5>Upload <span className='hide'>New Video</span></h5>
        <button className='btn mb-1' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} size='xl' /></button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' />Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Please fill the following details</p>
          <form action="" className='border p-3 rounded border-secondary'>
            <input type="text" placeholder='Video Caption' className='form-control'  onChange={(e) => { setVideo({ ...video, caption: e.target.value }) }} />
            <input type="text" placeholder='Video Image' className='form-control mt-3'  onChange={(e) => { setVideo({ ...video, image: e.target.value }) }} />
            <input type="text" placeholder='Video Url' className='form-control mt-3' onChange={(e) => {validateLink(e) }} />

          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
        
      </Modal>
      <ToastContainer theme='colored' position='top-center'autoClose={2000}/>
    </div>
  )
}

export default Add