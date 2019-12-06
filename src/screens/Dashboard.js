import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAll } from '../redux/actions/fetchAll'
import Header from '../components/Header'
import Foter from '../components/Footer'
import Main from '../components/Main'

export default function Dashboard() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAll())
    }, [dispatch])

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Main />
            <Foter />
        </div>
    )
}