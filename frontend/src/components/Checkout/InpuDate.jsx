import styled from "styled-components";
import { DatePicker } from "antd";

export const InpuDate = ({control, setValue, name, disabledDate, ...rest}) => {
  console.log(name)
  return (
    <Container>
      <DatePicker
        onChange={(date, dateString) => {
          setValue(name, dateString);
          // Puedes agregar lógica adicional según tus necesidades
        }}
        {...rest}
        disabledDate={disabledDate} // Utiliza la función para deshabilitar días de fin de semana y fechas más allá de los próximos 7 días
        placeholder="Selecciona una fecha"
      />
    </Container>
  );
};

const Container = styled.div``;
