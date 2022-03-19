import Layout from '../components/Layout'
import React, {useState, useEffect} from 'react'

export default function Localstorage() {

    const [number, setNumber] = useState('0')

    useEffect( () => {

        if(localStorage.getItem('result')){
            setNumber(localStorage.getItem('result'))
        } else {
            setNumber(0)
        }

    },[])



    const plus = () => {
        setNumber((prev) => (prev + 1))
    }

    const minus = () => {
        setNumber((prev) => (prev - 1))
    }


    const saveLocal = () => {
        localStorage.setItem('result', number)
        console.log(localStorage.getItem('result'))

    }

    const deleteLocal = () => {
        localStorage.removeItem('result')
        console.log(localStorage.getItem('result'))
    }


    return (
        <Layout title={'Local Storage'}>
            <h1>Результат</h1>
            <div className='result'>
                <h2>{number}</h2>
                <button onClick={plus}>+1</button>
                <button onClick={minus}>-1</button>
                <button onClick={saveLocal}>Добавить в локал</button>
                <button onClick={deleteLocal}>Удалить локал</button>
            </div>

        </Layout>
    );
};
