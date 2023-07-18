import NewCard from "./NewCard"
import Card from "./Card"
import styles from "../styles/ElectiveCoursesBox.module.css"
import { Box, CircularProgress, Grid } from "@mui/material"
import React, { useState } from "react";

export default function ElectiveCoursesBox({ data, addData }) {

    const [searchText, setSearchText] = useState('');
    const handleSearch = (value) => {
        setSearchText(value);           
    };

    return (
        <Box className={styles.box}>
            <Box className={styles.tilte_box}>
                <h2>OPTATIVAS</h2>
                <Box className={styles.search_box}>
                    <h2>PESQUISAR</h2>                
                </Box>
                <input
                    type="text"
                    placeholder="Pesquisar componente"
                    value={searchText}
                    onChange={(event) => handleSearch(event.target.value)}
                />
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
                        .filter((course) => (course.period === 0 && searchText !== "" && (course.displayName.toLowerCase().includes(searchText.toLowerCase()) ||
                        course.alias.toLowerCase().includes(searchText.toLowerCase()) ||
                        course.code.toLowerCase().includes(searchText.toLowerCase())) ))
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
