import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addToHistoryApi, deleteVideoApi } from '../services/apllApi';




function Videocard({displayVideo,setDeleteVideoStatus,isPresent}) {
  // console.log(displayVideo);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    let caption = displayVideo?.caption
    let url = displayVideo?.url
    let time = new Date()
    let timeStamp = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
    // console.log(timeStamp);

    const reqBody = {
      caption,url,timeStamp
    }
    const result =  await addToHistoryApi(reqBody)
    // console.log(result);
  }

  const handleDelete = async (id)=>{
    const result = await deleteVideoApi(id)
    if(result.status>=200 && result.status<300){
      setDeleteVideoStatus(result.data)
    }
    // console.log(result);
  }
  const videoDrag = (e,id)=>{
    // console.log(id);
    e.dataTransfer.setData("videoId",id)
  }

  return (

    <>
        <Card style={{ width: '100%' }} className='mt-4' draggable onDragStart={(e)=>videoDrag(e,displayVideo?.id)}>
          {!isPresent && <Card.Img onClick={handleShow} variant="top" src={displayVideo?.image} width={'100%'} height={'300px'}/>}
          <Card.Body>
            <div className='d-flex justify-content-between'>
            <Card.Title className='fs-6'>{displayVideo?.caption} </Card.Title>
            
            { !isPresent && <Button variant="danger" className='btn ' onClick={()=>handleDelete(displayVideo?.id)}><FontAwesomeIcon icon={faTrashCan} /></Button>}
            </div>
            
          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <iframe width="100%" height="315" src={displayVideo?.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Videocard