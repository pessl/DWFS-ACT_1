import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingView.css";


const LandingView = () => {  
  const navigate = useNavigate();  

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/books");
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing-view">
      <h1>Bienvenido a la Librería Relatos de Papel</h1>
      <button onClick={() => navigate("/books")}>Ver Libros</button>
    </div>
  );
};

export default LandingView;