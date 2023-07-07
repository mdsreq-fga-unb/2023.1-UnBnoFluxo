import SaveIcon from "@mui/icons-material/Save"
import {
    Autocomplete,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
    Typography,
} from "@mui/material"
import React, { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import Tip from "./Tip"
import Title from "./Title"

export default function DetailFormDialog({ open, onClose, addData, course = undefined, flowData }) {
    const {
        register,
        handleSubmit,
        setValue,
        control,
        reset,
        formState: { errors },
    } = useForm() // Usa o hook de fomularios para a validacao dos campos

    const isEditingMode = course === undefined ? false : true

    // Preenche os campos com os dados do curso ao abrir o diálogo
    useEffect(() => {
        if (isEditingMode) {
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

    // Funcao que salva os campos e adiciona eles no array
    const handleSave = handleSubmit((data) => {
        const newCourse = {
            code: data.code?.toUpperCase(),
            displayName: data.displayName?.toUpperCase(),
            nature: data.nature?.toUpperCase(),
            alias: data.alias?.toUpperCase(),
            period: parseInt(data.period),
            preRequisite: data.preRequisite,
            coRequisite: data.coRequisite,
            workloud: parseInt(data.workloud),
            description: data.description,
        }
        // Nenhum campo modificado logo nao faz nada
        if (JSON.stringify(course) === JSON.stringify(newCourse)) {
            onClose()
            return
        }

        addData([newCourse]) // TODO: VERIFICAR O PROBLEMA DISSO AQUI
        reset() // Limpa os campos
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
                                    <Tip text="O periodo que se deseja cumprir o componente curricular" />
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
                            disabled={isEditingMode}
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
                                    options={["OBRIGATORIO", "OPTATIVO", "COMPLEMENTAR"]}
                                    getOptionLabel={(option) => option}
                                    onChange={(event, newValue) => {
                                        setValue("nature", newValue)
                                        field.onChange(newValue)
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
                                    <Tip text="O carga horária do componente curricular (em horas)" />
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

                        <Controller
                            control={control}
                            name="preRequisite"
                            render={({ field }) => (
                                <Autocomplete
                                    {...field}
                                    multiple
                                    id="tags-outlined"
                                    options={flowData.map((course) => course.code)}
                                    getOptionLabel={(option) => {
                                        const selectedCourse = flowData.find(
                                            (course) => course.code === option
                                        )
                                        return `${selectedCourse.code} - ${selectedCourse.displayName}`
                                    }}
                                    filterSelectedOptions
                                    onChange={(event, newValue) => {
                                        setValue("preRequisite", newValue)
                                        field.onChange(newValue)
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Pré-requisitos"
                                            helperText={
                                                <Tip text="Componentes curriculares que devem ser cumpridos antes" />
                                            }
                                        />
                                    )}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="coRequisite"
                            render={({ field }) => (
                                <Autocomplete
                                    {...field}
                                    multiple
                                    id="tags-outlined"
                                    options={flowData.map((course) => course.code)}
                                    getOptionLabel={(option) => {
                                        const selectedCourse = flowData.find(
                                            (course) => course.code === option
                                        )
                                        return `${selectedCourse.code} - ${selectedCourse.displayName}`
                                    }}
                                    filterSelectedOptions
                                    onChange={(event, newValue) => {
                                        setValue("coRequisite", newValue)
                                        field.onChange(newValue)
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Co-requisitos"
                                            helperText={
                                                <Tip text="Componentes curriculares que devem ser cumpridos simuntaneamente" />
                                            }
                                        />
                                    )}
                                />
                            )}
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
                    <Button onClick={onClose} sx={{ color: "#DB3B4B" }}>
                        <Typography mx={1}>Cancelar</Typography>
                    </Button>
                    <Button
                        onClick={handleSave}
                        variant="contained"
                        sx={{ mx: 1, background: "#232323" }}
                    >
                        <SaveIcon m={2} />
                        <Typography mx={1}>Salvar</Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
