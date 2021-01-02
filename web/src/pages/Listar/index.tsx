import React, { useState, FormEvent, useCallback } from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import EmployeeItem, {Employee} from '../../components/EmployeeItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';
import UFsItem, {UFs} from '../../components/UFSItem';

const Listar: React.FC = () =>{
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [input1Label, setInput1Label] = useState('Input1');
  const [input2Label, setInput2Label] = useState('Input2');
  const [filter, setFilter] = useState('');
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(true);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [ufs, setUfs] = useState<UFs>({} as UFs);

  async function searchEmployees(e:FormEvent){
    setUfs({} as UFs);
    setEmployees([]);
    e.preventDefault();
    if (filter === 'UF') {
      const response = await api.get('employees/uf');
      console.log(response.data);
      setUfs(response.data);
    }
    else if(filter==='Nome'){
      const response = await api.get(`employees/name/${data1}`);
      setEmployees(response.data);
    }
    else if(filter==='Cargo'){
      const response = await api.get(`employees/role/${data1}`);
      setEmployees(response.data);
    }
    else if(filter==='Data de Cadastro'){
      const response = await api.get(`employees/register-date/${data1}`);
      setEmployees(response.data);
    }
    else if(filter==='Faixa salarial'){
      const response = await api.get(`employees/salary/${data1}/${data2}`);
      setEmployees(response.data);
    }
    else if(filter==='Status'){
      const response = await api.get(`employees/status/${data1}`);
      setEmployees(response.data);
    }
    else if(filter==='CPF'){
      const response = await api.get(`employees/cpf/${data1}`);
      const employeeArray :Employee[] = [];
      employeeArray.push(response.data);
      setEmployees(employeeArray);
    }
  }

  const handleSelectChange = useCallback((option: string) => {
    setFilter(option);
    setInput1(false);
    setInput2(true);
    setInput1Label(option)

    if (option === 'UF') {
      setInput1(true);
    }
    else if(option==='Faixa salarial'){
      setInput2(false);
      setInput1Label('Min Salario');
      setInput2Label('Max Salario');
    }
  }, []);

  return(
    <div id="list-employees" className="container">
      <PageHeader title="Listagem de funcionários">
        <form id="search-employees" onSubmit={searchEmployees}>
          <Select 
            name="options" 
            label="Opções"
            value={filter}
            onChange={e=>{handleSelectChange(e.target.value)}}
            options={[
              { value: 'Nome', label: 'Nome' },
              { value: 'UF', label: 'UF' },
              { value: 'CPF', label: 'CPF' },
              { value: 'Cargo', label: 'Cargo' },
              { value: 'Data de Cadastro', label: 'Data de Cadastro' },
              { value: 'Faixa salarial', label: 'Faixa salarial' },
              { value: 'Status', label: 'Status' },
            ]}
          />
          <Input 
            type="text"
            name="input1" 
            label={input1Label}
            disabled={input1}
            value={data1}
            onChange={e=>{setData1(e.target.value)}}
          />
          <Input
            type="text"
            name="input2" 
            label={input2Label}
            disabled={input2}
            value={data2}
            onChange={e=>{setData2(e.target.value)}}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {employees.map((employee: Employee)=>{
          return (<EmployeeItem key={employee.Id} employee={employee} />);
        })}
        {filter==='UF' && <UFsItem ufs={ufs}/>}
      </main>
    </div>
  );
};

export default Listar;