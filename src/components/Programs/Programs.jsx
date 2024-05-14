import React, { useState } from 'react';
import styles from './Programs.module.css';
import cn from 'classnames';
import ProgramCard from './ProgramCard';
import DoubleHeading from '../DoubleHeading';
import Heading from '../Heading';
import {Link} from "react-router-dom";

function Programs(props) {
    const [isExpanded, setIsExpanded] = useState(true);


    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (

        <div className={cn(styles.wrap, props.className)}>
            <div className={styles.text}>
                <h2 className={styles.title}>Ипотечные программы</h2>

                <button className={styles.more} onClick={handleToggle}>
                    {isExpanded ? 'Свернуть' : 'Показать все'}
                </button>
            </div>

            <div className={styles.content}>

                   <Link to={`/family`} style={{ textDecoration: 'none' }}> <ProgramCard  color="yellow" imageUrl="/bear.png" title="Семейная ипотека" rate="от 5%" /> </Link>

                <Link to={`/secondary`} style={{ textDecoration: 'none' }}> <ProgramCard color="green" imageUrl="/apartament.png" title="Вторичное жильё" rate="от 16,5%" /></Link>
                    <Link to={`/support`} style={{ textDecoration: 'none' }}>  <ProgramCard color="red" imageUrl="/government.png" title="Господдержка" rate="от 8%" /></Link>
                        <Link to={`/refinancing`} style={{ textDecoration: 'none' }}> <ProgramCard color="blue" imageUrl="/note.png" title="Рефинансирование" rate="от 16%" /></Link>

                {isExpanded && (
                    <>
                    <Link to={`/commerce`} style={{ textDecoration: 'none' }}> <ProgramCard color="purple" imageUrl="/computer.png" title="Коммерция" rate="от 16%" /></Link>
                        <Link to={`/build`} style={{ textDecoration: 'none' }}> <ProgramCard color="orange" imageUrl="/build.png" title="Строительство" rate="от 5,8%" /></Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Programs;