import React, { useState } from 'react'
import Style from '../CSS/Style.module.css'

export default function Gallery() {
  const [images, setImages] = useState([
'https://i.ibb.co/xqCHTW2/02fa6532-94d4-41f0-a94d-759b4a6ea5fe.jpg',
'https://i.ibb.co/9stmrPj/4dd45883-4e17-4757-a788-18abb4500f5a.jpg',
'https://i.ibb.co/nL2xKT8/6a57ac0f-1496-499e-a216-d393e5d75196.jpg',
'https://i.ibb.co/PNpZmsq/6cd8ee50-f64b-4f27-9fcf-d25324c3b6b1.jpg',
'https://i.ibb.co/ThHLGP9/032e5011-8b09-43ce-ace5-2ceccbfdac0e.jpg',
'https://i.ibb.co/3vh3DMw/88fc7850-dd4c-44bd-a401-9a88aa5f7c43.jpg',
'https://i.ibb.co/PcqKkf6/0143fbb6-780b-4984-a091-8c06a0092ca4.jpg',
'https://i.ibb.co/zs4YC42/832fbad6-9b3f-44bd-b464-05854685026e.jpg',
'https://i.ibb.co/9Nqqc09/245007ba-a847-430a-ae45-2c57b15f3912.jpg',
'https://i.ibb.co/7jHZfHm/aa9621cb-8d83-46b4-b268-588b6ecbfc8e.jpg',
'https://i.ibb.co/DMqBB1z/b848f575-7671-4bee-869f-6f44f399297d.jpg',
'https://i.ibb.co/YT31fzv/e067d880-4540-46d0-808a-023efa42fe00.jpg',
'https://i.ibb.co/Wfdw2Hk/2e2ce878-3e27-40f4-9eae-bd3ba5eddf64.jpg',
'https://i.ibb.co/QkbhFHv/3f70a3d0-d99c-4f86-b41c-71f0728ae07e.jpg',
'https://i.ibb.co/pWY0XVW/5d99bdcf-cd7d-4426-9bbf-06ff4a6940ab.jpg',
'https://i.ibb.co/L977nf8/6ca9c911-9c4d-4002-8d9c-d692914d970b.jpg',
'https://i.ibb.co/LRzcHff/6d589b4c-4306-488d-ae94-c6247b059c64.jpg',
'https://i.ibb.co/BGBzR8y/7ad38226-4853-4109-bb65-313c6e8b1ca4.jpg',
'https://i.ibb.co/5LnC2XX/7bd77c16-a4bc-4f88-bc1b-0aef63f11a7c.jpg',
'https://i.ibb.co/ZBRcGXW/9e2e3d6e-a81e-4b19-9091-2f6df50ee101.jpg',
'https://i.ibb.co/p1RNX3b/21eef43b-2e7e-4d31-9a65-a7a8a8f85ef3.jpg',
'https://i.ibb.co/7VG72QW/81ebb971-6edf-4006-8045-9905f1dece13.jpg',
'https://i.ibb.co/3SBLGV1/91ac4047-ce9f-47ec-9fe9-123b11c9864a.jpg',
'https://i.ibb.co/vPPWnRL/151dbfde-e522-4e41-a017-a794887252f3.jpg',
'https://i.ibb.co/yyTgMFB/170fd7e0-2dc7-4d85-8686-d834d8b3746d.jpg',
'https://i.ibb.co/RjPcxk5/460f0e41-c607-40ec-8370-9ebd6af4f31f.jpg',
'https://i.ibb.co/QF7f58v/a1f99e60-3341-437d-bf06-ff76fd872a23.jpg',
'https://i.ibb.co/12q8576/c871ee64-fab1-4874-a0d2-3c42e928674c.jpg',
'https://i.ibb.co/BcBDGTC/e29194d1-41c6-43c9-94da-afe7474c85b8.jpg',
'https://i.ibb.co/Wfdw2Hk/2e2ce878-3e27-40f4-9eae-bd3ba5eddf64.jpg'
  ])
  return (
    <div className={Style.gallery}>
      <section className={Style.cardsContainer}>
        <article className={Style.card}>
          <a href='/Appointments'><img src="https://www.menshairstylesnow.com/wp-content/uploads/2017/02/Best-Haircuts-For-Black-Men.jpg" alt="two parrots" title="Godo's hair cuts"/></a>
        </article>
        <article className={Style.card}>
          <a href='/Appointments'><img
              src="https://lh3.googleusercontent.com/9kcht81dSxFD5rJwzgO1LOaNp_xFXe7MxCRH0RIf2wk8kaKJ2IaezFexy5c6KgRI5kP36zoemg=w1080-h608-p-no-v0" alt="two parrots red" title="the Barbar Shop"/></a>
        </article>
        <article className={Style.card}>
          <a href='/Appointments'><img
              src="https://www.buyritebeauty.com/blog/wp-content/uploads/2020/02/barber-true-north-barber-shop.jpg" alt="parrot's head" title="the Barbar Shop"/></a>
        </article>
        <article className={Style.card}>
          <a href='/Appointments'><img
              src="https://cdn.australia247.info/assets/uploads/4380207856ec537a6b220451a263ed51_-queensland-redland-city-wellington-point-big-boss-barber-shop-07-3207-3303html.jpg" alt="green parrot" title="the Barbar Shop"/></a>
        </article>
        <article className={Style.card}>
          <a href='/Appointments'><img
              src="https://i.guim.co.uk/img/media/f71e85d348cc8c7cb202dc086a1dfe953a745c89/0_0_2560_1536/master/2560.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=cb0f0bed94f6287aa73c1c129b93d4cb" alt="sick parrot" title="the Barbar Shop"/></a>
        </article>
      </section>
      <h2 className={Style.galleryHeader}>Gallery Eli Images</h2>
      <section className={Style.galleryImages}>
        {images.map((img,i)=>{
          return(
              <img key={i} src={img} alt="Barbershop Eli Godo" title='Barbershop Eli Godo'/>
          )
        })}
      </section>
    </div>
  )
}
