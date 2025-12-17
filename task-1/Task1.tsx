import { ErrorBoundary } from 'react-error-boundary';
import './Task1.css'
import Compo1 from './Compo1';
import Compo2 from './Compo2';

function App() {

  return (
    <div className='container'>

      <header className='header'>Error Boundary Code</header>

      {/* made error in compo1 */}
      <ErrorBoundary fallback={<div className='error-msg'>Something went wrong in Compo1</div>}>
        <Compo1 />
      </ErrorBoundary>


      <Compo2 />

    </div>
  )
}

export default App