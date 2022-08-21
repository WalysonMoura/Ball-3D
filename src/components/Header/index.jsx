import * as Style from "./style"

import { HiMenuAlt4 } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";

export default  function Header() {
    return(
        <Style.Header>
            <HiMenuAlt4 size={35} />
            <h2>Spline</h2>
            <BsSearch size={35}/>
        </Style.Header>
    )
}