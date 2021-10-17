import styles from './home.module.scss'
import { useEffect,useState } from 'react'
import {api} from '../services/api'

export default function Home() {
  const [stocks,setStocks] = useState([])
  const [myStock,setMyStock] = useState([])
  const [stockHistory,setStockHistory] = useState([])
  const [textStockName, setTextStockName] = useState('')
  const [dateFromStock, setDateFromStock] = useState('')
  const [dateToStock, setDateToStock] = useState('')
  const [qtdStocks, setQtdStocks] = useState(0)
  const [projectionStock, setProjectionStock] = useState(0)

  const [textHistoryPrice,setTextHistoryPrice] = useState('Stock History Prices:')
  function busca(){
    debugger
    const param = {from: dateFromStock, to: dateToStock}
    if(textStockName && dateFromStock && dateToStock){
      fetch(`http://localhost:3333/stocks/${textStockName}/history?from=${dateFromStock}&to=${dateToStock}`)
      .then(response => response.json())
      .then((data)=>{
       console.log(data)
        
      } )
    }else{

    (textStockName ? fetch(`http://localhost:3333/stocks/${textStockName}/quote`): fetch('http://localhost:3333/stocks') )
    .then(response => response.json())
    .then((data)=>{
      (textStockName ?setStocks([data]) : setStocks(data) )
      
    } )
  }
  }

  function addMyStock(){
    if (textStockName){
      fetch(`http://localhost:3333/stocks/${textStockName}/quote`)
      .then(response => response.json())
      .then((data)=>{
        // setMyStock
        setMyStock([...myStock,data]) 
        console.log([data])
        
      } )
    }else{
      alert("Please write the stock's name")
    }
  }


    
  return (
   <div className={styles.contentContainer}>
     <h1>Stock Market</h1>
     <div className={styles.gridContainer}>
      <div className={styles.divInput}>
          <label className={styles.inputStockLabel}> Stock Name</label>   
          <input onChange={(e)=> setTextStockName(e.target.value)} className={styles.inputStock}  type="text"/>
          
          <label className={styles.inputStockLabel}> Data de</label>   
          <input onChange={(e)=> setDateFromStock(e.target.value)} className={styles.inputStock} type="text"  />

          <label className={styles.inputStockLabel}> Data até</label>   
          <input  onChange={(e)=> setDateToStock(e.target.value)} className={styles.inputStock} type="text" />

          <label className={styles.inputStockLabel}> Numero de ações</label>   
          <input  onChange={(e)=> setQtdStocks(e.target.value)} className={styles.inputStock} type="number" />

          <label className={styles.inputStockLabel}> Projeção de ganhos</label>   
          <input onChange={(e)=> setProjectionStock(e.target.value)} className={styles.inputStock} type="number"/>
          <button onClick={busca}>Search</button>
          <button onClick={addMyStock}>+</button>
        </div>
        <div className={styles.myStocks}>
          <h3>My Stocks</h3>
          <table>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>PricedAt</th>
            </tr>
            {myStock.map(stock =>{
              return (
                <tr key={stock.name}>
                <td>{stock.name}</td>
                <td>{stock.lastPrice}</td>
                <td>{stock.pricedAt}</td>
              </tr>
              )
            })}
         </table>

         <div >
          <h3>{textHistoryPrice}</h3>
          <table>
            <tr>
              <th>Opening</th>
              <th>Low</th>
              <th>High</th>
              <th>Closing</th>
              <th>PricedAt</th>
            </tr>
            {myStock.map(stock =>{
              return (
                <tr key={stock.name}>
                <td>{stock.name}</td>
                <td>{stock.lastPrice}</td>
                <td>{stock.pricedAt}</td>
              </tr>
              )
            })}
         </table>
        </div>
        </div>

        

      </div>
      <div className={styles.allStocks}>
     
     <table>
       <tr>
         <th>Name</th>
         <th>Price</th>
         <th>PricedAt</th>
       </tr>
       {stocks.map(stock =>{
         return (
           <tr key={stock.name}>
           <td>{stock.name}</td>
           <td>{stock.lastPrice}</td>
           <td>{stock.pricedAt}</td>
         </tr>
         )
       })}
   </table>
   </div>
   </div>

  )
}
