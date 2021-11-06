import './App.css';
import Condition from './components/ConditionalRendering/Condition';
import Event from './components/Event/Event';
import ControlledComponent from './components/Form/ControlledComponent';
import UncontrolledComponent from './components/Form/UncontrolledComponent';
import ClassComponentLifeCycle from './components/LifeCycle/ClassComponent';
import List from './components/List/List';
import Extraction from './components/Props/Extraction';
import Props from './components/Props/Props';
import ClassComponent from './components/State/ClassComponent';
import FunctionalComponent from './components/State/FunctionalComponent';

function App() {
  return (
    <div className="App">
      {/* Form */}
      <ControlledComponent />
      <UncontrolledComponent/>

      {/*  */}
      {/* <List /> */}

      {/* ConditionalRendering */}
      {/* <Condition /> */}

      {/* Event */}
      {/* <Event /> */}

      {/* LifeCycle */}
      {/* <ClassComponentLifeCycle /> */}
      
      {/* State */}
      {/* <FunctionalComponent /> */}
      {/* <ClassComponent /> */}
      
      {/* Props */}
      {/* <Props />       */}
      {/* <Extraction /> */}
    </div>
  );
}

export default App;
