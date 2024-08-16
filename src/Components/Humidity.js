import React, { useState, useEffect, useMemo, Suspense, lazy } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import "../App.css";

const Sidebar = lazy(() => import('./Sidebar'));

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

const Humidity = () => {
  const [humidityData, setHumidityData] = useState([]);
  const [latestHumidity, setLatestHumidity] = useState(null);
  const [averageHumidity, setAverageHumidity] = useState(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Average Humidity',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHumidityData = async () => {
      setLoading(true);
      setError(null);
      try {
        const now = new Date();
        const pastDate = new Date();
        pastDate.setDate(now.getDate() - 7);

        const response = await axios.get('https://api.thingspeak.com/channels/2611117/fields/2.json?api_key=TUA7ISQV9AM9NKRJ&results=200');
        const data = response.data.feeds;

        // Filter data to include only the last 7 days
        const filteredData = data.filter(entry => new Date(entry.created_at) >= pastDate);

        // Group data by date and calculate daily averages
        const dailyAverages = {};
        filteredData.forEach(entry => {
          const humidity = parseFloat(entry.field2);
          if (!isNaN(humidity)) {
            const date = moment(entry.created_at).tz('Asia/Kolkata').format('YYYY-MM-DD');
            if (!dailyAverages[date]) {
              dailyAverages[date] = [];
            }
            dailyAverages[date].push(humidity);
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

        setHumidityData(filteredData.slice(-6));
        setLatestHumidity(data.length > 0 ? data[data.length - 1]?.field2 : null);

        // Calculate the overall average humidity of the last 7 days
        const averageHum = totalCount > 0 ? totalSum / totalCount : 0;
        setAverageHumidity(averageHum.toFixed(2));

        setChartData({
          labels: chartLabels,
          datasets: [
            {
              label: 'Average Humidity',
              data: chartValues,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        setError('Error fetching humidity data. Please try again later.');
        console.error('Error fetching humidity data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHumidityData();
    const interval = setInterval(fetchHumidityData, 15000);

    return () => clearInterval(interval);
  }, []);

  const chartOptions = useMemo(() => ({
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Humidity: ${tooltipItem.raw} %`;
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
          text: 'Humidity (%)',
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
  }), [chartData]);

  return (
    <div className="min-h-screen flex relative bg-gray-200">
      <Suspense fallback={<div>Loading Sidebar...</div>}>
        <Sidebar />
      </Suspense>
      <div className="flex flex-col items-center justify-center min-h-screen m-2 ml-6 bg-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 gap-x-16 w-full max-w-screen-lg">

          {/* Current Humidity Display */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 flex items-center justify-center h-48"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col justify-center items-center space-y-4">
              <h1 className="text-2xl font-semibold">Humidity Sensor</h1>
              <button
                className="py-2 px-4 rounded-lg text-white font-semibold bg-gray-500 hover:opacity-90 transition-opacity duration-300"
                disabled
              >
                Sensor Status
              </button>
            </div>
          </motion.div>

          {/* Humidity Monitoring */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-3 border border-gray-200 h-48"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-xl lg:text-2xl mb-2 text-center font-semibold text-gray-800">Humidity</h1>
            <div className="flex flex-col items-center space-y-3">
              <p className="text-base lg:text-lg text-gray-600">Current Humidity:</p>
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                <p className="text-xl lg:text-2xl text-blue-500">{latestHumidity !== null ? latestHumidity : 'Loading...'}</p>
              </div>
            </div>
          </motion.div>

          {/* Average Humidity */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 h-48"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl lg:text-2xl mb-4 text-center font-semibold text-gray-800">Average (Last 7 Days)</h2>
            <div className="flex items-center justify-center pt-5">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-teal-100 flex items-center justify-center shadow-md">
                <p className="text-xl lg:text-2xl text-teal-500">{averageHumidity !== null ? averageHumidity : 'Calculating...'}</p>
              </div>
            </div>
          </motion.div>

          {/* Humidity Over the Last 7 Days */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-3 border border-gray-200 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-xl lg:text-xl mb-4 text-center font-semibold text-gray-800">Humidity Over the Last 7 Days</h2>
            <div className="w-full">
              {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
              ) : error ? (
                <p className="text-center text-red-500">{error}</p>
              ) : (
                <Line 
                  data={chartData} 
                  options={chartOptions} 
                />
              )}
            </div>
          </motion.div>

          {/* Historical Humidity Data Table */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-3 border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-xl lg:text-xl mb-2 text-center font-semibold text-gray-800">Historical Humidity Data</h2>
            {loading ? (
              <p className="text-center text-gray-500">Loading...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Timestamp</th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">Humidity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {humidityData.length === 0 ? (
                      <tr>
                        <td colSpan="2" className="py-3 px-4 text-center text-gray-500">No data available</td>
                      </tr>
                    ) : (
                      humidityData.map((entry, index) => (
                        <tr key={index}>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {moment(entry.created_at).tz('Asia/Kolkata').format('HH:mm:ss')}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-200">{entry.field2}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

Humidity.propTypes = {
  chartData: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    datasets: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.number),
      borderColor: PropTypes.string,
      backgroundColor: PropTypes.string,
      borderWidth: PropTypes.number
    }))
  })
};

export default Humidity;
