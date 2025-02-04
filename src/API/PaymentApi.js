import axios from "axios";

let token =localStorage.getItem('userToken')

        export function onlinePayment({cartId, shippingAddress}){

            return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5175`, {shippingAddress},{
                headers:{
                    token
                }
            })
        }


        export function cashPayment({cartId, shippingAddress}){

            return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, {shippingAddress},{
                headers:{
                    token
                }
            })
        }