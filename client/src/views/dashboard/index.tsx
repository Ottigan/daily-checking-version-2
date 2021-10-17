import { auth } from '../../middleware/base';

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
    <button type="button" onClick={() => auth.signOut()}>Sign Out</button>
  </>
);

export default Dashboard;
