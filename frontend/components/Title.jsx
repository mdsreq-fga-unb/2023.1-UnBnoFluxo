import { Typography } from "@mui/material"
import React, { useState } from "react"

export default function Title({ editable = true, title, setTitle }) {
    const [editing, setEditing] = useState(false)
    const [internalTitle, setInternalTitle] = useState(title)

    const handleTitleClick = () => {
        if (editable) {
            setEditing(true)
        }
    }

    const handleTitleChange = (event) => {
        setInternalTitle(event.target.value)
        setTitle(event.target.value)
    }

    const handleTitleBlur = () => setEditing(false)

    return (
        <Typography
            sx={{
                height: "64px",
                fontFamily: "Source Sans Pro",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "48px",
                lineHeight: "64px",
                display: "flex",
                alignItems: "center",
                color: "#232323",
                opacity: 0.8,
                cursor: editable ? "pointer" : "default",
            }}
            onClick={handleTitleClick}
        >
            {editing ? (
                <input
                    type="text"
                    value={internalTitle}
                    onChange={handleTitleChange}
                    onBlur={handleTitleBlur}
                    autoFocus
                    style={{
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        fontFamily: "Source Sans Pro",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "48px",
                        lineHeight: "64px",
                        color: "#232323",
                        opacity: 0.8,
                        width: "100%",
                    }}
                />
            ) : (
                internalTitle
            )}
        </Typography>
    )
}
