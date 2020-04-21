import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios'

import { TarefasToolbar, TarefasTable } from './components';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const API_URL = 'https://minhastarefas-api.herokuapp.com'


const TarefasList = () => {
  const classes = useStyles();

  const [tarefas, setTarefas] = useState([]);
  const [openDialog, setOpenDialog] = useState(false)
  const [mensagem, setMensagem] = useState('')

  const salvar = (tarefa) => {
    axios.post(`${API_URL}/tarefas`, tarefa,{
      headers: { 'x-tenant-id' : localStorage.getItem('email_usuario_logado') }
    }).then(response => {
      const novaTarefa = response.data
      setTarefas([...tarefas, novaTarefa])
      setMensagem('Item adicionado com sucesso')
      setOpenDialog(true)
    }).catch(err => {
      setMensagem('Ocorreu um erro')
      setOpenDialog(true)
    }) 
  }

  const listarTarefas = () => {
    axios.get(`${API_URL}/tarefas`,{
      headers: { 'x-tenant-id' : localStorage.getItem('email_usuario_logado') }
    }).then(response => {
      const listarTarefas = response.data
      setTarefas(listarTarefas)
    }).catch(err => {
      console.log(err)
    }) 
  }
  useEffect(() => {
    listarTarefas()
  }, [])


  const alterarStatus = (id) => {
    axios.patch(`${API_URL}/tarefas/${id}`, null, {
      headers: { 'x-tenant-id' : localStorage.getItem('email_usuario_logado') }
    }).then(response => {
      const lista = [...tarefas]
      lista.forEach(tarefa => {
        if(tarefa.id === id){
          tarefa.done = true
        }
      })
      setTarefas(lista)
      setMensagem('Item atualizado com sucesso')
      setOpenDialog(true)
    }).catch(err => {
      setMensagem('Ocorreu um erro')
      setOpenDialog(true)
    }) 
  }

  const deletar = (id) => {
    axios.delete(`${API_URL}/tarefas/${id}`, {
      headers: { 'x-tenant-id' : localStorage.getItem('email_usuario_logado') }
    }).then(response => {
      const lista = tarefas.filter(tarefa => tarefa.id !== id)
      setTarefas(lista)
      setMensagem('Item excluido com sucesso')
      setOpenDialog(true)
    }).catch(err => {
      setMensagem('Ocorreu um erro')
      setOpenDialog(true)
    }) 
  }

  return (
    <div className={classes.root}>
      <TarefasToolbar salvar={salvar}/>
      <div className={classes.content}>
        <TarefasTable 
          alterarStatus={alterarStatus} 
          deleteAction={deletar}
          tarefas={tarefas} 
        />
      </div>
      <Dialog open={openDialog} onClose={e => setOpenDialog(false)}>
        <DialogTitle>Atenção</DialogTitle>
        <DialogContent>
          {mensagem}
        </DialogContent>
        <DialogActions>
          <Button onClick={e => setOpenDialog(false)}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TarefasList;
