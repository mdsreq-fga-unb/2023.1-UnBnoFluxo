import NewCard from "./NewCard"
import Card from "./Card"
import styles from "../styles/ElectiveCoursesBox.module.css"
import { Box, CircularProgress, Grid } from "@mui/material"
import React, { useState } from "react";

export default function ElectiveCoursesBox({ data, addData }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    function handleSearch(event) {
        const term = event.target.value;
        setSearchTerm(term);
      
        const results = data.filter((course) => {
          // Realize a busca pelo termo de pesquisa em campos relevantes do curso
          const courseName = course.name.toLowerCase();
          const courseCode = course.code.toLowerCase();
          return courseName.includes(term.toLowerCase()) || courseCode.includes(term.toLowerCase());
        });
      
        setSearchResults(results);
      }
      

    return (
        <Box className={styles.box}>
            <Box className={styles.tilte_box}>
                <h2>OPTATIVAS</h2>
            </Box>

            <input
                type="text"
                placeholder="Pesquisar..."
                value={searchTerm}
                onChange={handleSearch}
            />

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
