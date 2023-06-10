import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

export default function DialogExample({open, onClose}) {
  const [name, setName] = useState("");
  const [preRequisite, setPre] = useState("");
  const [coRequisite, setCo] = useState("");
  const [equivalence, setEquivalence] = useState("");
  const [workloud, setWorkloud] = useState("");
  const [code, setCode] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    // Aqui você pode fazer algo com os valores capturados, como enviar para um servidor ou atualizar o estado global
    console.log("Nome:", name);
    console.log("Email:", email);

    // Fecha o diálogo
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Cadastre um novo componente</DialogTitle>
        <DialogContent>
          <TextField
            label="Apelido"
            value={name}
            placeholder="Calculo 1 = C1"
            onChange={(e) => setName(e.target.value)}
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
            label="Tipo"  //colocar opçao de seleçao (obrigatoria/optativa)
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
  );
}
