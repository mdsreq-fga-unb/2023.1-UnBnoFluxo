import {
    Autocomplete,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
} from "@mui/material"
import React, { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import Tip from "./Tip"
import Title from "./Title"

export default function DetailFormDialog({ open, onClose, addData, course }) {
    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors },
    } = useForm() // Usa o hook de fomularios para a validacao dos campos

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
            code: data.code.toUpperCase(),
            displayName: data.displayName.toUpperCase(),
            nature: data.nature.toUpperCase(),
            alias: data.alias.toUpperCase(),
            period: parseInt(data.period),
            preRequisite: data.preRequisite,
            coRequisite: data.coRequisite,
            workloud: parseInt(data.workloud),
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
                <DialogTitle m={1}>
                    <Title title={"Detalhes do componente"} />
                </DialogTitle>
                <DialogContent>
                    <Stack spacing={3} my={6} mx={[0, 8, 16]}>
                        <TextField
                            label="Nome"
                            required
                            error={!!errors.displayName}
                            helperText={
                                errors.displayName ? (
                                    <Tip text={errors.displayName.message} errorMode />
                                ) : (
                                    <Tip text="O nome completo do componente curricular" />
                                )
                            }
                            {...register("displayName", { required: "Campo obrigatório" })}
                        />
                        <TextField
                            label="Aliás"
                            error={!!errors.alias}
                            helperText={
                                errors.alias ? (
                                    <Tip text={errors.alias.message} errorMode />
                                ) : (
                                    <Tip text="Uma abreviatura/sigla para o componente curricular" />
                                )
                            }
                            {...register("alias", {
                                maxLength: {
                                    value: 12,
                                    message: "O alias deve ter no máximo 12 caracteres",
                                },
                            })}
                        />
                        <TextField
                            label="Período"
                            required
                            error={!!errors.period}
                            helperText={
                                errors.period ? (
                                    <Tip text={errors.period.message} errorMode />
                                ) : (
                                    <Tip text="O periodo que se deseja cumprir o componente curricular (use 0 para Optativas)" />
                                )
                            }
                            type="number"
                            {...register("period", {
                                required: "Campo obrigatório",
                                validate: (value) =>
                                    parseInt(value, 10) >= 0 ||
                                    "O periodo deve ser maior ou igual a zero",
                            })}
                        />
                        <TextField
                            label="Código"
                            required
                            error={!!errors.code}
                            helperText={
                                errors.code ? (
                                    <Tip text={errors.code.message} errorMode />
                                ) : (
                                    <Tip text="Um codigo unico para o componente curricular" />
                                )
                            }
                            {...register("code", {
                                required: "Campo obrigatório",
                                pattern: {
                                    value: /^[A-Za-z]{3}\d{4}$/,
                                    message: "O código deve seguir o formato ABC1234",
                                },
                            })}
                        />
                        <Controller
                            control={control}
                            name="nature"
                            rules={{ required: "Campo obrigatório" }}
                            render={({ field }) => (
                                <Autocomplete
                                    {...field}
                                    options={["OBRIGATORIO", "OPTATIVO"]}
                                    getOptionLabel={(option) => option}
                                    defaultValue={course?.nature || null}
                                    onChange={(event, newValue) => {
                                        setValue("nature", newValue) // Atualizar o valor do campo
                                        field.onChange(newValue) // Chamar o onChange do campo renderizado
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Natureza"
                                            required
                                            error={!!errors.nature}
                                            helperText={
                                                errors.nature ? (
                                                    <Tip text={errors.nature.message} errorMode />
                                                ) : (
                                                    <Tip text="A obrigatoriedade do componente curricular" />
                                                )
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
                                    <Tip text={errors.workloud.message} errorMode />
                                ) : (
                                    <Tip text="O carga horária da componente curricular" />
                                )
                            }
                            type="number"
                            {...register("workloud", {
                                required: "Campo obrigatório",
                                validate: (value) =>
                                    parseInt(value, 10) >= 0 ||
                                    "A carga horária deve ser maior ou igual a zero",
                            })}
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
                        <TextField
                            label="Descrição"
                            helperText={
                                <Tip text="Uma breve descrição do que sera abordado no componente curricular" />
                            }
                            {...register("description")}
                        />
                    </Stack>
                </DialogContent>

                <DialogActions>
                    <Button onClick={onClose}>Cancelar</Button>
                    <Button onClick={handleSave}>Salvar</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
