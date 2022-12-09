import React from 'react'
// import "../style/calender.css"
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
// import { areDatesTheSame, getDateObj, getDaysInMonth, getRandomDarkColor, getSortedDays, range } from './Utilis';
import { areDatesTheSame, getDateObj, getDaysInMonth, getRandomDarkColor, getSortedDays, range } from './Utilities';
import { useState } from 'react';
import { Paper } from '@mui/material';
import styles from "../styles/calender.module.css"

function Calender({ startingDate, eventsArr, addEvent }) {
    const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
    const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());
    const DAYSINAMONTH = getDaysInMonth(currentMonth, currentYear);


    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const nextMonth = () => {
        if (currentMonth < 11) {
            setCurrentMonth(prev => prev + 1);

        } else {
            setCurrentMonth(0)
            setCurrentYear(prev => prev + 1)


        }
    };
    const prevMonth = () => {
        if (currentMonth > 0) {
            setCurrentMonth(prev => prev - 1);
        } else {
            setCurrentMonth(11)
            setCurrentYear(prev => prev - 1)
        }
    };

    const onAddEvent = (date) => {
        addEvent(date, getRandomDarkColor());
    }
    return (
        <div className={styles.mainbox}>
            <div className={styles.Wrapper}>
                <div className={styles.calenderHead}>
                    <ArrowCircleLeftOutlinedIcon onClick={prevMonth} />
                    <p>{MONTHS[currentMonth]}{currentYear}</p>
                    
                    <ArrowCircleRightOutlinedIcon onClick={nextMonth} />
                </div>
                <Paper className={styles.papercontainer}>
                    <div className={styles.circle}></div>
                    <div>Selected</div>
                    <div className={styles.circle1}></div>
                    <div>Waiting for selection confirmation</div>
                    <div className={styles.circle2}></div>
                    <div>Upconming Interviews</div>
                    <div className={styles.circle3}></div>
                    <div>Candidate got rejected/No show</div>
                </Paper>
                <Paper className={styles.sevencolGrid}>
                    {getSortedDays(currentMonth, currentYear).map((day) => (
                        <div className={styles.HeadDay}>{day}</div>
                    ))}
                </Paper>
                <Paper className={styles.calenderBody} fourCol={DAYSINAMONTH === 28} >
                    {range(DAYSINAMONTH).map((day) => (<Paper className={styles.styledDay} 
                    
                    onClick={() => onAddEvent(getDateObj(day, currentMonth, currentYear)
                        )
              
                    }
                        active={areDatesTheSame(
                            new Date(),
                            getDateObj(day, currentMonth, currentYear)
                        )}
                    >
                        <p> {day}</p>
                        {
                            eventsArr.map((ev) => {
                                areDatesTheSame(getDateObj(day, currentMonth, currentYear), ev.date)
                                    &&
                                     <div className={styles.StyledEvent} 
                                    bgColor={ev?.color}
                                    >
                                        {ev.title}
                                        </div>
                            }
                            )
                        }
                    </Paper>))}
                </Paper>


            </div>
        </div>
    );
};

export default Calender




