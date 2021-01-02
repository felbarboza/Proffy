import React, {useState, useCallback} from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import api from '../../services/api';

const Deletar: React.FC = () =>{
  const [CPF, setCPF] = useState('');

  const handleDeleteClass = useCallback(async()=>{
    await api.delete('employees', {
      data:{
        CPF
      }
    })
  }, [CPF]);

  return(
    <div id="page-employee-form" className="container">
      <PageHeader
       title="Delete um funcionário"
      />

      <main>
        <form onSubmit={handleDeleteClass}>
          <fieldset>

            <Input 
              name="cpf" 
              label="CPF"
              value={CPF}
              onChange={(e)=>{setCPF(e.target.value)}}
            />
          </fieldset>
          
          <footer>
            <button type="submit">
              Deletar Funcionario
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default Deletar;