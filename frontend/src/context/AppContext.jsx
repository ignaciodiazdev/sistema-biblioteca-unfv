import { createContext, useState, useEffect } from 'react';
import {setToken, getToken, removeToken} from '../api/token';
import {setStorageCarrito, getStorageCarrito} from '../api/carrito'
import { getStorageTema } from '../api/tema'
import { useUser } from '../hooks'
import toast from 'react-hot-toast';

export const AppContext = createContext({
  auth: undefined,
  cart: [],
  theme: "light",
  login: () => null,
  logout: () => null,
  setTheme: () => {},
  setCart: () => {},
});

export const AppProvider = ({children}) => {

  const [auth, setAuth] = useState(undefined);
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);

  const {getMe} = useUser();

  useEffect(() => {
    (async() => {
      const token = getToken();
      if(token){
        const me = await getMe(token);
        setAuth({token, me})
        const storageTema = getStorageTema()
        setTheme(storageTema)
        if(getStorageCarrito()){
          setCart(getStorageCarrito())
        }
      }else{
        setAuth(null);
      }
    })()
  }, [])

  const login = async (token) => {
    setToken(token)
    const me = await getMe(token);
    setAuth({token, me})
  }

  const logout = () => {
    if(auth){
      removeToken();
      setAuth(null);
    }
  }

  const addToCart = (product) => {
    // Lógica para que solo se agreguen 2 productos al carrito si es estudiante 
    // y máximo 3 si es profesor.
    let maximo = 0;
    if (auth.me.tipo_usuario === 1) maximo = 2 
    else maximo = 3;

    console.log(maximo)
    const productExist = cart.find(item => item.id === product.id);
    if(cart.length === maximo ){
      return `No puedes agregar más de ${maximo} documentos al carrito`
    }
    if(productExist){
      return "El documento ya existe en el carrito"
    }else{
      setStorageCarrito([...cart, {...product}])
      setCart([...cart, {...product}]);
    }
  }
  const removeToCart = (product) => {
    const newCart = cart.filter(item => item.id !== product.id);
    setStorageCarrito(newCart)
    setCart(newCart);
    toast.success("Producto eliminado del carrito")
  } 
  const valueContext = {
    auth,
    login,
    logout,
    theme,
    setTheme,
    cart,
    setCart,
    addToCart,
    removeToCart
  }
  if(auth === undefined) return null;

  return (
    <AppContext.Provider value={valueContext}>
      {children}
    </AppContext.Provider>
  )
}
