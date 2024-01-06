import { useState } from 'react'
import { getInventarioByBibliotecaIdApi } from '../api/inventario'
import { useApp } from './'

export function useInventario() {
  const [inventario, setInventario] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  const { auth } = useApp()

  const getInventarioByBibliotecaId = async () => {
    try {
      setLoading(true)
      const bibliotecaId = auth.me.biblioteca;
      const response = await getInventarioByBibliotecaIdApi(bibliotecaId)
      setTimeout(() => {
        setLoading(false)
        setInventario(response)
      }, 1200)

      return response
    } catch (error) {
      setError(error)
    }
  }

  return {
    loading,
    inventario,
    error,
    getInventarioByBibliotecaId
  }
}