import styled from "styled-components";
import { useForm, Controller, set } from "react-hook-form";
import { Button, Input } from "antd";
import { InpuDate } from "../Checkout";
import { useApp } from "../../hooks";
import { toast } from "react-toastify";
import { removeStorageCarrito } from '../../api/carrito';
import { useNavigate } from 'react-router-dom';
import { usePrestamos } from '../../hooks'

export const CheckoutForm = () => {
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const { cart, auth, setCart } = useApp();
  const { postPrestamos, error, setError } = usePrestamos();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if(cart.length === 0) return toast.error("No hay documentos en el carrito!");
    const documentosIds = cart.map((documento) => documento.id);
    const objetoParaEnviar = {
      fecha_reserva: new Date().toISOString().split("T")[0],
      fecha_recojo: data.fecha_recojo,
      fecha_devolucion: calculateReturnDate(data.fecha_recojo),
      usuario: auth.me.id,
      inventario: documentosIds,
      //codigo de fecha actual
    };
    console.log("Datos del formulario:", objetoParaEnviar);
    await postPrestamos(objetoParaEnviar);
    // Realiza la lógica para enviar los datos a tu API
    removeStorageCarrito();
    setCart([]);
    navigate('/plataforma')
  };
  const disabledDate = (current) => {
    const dayOfWeek = current.day();
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    return (
      dayOfWeek === 0 ||
      dayOfWeek === 6 || // Deshabilitar sábados y domingos
      current.isAfter(nextWeek) || // Deshabilitar fechas más allá de los próximos 7 días
      current.isBefore(today) // Deshabilitar fechas anteriores a hoy
    );
  };

  // Función para calcular la fecha de devolución (2 días después de la fecha de recojo)
  const calculateReturnDate = (fecha_recojo) => {
    const fechaRecojo = new Date(fecha_recojo);
    fechaRecojo.setDate(fechaRecojo.getDate() + 3);

    // Verificar si la fecha calculada es válida antes de aplicar toISOString
    if (!isNaN(fechaRecojo.getTime())) {
      return fechaRecojo.toISOString().split("T")[0]; // Formato YYYY-MM-DD
    } else {
      console.error("Fecha de devolución inválida:", fechaRecojo);
      return null; // O manejar el error según sea necesario
    }
  };

  // console.log(errors)
  if (errors.fecha_recojo) {
    toast.error(errors.fecha_recojo.message);
  }
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5 className="mb-3">Información de Recojo</h5>
        <div className="form">
          <div className="form__body">
            <div className="form__body__fecha">
              {/* Usa el componente DatePickerComponent como componente hijo */}
              <label>Fecha de Recojo:</label>
              <Controller
                name="fecha_recojo"
                control={control}
                defaultValue={null}
                rules={{ required: "La fecha de recojo es requerida" }}
                render={({ field }) => (
                  <InpuDate
                    control={control}
                    setValue={setValue}
                    disabledDate={disabledDate}
                    name="fecha_recojo"
                    className="w-100"
                  />
                )}
              />
            </div>
            <div className="form__body__fecha">
              <label>Fecha de Devolución: </label>
              <Input
                type="text"
                className="w-100"
                value={
                  watch("fecha_recojo")
                    ? calculateReturnDate(watch("fecha_recojo"))
                    : ""
                }
                disabled
              />
            </div>
          </div>
          <div className="form__boton">
            <Button type="primary" size="large"  htmlType="submit" className="w-100">
              Registrar Préstamo
            </Button>
            {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
          </div>
        </div>
      </form>
    </Container>
  );
};

const Container = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    &__body {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      @media screen and (min-width: 576px) {
          display: grid;
          grid-template-columns: 1fr 1fr;
      }
      @media screen and (min-width: 1200px){
        display: flex;
        flex-direction: column;
      }
      &__fecha {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }
    }
    &__boton {
      /* justify-content: center; */
    }
  }
`;
