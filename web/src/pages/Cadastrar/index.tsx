import React, {useState, useCallback} from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';

const Cadastrar: React.FC = () =>{
  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const [cargo, setCargo] = useState('');
  const [UF, setUF] = useState('');
  const [salario, setSalario] = useState('');
  const [status, setStatus] = useState('');

  const handleCreateClass = useCallback(async()=>{
    await api.post('employees', {
      Cargo: cargo,
      CPF,
      Nome: name,
      UF,
      Salario: salario,
      Status: status
    })
  }, [CPF, UF, cargo, name, salario, status]);

  return(
    <div id="page-employee-form" className="container">
      <PageHeader
       title="Cadastre um novo funcionário"
       description="Preencha os campos e submeta o formulário"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input 
              name="name" 
              label="Nome Completo"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />

            <Input 
              name="cargo" 
              label="Cargo"
              value={cargo}
              onChange={(e)=>{setCargo(e.target.value)}}
            />

            <Input 
              name="cpf" 
              label="CPF"
              value={CPF}
              onChange={(e)=>{setCPF(e.target.value)}}
            />

            <Input 
              name="uf" 
              label="UF de nascimento"
              value={UF}
              onChange={(e)=>{setUF(e.target.value)}}
            />

            <Input 
              name="salario" 
              label="Salario"
              value={salario}
              onChange={(e)=>{setSalario(e.target.value)}}
            />

            <Input 
              name="status" 
              label="Status"
              value={status}
              onChange={(e)=>{setStatus(e.target.value)}}
            />  

          </fieldset>
          
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante <br/>
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default Cadastrar;