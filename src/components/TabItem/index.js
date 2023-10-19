import './index.css'

const TabItem = props => {
  const {tabItems} = props
  const {imageUrl, appName} = tabItems

  return (
    <>
      <div className="tab-item-container">
        <img src={imageUrl} alt={appName} className="app-img" />
        <p className="app-name">{appName}</p>
      </div>
    </>
  )
}

export default TabItem
