// Write your code here
import './index.css'

const ActiveEventRegistration = props => {
  const {isDisplay} = props

  const renderRegistration = () => {
    switch (isDisplay) {
      case 'YET_TO_REGISTER':
        return (
          <div className="not-registered">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
              alt="yet to register"
              className="reg-image-not"
            />
            <p className="not-reg">
              A live performance brings so much to your relationship with dance.
              Seeing dance live can often make you fall totally in love with
              this beautiful art form
            </p>
            <button type="button" className="btn-reg">
              Register Here
            </button>
          </div>
        )
      case 'REGISTERED':
        return (
          <div className="not-registered">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
              alt="registered"
              className="registered-image"
            />
            <h1 className="al-reg">
              You have already registered for the event
            </h1>
          </div>
        )
      case 'REGISTRATIONS_CLOSED':
        return (
          <div className="not-registered">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
              alt="registrations closed"
              className="registered-image-close"
            />
            <h1 className="title-reg">Registrations Are Closed Now!</h1>
            <p className="not-reg">
              Stay tuned. We will reopen
              <br />
              the registrations soon!
            </p>
          </div>
        )
      default:
        return null
    }
  }

  return <div className="reg-page">{renderRegistration()}</div>
}
export default ActiveEventRegistration
