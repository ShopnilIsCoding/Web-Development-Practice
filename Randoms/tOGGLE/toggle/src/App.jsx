import { useState } from 'react';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState('144P');
  const [selectedIMG, setSelectedIMG] = useState('/pexels-alex-andrews-271121-82171.jpg');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);

    if (event.target.value === "360P") {
      setSelectedIMG('/pexels-alex-andrews-271121-821718-transformed-transformed.jpeg');
    } else if (event.target.value === "720P") {
      setSelectedIMG('/pexels-alex-andrews-271121-82171(1).jpg');
    } else if (event.target.value === "1080P") {
      setSelectedIMG('/pexels-alex-andrews-271121-821718.jpg');
    } else if (event.target.value === "4K") {
      setSelectedIMG("/moon.jpg");
    } else if (event.target.value === "144P") {
      setSelectedIMG('/pexels-alex-andrews-271121-82171.jpg');
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="glass p-2 rounded-xl shadow-lg max-w-lg w-[95%] text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Select Image Quality</h1>
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="w-full p-2 rounded-lg text-lg font-semibold text-gray-700 bg-gray-100 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="144P">144P</option>
            <option value="360P" disabled={selectedOption !== '144P'}>360P</option>
            <option value="720P" disabled={selectedOption !== '360P'}>720P</option>
            <option value="1080P" disabled={selectedOption !== '720P'}>1080P</option>
            <option value="4K" disabled={selectedOption !== '1080P'}>4K</option>
          </select>
          
          <div className="mt-6">
            <img
              className="h-[600px] w-[100%] object-cover rounded-lg shadow-md"
              src={selectedIMG}
              alt="Selected Quality"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
