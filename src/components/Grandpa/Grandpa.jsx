import React from 'react';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
const Grandpa = () => {
    return (
        <section className='grandpa '>
            <h2>Grandpa</h2>
            <section className='flex'>
                     <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
       </section>
        </section>
    );
};

export default Grandpa;