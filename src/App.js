import CineCalidad from "./CineCalidad.png";
//import {BrowserRouter ,Routes , Route } from 'react-router-dom';
import List from "./List";
import React, { useState} from "react";
//import Add from "./Add"
import "bootstrap/dist/css/bootstrap.css";  
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};




function App() {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
///////////////////////////////////////////////////
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function Submit() {


  }

  return (
    <div style={{ backgroundColor:"#42271c" ,WebkitBackgroundSize:'cover', backgroundRepeat : 'no-repeat',opacity:'1',height:'flex'}}>
     
        <div >
{/*           <BrowserRouter>
            <Routes>
              <Route path='/' element={<div/>} >
                <Route index element= {<div/>} />
                <Route path= '/agregar' element = {<div/>}/>
                <Route path= '/listar' element = {<div/>}/>
              </Route>
            </Routes>
          </BrowserRouter> */}

          <header style={{ backgroundImage: `url(${CineCalidad})`,marginLeft:'auto',marginRight:'auto',WebkitBackgroundSize:'cover', backgroundRepeat : 'no-repeat',height:'150px',width:'740px' ,marginBottom:'2vh' }}>
          <input id="SearchBar" onChange={inputHandler} style={{position:'relative' , left:'570px',top:'125px',fontSize: 12,color:'#f20202', textAlign:'center', flex:1}  } placeholder="Busque su Veneno" />
          </header>
{/* /////////////////////////////////////////////////////////////////// */}

    <div className="d-flex align-items-center justify-content-center">
      <button onClick={openModal}>Agregar pelicula</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Agregar"
      >
        <div>Agregar titulo nuevo </div>
        <form>
          <br/>
          <label>Nombre&nbsp;</label>
          <input/>
          <br/>
          <label>Descripcion&nbsp;</label>
          <input/>
          <br/>
          <label>Fecha Lanzamiento&nbsp;</label>
          <input type="date"/>
          <br/>
          <input type="submit" value="&nbsp;Agregar&nbsp;" onClick={Submit} />
          <button onClick={closeModal}>&nbsp;Cancelar&nbsp;</button>
        </form>
      </Modal>
    </div>

{/* /////////////////////////////////////////////////////////////////// */}
          <div>
          {/* <img style={{AlignItems:'center',display:'flex' ,height:'70vh' ,width: '80vw' ,marginLeft:'auto',marginRight:'auto'}} alt = "Placeholder" src={Bg}/> */}
              <List input={inputText} />
          </div>
          <footer style={{position:'static' , bottom:'100%',fontSize: 12,color:'#ffffff', textAlign:'right', flex:1,marginTop:'2vh'}}>
            Copyright 2022 . Cinecalidad . Donde Spielberg viene a ver sus monas chinas.!   
          </footer>
        </div>
    </div>
  );
}

export default App;