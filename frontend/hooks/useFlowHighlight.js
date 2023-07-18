import { useState, useEffect } from "react"

export function useFlowHighlight(data) {
    const [highlighted, setHighlighted] = useState(null) // Estado que diz os codigos dos cards destacados e qual categoria
    const [dataDict, setDataDict] = useState(null) // Estado que guarda os dados em dicionario

    // Funcao auxiliar para limpar o estado highlighted
    const setHighlightedDefault = () => {
        setHighlighted({
            focused: "",
            preReqs: [],
            coReqs: [],
            posReqs: [],
        })
    }

    // Funcao que retorna a cor com a qual o card deve ser renderizado
    const getHighlightColor = (code) => {
        if (highlighted) {
            return code === highlighted.focused
                ? "#834DF0"
                : highlighted?.coReqs.includes(code)
                ? "#FFAF0F"
                : highlighted?.preReqs.includes(code)
                ? "#208A3C"
                : highlighted?.posReqs.includes(code)
                ? "#DB3B4B"
                : "#FFFFFF"
        }
        return "#FFFFFF"
    }

    // Funcao muda o codigo do card que esta sendo exibido
    const setFocused = (code) => {
        if (code === null) {
            setHighlightedDefault()
        } else if (dataDict && dataDict[code]) {
            setHighlighted((prevState) => ({
                ...prevState,
                focused: code,
                preReqs: [...getPreReqsOfPreReqs(dataDict[code].preRequisite)],
                posReqs: [...getPosReqsOfPosReqs([code])],
                coReqs: [...dataDict[code].coRequisite],
            }))
        }
    }

    // Funcao auxiliar para encontrar pre-requisitos dos pre-requisitos
    const getPreReqsOfPreReqs = (preReqs) => {
        if (!preReqs || !Array.isArray(preReqs)) {
            return []
        }

        let newPreReqs = [...preReqs]

        for (const preReq of preReqs) {
            if (!highlighted.preReqs.includes(preReq) && dataDict[preReq]) {
                const nestedPreReqs = getPreReqsOfPreReqs(dataDict[preReq].preRequisite)
                newPreReqs = [...newPreReqs, ...nestedPreReqs]
            }
        }

        return newPreReqs
    }

    // Funcao auxiliar para encontrar pos-requisitos dos pos-requisitos
    const getPosReqsOfPosReqs = (posReqs) => {
        if (!posReqs || !Array.isArray(posReqs)) {
            return []
        }

        let newPosReqs = [...posReqs]

        for (const posReq of posReqs) {
            const nestedPosReqs = data.filter((course) => course.preRequisite.includes(posReq))
            newPosReqs = [...newPosReqs, ...nestedPosReqs.map((course) => course.code)]
            newPosReqs = [
                ...newPosReqs,
                ...getPosReqsOfPosReqs(nestedPosReqs.map((course) => course.code)),
            ]
        }

        return newPosReqs
    }

    useEffect(() => {
        setHighlightedDefault()

        // Converte data para dicionário
        const auxDict = {}
        data.forEach((course) => (auxDict[course.code] = course))
        setDataDict(auxDict)
    }, [data])

    return { getHighlightColor, setFocused }
}
