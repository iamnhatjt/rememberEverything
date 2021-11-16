import React, {useState, useRef, useEffect} from "react";
import { IoTrashOutline, IoAddCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import data from '../../data.json'
import './input.scss'

const Card = ({stt, onClick, removeCard}) => {
    const addCard = onClick(stt)
    const remove = removeCard(stt)
    return (
        <>
        <li data-index={stt} className='card__item'>
            <header className='card--head'>
                <div className='margin-head'>
                    <span className='stt-card'>{stt}</span>
                    <span className='clear' onClick={remove}>
                        <IoTrashOutline className='icon-clear'/>
                    </span>
                </div>
            </header>
            <main className='card__main'>
                <div className='space--word'>
                    <input className='input--word'></input>
                    <div className='underline-input'></div>
                </div>
                <div className='space--mean'>
                    <input className='input--mean'></input>
                    <div className='underline-input'></div>
                </div>
            </main>
        </li>
        <li className='add--card' onClick={addCard}>
            <div className='margin-icon-add'>
                <IoAddCircle className='icon--add'/>
            </div>
        </li>
        </>
    )
}


const Input = () => {
    const [cardList, setcardList] = useState([1, 2, 3, 4, 5])
    const refCardList = useRef(null)

    const list = cardList.map((card, index) => {
        return <Card key={index} stt={card} onClick={handleEvent().addCard} removeCard={handleEvent().changeValueCard}/>
    })


    function handleEvent() {
        function changeInputByAdd(cardItemGet, cardItemGive) {
            const valueWord = cardItemGive.querySelector('.input--word').value
            const valueMean = cardItemGive.querySelector('.input--mean').value
            cardItemGive.querySelector('.input--word').value = ''
            cardItemGive.querySelector('.input--mean').value = ''
            cardItemGet.querySelector('.input--word').value = valueWord
            cardItemGet.querySelector('.input--mean').value = valueMean
        }
        
        // add card
        function changeAllInputByAdd(numberCard) {
            const lengthCardList = cardList.length
            const cardItems = Array.from(refCardList.current.querySelectorAll('.card__item'))
            for(let i = lengthCardList-1; i >= numberCard; i--) {
                changeInputByAdd(cardItems[i], cardItems[i-1])
            }
        }
        
        function addCard(numberCard) {
            return function add() {
                setcardList([...cardList, Number.parseInt(cardList.slice(-1)) + 1])
                changeAllInputByAdd(numberCard)
            }
        }
        // remove card
        function changeAllInputByRemove(numberCard) {
            const lengthCardList = cardList.length
            const cardItems = Array.from(refCardList.current.querySelectorAll('.card__item'))
            for(let i = numberCard - 1; i < lengthCardList - 1; i++) {
                changeInputByAdd(cardItems[i], cardItems[i+1])
            }
            const removeCard = cardList.slice(0, -1)
            setcardList(removeCard)
        }

        function changeValueCard(numberCard) {
            return function remove() {
                changeAllInputByRemove(numberCard)
            }
        }

        // create data
        function createInput() {
            const cardItems = Array.from(refCardList.current.querySelectorAll('.card__item'))
            const lengthCardList = cardList.length
            for(let i=0; i < lengthCardList; ++i) {
                const valueWord = cardItems[i].querySelector('.input--word').value
                const valueMean = cardItems[i].querySelector('.input--mean').value
                if(valueWord !== '' && valueMean !== '') {
                    const value = {"tuvung": valueWord, "nghia": valueMean}
                    data.push(value)
                }
            }
        }

        return {addCard, changeValueCard, changeAllInputByAdd, createInput}
    }

    useEffect(() => {
        handleEvent().changeAllInputByAdd()
    }, [cardList])

    return(
        <div className='input'>
            <header className="page-create__head">
                <span className='text-head'>Tạo học phần mới</span>
                <NavLink to='/bai_viet'>
                    <button className='btn-create' onClick={handleEvent().createInput}>Tạo</button>
                </NavLink>
            </header>
            <main className='page-create__main'>
                <ul className='card-list' ref={refCardList}>
                    {list}
                </ul>
            </main>
        </div>
    )
}

export default Input