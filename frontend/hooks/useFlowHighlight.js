import { useState, useEffect } from "react"

export function useFlowHighlight(data) {
    // Estados
    const [highlighted, setHighlighted] = useState({
        focused: "",
        preReqs: [],
        coReqs: [],
        posReqs: [],
    })
    const dataDict = {}

    const getHighlightColor = (code) => {
        return code == highlighted.focused
            ? "#834DF0"
            : highlighted.coReqs.includes(code)
            ? "#FFAF0F"
            : highlighted.preReqs.includes(code)
            ? "#208A3C"
            : highlighted.posReqs.includes(code)
            ? "#DB3B4B"
            : " #232323"
    }

    // Função muda o código do card que está sendo exibido
    const setFocused = (code) => {
        if (dataDict[code]) {
            setHighlighted((prevState) => ({
                ...prevState,
                focused: code,
                preReqs: [...prevState.preReqs, ...dataDict[code].preRequisites],
                coReqs: [...prevState.coReqs, ...dataDict[code].coRequisites],
            }))
        }
        console.log(dataDict)
        console.log(JSON.stringify(highlighted))
    }
    // Função auxiliar para encontrar pré-requisitos dos pré-requisitos
    const getPreReqsOfPreReqs = (preReqs) => {
        const newPreReqs = []
        for (const preReq of preReqs) {
            if (!highlighted.preReqs.includes(preReq) && dataDict[preReq]) {
                newPreReqs.push(...dataDict[preReq].preRequisites)
            }
        }
        return newPreReqs
    }

    useEffect(() => {
        // Converte data para dicionário
        data.forEach((course) => (dataDict[course.code] = course))

        // Chamada inicial para definir os pré-requisitos dos pré-requisitos
        setHighlighted((prevState) => ({
            ...prevState,
            preReqs: [...prevState.preReqs, ...getPreReqsOfPreReqs(prevState.preReqs)],
        }))
    }, [data])

    return { getHighlightColor, setFocused }
}
