import me from "../assets/me.jpg"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={me} alt="" />

            <h2>Vikas Kosta</h2>
            <p>Motivation is temporary, discipline last forever</p>
        </div>

        <aside>
            <h2>Social Media</h2>

            <article>
                <a href="https://instagram.com/growwithvikas?igshid=ZDdkNTZiNTM=" target={"blank"}>
                    <AiFillInstagram />
                </a>
                <a href="https://www.linkedin.com/in/vikas-kosta-b92b3a184" target={"blank"}>
                    <AiFillLinkedin />
                </a>
                <a href="https://github.com/vikaskosta" target={"blank"}>
                    <AiFillGithub />
                </a>
            </article>
        </aside>
        <a href="#home">
            <AiOutlineArrowUp />
        </a>
    </footer>
  )
}

export default Footer