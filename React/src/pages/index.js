import styles from './home.module.scss'
export default function Home() {
  const stocks = ["vvar3","oibr3"]
  return (
   <div className={styles.contentContainer}>
     <h1>Stock Market</h1>
     <div className={styles.gridContainer}>
      <div className={styles.divInput}>
          <label className={styles.inputStockLabel}> Stock Name</label>   
          <input className={styles.inputStock} type="text" id="fname" name="fname"/>
          
          <label className={styles.inputStockLabel}> Data de</label>   
          <input className={styles.inputStock} type="text" id="fname" name="fname" value=""/>

          <label className={styles.inputStockLabel}> Data até</label>   
          <input className={styles.inputStock} type="text" id="fname" name="fname"/>

          <label className={styles.inputStockLabel}> Numero de ações</label>   
          <input className={styles.inputStock} type="text" id="fname" name="fname"/>

          <label className={styles.inputStockLabel}> Projeção de ganhos</label>   
          <input className={styles.inputStock} type="text" id="fname" name="fname"/>
          <button>Search</button>
          <button>+</button>
        </div>
        <div className={styles.myStocks}>
          <h3>My Stocks</h3>
          {stocks.map((stock)=>{
            return <h1 key={stock}>{stock}</h1>
          })}
        </div>
      </div>

   </div>

  )
}
