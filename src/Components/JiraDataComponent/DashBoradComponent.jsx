import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { prod_be_url } from '../../utils/config';
import LoadingFull from '../Loading/LoadingFull';
import { showErrorToast } from '../ToastMessage/ToastMessageComponent';

const DashBoradComponent = () => {
  const [dashboards, setDashboards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem('dashboardsCache');
    if (cached) {
    setLoading(false);
      setDashboards(JSON.parse(cached));
    }

    fetchDashboards();
  }, []);

  const fetchDashboards = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${prod_be_url}/dashboards`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data?.success) {
        const data = res.data.data || [];
        setDashboards(data);
        localStorage.setItem('dashboardsCache', JSON.stringify(data));
      } else {
        showErrorToast(res.data.message || 'Failed to fetch dashboards');
      }
    } catch (error) {
      showErrorToast('An error occurred while fetching dashboards');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {loading && <LoadingFull />}
      <div className={`p-8 bg-gray-50 min-h-screen text-black ${loading ? 'opacity-30 pointer-events-none' : ''}`}>
        <h2 className="text-3xl font-extrabold mb-6 border-b pb-2 border-gray-300 bg-gradient-to-r from-indigo-600 to-purple-500 text-white inline-block px-4 py-2 rounded">
          Dashboards
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Total Dashboards: <span className="font-semibold text-indigo-700">{dashboards.length}</span>
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold border">S. No</th>
                <th className="px-4 py-3 text-left text-sm font-semibold border">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold border">Dashboard Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold border">Owner</th>
                <th className="px-6 py-3 text-left text-sm font-semibold border">View</th>
              </tr>
            </thead>
            <tbody className="text-sm text-black divide-y divide-gray-200">
              {dashboards.map((dashboard, index) => (
                <tr key={dashboard.ID} className="hover:bg-gray-100 bg-purple-50">
                  <td className="px-4 py-4 border">{index + 1}</td>
                  <td className="px-4 py-4 border">{dashboard.ID}</td>
                  <td className="px-6 py-4 border">{dashboard.Name}</td>
                  <td className="px-6 py-4 border">{dashboard.Owner || 'N/A'}</td>
                  <td className="px-6 py-4 border">
                    <a
                      href={dashboard.ViewURL}
                      className="text-indigo-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Dashboard
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashBoradComponent;
