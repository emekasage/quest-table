import React, {Component, useState} from 'react';
import QuestDrawer from './components/QuestDrawer'

import './App.css';
import Modals from './components/Modals'
function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalPage, setModalPage] = useState("");
  const [modalId, setModalId] = useState("")
  return (
    <div>
      <QuestDrawer page={modalPage} setModalPage={setModalPage} setShowModal={setShowModal} showModal={showModal}
      setModalId={setModalId} modalId={modalId}
      />
      {showModal &&
       <Modals page={modalPage} setModalPage={setModalPage} setShowModal={setShowModal} showModal={showModal} 
       setModalId={setModalId} modalId={modalId}
       />
      }
    </div>
  );
}

export default App;
