import { renderHook } from "@testing-library/react"
import { useData } from "../../hooks/useData"
import "@testing-library/jest-dom/extend-expect"
import { act } from "react-dom/test-utils"

describe("useData hook tests", () => {
    it("addData should add new courses or update existing ones correctly", () => {
        const { result } = renderHook(() => useData())

        const newCourse1 = { code: "COURSE1", period: 1 }
        const newCourse2 = { code: "COURSE2", period: 2 }

        act(() => {
            result.current.addData([newCourse1])
        })
        expect(result.current.data).toContainEqual(newCourse1)
        expect(result.current.data.length).toBe(1)

        act(() => {
            result.current.addData([newCourse2])
        })
        expect(result.current.data).toContainEqual(newCourse2)
        expect(result.current.data.length).toBe(2)

        const updatedCourse1 = { ...newCourse1, period: 3 }
        act(() => {
            result.current.addData([updatedCourse1])
        })
        expect(result.current.data).toContainEqual(updatedCourse1)
        expect(result.current.data.length).toBe(2)
    })

    it("moveCoursePosReqs should move pos requisites the specified amount of periods", () => {
        const { result } = renderHook(() => useData())

        const course1 = { code: "COURSE1", period: 1, preRequisite: [] }
        const course2 = { code: "COURSE2", period: 2, preRequisite: ["COURSE1"] }
        const course3 = { code: "COURSE3", period: 3, preRequisite: ["COURSE2"] }

        act(() => {
            result.current.addData([course1, course2, course3])
        })
        act(() => {
            result.current.moveCoursePosReqs("COURSE1", 2)
        })
        expect(result.current.data.find((course) => course.code === "COURSE2").period).toBe(4)
        expect(result.current.data.find((course) => course.code === "COURSE3").period).toBe(5)
    })

    it("clearData should clear the data", () => {
        const { result } = renderHook(() => useData())

        const newCourse1 = { code: "COURSE1", period: 1 }
        const newCourse2 = { code: "COURSE2", period: 2 }

        act(() => {
            result.current.addData([newCourse1, newCourse2])
        })
        act(() => {
            result.current.clearData()
        })
        expect(result.current.data.length).toBe(0)
    })
})
