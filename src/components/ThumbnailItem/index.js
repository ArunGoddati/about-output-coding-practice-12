import './index.css'
const ThumbnailItem = props => {
  const {eachImageDetails, key, bigImage, isActive} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} =
    eachImageDetails
  const clearImageClassName = isActive ? 'clear-image' : ''
  const clickOnImage = () => {
    bigImage(imageUrl)
  }
  return (
    <li className="list-item">
      <button className="button" onClick={clickOnImage}>
        <img
          src={thumbnailUrl}
          className={`image ${clearImageClassName}`}
          alt="thumbnailAltText"
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
