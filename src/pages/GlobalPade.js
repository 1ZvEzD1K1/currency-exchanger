import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Currency from '../components/Currency'
import Transfer from '../components/Transfer'
import { CurrencyActionCreators } from '../redux/actions/currency'


export default function GlobalPade() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(CurrencyActionCreators.fetch())
    }, [dispatch])


    const {isLoading, currency} = useSelector((state)=>state.currency)

    console.log(currency)

    return (
        <div className="global__page" >
            {isLoading 
            ?
            <Spinner animation="grow" />
            :
            <>
            <Transfer currency={currency}/>
            <Currency currency={currency} />
            </>
            }
        </div>
    )
}
