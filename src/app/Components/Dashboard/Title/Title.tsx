import "./Title.css";
import { ComboboxDemo } from "@/components/ui/ComboBox";

const Title = () => {
  return (
    <div className="title">
      <div>
        <p>Dashboard</p>
        <h1>
          Olá, <span>Rafael Ronqui</span>
        </h1>
      </div>
      <div className="date">
        <ComboboxDemo />
      </div>
    </div>
  );
};

export default Title;
