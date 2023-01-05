// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp
  return (
    <li className="card-container">
      <img src={imageUrl} alt={appName} className="img" />
      <p className="card-heading">{appName}</p>
    </li>
  )
}

export default AppItem
