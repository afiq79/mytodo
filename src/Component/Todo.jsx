import React, { useState } from 'react'
import todo from './todo.jpg'
const Todo = () => {


    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);


    const addItems = () => {
        if(!inputData){

        }else {
            setItems([...items, inputData]);
            setInputData('');
        }

    }

    const deleteItem = (id) => {
         const update = items.filter((elem, ind) => {
             return ind != id;
             
         })
         setItems(update);
    }
    const remove = () => {setItems([])};
    return (
        <>
            <div className="main-div">
               <div className="child-div"> 
                   <figure>
                    <h1 className="htxt">MY TODO</h1>
                    <p className="ptxt">Plan the day adventurestly</p>

                </figure>
                <div className="addItems">
                    <input type="text" placeholder="add items"
                    value={inputData}
                    onChange={(e)=>{setInputData(e.target.value)}}
                    />
                    <i className="fa fa-plus add-btn" onClick={addItems}></i>
                </div>
                <div className="showItems">

                    {
                        items.map((elem, ind) => {
                            return (
                                <div className="eachItem" key={ind}>
                                <h3>{elem}</h3>
                                <i className="fas fa-trash-alt add-btn" onClick={()=>{deleteItem(ind)}}></i>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={remove}><span>Check List</span></button>
                </div>
                </div>    
            </div> 
        </>
    )
}

export default Todo
