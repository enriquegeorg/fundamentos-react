import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import First from './components/basics/First'
import Second from './components/basics/Second'
import Aleatory from './components/basics/Aleatory'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import StudentsList from './components/repeat/StudentsList'
import ProductsList from './components/repeat/ProductsList'
import PairOrNot from './components/conditional/PairOrNot'
import UserInfo from './components/conditional/UserInfo'
import Direct from './components/communications/Direct'
import Indirect from './components/communications/Indirect'
import Input from './components/form/Input'
import Counter from './components/counter/Counter'
import Mega from './components/mega/Mega'


export default _ =>

    <div className='App'>
        <strong> FUNDAMENTOS
            <div className='Cards'>
                <Card titulo="Contador" color="purple">
                    <Mega qtdNumbers={6} />
                </Card>
                <Card titulo="Contador" color="purple">
                    <Counter initialValue={30} />
                </Card>
                <Card titulo="Componente controlado (input)" color="orange">
                    <Input />
                </Card>
                <Card titulo="Comunicação indireta" color="dark-silver">
                    <Indirect />
                </Card>
                <Card titulo="Comunicação direta" color="silver">
                    <Direct />
                </Card>
                <Card titulo="Renderização conditional" color="#cfe2f3">
                    <PairOrNot number={20} />
                    <UserInfo user={{ name: 'Fernando' }} />
                    <UserInfo user={{ email: 'marcia@gmail.com' }} />
                </Card>
                <Card titulo="Lista de Produtos" color="#cfe2f3">
                    <ProductsList />
                </Card>
                <Card titulo="Componente Familia" color="#dbb6cd">
                    <StudentsList />
                </Card>
                <Card titulo="Componente Familia" color="blue">
                    <Family familyName="Silva">
                        <FamilyMember name="Pedro" />
                        <FamilyMember name="Anderson" />
                        <FamilyMember name="Joana" />
                    </Family>
                </Card>
                <Card titulo="Exemplo de Card" color="green">
                    <First />
                </Card>
                <Card titulo="Min e max" color="#800000">
                    <Aleatory min={1} max={60} />
                </Card>
                <Card titulo="Alunos" color="#808000">
                    <Second titulo="Notas do Aluno" aluno="Alisson" nota={9.3}></Second>
                    <Second titulo="Notas do Aluno" aluno="Nilce" nota={3.3}></Second>
                </Card>
            </div>
        </strong>
    </div>

