import { useState, useEffect } from 'react'

const useFetch = (url: string) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [url])

  return { data, error, loading }
}

export default useFetch
