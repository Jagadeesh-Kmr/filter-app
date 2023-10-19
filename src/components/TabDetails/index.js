import './index.css'

const TabDetails = props => {
  const {tabDetails, onClickTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    onClickTabId(tabId)
  }

  const isActiveBtn = isActive ? 'app-button active' : 'app-button'

  return (
    <>
      <li className="tab-li">
        <button type="button" onClick={onClickTab} className={isActiveBtn}>
          {displayText}
        </button>
      </li>
    </>
  )
}

export default TabDetails
