/* eslint-disable no-self-compare */
/* eslint-disable no-use-before-define */
/* eslint-disable no-dupe-keys */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { render } from "@testing-library/react";
import { Alert, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import React, {useEffect, useRef, useState} from "react";
import {products} from './data.js'


const App= ()=>{

    const [lists , setList] = useState(products) 
    const [search, setSearch] = useState('')
    const [updateState, setUpdateState] = useState(-1)
    const [category, setCatagory] = useState('')

    return(
        
      <main className="container w-50">

      {/* Start product search */}
      <section className="row pt-5 justify-content-lg-between  position-relative">
        <div className="product d-flex justify-content-center align-items-center ">
          <p className="product fs-3 ">Products </p>
          <input id="search" type="text" className="form-control" onChange={e => setSearch(e.target.value)} placeholder="Search...." />
        </div>
      </section>
      <hr /> 
      {/* end product search */}
      

      {/* start  category */}      
                        {
                          lists.filter((current) => {
                              return search.toLowerCase() === ''
                                ? current
                                : current.category.toLowerCase().includes(search);
                            })
                            .map((current) => (        
                          <><section>
                                <div className="card mt-5 border-0 position-relative">
                                  <div className="row g-0">
                                    <div className="col-lg-4 ">
                                      <img src={current.thumbnail} className="img-fluid rounded-start" alt={current.title} />
                                    </div>
                                    <div className="col-lg-8 col-sm-12">
                                      <div className="card-body">
                                        <><h5 className="title fs-3 " key={current}>{current.title}</h5>
                                        <div className="icon ">
                                        <button className=" border-0 " type="button" onClick={() => handleDelete(current.id)}>
                                            <i className="fa-solid fa-trash " style={{ color: '#ad3f3f' }}/></button>
                                        </div><small className="text-body-secondary">{current.brand} / {current.category}</small><p />
                                        <p className="card-text mt-5"><small className="text-body-secondary">
                                          {current.description} </small></p>
                                          <p className="stock "> {current.stock} in stock </p>
                                          <div className="price ">
                                            <p> {current.discountPercentage}%OFF</p>
                                            <h1> {current.price}$ </h1>
                                          </div><div className="Vertical"/></>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section><hr /></>
                      ))
                    }
    </main>       
    )
    function handleDelete(id){
      const newList = lists.filter( li => li.id !== id)
      setList(newList)
    }
  }
export default App;