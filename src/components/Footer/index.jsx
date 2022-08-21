import Link from "next/link"

import * as Style from "./style";

import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <Style.Footer>

        <div className="icons">
            <Link href="https://github.com/WalysonMoura" target="_blank">
                <a><BsGithub size={25}/></a>
            </Link>
            <Link  href="https://br.linkedin.com/in/walyson-moura-302562218" target="_blank">
                <a><BsLinkedin size={25}/></a>
            </Link>
            <Link  href="https://www.instagram.com/walysonmoura222/" target="_blank">
                <a><BsInstagram size={25}/></a>
            </Link>
        </div>
    </Style.Footer>
  );
}
