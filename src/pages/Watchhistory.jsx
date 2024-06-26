import { faArrowLeft, faHouse, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteVideoFromHistory, getVideoFromHistory } from '../services/apllApi'








function Watchhistory() {
  const [videoHistory, setVideoHistory] = useState([])
  const [deleteStatus,setDeleteStatus] = useState([])
  const getHistory = async () => {
    const result = await getVideoFromHistory()
    // console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setVideoHistory(result.data)
    }
  }
  useEffect(() => {
    getHistory()
  }, [deleteStatus])
  const deleteHistory = async(id)=>{
    const result = await deleteVideoFromHistory(id)
    setDeleteStatus(result.data)
  }

 
  return (
    <div>
      <div className=" w-100 d-flex mt-5 mb-5 p-4 ">
        <h4 className='ms-md-5'>Watch History</h4>
        <h5 className='ms-auto me-md-5'>
          <Link to={'/home'} style={{ color: 'white', textDecoration: 'none' }}><span
            className='hide'><FontAwesomeIcon icon={faArrowLeft} beat className='me-2' />Back to Home</span
          ><FontAwesomeIcon className='ms-2' icon={faHouse} />
          </Link>
        </h5>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          {videoHistory?.length > 0 ?
            <Table responsive className='table table-secondary table-bordered' >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Caption</th>
                  <th>URL</th>
                  <th>Time Stamp</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {videoHistory?.map((item,index)=>( 
                  <tr>
                  <td>{index+1}</td>
                  <td>{item?.caption}</td>
                  <td><Link to={item?.url} target='_blank'>{item?.url}</Link></td>
                  <td>{item?.timeStamp}</td>
                  <td className='text-center'><button className='btn btn-danger' onClick={()=>deleteHistory(item?.id )}><FontAwesomeIcon icon={faTrashCan} /></button></td>
                </tr>))
                 
                }

              </tbody>
            </Table>
            :
            <p className='fs-5 text-warning'>No Watch History</p>
          }
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  )
}

export default Watchhistory