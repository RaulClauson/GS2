import Link from "next/link";
import "./Fim.css";

const Fim = () => {
  return (
    <div className="fim">
      <h1>
        Comece sua Jornada de
        <br />
        Economia de Energia
      </h1>
      <Link href="/Authentication">Começar</Link>
    </div>
  );
};

export default Fim;
