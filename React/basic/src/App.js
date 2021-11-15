import './App.css';
import WelcomeDialog from './components/Composition/WelcomeDialog';
import Condition from './components/ConditionalRendering/Condition';
import Event from './components/Event/Event';
import ControlledComponent from './components/Form/ControlledComponent';
import UncontrolledComponent from './components/Form/UncontrolledComponent';
import Reducer from './components/Hooks/Reducer';
import State from './components/Hooks/State';
import ClassComponentLifeCycle from './components/LifeCycle/ClassComponent';
import List from './components/List/List';
import Extraction from './components/Props/Extraction';
import Props from './components/Props/Props';
import ClassComponent from './components/State/ClassComponent';
import FunctionalComponent from './components/State/FunctionalComponent';
import ThankYouDialog from './components/Composition2/ThankYouDialog';
import Button from './components/HOC/Button';
import Input from './components/HOC/Input';
import Memo from './components/Memoization/Memo';
import Example from './components/Context/Example';
import Example2 from './components/Portal/Example';
import Component from './components/PropTypes/Component';

function App() {
  return (
    <div className="App">
      {/* PropTypes */}
      <Component />

      {/* Portal */}
      {/* <Example2 /> */}
      
      {/* Context */}
      {/* <Example /> */}

      {/* Memoization */}
      {/* <Memo /> */}

      {/* HOC */}
      {/* <Input />
      <br />
      <Button /> */}

      {/* Composition2 */}
      {/* <ThankYouDialog /> */}

      {/* Composition */}
      {/* <WelcomeDialog /> */}

      {/* Hooks */}
      {/* <State />
      <Reducer /> */}

      {/* Form */}
      {/* <ControlledComponent />
      <UncontrolledComponent/> */}

      {/* List */}
      {/* <List /> */}

      {/* ConditionalRendering */}
      {/* <Condition /> */}

      {/* Event */}
      {/* <Event /> */}

      {/* LifeCycle */}
      {/* <ClassComponentLifeCycle /> */}
      
      {/* State */}
      {/* <FunctionalComponent />
      <ClassComponent /> */}
      
      {/* Props */}
      {/* <Props />      
      <Extraction /> */}
    </div>
  );
}

export default App;
