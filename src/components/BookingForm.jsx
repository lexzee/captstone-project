import { Grid, GridItem, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'

const BookingForm = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('17:00')
  const [guests, setGuests] = useState(0)
  const [occasion, setOccasion] = useState('Occasion')
  const [location, setLocation] = useState('Location')
  const [comment, setComment] = useState('')
  const [submit, setSubmit] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(date, time, guests, occasion, location, comment)
  }

  const handleDate = (e) => {
    setDate(e.target.value)
  }
  const handleTime = (e) => {
    setTime(e.target.value)
  }
  const handleGuests = (e) => {
    setGuests(e.target.value)
  }
  const handleOccasion = (e) => {
    setOccasion(e.target.value)
  }
  const handleLocation = (e) => {
    setLocation(e.target.value)
  }
  const handleComment = (e) => {
    setComment(e.target.value)
  }

  return (
    <Grid templateColumns="repeat(12, 1fr)">
      <GridItem colStart={3} colSpan={8} position="relative">
        <Heading as="h1" pos='absolute' left="35%">Reserve a Table</Heading>
        <form style={{display: 'grid', maxWidth: '90%', gap: '20px', marginTop: "20%"}}>
          <label htmlFor='res-date'>Choose date</label>
          <input type='date' id='res-date' value={date} onChange={handleDate}/>
          <label htmlFor='res-time'>Choose time</label>
          <select name='res-time' id='res-time' value={time} onChange={handleTime}>
            <option value='17:00'>17:00</option>
            <option value='18:00'>18:00</option>
            <option value='19:00'>19:00</option>
            <option value='20:00'>20:00</option>
            <option value='21:00'>21:00</option>
            <option value='22:00'>22:00</option>
          </select>
          <label htmlFor='guests'>Number of guests</label>
          <input type='number' placeholder='1' id='guests' min='1' max='10' value={guests} onChange={handleGuests}/>
          <label htmlFor='occasion'>Occasion</label>
          <select name='occasion' id='occasion' value={occasion} onChange={handleOccasion}>
            <option value='birthday'>Birthday</option>
            <option value='anniversary'>Anniversary</option>
            <option value='business'>Business</option>
          </select>
          <label htmlFor='location'>Location</label>
          <select name='location' id='location' value={location} onChange={handleLocation}>
            <option value='indoor'>Indoor</option>
            <option value='outdoor'>Outdoor</option>
          </select>
          <label htmlFor='comment'>Extra Details:</label>
          <textarea placeholder='Describe your special request...' name="location" id='comment' value={comment} onChange={handleComment} cols="30" rows="5"></textarea>
          <input type='submit' value='Make Your Reservation' disabled={submit} onClick={handleSubmit}/>
        </form>
      </GridItem>
    </Grid>
  )
}

export default BookingForm