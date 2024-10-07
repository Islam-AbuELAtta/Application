import axios from "axios"

let baseUrl = `https://ecommerce.routemisr.com/api/v1`
let token = localStorage.getItem('userToken')

export function addToCart(productId) {
    return axios.post(`${baseUrl}/cart`, { productId }, {
        headers: {
            token
        }
    })
}

export function getUserCart() {

    return axios.get(`${baseUrl}/cart`, { headers: { token } })
}





// for delete cart Item .

    export function deleteCartItem(deletedId){
            return axios.delete(`${baseUrl}/cart/${deletedId}`,
                    { headers: {
                        token
                    }}
            )
    }


    // for update Product 


        export function updateCartItem({id, count}){
                return axios.put(`${baseUrl}/cart/${id}`, {count},{
                    headers: {
                        token
                    }
                }  )
        }



    // for clear user cart 

        export function clearCartApi(){
                    return axios.delete(`${baseUrl}/cart`, {
                        headers: {
                            token
                        }
                    })
            }