import React, {useEffect, useState} from 'react'
import db from '../firebase';
import "./PlaneScreen.css"


function PlansScreen() {


    const [products, setProducts] = useState([]);

    useEffect(()=>{
     
      db.collection('products')
      .where('active', '==' ,true)
      .get().then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) =>{
          products[productDoc.id] = productDoc.data();
          console.log(products, 'elel')
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price)=>{
            products[productDoc.id].prices = {
              priceId:price.id,
            priceData:price.data()            
          }
          })
        });
        setProducts(products)

      })
      
    },[])

  

    console.log(products, 'ciao')

  return (
    <div className='planeScreen'>
        
    </div>
  )
}

export default PlansScreen