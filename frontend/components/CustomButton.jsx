import { Typography } from "@mui/material"
import Fab from "@mui/material/Fab"
import React, { useState } from "react"

export default function CustomButton({ text, onClick, children }) {
    const [isExtended, setIsExtended] = useState(true)

    const handleMouseEnter = () => setIsExtended(true)
    const handleMouseLeave = () => setIsExtended(false)

    return (
        <Fab
            m={2}
            variant={isExtended ? "extended" : "round"}
            style={{ backgroundColor: "#FFFFFF", color: "#232323" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            {children}
            {isExtended && (
                <Typography variant="body1" sx={{ color: "#232323" }}>
                    {text}
                </Typography>
            )}
        </Fab>
    )
}
