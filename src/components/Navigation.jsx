import { Link } from "react-router-dom"
import Style from '../CSS/Style.module.css'


export default function Navigation() {
  return (
    <div className={Style.navigationContainer}>
      <section>
        <a href="/"><img id={Style.logo} src='https://i.pinimg.com/originals/04/0e/d9/040ed98defb52539c6ef68703fbde157.png' alt="Logo" /></a>
      </section>
        <nav className={Style.navigationLinksContainer}>
            <Link className={Style.navigationLinks} to='/'>דף הבית</Link>
            <Link className={Style.navigationLinks} to='/About'>אודות</Link>
            <Link className={Style.navigationLinks} to='/Gallery'>גלריה</Link>
            <Link className={Style.navigationLinks} to='/Store'>חנות</Link>
            <Link className={Style.navigationLinks} to='/Queues'>קביעת תורים</Link>
            <Link className={Style.navigationLinks} to='/Messages'>הודעות</Link>
        </nav>
    </div>
  )
}
