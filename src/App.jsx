import { useCart } from "./hooks/useCart";
import GlobalRouter from "./routes/GlobalRouter";
import { CartContext } from "./context/CartContext";

function App() {  
  const cartLogic = useCart();

  return (
    <CartContext.Provider value={cartLogic}>
      <GlobalRouter />      
    </CartContext.Provider>
  );
}

export default App;