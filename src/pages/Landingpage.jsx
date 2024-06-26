import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Landingpage() {
  return (
    <>
    <div className='row w-100 mt-5 justify-content-center align-items-center'>
      <div className="col-md-1"></div>
      <div className="col-md-5 p-5">
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sint, modi officia enim amet deleniti aliquam repellendus cumque nisi totam odio ullam ipsam, optio doloremque a. Veniam ad vitae non soluta debitis saepe nisi, deserunt, aliquam harum quasi eos neque eaque ducimus doloremque reprehenderit nemo exercitationem dolorum? Odio, rerum quas ducimus ad veritatis quae at, quaerat repellat eos facilis saepe exercitationem laborum accusamus quidem blanditiis deleniti eum corporis quasi deserunt officiis libero minus repellendus? Perspiciatis odit dolorum sunt quia amet maxime laudantium similique, dolorem iure accusantium dolores placeat omnis fugit quaerat esse, nihil quasi fugiat perferendis quidem. Quaerat, corporis in.</p>
        <button className='btn btn-warning mt-5'><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Get Started</Link></button>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-5 d-flex justify-content-center align-items-center p-5">
        <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="music gif"  className='w-75'/>

      </div>
     
    </div>
    <div className="row w-100 mt-5">
      <h3 className=' text-center mt-5 mb-5'>Features</h3>
      <div className="col-md-1  me-md-5"></div>
      <div className="col-md-3 px-5 px-md-4 mt-4">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/793057/screenshots/4220268/music_visualisation.gif" className='w-100' height={'300px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-3 px-5 px-md-4 mt-4">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/41854/screenshots/3486049/media/1bbada6bbfb0b560b91552515547f773.gif" className='w-100' height={'300px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-3 px-5 px-md-4 mt-4">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/1841951/screenshots/4897456/media/8a6aebecedac7abf61ed9a50c5e0cd72.gif" className='w-100' height={'300px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-1"></div>
    </div>
    <div className="row w-100 mt-5 ms-1 p-md-0 ms-md-0">
      <div className="col-md-1"></div>
      <div className="col-md-10 border rounded p-5 m-md-5">
        <div className="row w-100">
          <div className="col-md-6">
            <h3  className='text-warning mt-3'>Simple Fast and Powerful</h3>
            <p className='mt-4'><span className='fs-4'>Play Everything : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sunt natus non doloremque? Nemo illo quod dolore consequuntur dignissimos quos, dolorum, aliquam quas accusantium </p>
            <p className='mt-4'><span className='fs-4'>Play Everything : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sunt natus non doloremque? Nemo illo quod dolore consequuntur dignissimos quos, dolorum, aliquam quas accusantium </p>
            <p className='mt-4'><span className='fs-4'>Play Everything : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sunt natus non doloremque? Nemo illo quod dolore consequuntur dignissimos quos, dolorum, aliquam quas accusantium </p>
          </div>
          <div className="col-md-6">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HRnAdX_NM4w?si=Y4A8uZvaAz85FZ-z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
    
    
    
    </>
  )
}

export default Landingpage