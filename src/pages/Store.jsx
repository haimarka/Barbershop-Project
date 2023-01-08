import React, { useState } from 'react'
import Style from '../CSS/Style.module.css'

export default function Store() {
  const [images, setImages] = useState([
    'https://m.media-amazon.com/images/I/91Ni625wdGL._SL1500_.jpg',
    'https://cdn.webshopapp.com/shops/1867/files/313298844/red-one-quicksilver-aqua-hair-wax.jpg',
    'https://d3m9l0v76dty0.cloudfront.net/system/photos/5891160/extra_large/c4a8d7a633bc60c1274806c71f56b99b.jpg',
    'https://img.joomcdn.net/549fb53d5e838db825c072fe92e48fd1a23ddd67_original.jpeg',
    'https://d3m9l0v76dty0.cloudfront.net/system/photos/6231844/extra_large/cc6999c6b441e317952d0c2e62a11c52.jpg',
    'https://ae05.alicdn.com/kf/Hb091a8dafb4845438d8a0d67e118ddfcM/150ml-Hairdressing-Hair-Spray-Bottle-Salon-Barber-Home-Hair-Styling-Water-Spray-Bottle-Hair-Tools-Refillable.jpg',
    'https://ae01.alicdn.com/kf/H857c50bb8d13483b8a9f731e4914b36eN/Peigne-Afro-en-m-tal-dents-larges-avec-Insert-brosse-cheveux-boucl-s-fourchette-de-s.jpg_Q90.jpg_.webp',
    'https://www.riteaid.com/shop/media/catalog/product/n/9/n9pdbcukiomok18mkmu3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=406&width=406&canvas=406:406',
    'https://www.shopelectrons.co.il/wp-content/uploads/2018/11/%D7%AA%D7%A2%D7%A8-%D7%97%D7%93-%D7%A4%D7%A2%D7%9E%D7%99-%D7%9C%D7%A1%D7%A4%D7%A8%D7%99%D7%9D-1.jpeg',
    'https://mydorco.co.il/wp-content/uploads/2021/11/Untitled-4.png',
    'https://ae01.alicdn.com/kf/Habbdd8bafba342348d93bfa42995abedt/Brosse-cheveux-en-poils-de-sanglier-naturels-peigne-de-Massage-brosse-palette-de-cheveux-antistatique-manche.jpg_Q90.jpg_.webp',
    'https://cdn.shopify.com/s/files/1/0269/0364/2191/t/4/assets/black-durag-durag-shop_600x600.jpg?2061',
    'https://cdn.shopify.com/s/files/1/0527/4743/6222/products/41ItQK1t_TL_1024x1024.jpg?v=1613078774',
    'https://media.allure.com/photos/61d871e542552db38ec47d90/1:1/w_1456,h_1456,c_limit/Hashir%20Professional%205.5%20German%20Barber%20Hair%20Cutting%20Scissors.jpg',
    'https://www.byrdie.com/thmb/IemYSjcbBDtNfdkEUb_zs5EzKGI=/900x0/filters:no_upscale():max_bytes(150000):strip_icc()/41JDL8tCVrL-fb2547231e2c4230853a9ce69728fd9e.jpg',
    'https://images.philips.com/is/image/philipsconsumer/f520bb6fab53497cb308ae7d014bc46d?$jpglarge$&wid=1250'
  ])
  return (
    <div>
      <h2 className={Style.storeHeader}>חנות</h2>
      <section className={Style.storeContainer}>
        {images.map((img,i)=>{
          return (
            <div className={Style.storeImagesContainer} key={i}>
              <img src={img} alt="products" title='product' />
              <h3>מחיר: 20₪</h3>
              <h3>כמות : 500</h3>
              <button onClick={()=>alert('Fix The Store')} className={Style.storeButton} >הוסף מוצר</button>
            </div> 
          )
        })}
      </section>
    </div>
  )
}
