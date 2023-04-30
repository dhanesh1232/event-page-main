// Write your code here
import './index.css'

const EventItem = props => {
  const {eventData, onChangeValue} = props
  const {imageUrl, name, location, registrationStatus} = eventData

  const onChangeRegistrationStatus = () => {
    onChangeValue(registrationStatus)
  }
  return (
    <li className="list-item-each">
      <button type="button">
        <img
          src={imageUrl}
          alt="event"
          className="event-image"
          onClick={onChangeRegistrationStatus}
        />
      </button>
      <p className="each-head">{name}</p>
      <p className="each-info">{location}</p>
    </li>
  )
}

export default EventItem
