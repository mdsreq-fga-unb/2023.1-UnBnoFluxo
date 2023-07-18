import { useEffect, useState } from "react"
import useLocalStorageState from "use-local-storage-state"

export function useData() {
    // Estados
    const [data, setData] = useLocalStorageState("data", { defaultValue: [] })
    const [maxPeriodNumber, setMaxPeriodNumber] = useState(10)

    // Funcao callback que adiciona os elementos de "newData" ao estado "data"
    // Essa versão substitui se o codigo do componente curricular for igual
    const addData = (newData) => {
        setData((prevData) => {
            const updatedData = [...prevData]

            newData.forEach((newCourse) => {
                const index = updatedData.findIndex(
                    (storedCourse) => storedCourse.code === newCourse.code
                )
                if (index !== -1) {
                    updatedData[index] = newCourse
                } else {
                    updatedData.push(newCourse)
                }
            })

            return updatedData
        })
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

    // Funcao que move os pos requisitos de uma funcao para frente
    const moveCoursePosReqs = (moveCode, moveAmount) => {
        let coursesToMove =
            [...getPosReqsOfPosReqs([moveCode])].filter((code) => code !== moveCode) || []

        for (const course of data) {
            if (coursesToMove.includes(course.code) && course.period !== 0) {
                let newCourse = { ...course }
                newCourse.period += moveAmount
                addData([newCourse])
            }
        }
    }

    // UseEffect para atualizar o valor máximo de período com base nos dados
    useEffect(() => {
        let max = 0

        data.forEach((course) => {
            if (course.period > max) max = course.period
        })

        const newMaxPeriodNumber = Math.max(max, 10)

        if (newMaxPeriodNumber !== maxPeriodNumber) {
            setMaxPeriodNumber(newMaxPeriodNumber)
        }
    }, [data])

    // Funcao que limpa os dados do app
    const clearData = () => setData([])

    return { data, addData, clearData, maxPeriodNumber, moveCoursePosReqs }
}
