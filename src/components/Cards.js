import React from 'react'
import {Link} from 'react-router-dom'
function Cards(props) {
  return (
    <>
        <li className="card_name">
            <Link className="card_name_link" to={props.path}>
                <div className="card_name_pic-wrap" data-category={props.label}>
                    <img 
                    src={props.src} 
                    alt="Fashion Image"
                    className="card_name_img"
                    />
                </div>
                <div className="card_name_info">
                  <h5 className="card_name_text">{props.text}</h5>
                </div>
            </Link>
        </li>  
    </>
  )
}

export default Cards