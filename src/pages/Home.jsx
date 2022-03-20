import React from 'react';
import Style from '../CSS/Style.module.css';
import Media from '../Media/video.mp4';

export default function Home() {
  return (
    <div>
      <section>
        <h2 className={Style.homeHeader}>המספרה של אלי</h2> <br />
        <video controls autoPlay loop width='450px'>
          <source src={Media}/>
        </video> <br /> <br />
        <img src="https://www.football.org.il/ImageServer/GetImage.ashx?type=2&id=286115&width=240&height=305" alt="eli gudo" />
      </section>
    </div>
  )
}
