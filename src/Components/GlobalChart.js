import React, {useState, useEffect} from 'react';
// import {Pie} from 'react-chartjs-2';

// function GlobalChart(){
// const [globalStats, setGlobalStats] = useState();
// const [dataLoad, setDataLoad] = useState(false);

// useEffect(() => {
//     async function fetchGlobalStats(){
//         setDataLoad(true);
//         const apiResponse = await (await fetch("https://api.thevirustracker.com/free-api?global=stats")).json()
//         console.log(apiResponse);
//         setGlobalStats(apiResponse);
//         setDataLoad(false);
//     }
//     fetchGlobalStats();
// },[])

// const data = {
// 	labels: [
// 		'Active',
// 		'Recovered',
// 		'Deaths'
// 	],
// 	datasets: [{
//         data: [globalStats && globalStats.results && globalStats.results[0].total_unresolved + globalStats.results[0].total_active_cases,
//                 globalStats && globalStats.results && globalStats.results[0].total_recovered,
//                 globalStats && globalStats.results && globalStats.results[0].total_deaths],
// 		backgroundColor: [
// 		'#FFA500',
// 		'green',
//         'red',
// 		],
// 		hoverBackgroundColor: [
// 		'#00BFFF',
// 		'#36A2EB',
// 		'#FFCE56'
//         ],
//         borderWidth: 1,
//         borderColor: 'black'
// 	}]
// };

//     return (
//       <div>
//         <h2>Pie Example</h2>
//         <Pie data={data} />
//       </div>
//     );
//   }

//   export default GlobalChart;
// import React from 'react';
import {Bar} from 'react-chartjs-2';


function GlobalChart(){
    const [globalStats, setGlobalStats] = useState();
    const [dataLoad, setDataLoad] = useState(false);
    const data = {
        labels: ['Total', 'Active', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'Cases',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [globalStats && globalStats.results && globalStats.results[0].total_cases,
                        globalStats && globalStats.results && globalStats.results[0].total_unresolved + globalStats.results[0].total_active_cases,
                        globalStats && globalStats.results && globalStats.results[0].total_recovered,
                        globalStats && globalStats.results && globalStats.results[0].total_deaths]
          }
        ]
      };      
    useEffect(() => {
        async function fetchGlobalStats(){
            setDataLoad(true);
            const apiResponse = await (await fetch("https://api.thevirustracker.com/free-api?global=stats")).json()
            console.log(apiResponse);
            setGlobalStats(apiResponse);
            setDataLoad(false);
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