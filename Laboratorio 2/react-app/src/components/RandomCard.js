import React from 'react';
import styled from 'styled-components';
import Loader from './uiverse/Loader';
import Clock from './uiverse/Clock';
import Waiting from './uiverse/Waiting';
import Safari from './uiverse/Safari';

const components = [Loader, Clock, Waiting, Safari];



const CajaAmarilla = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ffc107;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 10px;
`;

export default function RandomCard() {

const randomIndex = Math.floor(Math.random() * components.length);
const RandomComponent = components[randomIndex] || (() => <div>X</div>);
  return   <CajaAmarilla>
  <RandomComponent />
  </CajaAmarilla>;
}
