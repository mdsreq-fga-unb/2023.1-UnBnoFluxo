import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import React, { useState } from "react"
//import { useForm } from "react-hook-form";

export default function DetailFormDialog({ open, onClose, addData }) {
    // Estados
    const [name, setName] = useState("")
    const [alias, setAlias] = useState("")
    const [period, setPeriod] = useState("")
    const [preRequisite, setPre] = useState("")
    const [coRequisite, setCo] = useState("")
    const [equivalence, setEquivalence] = useState("")
    const [workloud, setWorkloud] = useState("")
    const [code, setCode] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")

    const handleSave = () => {
        //UM objeto com todos os dados do fomulario
        const newCourse = {
            code: code,
            displayName: name,
            nature: type,
            alias: alias,
            period: period,
            preRequisite: preRequisite,
            coRequisite: coRequisite,
            equivalence: equivalence,
            workloud: workloud,
            description: description,
        }

        //imprime (tirar dps)
        console.log(JSON.stringify(newCourse))
        //adicionando o obj ao banco de dados com a função
        addData([newCourse])
        // Fecha o diálogo
        onClose()
    }
    /*
    const useForm = (newCourse, handleSave) => {

      const [values, setValues] = useState(initialValues);
  
      const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };
  
      const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(values);
      };

    //useform
    const onSubmites = () =>{

    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setName((prevState) => ({
        ...prevState,
        [name]: value
      }));
      //, preRequisite, coRequisite, equivalence, code, workloud, type, description
    
    };
*/

    return (
        <div>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Cadastre um novo componente</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)} // ALTERAR PARA{handleChange}
                    />
                    <TextField
                        label="Apelido"
                        placeholder="Calculo 1 = C1"
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)} // ALTERAR PARA{handleChange}
                    />
                    <TextField
                        label="Periodo" //ver como relacionar com o banco de dados
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                    />
                    <TextField
                        label="Pré-requisitos" //ver como relacionar com o banco de dados
                        value={preRequisite}
                        onChange={(e) => setPre(e.target.value)}
                    />
                    <TextField
                        label="Co-requisitos" //ver como relacionar com o banco de dados
                        value={coRequisite}
                        onChange={(e) => setCo(e.target.value)}
                    />
                    <TextField
                        label="Equivalências" //ver como relacionar com o banco de dados
                        value={equivalence}
                        onChange={(e) => setEquivalence(e.target.value)}
                    />
                    <TextField
                        label="Código"
                        value={code}
                        placeholder="FGA1526xx"
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <TextField
                        label="Carga horária"
                        value={workloud}
                        placeholder="90h"
                        onChange={(e) => setWorkloud(e.target.value)}
                    />
                    <TextField
                        label="Tipo" //colocar opçao de seleçao (obrigatoria/optativa)
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                    <TextField
                        label="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
