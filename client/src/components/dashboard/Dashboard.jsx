import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";

import './Dashboard.css';

import apiService from '../../apiservice';

const Dashboard = () => {
  const [dbBets, setDbBets] = useState([]);
  const [user, setUser] = useState({_id: '6550d977770788fb6bea7d6d'});

  useEffect(() => {(async function () {
    const response = await apiService.getBets();
    setDbBets(response);
  })()},[])

  return (
    <section className="dashboard-container">
      <aside>
        <div className="dashboard-nav-container">
          <div className="logo-container">
            <img className="logo" src="/assets/logo.svg" alt="" />
          </div>
          <nav className="dashboard-main-nav">
            <ul>
              <li>
                <NavLink className="dashboard-main-nav__link" to="/dashboard/home">
                  <div className="nav-link__icon"><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 7.4V3.6C3 3.26863 3.26863 3 3.6 3H9.4C9.73137 3 10 3.26863 10 3.6V7.4C10 7.73137 9.73137 8 9.4 8H3.6C3.26863 8 3 7.73137 3 7.4Z" stroke="#000000" stroke-width="1.5"></path><path d="M14 20.4V16.6C14 16.2686 14.2686 16 14.6 16H20.4C20.7314 16 21 16.2686 21 16.6V20.4C21 20.7314 20.7314 21 20.4 21H14.6C14.2686 21 14 20.7314 14 20.4Z" stroke="#000000" stroke-width="1.5"></path><path d="M14 12.4V3.6C14 3.26863 14.2686 3 14.6 3H20.4C20.7314 3 21 3.26863 21 3.6V12.4C21 12.7314 20.7314 13 20.4 13H14.6C14.2686 13 14 12.7314 14 12.4Z" stroke="#000000" stroke-width="1.5"></path><path d="M3 20.4V11.6C3 11.2686 3.26863 11 3.6 11H9.4C9.73137 11 10 11.2686 10 11.6V20.4C10 20.7314 9.73137 21 9.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" stroke="#000000" stroke-width="1.5"></path></svg></div>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink className="dashboard-main-nav__link" to="/dashboard/bet">
                  <div className="nav-link__icon"><svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8 15C12.8747 15 15 12.949 15 8C15 12.949 17.1104 15 22 15C17.1104 15 15 17.1104 15 22C15 17.1104 12.8747 15 8 15Z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"></path><path d="M2 6.5C5.13376 6.5 6.5 5.18153 6.5 2C6.5 5.18153 7.85669 6.5 11 6.5C7.85669 6.5 6.5 7.85669 6.5 11C6.5 7.85669 5.13376 6.5 2 6.5Z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"></path></svg></div>
                  Bet Generator
                </NavLink>
              </li>
              <li>
                <NavLink className="dashboard-main-nav__link" to="/dashboard/leaderboards">
                  <div className="nav-link__icon"><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M15 21H9V12.6C9 12.2686 9.26863 12 9.6 12H14.4C14.7314 12 15 12.2686 15 12.6V21Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.4 21H15V18.1C15 17.7686 15.2686 17.5 15.6 17.5H20.4C20.7314 17.5 21 17.7686 21 18.1V20.4C21 20.7314 20.7314 21 20.4 21Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 21V16.1C9 15.7686 8.73137 15.5 8.4 15.5H3.6C3.26863 15.5 3 15.7686 3 16.1V20.4C3 20.7314 3.26863 21 3.6 21H9Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.8056 5.11325L11.7147 3.1856C11.8314 2.93813 12.1686 2.93813 12.2853 3.1856L13.1944 5.11325L15.2275 5.42427C15.4884 5.46418 15.5923 5.79977 15.4035 5.99229L13.9326 7.4917L14.2797 9.60999C14.3243 9.88202 14.0515 10.0895 13.8181 9.96099L12 8.96031L10.1819 9.96099C9.94851 10.0895 9.67568 9.88202 9.72026 9.60999L10.0674 7.4917L8.59651 5.99229C8.40766 5.79977 8.51163 5.46418 8.77248 5.42427L10.8056 5.11325Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                  Leaderboards
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <Outlet context={[dbBets, setDbBets, user, setUser]}/>
    </section>
  )
};

export default Dashboard;