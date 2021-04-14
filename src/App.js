import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart'
import TopNav from './components/TopNav'
import Nav from './components/Nav'
import Table from './components/Table'

function App() {
  return (
    <>
      <TopNav/>
    <main className='main'>
      <Nav />
      <section>
      <Chart />
      <Table />
      </section>

    </main>
    </>
  );
}

export default App;
