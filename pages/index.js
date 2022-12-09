import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import Calender from './Calender';

export default function Home() {
  const MOCKEVENTS = [
    { date: new Date(2022, 9, 10), title: "appoinment" },
    { date: new Date(2022, 9, 15), title: "car wash" },
    { date: new Date(2022, 9, 5), title: "doctor" }
    ];

  const [events, setEvents] = useState(MOCKEVENTS);

  const addEvent = (date, color) =>{
    console.log(date);
    const text = window.prompt("text");
    setEvents(prev => [...prev, {date, title: text, color}]);

  };
  
  return (
    <Calender startingDate ={new Date()} eventsArr={events} addEvent={addEvent}/>

  )
}
