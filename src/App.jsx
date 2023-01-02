import React from 'react'
import './App.css';
import ProgressBarComponent from './components/ProgressBarComponent';

function App() {
  const [yearCompleted, setYearCompleted] = React.useState(0);

  const getDayOfYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return day;
  }    

  const getPercentCompleted = (currentDate) => {
    const startDate = new Date(currentDate.getFullYear(), 0, 1)
    const endDate = new Date(currentDate.getFullYear() + 1, 0, 1)
    return (currentDate - startDate) / (endDate - startDate) * 100;
  }

  const currentDate = new Date()
  const percentCompleted = getPercentCompleted(currentDate);

  React.useEffect(() => {
    const interval = setInterval(() => setYearCompleted(percentCompleted), 50);
    return () => clearInterval(interval);
  }, [percentCompleted]);

  return (
    <div id="all">
      <p></p>
      <div id='wrap'>
        <h1 id='title'>{currentDate.getFullYear()} Progress</h1>
        <ProgressBarComponent percentCompleted={percentCompleted}/>
        <p id='percent'>{`${yearCompleted.toFixed(6)}%`}</p>
        <p id='days'>{`${getDayOfYear(currentDate)}/${getDayOfYear(new Date(currentDate.getFullYear()))} days`}</p>
      </div>
      <p></p>
    </div>
    );
}

export default App;
