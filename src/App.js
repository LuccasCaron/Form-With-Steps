// Components

import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'

// Hooks

import { useState } from 'react'
import {useForm} from  './hooks/useForm'

// Style
import './App.css';


function App() {

  const formTemplante = {
    name: '',
    email: '',
    review: '',
    comment: ''
  }

  const [data, setData] = useState(formTemplante)

  const updateFieldHandler = (key, value) => {
    setData((prev) =>{
      return{...prev, [key]: value}
    })
  }

  console.log(data);

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <Thanks data={data}/>
  ]

  const {currentStep, currentComponents, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

  return (
    <div className="app">
      <div className="header">
          <h2>Deixe sua avaliação!</h2>
          <p>Ficamos felizes com a sua compra, utilize o formulario abaixo para avaliar o produto</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponents}</div>
            <div className="actions">
                {!isFirstStep &&
                 (<button type='button' onClick={(e) =>{changeStep(currentStep - 1, e )}}>
                  <GrFormPrevious/>
                  <span>Voltar</span>
                </button>)}
               {!isLastStep ? (
                 <button type='submit'>
                 <span>Avançar</span>
                 <GrFormNext/>
               </button>
               ) :
                ( <button type='button'>
               <span>Enviar</span>
               <FiSend/>
             </button>)}
            </div>
        </form>
      </div>
    </div>
  );
}

export default App;

