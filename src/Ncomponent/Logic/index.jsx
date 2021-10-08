import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import data from '../../data.json'
import './style.css'

export default function Logic() {
    const [yesNo0, setYesNo0] = useState("")
    const [yesNo1,setYesNo1] = useState(" d-none")
    const [changeClass0,setChangeClass0] = useState(' ')
    const [changeClass1,setChangeClass1] = useState(' d-none')

    

    const [i, setI] = useState(0)
    const [word, setWord] = useState(data[i].tuvung)

    const [inputValue, setInputValue] = useState('')



    useEffect(() =>{
        setWord(data[i].tuvung)
    },[i])
    

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleCheck = (e) => {
        e.preventDefault()
        setChangeClass0('d-none')
        setChangeClass1(' animate__fadeInUp ')
        if(inputValue.toUpperCase() === data[i].nghia.toUpperCase()){
            
        }
        else{
            setYesNo0(" d-none")
            setYesNo1(" ")
        }

        setTimeout(() => {
            setChangeClass0(' animate__animated animate__zoomInLeft')
            setChangeClass1(' animate__animated animate__zoomOutUp')
            setInputValue('')
            if(i < data.length-1){
                setI(i+1)
                setWord(data[i].tuvung)

            }
            else{
                console.log("done")
            }
        }, 2000);

    }

    return (
        <div className="conatiner-fluid">
            <div className="container bg-dark my-5 text-light d-flex flex-column   "  style={{height:"600px",borderRadius:"15px"}}>

                <div className="p-3">
                    Kiểm tra
                </div>
                <h1 className={"fs-1 mt-5 ms-5 " + changeClass0} style={{height:"300px"}}>
                    {word}
                </h1>

                <h1 className={"fs-1 mt-5 ms-5 text-center animate__animated" + changeClass1} style={{height:"300px"}}>
                    

                    <div className={"text-center text-success " + yesNo0}>
                        <i class="fas fa-check me-5 animate__animated animate__shakeY"></i>
                        Exactly
                    </div>
                    <div className={"text-center text-danger " + yesNo1}>
                        <i class="fas fa-times me-5 animate__animated animate__shakeY"></i>
                        Wrong
                    </div>


                        <h1 className="mt-5 text-primary">
                        {data[i].tuvung} : {data[i].nghia}
                        </h1>
                </h1>

                <div className="flex-end mb-5 ">
                    Đáp án của bạn
                </div>
                <div>
                </div>
                <form className="text-center" onSubmit={handleCheck}>
                    <input type="text" name="" id="Ninput" className="" placeholder="Nhập đáp án của bạn" value={inputValue} onChange={handleInput} required />
                    <button className="btn btn-success ms-5 d-absolute my-3" >Gửi Đáp án</button>
                </form>
            </div>
            
        </div>
    )
}
