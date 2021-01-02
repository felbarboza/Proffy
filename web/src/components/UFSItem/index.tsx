import React from 'react';

import './styles.css';


export interface UFs {
	RO: number;
	AC: number;
	AM: number;
	RR: number;
	PA: number;
	AP: number;
	TO: number;
	MA: number;
	PI: number;
	CE: number;
	RN: number;
	PB: number;
	PE: number;
	AL: number;
	SE: number;
	BA: number;
	MG: number;
	ES: number;
	RJ: number;
	SP: number;
	PR: number;
	SC: number;
	RS: number;
	MS: number;
	MT: number;
	GO: number;
	DF: number;
}

interface UFsItemProps{
  ufs: UFs
}

const UFsItem: React.FC<UFsItemProps> = ({ufs}) =>{

  return(
    <article className="ufs-item">
      <p>Número de Funcionarios por estado</p>
      <p>
        RO: {ufs.RO}
        <br/>
        AC: {ufs.AC}
        <br/>
        AM: {ufs.AM}
        <br/>
        RR: {ufs.RR}
        <br/>
        PA: {ufs.PA}
        <br/>
        AP: {ufs.AP}
        <br/>
        TO: {ufs.TO}
        <br/>
        MA: {ufs.MA}
        <br/>
        PI: {ufs.PI}
        <br/>
        CE: {ufs.CE}
        <br/>
        RN: {ufs.RN}
        <br/>
        PB: {ufs.PB}
        <br/>
        PE: {ufs.PE}
        <br/>
        AL: {ufs.AL}
        <br/>
        SE: {ufs.SE}
        <br/>
        BA: {ufs.BA}
        <br/>
        MG: {ufs.MG}
        <br/>
        ES: {ufs.ES}
        <br/>
        RJ: {ufs.RJ}
        <br/>
        SP: {ufs.SP}
        <br/>
        PR: {ufs.PR}
        <br/>
        SC: {ufs.SC}
        <br/>
        RS: {ufs.RS}
        <br/>
        MS: {ufs.MS}
        <br/>
        MT: {ufs.MT}
        <br/>
        GO: {ufs.GO}
        <br/>
        DF: {ufs.DF}
        <br/>
      </p>
    </article>
  );
};

export default UFsItem;