'use client'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'

import styles from '../styles/home.module.css'
import { useState } from 'react';

export default function Home() {
  const router = useRouter()
  const [roomId, setRoomId] = useState('')

  const createAndJoin = () => {
    const roomId = uuidv4()
    router.push(`/focusgroups/${roomId}`)
  }

  const joinRoom = () => {
    if (roomId) router.push(`/focusgroups/${roomId}`)
    else {
      alert("Please provide a valid room id")
    }
  }
  return (
    <div className={styles.homeContainer}>
        <h1 className='head'>Google Meet Clone</h1>
        <div className={styles.enterRoom}>
          <input className='roomsid' placeholder='Enter Room ID' value={roomId} onChange={(e) => setRoomId(e?.target?.value)}/>
          <button onClick={joinRoom}>Join Room</button>
        </div>
        <span  className={styles.separatorText} >--------------- OR ---------------</span>
        <button className='btna' onClick={createAndJoin}>Create a new room</button>
    </div>
  )
}