import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import "@testing-library/jest-dom/extend-expect"

import { useFlowHighlight } from "../../hooks/useFlowHighlight"

describe("useFlowHighlight hook tests", () => {
    it("should return correct highlight color for cards", () => {
        const data = [
            { code: "COURSE1", preRequisite: [], coRequisite: [] },
            { code: "COURSE2", preRequisite: ["COURSE1"], coRequisite: ["COURSE3"] },
            { code: "COURSE3", preRequisite: [], coRequisite: ["COURSE2"] },
            { code: "COURSE4", preRequisite: ["COURSE3", "COURSE2"], coRequisite: [] },
            { code: "COURSE5", preRequisite: [], coRequisite: [] },
        ]

        const { result } = renderHook(() => useFlowHighlight(data))

        act(() => {
            result.current.setFocused("COURSE2")
        })

        expect(result.current.getHighlightColor("COURSE1")).toBe("#208A3C")
        expect(result.current.getHighlightColor("COURSE2")).toBe("#834DF0")
        expect(result.current.getHighlightColor("COURSE3")).toBe("#FFAF0F")
        expect(result.current.getHighlightColor("COURSE4")).toBe("#DB3B4B")
        expect(result.current.getHighlightColor("COURSE5")).toBe("#FFFFFF")
    })
})
