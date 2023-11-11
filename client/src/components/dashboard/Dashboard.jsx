import { Outlet } from "react-router-dom";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <section className="dashboard-container">
      <aside>
        <div className="dashboard-nav-container">
          
        </div>
      </aside>
      <Outlet/>
    </section>
  )
};

export default Dashboard;