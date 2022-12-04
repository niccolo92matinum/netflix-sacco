import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import db from '../firebase';
import "./PlaneScreen.css"
import {loadStripe} from "@stripe/stripe-js"



function PlansScreen() {


    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser)

    useEffect(()=>{
      /*
      db.collection('products')
  .where('active', '==', true)
  .get()
  .then(function (querySnapshot) {
    querySnapshot.forEach(async function (doc) {
      console.log(doc.id, ' => ', doc.data(),'su');
      const priceSnap = await doc.ref.collection('prices').get();
      priceSnap.docs.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data(),'giy');
    
      });
    });
  });*/
     
      db.collection("products")
      .where("active", "==" ,true)
      .get().then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) =>{
         // console.log(productDoc.id, ' => ', productDoc.data(),'su');
          products[productDoc.id] = productDoc.data();
   
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price)=>{
           // console.log(price.id, ' => ', price.data(),'giy');
            products[productDoc.id].prices = {
            
              priceId:price.id,
            priceData:price.data()            
          }
          })
        });
        setProducts(products)

      })
      
    },[])
    
//console.log(products,'products')
  const loadChackout = async (priceId) =>{
 
    const docRef = await db
                  .collection("users")
                  .doc(user.uid)
                  .collection("checkout_sessions")
                  .add({
                    mode: 'payment',
                    price:priceId,
                    success_url:window.location.origin,
                    cancel_url:window.location.origin,
                   
                 
                  })
                 
       
                   docRef.onSnapshot(async (snap)=>{
                
                   console.log(snap.data(), 'docRef')
                  
                    const {error, sessionId} = snap.data()

                    const stripe = await loadStripe('pk_test_51M9aJbDdietvAiCiq8pTcovbY7AIVPWATFVioUdsTBOvUgP5Go1gM41tozDamEWy0bfME5cRORxzSht5hxDDNG7V00Aaa7DVEh')
                    console.log(stripe,'stripe')
                    stripe.redirectToCheckout({sessioId:snap._delegate._key.path.segments[3]})
             
                   // const {error} = snap.data();
                    //const x = snap.data();
                    if(snap._delegate._key.path.segments[3]){
                  
                     
                      //
                    }
                     
                   if(error){
                    alert(`An error occured: ${error.message}`);
                   }
                 
                   // console.log(final._delegate._key, 'test')
             
                     
                    
                    
                    
                   
                  })
                  //console.log(r, 'ciao')
                  

  }




  return (
    <div className='planeScreen'>
      {Object.entries(products).map(([productId,productData])=>{
        // add logic to check if the user is in 
        //prices priceId
        console.log(productId,productData, 'ecco')
      
        return(
        <div key={productId} className='plansScreen__plan'>
          <div   className='plansScreen__info'>
            
           <h5>{productData.name}</h5>
           <h6>{productData.description}</h6> 
          </div>

          <button onClick={()=>loadChackout(productData.prices.priceId)}>
            Subscribe
          </button>
        </div>
        )
      })}
        
    </div>
  )
}

export default PlansScreen
//productData.prices.priceId