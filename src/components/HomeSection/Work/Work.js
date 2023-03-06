import React from 'react';
import Wdata from './Wdata';
import './Work.css';
import WorkCard from './WorkCard';
import '../Popular/MostPopular.css'

const Work = () => {
  return (
    <>
        <section className="popular works">
            <div className="container">
                <div className="heading">
                    <h1>How is works</h1>
                    <div className="line"></div>
                </div>
                <div className="content grid">
                    {Wdata.map((value, index) =>{
                        return <WorkCard key={index} cover={value.cover} title={value.title} desc={value.desc}/>
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Work