import './index.css'

const ThumbnailItem = props => {
  const {thumbItem, updateThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbItem
  const btnElement = isActive ? 'hide-img' : ''
  const thumbImage = () => {
    updateThumbnail(id)
  }
  return (
    <li className="list">
      <button type="button" className="btn" onClick={thumbImage}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className={btnElement} />
      </button>
    </li>
  )
}
export default ThumbnailItem
