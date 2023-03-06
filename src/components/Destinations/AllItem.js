import React from 'react'
import { useState } from 'react';
import DestCard from './DestCard';
import Sdata from './Sdata';

const AllItem = () => {
    const [items, setItem] = useState(Sdata);
  return (
    <>
        <section className="gallery desi mtop">
            <div className="container">
                <div className="content grid">
                    {
                        items.map((item) =>{
                           return  <DestCard key={item.id} item={item}/>
                        })
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default AllItem;