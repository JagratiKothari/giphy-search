import List from './List'
// import Error from './components/Error'
import {useState} from 'react'
import {getGifs} from '../../api';
import '../../App.css';

function GiphySearch() {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);
  const [err, setErr] = useState(false);

  const handleInput = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    if(text.length === 0) {
      
      //set error state to true
      setErr(true);
      return;
    }

    const apiCall = async () => {
      const res = await getGifs(text, 100);
      console.log(res.data?.data);
      setResults(res.data.data);

    }
    
    //change error state back to false
    apiCall();
    setText('');
    setErr(false);

  }
  
  return (
    <div className="App">
      <h3>Type text into the form and hit submit</h3>
      <input className='input-field' value={text} onChange={handleInput} />
      <button className='submit-btn' onClick={handleSubmit}>Submit</button>
      {/* <Error isError={err} text='need length longer than 0 for input'/> */}
      {results && <List gifs={results}  />}
    </div>
  );
}
export default GiphySearch;