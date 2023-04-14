import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [state, setState] = useState()
  
  useEffect(() => {
    axios.get(url)
    .then(res => setState(res.data))
    .catch(error => console.log(error))
  }, [url])

  return state 
}

export default useFetch
