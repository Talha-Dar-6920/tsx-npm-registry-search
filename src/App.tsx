import PrintPackages from './components/PackagesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <h1 className='main__heading'>Search Packages</h1>
      <PrintPackages />
    </>
  );
}

export default App;
