export default function Table(props) {
  return (
    <div className='data_table'>
      <header className='table_header'>
      <button>All Time</button>
      <div>
        <label for='week'>Choose a week:</label>

        <input
          type='week'
          name='week'
          id='camp-week'
          min='2018-W18'
          max='2018-W26'          
        ></input>
      </div>
      </header>
    </div>
  );
}
