import { Box, Typography } from "@mui/material"
import ReportSharpIcon from "@mui/icons-material/ReportSharp"
import HelpSharpIcon from "@mui/icons-material/HelpSharp"

export default function Tip({ text, errorMessage }) {
    const isErrorMode = errorMessage === undefined ? false : true

    return (
        <Box
            sx={{
                background: isErrorMode ? "#DB3B4B" : "#232323",
                color: "#FFFFFF",
                borderRadius: "8px",
                height: "36px",
                justifyContent: "start",
                alignItems: "center",
                display: "flex",
            }}
            p={2}
            data-testid={"tipo-box"}
        >
            {isErrorMode ? <ReportSharpIcon /> : <HelpSharpIcon />}
            <Typography variant="body3" sx={{ mx: 1, color: "#FFFFFF" }}>
                {isErrorMode ? errorMessage.message : text}
            </Typography>
        </Box>
    )
}