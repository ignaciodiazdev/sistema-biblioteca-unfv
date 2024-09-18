import { CARRITO } from "../utils/constants";

export function setStorageCarrito(carrito) {
  localStorage.setItem(CARRITO, JSON.stringify(carrito));
}

export function getStorageCarrito() {
  const carrito = localStorage.getItem(CARRITO);
  return JSON.parse(carrito);
}

export function removeStorageCarrito() {
  localStorage.removeItem(CARRITO);
}
