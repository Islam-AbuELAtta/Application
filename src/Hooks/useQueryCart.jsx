import { useQuery } from '@tanstack/react-query'
import { data } from 'autoprefixer'
import React from 'react'

export default function useQueryCart(key, fn) {

    return useQuery({ queryKey: [key], queryFn: fn , select:(data)=> data?.data})
}
