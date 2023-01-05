// Write your code here
import './index.css'

const TabItem = props => {
  const {eachButton, changeList, isActive} = props
  const {displayText, tabId} = eachButton

  const onButtonClick = () => {
    changeList(tabId)
  }

  const isButtonActive = isActive ? 'active-button' : ''

  return (
    <li className="buttons-list">
      <button
        type="button"
        className={`button ${isButtonActive}`}
        onClick={onButtonClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
