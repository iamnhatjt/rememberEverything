import React, { useEffect, useState } from 'react'
import data from '../../data.json'
import "./style.css"


export default function View() {
    const [i, setI] = useState(0)
    const [viewWord, setViewWord] = useState(data[0].tuvung)
    const [animate,setAnimate] = useState('animate__flipInX')

    useEffect(()=> {
        setViewWord(data[i].tuvung)
        
        
    },[i])



    
    const handleDecrement    = () => {
        if(i > 0){
            setI(i -1)
            setAnimate(" animate__lightSpeedInRight")
            if(animate === " animate__lightSpeedInRight"){
                setAnimate(" animate__zoomInRight")
            }
        }
    }

    const handleIncrement = () => {
        if(i < data.length -1){

            setI(i+1)
            setAnimate(" animate__lightSpeedInLeft")
            if(animate === " animate__lightSpeedInLeft"){
                setAnimate(" animate__zoomInLeft")
            }
            
        }
        
    }

    const handleChangeWord = ()=>{
        
        if(viewWord === data[i].tuvung){
            setViewWord(data[i].nghia)
            setAnimate(' animate__flipInY')
        }
        else{
            setViewWord(data[i].tuvung)
            setAnimate(" animate__flipInX")
        }
    }

    

    return (
        <div className=" container-fluid" style={{backgroundColor:"#13141b"}}>
        
        <div className={"container bg-dark mt-5 text-light d-flex n-cursor animate__animated Nbg" + animate +" animate__faster"} onClick={handleChangeWord} style={{height:"600px"}}>
            <h1 className="m-auto">
                {viewWord}
            </h1>
        </div>
        <div className="container fs-3">
            <div className="text-center mt-3 d-flex justify-content-center bg-dark text-light ">
            <i class="fas fa-arrow-left m-auto n-cursor-hover" onClick={handleDecrement}></i>
                    {i  +1 } / {data.length}
            <i class="fas fa-arrow-right m-auto n-cursor-hover" onClick={handleIncrement}></i>
            </div>
        </div>

        <div className="container mt-5">
            <div className="col-12">
                {data.map((word, index) =>{
                    return (
                        <div className="d-flex text-light fs-4 justify-content-around Nbg my-4 bg-dark  ">
                            <div className="">
                                {word.tuvung} 
                                
                            </div>
                            <div className="">
                                {word.nghia}
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}
