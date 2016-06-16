import React, { PropTypes } from 'react'
import './ServiceStatus.scss'

const isOpen = (schedules) => {
  const currentDay = 'Wednesday'
  const currentTime = 1400

  const isBetween = (num, min, max) => (
    num > min && num < max
  )

  const isSomethingSchedule = schedule => (
    currentDay === schedule.weekday &&
    isBetween(currentTime, schedule.opensAt, schedule.closesAt)
  )

  if (!schedules) return false
  return schedules.filter(isSomethingSchedule).length > 0
}

const ServiceStatus = (props) => {
  const openOrClosed = isOpen(props.schedules) ? 'open' : 'closed'
  return (
    <span className={openOrClosed}>{openOrClosed}</span>
  )
}

export default ServiceStatus
