import React, {useState, useEffect} from 'react';
import {Pie} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

export function GlobalChart(){
const [globalStats, setGlobalStats] = useState();

useEffect(() => {
    async function fetchGlobalStats(){
        const apiResponse = await (await fetch("https://api.thevirustracker.com/free-api?global=stats")).json()
        console.log(apiResponse);
        setGlobalStats(apiResponse);
    }
    fetchGlobalStats();
},[])

const data = {
	labels: [
		'Active',
		'Recovered',
		'Deaths'
	],
	datasets: [{
        data: [globalStats && globalStats.results && globalStats.results[0].total_unresolved + globalStats.results[0].total_active_cases,
                globalStats && globalStats.results && globalStats.results[0].total_recovered,
                globalStats && globalStats.results && globalStats.results[0].total_deaths],
		backgroundColor: ['rgba(255,165,0,0.7)','rgba(0,128,0,0.7)','rgba(255,0,0,0.7)'],
		hoverBackgroundColor: ['rgba(255,165,0,1)','rgba(0,128,0,1)','rgba(255,0,0,1)'],
        borderWidth: 1,
        borderColor: 'grey',
	}]
};

    return (
      <div>
          <br/><br/>
        <Pie data={data} height='170px' />
      </div>
    );
  }



export function GlobalChart1(){
    const [globalStats, setGlobalStats] = useState();

    const data = {
        labels: ['Total', 'Active', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'Cases',
            backgroundColor: ['rgba(0,0,255,0.4)','rgba(255,165,0,0.4)','rgba(0,128,0,0.4)','rgba(255,0,0,0.4)'],
            borderColor:  ['rgba(0,0,255,0.8)','rgba(255,165,0,0.8)','rgba(0,128,0,0.8)','rgba(255,0,0,0.8)'],
            borderWidth: 1,
            hoverBackgroundColor:  ['rgba(0,0,255,0.8)','rgba(255,165,0,0.8)','rgba(0,128,0,0.8)','rgba(255,0,0,0.8)'],
            hoverBorderColor: ['rgba(0,0,255,1)','rgba(255,165,0,1)','rgba(0,128,0,1)','rgba(255,0,0,1)'],
            data: [globalStats && globalStats.results && globalStats.results[0].total_cases,
                        globalStats && globalStats.results && globalStats.results[0].total_unresolved + globalStats.results[0].total_active_cases,
                        globalStats && globalStats.results && globalStats.results[0].total_recovered,
                        globalStats && globalStats.results && globalStats.results[0].total_deaths]
          }
        ]
      };      
    useEffect(() => {
        async function fetchGlobalStats(){
            const apiResponse = await (await fetch("https://api.thevirustracker.com/free-api?global=stats")).json()
            console.log(apiResponse);
            setGlobalStats(apiResponse);
        }
        fetchGlobalStats();
    },[])
    
    return (
      <div>
        <h2>Global Statistics</h2>
        <Bar
          data={data}
          width={9.5}
          height={5}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
    );
}
export default GlobalChart