import { useDispatch, useSelector } from 'react-redux';
import { selectImg } from '../redux/image/image.action';

import './style.css'

const ImageList = () => {
  const dispatch = useDispatch()
  const { data: imgs } = useSelector(e => e.imgReducer)

  const selImg = (data) => {
    console.log(data)
    dispatch(selectImg(data))
  }
  return (
    <div className="list-content">
      {imgs.map((img, idx) => {
        return (
          <div key={idx}>
            <img src={img.url} onClick={() => selImg(img)} className="image-list" alt={selImg.url} />
          </div>
        )
      })}
    </div>
  )
}

export default ImageList