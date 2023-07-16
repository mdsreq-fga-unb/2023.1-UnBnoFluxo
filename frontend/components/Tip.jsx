import HelpSharpIcon from "@mui/icons-material/HelpSharp"
import ReportSharpIcon from "@mui/icons-material/ReportSharp"
import { FormHelperText, Typography } from "@mui/material"

export default function Tip({ text, errorMessage }) {
    const isErrorMode = errorMessage === undefined ? false : true

    return (
        <FormHelperText
            component="span"
            sx={{
                background: isErrorMode ? "#DB3B4B" : "#232323",
                borderRadius: "8px",
                minHeight: "36px",
                alignItems: "center",
                display: "flex",
                padding: "4px",
                "&.MuiFormHelperText-root": {
                    margin: 0,
                },
            }}
            data-testid={"tipo-box"}
        >
            {isErrorMode ? (
                <ReportSharpIcon sx={{ color: "#FFFFFF" }} />
            ) : (
                <HelpSharpIcon sx={{ color: "#FFFFFF" }} />
            )}
            <Typography variant="body3" sx={{ mx: 1, color: "#FFFFFF" }}>
                {isErrorMode ? errorMessage.message : text}
            </Typography>
        </FormHelperText>
    )
}
