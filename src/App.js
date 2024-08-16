import React from 'react';
import {useState} from 'react';
import styled from "styled-components";
import {MainLayout} from './styles/Layouts';
import Navigation from "./components/Navigation/Navigation";
import Dashboard from './components/Dashboard/Dashboard';
import Income from './components/Income/Income';
import Expenses from './components/Expenses/Expenses';
import Budgeting from './components/Budgeting/Budgeting';
import UserProfile from './components/UserProfile/UserProfile';
import Goals from './components/Goals/Goals';

function App() {
  const [active, setActive] = useState(1)

  const displayData = () => {
    switch (active) {
      case 1:
        return <UserProfile />
      case 2:
        return <Dashboard />
      case 3:
        return <Budgeting />
      case 4:
        return <Income />
      case 5:
        return <Expenses />
      case 6:
        return <Goals />
      default:
        return <Dashboard />
    }
  }

  return (
    <AppStyled>
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: #abebf7;
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
