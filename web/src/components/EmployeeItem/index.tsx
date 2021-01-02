import React from 'react';

import './styles.css';


export interface Employee{
  Id: number;
  DataCad: string;
  Cargo: string;
  CPF: string;
  Nome: string;
  UF: string;
  Salario: number;
  Status: string;
}

interface EmployeeItemProps{
  employee: Employee
}

const EmpoyeeItem: React.FC<EmployeeItemProps> = ({employee}) =>{

  return(
    <article className="employee-item">
      <header>
        <div>
          <strong>{employee.Nome}</strong>
          <span>{employee.Cargo}</span>
          <span>CPF: {employee.CPF}</span>
          <span>Status: {employee.Status}</span>
        </div>
      </header>

      <p>
        Data de cadastro: 
        {employee.DataCad}
      </p>

      <p>
        UF:
        {employee.UF}
      </p>

      <footer>
        <p>
          Salário
          <strong>R$ {employee.Salario}</strong>
        </p>
      </footer>
    </article>
  );
};

export default EmpoyeeItem;