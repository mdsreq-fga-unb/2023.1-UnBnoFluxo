import NewCard from "./NewCard"
import styles from "../styles/ElectiveCoursesBox.module.css"
import { Box, CircularProgress, Grid, InputBase } from "@mui/material"
import React, { useState } from "react"
import SearchIcon from "@mui/icons-material/Search"
import { Droppable } from "react-beautiful-dnd"

import dynamic from "next/dynamic"
const Card = dynamic(() => import("./Card"), { ssr: false })


export default function ElectiveCoursesBox({ data, addData, moveCoursePosReqs }) {
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

            <Droppable droppableId="period-0">
                {(provided) => (
                    <Grid
                        container
                        className={styles.cards_box}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <Grid item>
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
                                .map((course, index) => (
                                    <Grid item key={course.code}>
                                        <Card
                                            index={index}
                                            course={course}
                                            data={data}
                                            addData={addData}
                                            moveCoursePosReqs={moveCoursePosReqs}
                                        />
                                    </Grid>
                                ))
                        ) : (
                            <CircularProgress color="inherit" />
                        )}
                        {provided.placeholder}
                    </Grid>
                )}
            </Droppable>
        </Box>
    )
}
