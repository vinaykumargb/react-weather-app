import { useState, useEffect } from 'react';

export default function useFetch(api) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [err, setErr] = useState({ code: "", msg: "" });
    useEffect(() => {
        if (!api) return;
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                data.cod !== 200 ? setErr({ code: data.cod, msg: data.message }) : setData(data);
            })
            .then(() => setLoading(false))
            .catch(console.log);
    }, [api]);
    return { loading, data, err };
};