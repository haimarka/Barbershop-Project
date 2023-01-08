import React from 'react';
import Style from '../CSS/Style.module.css';
import Media from '../Media/video.mp4';
import HomePicture from '../Media/elis_home_picture.jpg';

export default function Home() {
  return (
    <div>
      <section>
        <h2 className={Style.homeHeader}>המספרה של אלי</h2> <br />
        <video controls autoPlay loop width='450px'>
          <source src={Media}/>
        </video> <br /> <br />
        <img id={Style.elisPicture} src={HomePicture} alt="eli gudo" />
      </section>
    </div>
  )
}

