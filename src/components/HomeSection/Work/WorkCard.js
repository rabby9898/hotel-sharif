import React from 'react'

const WorkCard = (props) => {
  return (
    <>
        <div className="box">
            <div className="img">
                <img src={props.cover} alt="" />
            </div>
            <div className="details">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    </>
  )
}

export default WorkCard;