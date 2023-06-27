import { useEffect, useState } from "react"
import useLocalStorageState from "use-local-storage-state"

export function useData() {
    // Estados
    const [data, setData] = useLocalStorageState("data", { defaultValue: [] })
    const [maxPeriodNumber, setMaxPeriodNumber] = useState(10)

    // Funcao callback que adiciona os elementos de "newData" ao estado "data"
    const addData = (newData) => {
        setData((prevData) => {
            // "nextData" recebe tudo que ainda nao existe em "data"
            const nextData = newData.filter((course) => {
                return !prevData.some((storedCourse) => {
                    return JSON.stringify(storedCourse) === JSON.stringify(course)
                })
            }) // TODO: Melhorar a logica do algoritimo para comparar apenas props relevantes ao inves do objeto inteiro
            return [...prevData, ...nextData]
        })
    }

    //Todo:
    const updateData = (updatedData, oldData) => {}

    // UseEffect para atualizar o valor máximo de período com base nos dados
    useEffect(() => {
        let max = maxPeriodNumber

        data.forEach((course) => {
            if (course.period > max) max = course.period
        })

        const newMaxPeriodNumber = Math.max(max, 10)

        if (newMaxPeriodNumber !== maxPeriodNumber) {
            setMaxPeriodNumber(newMaxPeriodNumber)
        }
    }, [data]) // Todo: Checar se funciona ao editar um componete curricular para um periodo inferior

    // Funcao que limpa os dados do app
    const clearData = () => {
        setData([])
        setMaxPeriodNumber(10)
    }

    return { data, addData, clearData, maxPeriodNumber }
}
