import { useState, useEffect } from "react"

export function useFlowHighlight(data) {
    // Estados
    const [highlighted, setHighlighted] = useState(null)
    const [dataDict, setDataDict] = useState(null)

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

    // Função muda o código do card que está sendo exibido
    const setFocused = (code) => {
        if (code === null) {
            setHighlighted({
                focused: "",
                preReqs: [],
                coReqs: [],
                posReqs: [],
            })
        } else if (dataDict && dataDict[code]) {
            setHighlighted((prevState) => ({
                ...prevState,
                focused: code,
                preReqs: [...getPreReqsOfPreReqs(dataDict[code].preRequisite)],
                coReqs: [...dataDict[code].coRequisite],
            }))
        }
    }

    // Função auxiliar para encontrar pré-requisitos dos pré-requisitos
    const getPreReqsOfPreReqs = (preReqs) => {
        let newPreReqs = [...preReqs]

        for (const preReq of preReqs) {
            if (!highlighted.preReqs.includes(preReq) && dataDict[preReq]) {
                const nestedPreReqs = getPreReqsOfPreReqs(dataDict[preReq].preRequisite)
                newPreReqs = [...newPreReqs, ...nestedPreReqs]
            }
        }

        return newPreReqs
    }

    useEffect(() => {
        // Converte data para dicionário
        setHighlighted({
            focused: "",
            preReqs: [],
            coReqs: [],
            posReqs: [],
        })
        const auxDict = {}
        data.forEach((course) => (auxDict[course.code] = course))
        setDataDict(auxDict)
    }, [data])

    return { getHighlightColor, setFocused }
}
