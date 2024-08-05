import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';
import moment from 'moment-timezone';
import "../App.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

const GasValue = () => {
  const [gasData, setGasData] = useState([]);
  const [latestGas, setLatestGas] = useState(null);
  const [averageGas, setAverageGas] = useState(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Average Gas Level',
        data: [],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGasData = async () => {
      setLoading(true);
      setError(null);
      try {
        const now = new Date();
        const pastDate = new Date();
        pastDate.setDate(now.getDate() - 7);

        const response = await axios.get('https://api.thingspeak.com/channels/2611117/fields/3.json?api_key=TUA7ISQV9AM9NKRJ&results=200');
        const data = response.data.feeds;

        // Filter data to include only the last 7 days
        const filteredData = data.filter(entry => new Date(entry.created_at) >= pastDate);

        // Group data by date and calculate daily averages
        const dailyAverages = {};
        filteredData.forEach(entry => {
          const date = moment(entry.created_at).tz('Asia/Kolkata').format('YYYY-MM-DD');
          if (!dailyAverages[date]) {
            dailyAverages[date] = [];
          }
          dailyAverages[date].push(parseFloat(entry.field3));
        });

        // Create an array for the last 7 days, ensuring that all days are included
        const chartLabels = [];
        const chartValues = [];
        for (let i = 6; i >= 0; i--) {
          const date = moment().subtract(i, 'days').format('YYYY-MM-DD');
          chartLabels.push(moment(date).format('D')); // Display day number
          const values = dailyAverages[date] || [];
          const average = values.length > 0 ? values.reduce((acc, value) => acc + value, 0) / values.length : 0;
          chartValues.push(average);
        }

        setGasData(filteredData.slice(-6));
        setLatestGas(data[data.length - 1]?.field3);
        setAverageGas(isNaN(chartValues.reduce((acc, value) => acc + value, 0) / chartValues.length) ? null : (chartValues.reduce((acc, value) => acc + value, 0) / chartValues.length).toFixed(2));

        setChartData({
          labels: chartLabels,
          datasets: [
            {
              label: 'Average Gas Level',
              data: chartValues,
              borderColor: 'rgba(54, 162, 235, 1)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        setError('Error fetching gas data. Please try again later.');
        console.error('Error fetching gas data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGasData();
    const interval = setInterval(fetchGasData, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex relative bg-gray-200">
      <Sidebar />
      <div className="flex flex-col items-center justify-center min-h-screen m-2 ml-6 bg-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 gap-x-16 w-full max-w-screen-lg">

          {/* Current Gas Level Display */}
          <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 flex items-center justify-center h-48">
            <div className="flex flex-col justify-center items-center space-y-4">
              <h1 className="text-2xl font-semibold">Gas Sensor</h1>
              <button
                className="py-2 px-4 rounded-lg text-white font-semibold bg-gray-500 hover:opacity-90 transition-opacity duration-300"
                disabled
              >
                Sensor Status
              </button>
            </div>
          </div>

          {/* Gas Level Monitoring */}
          <div className="bg-white rounded-lg shadow-lg p-3 border border-gray-200 h-48">
            <h1 className="text-xl lg:text-2xl mb-2 text-center font-semibold text-gray-800">Gas Level</h1>
            <div className="flex flex-col items-center space-y-3">
              <p className="text-base lg:text-lg text-gray-600">Current Gas Level:</p>
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-yellow-100 flex items-center justify-center shadow-md">
                <p className="text-xl lg:text-2xl text-yellow-500">{latestGas !== null ? latestGas : 'Loading...'}</p>
              </div>
            </div>
          </div>

          {/* Average Gas Level */}
          <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 h-48">
            <h2 className="text-xl lg:text-2xl mb-4 text-center font-semibold text-gray-800">Average (Last 7 Days)</h2>
            <div className="flex items-center justify-center pt-5">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                <p className="text-xl lg:text-2xl text-blue-500">{averageGas !== null ? averageGas : 'Calculating...'}</p>
              </div>
            </div>
          </div>

          {/* Gas Level Over the Last 7 Days */}
          <div className="bg-white rounded-lg shadow-lg p-3 border border-gray-200 lg:col-span-2">
            <h2 className="text-xl lg:text-xl mb-4 text-center font-semibold text-gray-800">Gas Level Over the Last 7 Days</h2>
            <div className="w-full">
              {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
              ) : error ? (
                <p className="text-center text-red-500">{error}</p>
              ) : (
                <Line
                  data={chartData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        callbacks: {
                          label: function (tooltipItem) {
                            return `Gas Level: ${tooltipItem.raw}`;
                          }
                        }
                      }
                    },
                    scales: {
                      x: {
                        title: {
                          display: true,
                          text: 'Date',
                          color: 'gray',
                          font: {
                            weight: 'bold'
                          }
                        },
                        ticks: {
                          color: 'gray',
                          callback: function(value, index) {
                            return chartData.labels[index];
                          },
                          maxRotation: 45,
                          minRotation: 45,
                        },
                      },
                      y: {
                        title: {
                          display: true,
                          text: 'Gas Level',
                          color: 'gray',
                          font: {
                            weight: 'bold'
                          }
                        },
                        ticks: {
                          color: 'gray',
                          stepSize: 1,
                          callback: function(value) {
                            return Number.isInteger(value) ? value : '';
                          }
                        },
                        suggestedMin: Math.floor(Math.min(...chartData.datasets[0].data)) - 1,
                        suggestedMax: Math.ceil(Math.max(...chartData.datasets[0].data)) + 1
                      }
                    },
                    animation: {
                      duration: 2000, // Duration of animation in milliseconds
                      easing: 'easeInOutQuad', // Easing function for the animation
                      onProgress: function(animation) {
                        console.log('Animation in progress');
                      },
                      onComplete: function(animation) {
                        console.log('Animation complete');
                      },
                    },
                  }}
                />
              )}
            </div>
          </div>

          {/* Historical Gas Data Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-x-auto p-4 border border-gray-200">
            <h2 className="text-xl lg:text-xl mb-4 text-center font-semibold text-gray-800">Historical Gas Data</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gas Level</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {gasData.map((entry) => (
                  <tr key={entry.created_at}>
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{moment(entry.created_at).format('HH:mm:ss')}</td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">{entry.field3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GasValue;
