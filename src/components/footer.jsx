import { useDispatch, useSelector } from 'react-redux';
import { setImgs } from '../redux/image/image.action';

const Footer = () => {
  const dispatch = useDispatch()
  const { data } = useSelector(e => e.imgReducer)

  const newImage = { url: './local_image.png', title: 'local_image' }

  const addImage = () => {
    dispatch(setImgs([...data, newImage]))
  }

  return (
    <div className="footer">Built By Frank
      <button onClick={addImage} className="add-btn">Add Image</button>
    </div>
  )
}

export default Footer