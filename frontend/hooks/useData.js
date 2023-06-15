import useLocalStorageState from "use-local-storage-state"

export function useData() {
    // Estados
    const [data, setData] = useLocalStorageState("data", { defaultValue: [] })

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

    // Funcao que limpa os dados do app
    const clearData = () => setData([])


    return { data, addData, clearData }
}