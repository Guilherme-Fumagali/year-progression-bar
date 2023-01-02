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

  const currentDate = new Date()
  const startDate = new Date(currentDate.getFullYear(), 0, 1)
  const endDate = new Date(currentDate.getFullYear() + 1, 0, 1)

  const percentCompleted = (currentDate - startDate) / (endDate - startDate) * 100;

  React.useEffect(() => {
    const interval = setInterval(() => setYearCompleted(percentCompleted), 50);
    return () => clearInterval(interval);
  }, [percentCompleted]);

  return (
    <div>
      <ProgressBarComponent percentCompleted={yearCompleted}/>
      <p>{`${getDayOfYear(currentDate)}/${getDayOfYear(new Date(currentDate.getFullYear()))}`}</p>
      <p>{`${yearCompleted.toFixed(6)}%`}</p>
    </div>
    );
}

export default App;
