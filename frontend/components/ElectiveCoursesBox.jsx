import NewCard from "./NewCard"
import Card from "./Card"
import styles from "../styles/ElectiveCoursesBox.module.css"
import { Box, CircularProgress, Grid, InputBase } from "@mui/material"
import React, { useState } from "react"
import SearchIcon from "@mui/icons-material/Search"

export default function ElectiveCoursesBox({ data, addData }) {
    const [searchText, setSearchText] = useState("") // Estado que gurda o que sta sendo pesquisado

    // Funcao auxiliar para aulterar o valor do que sta sendo pesquisado
    const handleSearch = (value) => {
        setSearchText(value.toLocaleUpperCase())
    }

    return (
        <Box className={styles.box}>
            <Box className={styles.tilte_box}>
                <h2 className={styles.tilte}>OPTATIVAS</h2>
                <Box className={styles.search}>
                    <SearchIcon sx={{ ml: 1 }} />
                    <InputBase
                        sx={{
                            m: 1,
                            flex: 1,
                            backgroundColor: "#FFFFFF",
                            height: "1.5rem",
                            padding: "0.5rem",
                            borderRadius: "0.5rem",
                        }}
                        type="text"
                        placeholder="Pesquisar componente"
                        value={searchText}
                        onChange={(event) => handleSearch(event.target.value)}
                    />
                </Box>
            </Box>
            <Grid
                container
                className={styles.cards_box}
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Grid item p={2}>
                    <NewCard addData={addData} data={data} />
                </Grid>
                {data ? (
                    data
                        .filter((course) => course.period === 0)
                        .filter(
                            (course) =>
                                course.displayName.includes(searchText) ||
                                course.alias.includes(searchText) ||
                                course.code.includes(searchText)
                        )
                        .map((course) => (
                            <Grid item p={2} key={course.code}>
                                <Card course={course} data={data} addData={addData} />
                            </Grid>
                        ))
                ) : (
                    <CircularProgress color="inherit" />
                )}
            </Grid>
        </Box>
    )
}
