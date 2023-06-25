import { Box, Typography } from "@mui/material"
import InfoIcon from "@mui/icons-material/Info"

export default function Tip({ text }) {
    return (
        <>
            <Box
                sx={{
                    background: "#232323",
                    color: "#FFFFFF",
                    borderRadius: "8px",
                    height: "32px",
                    justifyContent: "start",
                    alignItems: "center",
                    display: "flex",
                }}
                p={2}
            >
                <InfoIcon />
                <Typography variant="body3" sx={{ mx: 1, color: "#FFFFFF" }}>
                    {text}
                </Typography>
            </Box>
        </>
    )
}
