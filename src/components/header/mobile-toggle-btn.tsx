import React from "react";
import { MenuLine } from './styles';

interface props {
    Click: () => void,
    Show: boolean
}

const MobileToggleBtn: React.FC<props> = ({ Click, Show }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", cursor: "pointer" }} onClick={Click}>
            <MenuLine Show={Show} transform='translate(0px, 2px) rotate(50deg)' />
            {!Show && <MenuLine Show={false} />}
            <MenuLine Show={Show} transform='translate(0px, -5px) rotate(-50deg)' />
        </div>
    )
}


export default MobileToggleBtn;