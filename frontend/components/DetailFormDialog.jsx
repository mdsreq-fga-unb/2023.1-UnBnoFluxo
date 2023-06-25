import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import React from "react"
import { useForm } from "react-hook-form"

export default function DetailFormDialog({ open, onClose, addData, course }) {
    const { register, handleSubmit, setValue } = useForm()

    const handleSave = handleSubmit((data) => {
        const newCourse = {
            code: data.code,
            displayName: data.displayName,
            nature: data.nature,
            alias: data.alias,
            period: data.period,
            preRequisite: data.preRequisite,
            coRequisite: data.coRequisite,
            workloud: data.workloud,
            description: data.description,
        }

        console.log(JSON.stringify(newCourse))
        addData([newCourse])
        // Limpar os campos do formulário
        setValue("displayName", "")
        setValue("alias", "")
        setValue("period", "")
        setValue("code", "")
        setValue("nature", "")
        setValue("workloud", "")
        setValue("preRequisite", "")
        setValue("coRequisite", "")
        setValue("description", "")
        onClose()
    })

    return (
        <div>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Cadastre um novo componente</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Nome"
                        required
                        helperText={"Defina um nome curto para a matéria"}
                        {...register("displayName", { required: true })}
                        defaultValue={course.displayName}
                    />
                    <TextField
                        label="Aliás"
                        helperText={"Defina um nome curto para a matéria"}
                        {...register("alias", { maxLength: 12 })}
                        defaultValue={course.alias}
                    />
                    <TextField
                        label="Período"
                        required
                        type="number"
                        {...register("period", { required: true })}
                        defaultValue={course.number}
                    />
                    <TextField
                        label="Código"
                        required
                        helperText={"O código único do componete curricular. Formato ABC1234"}
                        {...register("code", { required: true, pattern: /^[A-Za-z]{3}\d{4}$/ })}
                        defaultValue={course.code}
                    />
                    <TextField
                        label="Natureza"
                        required
                        {...register("nature", { required: true })}
                        defaultValue={course.nature}
                    />
                    <TextField
                        label="Carga horária"
                        required
                        type="number"
                        {...register("workloud", { required: true })}
                        defaultValue={course.workloud}
                    />
                    <TextField
                        label="Pré-requisitos"
                        helperText={"Componentes curriculares que devem ser cumpridos antes"}
                        {...register("preRequisite")}
                        defaultValue={course.preRequisite}
                    />
                    <TextField
                        label="Co-requisitos"
                        helperText={
                            "Componentes curriculares que devem ser cumpridos simuntaneamente"
                        }
                        {...register("coRequisite")}
                        defaultValue={course.coRequisite}
                    />

                    <TextField
                        label="Descrição"
                        {...register("description")}
                        defaultValue={course.description}
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={onClose}>Cancelar</Button>
                    <Button onClick={handleSave}>Salvar</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
