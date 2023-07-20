import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import "@testing-library/jest-dom/extend-expect"

import { useOpenDialog } from "../../hooks/useOpenDialog"

describe("useOpenDialog hook tests", () => {
    it("should open and close the dialog", () => {
        const { result } = renderHook(() => useOpenDialog())

        expect(result.current[0]).toBe(false)

        act(() => {
            result.current[1]()
        })

        expect(result.current[0]).toBe(true)

        act(() => {
            result.current[2]()
        })

        expect(result.current[0]).toBe(false)
    })
})
