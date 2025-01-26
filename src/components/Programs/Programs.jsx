import React, { useState } from 'react';
import styles from './Programs.module.css';
import cn from 'classnames';
import ProgramCard from './ProgramCard';
import DoubleHeading from '../DoubleHeading';
import Heading from '../Heading';
import {Link} from "react-router-dom";

function Programs(props) {


    return (

        <div id="programs" className={cn(styles.wrap, props.className)}>
            <div className={styles.text}>
                <h2 className={styles.title}>Ипотечные программы</h2>

            </div>

            <div className={styles.content}>

                   <Link to={`/family`} style={{ textDecoration: 'none' }}> <ProgramCard  color="yellow" imageUrl="/bear.png" title="Семейная ипотека" rate="от 6%" /> </Link>

                <Link to={`/secondary`} style={{ textDecoration: 'none' }}> <ProgramCard color="green" imageUrl="/apartament.png" title="Вторичное жильё" rate="от 25%" /></Link>




                    <Link to={`/commerce`} style={{ textDecoration: 'none' }}> <ProgramCard color="purple" imageUrl="/computer.png" title="Коммерция" rate="от 25%" /></Link>
                        <Link to={`/build`} style={{ textDecoration: 'none' }}> <ProgramCard color="orange" imageUrl="/build.png" title="Строительство" rate="от 6%" /></Link>


            </div>
        </div>
    );
}

export default Programs;