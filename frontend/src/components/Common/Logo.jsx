import React from "react";
import { useApp } from "../../hooks/useApp";
import iconUser from "../../assets/login/icon-usuario.png";
import { BASE_API } from "../../utils/constants";

export const Logo = ({ collapsed }) => {
  const { auth } = useApp();
  const { first_name, last_name, image } = auth.me;

  return (
    <div className="logo">
      {
        <img
          src={image ? `${BASE_API + image}` : iconUser}
          alt="icono usuario"
          className= { collapsed ? "logo-icon" : "logo-icon logo-icon-full" }
        />
      }
      <div className="logo-name">
        { collapsed ? (
            <p></p>
          ) : (
            <p>
              {first_name} {last_name}
            </p>
          )
        }
      </div>
    </div>
  );
};
