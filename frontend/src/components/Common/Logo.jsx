import React from "react";
import { useApp } from "../../hooks/useApp";
import iconUser from "../../assets/login/icon-usuario.png";

export const Logo = ({ collapsed }) => {
  const { auth } = useApp();
  const { first_name, last_name, image, tipo_usuario_data } = auth.me;

  return (
    <div className="logo">
      {
        <img
          src={image ? `${image}` : iconUser}
          alt="icono usuario"
          className={collapsed ? "logo-icon" : "logo-icon logo-icon-full"}
        />
      }
      <div className="logo-name">
        {collapsed ? (
          <p></p>
        ) : (
          <>
            <p className="text-center text-white">
              {first_name} {last_name}
            </p>
            <p className="text-center small text-white-50">
              {tipo_usuario_data?.tipo.toUpperCase()}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
