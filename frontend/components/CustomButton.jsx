import React, { useState } from "react"
import Fab from "@mui/material/Fab"

export default function CustomButton({ text, onClick, children }) {
    const [isExtended, setIsExtended] = useState(true)

    const handleMouseEnter = () => setIsExtended(true)
    const handleMouseLeave = () => setIsExtended(false)

    return (
        <Fab
            m={2}
            variant={isExtended ? "extended" : "round"}
            style={{ backgroundColor: "#ffffff", color: "#232323" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            {children}
            {isExtended && text}
        </Fab>
    )
}
