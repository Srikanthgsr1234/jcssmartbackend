import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';
import moment from 'moment-timezone';
import "../App.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

const Temperature = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [latestTemperature, setLatestTemperature] = useState(null);
  const [averageTemperature, setAverageTemperature] = useState(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Average Temperature',
        data: [],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTemperatureData = async () => {
      setLoading(true);
      setError(null);
      try {
        const now = new Date();
        const pastDate = new Date();
        pastDate.setDate(now.getDate() - 7);

        const response = await axios.get('https://api.thingspeak.com/channels/2611117/fields/1.json?api_key=TUA7ISQV9AM9NKRJ&results=100');
        const data = response.data.feeds;

        // Filter data to include only the last 7 days
        const filteredData = data.filter(entry => new Date(entry.created_at) >= pastDate);

        // Group data by date and calculate daily averages
        const dailyAverages = {};
        filteredData.forEach(entry => {
          const temperature = parseFloat(entry.field1);
          if (!isNaN(temperature)) {
            const date = moment(entry.created_at).tz('Asia/Kolkata').format('YYYY-MM-DD');
            if (!dailyAverages[date]) {
              dailyAverages[date] = [];
            }
            dailyAverages[date].push(temperature);
          }
        });

        // Create arrays for chart data
        const chartLabels = [];
        const chartValues = [];
        let totalSum = 0;
        let totalCount = 0;

        for (let i = 6; i >= 0; i--) {
          const date = moment().subtract(i, 'days').format('YYYY-MM-DD');
          chartLabels.push(moment(date).format('D')); // Display day number
          const values = dailyAverages[date] || [];
          const average = values.length > 0 ? values.reduce((acc, value) => acc + value, 0) / values.length : 0;
          chartValues.push(average);
          if (values.length > 0) {
            totalSum += average;
            totalCount++;
          }
        }

        setTemperatureData(filteredData.slice(-6));
        setLatestTemperature(filteredData.length > 0 ? filteredData[filteredData.length - 1]?.field1 : null);

        // Calculate the overall average temperature of the last 7 days, considering only days with data
        const averageTemp = totalCount > 0 ? totalSum / totalCount : 0;
        setAverageTemperature(averageTemp.toFixed(2));

        setChartData({
          labels: chartLabels,
          datasets: [
            {
              label: 'Average Temperature',
              data: chartValues,
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        setError('Error fetching temperature data. Please try again later.');
        console.error('Error fetching temperature data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemperatureData();
    const interval = setInterval(fetchTemperatureData, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex relative bg-gray-200">
      <Sidebar />
      <div className="flex flex-col items-center justify-center min-h-screen m-2 ml-6 bg-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 gap-x-16 w-full max-w-screen-lg">

          {/* Current Temperature Display */}
          <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 flex items-center justify-center h-48">
            <div className="flex flex-col justify-center items-center space-y-4">
              <h1 className="text-2xl font-semibold">Temperature Sensor</h1>
              <button
                className="py-2 px-4 rounded-lg text-white font-semibold bg-gray-500 hover:opacity-90 transition-opacity duration-300"
                disabled
              >
                Sensor Status
              </button>
            </div>
          </div>

          {/* Temperature Monitoring */}
          <div className="bg-white rounded-lg shadow-lg p-3 border border-gray-200 h-48">
            <h1 className="text-xl lg:text-2xl mb-2 text-center font-semibold text-gray-800">Temperature</h1>
            <div className="flex flex-col items-center space-y-3">
              <p className="text-base lg:text-lg text-gray-600">Current Temperature:</p>
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-yellow-100 flex items-center justify-center shadow-md">
                <p className="text-xl lg:text-2xl text-yellow-500">{latestTemperature !== null ? latestTemperature : 'Loading...'}</p>
              </div>
            </div>
          </div>

          {/* Average Temperature */}
          <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 h-48">
            <h2 className="text-xl lg:text-2xl mb-4 text-center font-semibold text-gray-800">Average (Last 7 Days)</h2>
            <div className="flex items-center justify-center pt-5">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                <p className="text-xl lg:text-2xl text-blue-500">{averageTemperature !== null ? averageTemperature : 'Calculating...'}</p>
              </div>
            </div>
          </div>

          {/* Temperature Over the Last 7 Days */}
          <div className="bg-white rounded-lg shadow-lg p-3 border border-gray-200 lg:col-span-2">
            <h2 className="text-xl lg:text-xl mb-4 text-center font-semibold text-gray-800">Temperature Over the Last 7 Days</h2>
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
                            return `Temperature: ${tooltipItem.raw} °C`;
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
                          text: 'Temperature (°C)',
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
                    }
                  }} 
                />
              )}
            </div>
          </div>

          {/* Historical Temperature Data Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-x-auto p-3 border border-gray-200">
            <h2 className="text-xl lg:text-lg mb-4 text-center font-semibold text-gray-800">Historical Temperature Data</h2>
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-1 px-4 border-b border-gray-300 text-left">Time</th>
                  <th className="py-1 px-4 border-b border-gray-300 text-left">Temperature</th>
                </tr>
              </thead>
              <tbody>
                {temperatureData.map((entry, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b border-gray-300">{moment(entry.created_at).tz('Asia/Kolkata').format('HH:mm:ss')}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{entry.field1}</td>
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

export default Temperature;
