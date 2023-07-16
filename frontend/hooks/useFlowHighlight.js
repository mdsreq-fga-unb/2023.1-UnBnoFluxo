import { useState, useEffect } from "react"

export function useFlowHighlight(data) {
    // Estados
    const [highlighted, setHighlighted] = useState({
        focused: "",
        preReqs: [],
        coReqs: [],
        posReqs: [],
    })
    const [dataDict, setDataDict] = useState({})

    // Função que retorna a cor com a qual o card deve ser reindenizado
    const getHighlightColor = (code) => {
        return code == highlighted.focused
            ? "#834DF0"
            : highlighted?.coReqs.includes(code)
            ? "#FFAF0F"
            : highlighted?.preReqs.includes(code)
            ? "#208A3C"
            : highlighted?.posReqs.includes(code)
            ? "#DB3B4B"
            : " #FFFFFF"
    }

    // Função muda o código do card que está sendo exibido
    const setFocused = (code) => {
        if (dataDict[code]) {
            setHighlighted((prevState) => ({
                ...prevState,
                focused: code,
                // preReqs: [...getPreReqsOfPreReqs(dataDict[code].preRequisite)],
                coReqs: [...dataDict[code].coRequisite],
            }))
            console.log(JSON.stringify(highlighted))
        }
    }

    // // Função auxiliar para encontrar pré-requisitos dos pré-requisitos
    // const getPreReqsOfPreReqs = (preReqs) => {
    //     const newPreReqs = [...preReqs]
    //     for (const preReq of preReqs) {
    //         if (!highlighted.preReqs.includes(preReq) && dataDict[preReq]) {
    //             newPreReqs.push(...dataDict[preReq].preRequisite)
    //         }
    //     }
    //     if (preReqs.length === newPreReqs.length) {
    //         return newPreReqs
    //     }
    //     getPreReqsOfPreReqs(preReqs)
    // }

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
    }, [])

    return { getHighlightColor, setFocused }
}
