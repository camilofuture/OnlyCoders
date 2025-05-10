"use client";

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '../get-dictionary';

/**
 * Hook personalizado para manejar las traducciones
 * @returns {Object} Objeto con la función t para acceder a las traducciones y el diccionario completo
 */
export function useTranslation() {
  const params = useParams();
  const [dictionary, setDictionary] = useState(null);

  useEffect(() => {
    const loadDictionary = async () => {
      const dict = await getDictionary(params.lang);
      setDictionary(dict);
    };
    loadDictionary();
  }, [params.lang]);

  /**
   * Función para acceder a las traducciones mediante una ruta de acceso con notación de puntos
   * @param {string} key - Ruta de acceso a la traducción (ej: "home.section1.title")
   * @returns {string} La traducción o una cadena vacía si no se encuentra
   */
  const t = useCallback((key) => {
    if (!dictionary) return "";
    
    const keys = key.split('.');
    let value = dictionary;
    
    for (const k of keys) {
      if (value && Object.prototype.hasOwnProperty.call(value, k)) {
        value = value[k];
      } else {
        return key.split('.').pop() || "";
      }
    }
    
    return value || "";
  }, [dictionary]);

  return { t, dictionary };
}
