import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import useMutationCart from '../Hooks/useMutationCart';
import { cashPayment, onlinePayment } from '../API/PaymentApi';
import { ToastContainer, toast } from 'react-toastify';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({cartId}) {
    let {mutate:payOnlineMutate, data, status:statOnline, error} = useMutationCart(onlinePayment) 
    let{mutate:payCash, data:dataCash}= useMutationCart(cashPayment)
    let [flag, setFlag]= React.useState(false)


            function handlePayment(shippingAddress){
                   if (flag=== true)
                    payOnlineMutate({cartId,shippingAddress})
                   else{
                    payCash({cartId,shippingAddress});
                   }
            }
            
            if (statOnline==='success')
                    window.location.href= data?.data?.session?.url


                    
                
        let formik = useFormik({
            initialValues:{
                details: '',
                phone:'',
                city:'',
            },
            onSubmit:handlePayment
        })
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={()=> {handleOpen(); setFlag(true)}} color='success' variant='contained' sx={{ margin: 10 }} >Pay Online </Button>
            <Button onClick={()=> {handleOpen(); setFlag(false)}}  color='success' variant='contained' >Pay Cash </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
                        <div className="mb-5">  
                            <label htmlFor="details" className="block mb-2 text-sm font-medium text-green-900 dark:text-green">Your details</label>
                            <input type="text" id="details" value={formik.values.details} onChange={formik.handleChange} className="bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-green dark:focus:ring-green-500 dark:focus:border-green-500" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-green-900 dark:text-green">Your phone</label>
                            <input type="tel" id="phone" value={formik.values.phone} onChange={formik.handleChange} className="bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-green dark:focus:ring-green-500 dark:focus:border-green-500"  />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="city" className="block mb-2 text-sm font-medium text-green-900 dark:text-green">Your city</label>
                            <input type="text" id="city" value={formik.values.city} onChange={formik.handleChange} className="bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-green dark:focus:ring-green-500 dark:focus:border-green-500"  />
                        </div>
            
                        <button type="submit" className="text-green bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
                    </form>


                </Box>
            </Modal>
        </div>
    );
}