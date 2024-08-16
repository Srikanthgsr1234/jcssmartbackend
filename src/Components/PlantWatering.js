import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import moment from 'moment-timezone';
import { motion } from 'framer-motion';
import "../App.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const PlantWatering = () => {
  const [moistureData, setMoistureData] = useState([]);
  const [latestMoisture, setLatestMoisture] = useState(null);
  const [averageMoisture, setAverageMoisture] = useState(null);
  const [pumpState, setPumpState] = useState('off');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Average Moisture Level',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoistureData = async () => {
      setLoading(true);
      setError(null);
      try {
        const now = new Date();
        const pastDate = new Date();
        pastDate.setDate(now.getDate() - 7);

        const response = await axios.get('https://api.thingspeak.com/channels/2613094/fields/1.json?api_key=0LJTOMMY1FVCXXFM&results=200');
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
          dailyAverages[date].push(parseFloat(entry.field1));
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

        setMoistureData(filteredData.slice(-6));
        setLatestMoisture(data[data.length - 1]?.field1);
        setAverageMoisture(isNaN(chartValues.reduce((acc, value) => acc + value, 0) / chartValues.length) ? null : (chartValues.reduce((acc, value) => acc + value, 0) / chartValues.length).toFixed(2));

        setChartData({
          labels: chartLabels,
          datasets: [
            {
              label: 'Average Moisture Level',
              data: chartValues,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        setError('Error fetching moisture data. Please try again later.');
        console.error('Error fetching moisture data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoistureData();
    const interval = setInterval(fetchMoistureData, 15000);

    return () => clearInterval(interval);
  }, []);

  const togglePump = async () => {
    const newState = pumpState === 'off' ? 'on' : 'off';
    try {
      await axios.post('http://localhost:3001/api/water', { state: newState }); // Adjusted backend port
      setPumpState(newState);
    } catch (error) {
      console.error('Error updating pump state:', error);
    }
  };


  return (
    <div className="min-h-screen flex relative bg-gray-200">
      <Sidebar />
      <div className="flex flex-col items-center justify-center min-h-screen m-2 ml-6 bg-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 gap-x-16 w-full max-w-screen-lg">

          {/* Current Moisture Level Display */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 flex items-center justify-center h-48"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col justify-center items-center space-y-4">
              <h1 className="text-2xl font-semibold">Moisture Sensor</h1>
              <button
                    onClick={togglePump}
                    className={`px-4 py-2 rounded-lg text-base lg:text-lg w-auto ${
                      pumpState === 'off'
                        ? 'bg-red-500 hover:bg-red-700'
                        : 'bg-blue-500 hover:bg-blue-700'
                    } text-white`}
                  >
                    {pumpState === 'off' ? 'Turn Pump Off' : 'Turn Pump On'}
                  </button>
            </div>
          </motion.div>

          {/* Moisture Level Monitoring */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-3 border border-gray-200 h-48"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-xl lg:text-2xl mb-2 text-center font-semibold text-gray-800">Moisture Level</h1>
            <div className="flex flex-col items-center space-y-3">
              <p className="text-base lg:text-lg text-gray-600">Current Moisture Level:</p>
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                <p className="text-xl lg:text-2xl text-blue-500">{latestMoisture !== null ? latestMoisture : 'Loading...'}</p>
              </div>
            </div>
          </motion.div>

          {/* Average Moisture Level */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 h-48"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl lg:text-2xl mb-4 text-center font-semibold text-gray-800">Average (Last 7 Days)</h2>
            <div className="flex items-center justify-center pt-5">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-green-100 flex items-center justify-center shadow-md">
                <p className="text-xl lg:text-2xl text-green-500">{averageMoisture !== null ? averageMoisture : 'Calculating...'}</p>
              </div>
            </div>
          </motion.div>

          {/* Moisture Level Over the Last 7 Days */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-3 border border-gray-200 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-xl lg:text-xl mb-4 text-center font-semibold text-gray-800">Moisture Level Over the Last 7 Days</h2>
            <div className="w-full">
              {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
              ) : error ? (
                <p className="text-center text-red-500">{error}</p>
              ) : (
                <Bar
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
                            return `Moisture Level: ${tooltipItem.raw}`;
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
                          text: 'Moisture Level',
                          color: 'gray',
                          font: {
                            weight: 'bold'
                          }
                        },
                        ticks: {
                          color: 'gray',
                        },
                      },
                    },
                  }}
                />
              )}
            </div>
          </motion.div>

          {/* Historical Data Table */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-x-auto p-4 border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-xl lg:text-xl mb-4 text-center font-semibold text-gray-800">Historical Moisture Data</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Moisture</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {moistureData.map((entry, index) => (
                    <tr key={index}>
                      <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                        {moment(entry.created_at).tz('Asia/Kolkata').format('HH:mm:ss')}
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                        {entry.field1}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PlantWatering;
