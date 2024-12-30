import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundView.css";

const NotFoundView = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/books");
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="not-found-view">
      <h1>404</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <p>Serás redirigido al catálogo en 5 segundos.</p>
      <button onClick={() => navigate("/books")} className="not-found-view__button">
        Ir al Catálogo Ahora
      </button>
    </div>
  );
};

export default NotFoundView;