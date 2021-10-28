import { useDispatch } from 'react-redux';
import { setImgs } from './redux/image/image.action';
import './App.css';

import ImageDetail from './container/image_detail';
import ImageList from './container/image_list';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const dispatch = useDispatch()

  const getImg = () => {
    let images = []
    for (let i = 0; i < 10; i++) {
      images.push({ url: `https://picsum.photos/${i + 100}`, title: `name_${i + 10}` })
    }
    dispatch(setImgs(images))
  }

  getImg()

  return (
    <div className="App">
      <Header />
      <div style={{ width: '100vw', height: 'calc(100vh - 160px', display: 'flex' }}>
        <ImageList />
        <ImageDetail />
      </div>
      <Footer />
    </div>
  );
}

export default App;
