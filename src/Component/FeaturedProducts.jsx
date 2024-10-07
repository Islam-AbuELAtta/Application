import React, { useEffect, useState } from 'react'
import getProduct from '../API/productApi'
import Loading from './Loading';
import Item from './Item';

export default function FeaturedProducts({ dataArr }) {

    let [productArr, setProductArr] = useState([]);
    let [msg, setMsg] = useState('');
    let [loading, setLoading] = useState(false)
    async function getProductApi() {
        setLoading(true)
        let data = await getProduct()
        if (data?.data) {
            setLoading(false)
            setProductArr(data?.data)
            setMsg('')
        } else {
            setLoading(false)
            setMsg(data)
        }



    }

    useEffect(() => {
        getProductApi()
    }, [])

    if (loading)
        return <Loading></Loading>

    if (msg)
        return <h2 className='text-red-700 font-bold my-3 p-3'>{msg}</h2>
    return (
        <div className='row'>

                {dataArr?.length ? dataArr.map(prod => <Item key={prod?._id} ele={prod}></Item>): productArr.map(prod => <Item key={prod?._id} ele={prod}></Item>)}

        </div>
    )
}
