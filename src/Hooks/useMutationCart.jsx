import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useMutationCart(fn) {
    
         const queryClient = useQueryClient()
        return useMutation({mutationFn: fn , 
            onSuccess:()=>{
                queryClient.invalidateQueries({ queryKey: ['userCart'] })
            }
         })
       
}


