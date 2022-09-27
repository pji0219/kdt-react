import BtnToNaver from './components/BtnToNaver';
import ClassState from './components/ClassState';
import FunctionalState from './components/FunctionalState';
import ImgComponent from './components/ImgComponent';
import MainHeader from './components/MainHeader';
import PleaseClick from './components/PleaseClick';

function App() {
  return (
    <div className='App'>
      <MainHeader />
      <ClassState />
      <FunctionalState />
      <PleaseClick />
      <ImgComponent />
      <BtnToNaver />
    </div>
  );
}

export default App;
