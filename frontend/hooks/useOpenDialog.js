import { useState } from "react"

export function useOpenDialog() {
    // Estados
    const [openDialog, setOpenDialog] = useState(false) // Estado que determina se o NewFormDialog esta aberto ou fechado

    // Funcao que abre o NewFormDialog
    const handleOpenDialog = () => setOpenDialog(true)

    // Funcao que fecha o NewFormDialog
    const handleCloseDialog = () => setOpenDialog(false)

    return [openDialog, handleOpenDialog, handleCloseDialog]
}
