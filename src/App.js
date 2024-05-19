import './App.scss';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss'

// Importe de las imagenes
import img_1 from './assets/01.jpg';
import img_2 from './assets/02.jpg';
import img_3 from './assets/03.jpg';
import img_4 from './assets/04.jpg';
import img_5 from './assets/05.jpg';
import img_6 from './assets/06.jpg';
import img_7 from './assets/07.jpg';
import img_8 from './assets/08.jpg';
import img_9 from './assets/09.jpg';
import img_10 from './assets/10.jpg';

function App() {

  // Debemos importar las imagenes primero para poder utilizarlas en el objeto.
  const images = [
    {
      original: img_1,
      thumbnail: img_1,
    },
    {
      original: img_2,
      thumbnail: img_2,
    },
    {
      original: img_3,
      thumbnail: img_3,
    },
    {
      original: img_4,
      thumbnail: img_4,
    },
    {
      original: img_5,
      thumbnail: img_5,
    },
    {
      original: img_6,
      thumbnail: img_6,
    },
    {
      original: img_7,
      thumbnail: img_7,
    },
    {
      original: img_8,
      thumbnail: img_8,
    },
    {
      original: img_9,
      thumbnail: img_9,
    },
    {
      original: img_10,
      thumbnail: img_10,
    },

  ];
  return (
    <div className="App">
      <ImageGallery items={images} showFullscreenButton={false} autoPlay={true} showPlayButton={false} />
    </div>
  );
}

export default App;
