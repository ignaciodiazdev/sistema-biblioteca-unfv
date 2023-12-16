import {TEMA} from '../utils/constants'

export function setStorageTema(tema){
  localStorage.setItem(TEMA, tema)
}

export function getStorageTema(){
  return localStorage.getItem(TEMA)
}

export function removeStorageTema(){
  localStorage.removeItem(TEMA)
}