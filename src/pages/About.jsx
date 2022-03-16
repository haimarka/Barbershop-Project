import React from 'react'
import Style from '../CSS/Style.module.css'

export default function About() {
  return (
    <div>
      <h2 className={Style.aboutHeader}>קצת עלינו</h2>
      <article className={Style.aboutSummaryContainer}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eius, exercitationem quaerat ducimus saepe praesentium odit natus adipisci sapiente repellat repudiandae soluta? Sequi laudantium tempora doloremque sunt odio ad reiciendis?
        In a ea officia quo amet maiores neque eligendi assumenda nam enim praesentium doloremque natus, delectus molestiae laboriosam provident minus corporis sint! Totam quis iusto et expedita quod! Impedit, incidunt?
        Impedit, magnam iusto dolorum, officia quia illo delectus ea quam magni id nemo ut cumque veritatis! Vel totam cum nesciunt, perspiciatis, modi dolorum consectetur porro officiis natus deleniti obcaecati consequatur.
        Voluptatem nesciunt delectus fugiat porro aspernatur ad modi, officia excepturi? Voluptate animi, incidunt facere ipsum necessitatibus porro amet, molestiae dolorum doloremque enim quidem. Alias cumque et, commodi nam culpa tempora.
        Temporibus quas ut in ipsa beatae expedita aliquam molestiae quasi optio esse possimus, earum obcaecati officia velit laborum repellendus nemo, cupiditate totam. Dicta ipsam officia reiciendis voluptatibus est. Iure, harum.</p>
      </article>
      <article className={Style.aboutDetailsContainer}>
          <p>Phone: 0526122936<br/>location: hermon st' 21, yavne</p>
      </article>
    </div>
  )
}
