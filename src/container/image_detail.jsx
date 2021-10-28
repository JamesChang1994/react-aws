import { useDispatch, useSelector } from 'react-redux';
import { selectImg } from '../redux/image/image.action';

const ImageDetail = () => {
  const { selImg } = useSelector(e => e.imgReducer)
  useSelector(e => console.log(e))
  const dispatch = useDispatch()
  const clearImg = () => {
    dispatch(selectImg({}))
  }

  return (
    <div className="detail-content">
      {selImg.url ? (
        <div>
          <p>{selImg.title}</p>
          <div style={{width: '100%'}}><img src={selImg.url} alt={selImg.url} /></div>
          <button onClick={clearImg}>clear</button>
        </div>
      ) : (
        <div>no image</div>
      )}
    </div>
  )
}

export default ImageDetail