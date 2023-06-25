import {
    Autocomplete,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material"
import React, { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import Tip from "./Tip"

export default function DetailFormDialog({ open, onClose, addData, course }) {
    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors },
    } = useForm()

    useEffect(() => {
        // Preencher os campos com os dados do curso ao abrir o diálogo
        if (course) {
            setValue("displayName", course.displayName)
            setValue("alias", course.alias)
            setValue("period", course.period)
            setValue("code", course.code)
            setValue("nature", course.nature)
            setValue("workloud", course.workloud)
            setValue("preRequisite", course.preRequisite)
            setValue("coRequisite", course.coRequisite)
            setValue("description", course.description)
        }
    }, [course, setValue])

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
            <Dialog open={open} onClose={onClose} maxWidth="md">
                <DialogTitle>Cadastre um novo componente</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Nome"
                        required
                        error={!!errors.displayName}
                        helperText={
                            errors.displayName ? (
                                <Tip text="Campo obrigatório" />
                            ) : (
                                <Tip text="Defina um nome curto para a matéria" />
                            )
                        }
                        {...register("displayName", { required: true })}
                    />
                    <TextField
                        label="Aliás"
                        helperText={<Tip text="Defina um nome curto para a matéria" />}
                        {...register("alias", { maxLength: 12 })}
                    />
                    <TextField
                        label="Período"
                        required
                        error={!!errors.period}
                        helperText={errors.period ? <Tip text="Campo obrigatório" /> : ""}
                        type="number"
                        {...register("period", { required: true })}
                    />
                    <TextField
                        label="Código"
                        required
                        error={!!errors.code}
                        helperText={
                            errors.code ? (
                                <Tip text="Campo obrigatório e o formato deve ser ABC1234" />
                            ) : (
                                <Tip text="O código único do componete curricular." />
                            )
                        }
                        {...register("code", { required: true, pattern: /^[A-Za-z]{3}\d{4}$/ })}
                    />

                    <Controller
                        control={control}
                        name="nature"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Autocomplete
                                {...field}
                                options={["OBRIGATORIO", "OPTATIVO"]}
                                getOptionLabel={(option) => option}
                                defaultValue={course?.nature || null} // Definir o valor pré-carregado do campo
                                onChange={(event, newValue) => setValue("nature", newValue)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Natureza"
                                        required
                                        error={!!errors.nature}
                                        helperText={
                                            errors.nature ? <Tip text="Campo obrigatório" /> : ""
                                        }
                                    />
                                )}
                            />
                        )}
                    />

                    <TextField
                        label="Carga horária"
                        required
                        error={!!errors.workloud}
                        helperText={
                            errors.workloud ? (
                                <Tip text="Campo obrigatório e somente números" />
                            ) : (
                                ""
                            )
                        }
                        type="number"
                        {...register("workloud", { required: true })}
                    />
                    <TextField
                        label="Pré-requisitos"
                        helperText={
                            <Tip text="Componentes curriculares que devem ser cumpridos antes" />
                        }
                        {...register("preRequisite")}
                    />
                    <TextField
                        label="Co-requisitos"
                        helperText={
                            <Tip text="Componentes curriculares que devem ser cumpridos simuntaneamente" />
                        }
                        {...register("coRequisite")}
                    />

                    <TextField label="Descrição" {...register("description")} />
                </DialogContent>

                <DialogActions>
                    <Button onClick={onClose}>Cancelar</Button>
                    <Button onClick={handleSave}>Salvar</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
