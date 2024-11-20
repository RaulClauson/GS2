import Header from "../Components/Dashboard/Header/Header";
import Input_conta from "../Components/Dashboard/Input_conta/Input_conta";
import Small_Graph from "../Components/Dashboard/Small_Graph/Small_Graph";
import Title from "../Components/Dashboard/Title/Title";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main>
        <div className="dashboard">
          <Title />
          <div className="small_graphs">
            <Small_Graph />
            <Small_Graph />
            <Input_conta />
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
