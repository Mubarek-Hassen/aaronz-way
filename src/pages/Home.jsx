import Wrapper from '../components/ui/wrapper/Wrapper'
import img1 from "../assets/IMG_2120.jpg"
import img2 from "../assets/IMG_2121.jpg"
function Home() {
  return (

    <Wrapper>
      <h2>Welcome to AARONZ-WAY!</h2>

      <h3>I am an artist that loves to Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas optio rerum beatae consectetur veniam assumenda consequuntur eveniet temporibus earum iste.</h3>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates ut laboriosam nihil fugit voluptatibus amet maxime aspernatur animi eos? Praesentium hic non minima necessitatibus repellendus quod accusamus tenetur ut! Accusamus, nostrum molestiae cum adipisci similique doloremque nulla assumenda ex expedita, hic ipsa debitis quod recusandae modi velit quisquam possimus!</p>
      <img src={img1} alt="aaron-one" style={{maxWidth: "20rem"}} />
      <img src={img2} alt="aaron-two" style={{maxWidth: "20rem", maxHeight: "20rem"}} />
    </Wrapper>
  )
}

export default Home