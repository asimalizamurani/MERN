import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

    useEffect(() => {
      fetch(` https://open.er-api.com/v6/latest/USD`)
      .then((res) => res.json())
      .then((res) => setData(res(currency)))
    }, [currency]);
    
    console.log("See the result of data : ", data)
    return data
}

export default useCurrencyInfo;