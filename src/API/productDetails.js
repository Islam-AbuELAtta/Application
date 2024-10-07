import axios from "axios";



                                

      export default   async  function getProductDetails(prodID){
                        try {
                            let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${prodID}`)
                                return data
                        } catch (error) {
                                return error?.message;
                                
                        }
                        
                }