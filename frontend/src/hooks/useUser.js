// import { useState } from "react";
import { getMeApi, patchUserApi } from "../api/user";
import { useApp } from '.'
export function useUser(){
  const { auth } = useApp();

  const getMe = async (token) => {
    try {
      const response = await getMeApi(token);
      return response;

    } catch (error) {
      throw error;
    }
  }

  const patchUser = async (data) => {
    try {
      const response = await patchUserApi(auth.token, auth.me.id, data);
      return response;

    } catch (error) {
      throw error;
    }
  }
  return{
    getMe,
    patchUser,
  }
}