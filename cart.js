 
    //cartCards


function moveTopay(){
  window.location.href="./Payment.html";
}

{
  var cartArr = JSON.parse(localStorage.getItem('cartArr')) || [];
      
console.log(cartArr)
      let caComp1CardSection=document.getElementById('caComp1CardSection')
      // console.log(caComp1CardSection)

      let modalBox=document.createElement('div');
      modalBox.setAttribute('class','modalBox'); 
      modalBox.innerHTML=`<div class='modalContent'>
                              <span class="close">&times;</span>
                              <p>Are you sure you want to remove this item from your cart?</p>  
                              <button>YES</button>      
                              <button>NO</button>
                          </div>`
                          
                          
  document.querySelector('body').append(modalBox)
  
      document.querySelector('.modalContent>span').addEventListener('click',function(){
        modalBox.style.display='none'
    
      })      
      document.querySelector('.modalContent>button:nth-child(4)').addEventListener('click',function(){
        // alert('NO clicked');
        modalBox.style.display='none'
    
      })

      // window.addEventListener('click',function(){
      //   modalBox.addEventListener('mouseleave',function(){
      //     modalBox.style.display='none'
      //   })    
               

      // })        
      
      displayCards(cartArr);
      

      function displayCards(cArr){
        cArr.map(function(cartProd){
          let caCardTop=document.createElement('div');
          caCardTop.setAttribute('class','caCardTop')
          // cardb
          {        
            var caCardb=document.createElement('div');
              let caCardbImg=document.createElement('img');
              caCardbImg.src=cartProd.item.img1;            
              let caCardb2=document.createElement('div');
              caCardb2.setAttribute('class','caCardb2');              
                let caCardbName=document.createElement('h4');
                caCardbName.textContent=cartProd.item.Title;
                let caCardbCode=document.createElement('h5');
                caCardbCode.textContent=`36 Months' Warranty, 100% Genuine`;
            let caCardbMRP = document.createElement('h4');  
            let tempPrice = (100 - cartProd.item.offer) / 100;                  
            caCardbMRP.innerHTML = '<span><i class="fas fa-rupee-sign"></i>&nbsp;' + cartProd.item.Price + '</span>&nbsp&nbsp&nbsp;<span><i class="fas fa-rupee-sign"></i>&nbsp;' + Math.round((tempPrice) * cartProd.item.Price); '</span>'
            caCardbMRP.setAttribute('class','caCardbMRP')
                // let caCardbWish=document.createElement('select');  
                // caCardbWish.setAttribute('class','caCardbWish');
                //   let options=document.createElement('option');
                //   options.textContent='Move To Wishlist'                
                // caCardbWish.append(options)
              caCardb2.append(caCardbName,caCardbCode,caCardbMRP)
            caCardb.append(caCardbImg,caCardb2);              
            caCardb.setAttribute('class','caCardb')
          }
          // cardc
  
          {        
            var caCardc=document.createElement('div');            
            
              let caCardc1=document.createElement('div');
                caCardc1.innerHTML='<i class="fas fa-minus"></i>'
                caCardc1.addEventListener('click',function(){
                  // alert('minus')
                  if(caCardc2Inp.value>1)
                  {
                    caCardc2Inp.value--;
                    cartProd.qty=caCardc2Inp.value;
                    localStorage.setItem('cartArr',JSON.stringify(cartArr));
                    document.querySelector('#caComp1>h3>span>span').textContent=cartArr.reduce(function(acc,el){
                    return acc+Number(el.qty);
                    },0)
                    
                    calcTotal();
                    location.reload();
                    
                  }

                })
              let caCardc2=document.createElement('div');              
              let caCardc2Inp=document.createElement('input');
              caCardc2Inp.style.width='100%';
              caCardc2Inp.style.height='100%';
              caCardc2Inp.textContent=cartProd.qty
                // caCardc2.textContent=cartProd.qty
                
                caCardc2Inp.value=cartProd.qty;
                caCardc2Inp.addEventListener('change',function(){
                  // alert('box')
                  cartProd.qty=caCardc2Inp.value;
                    localStorage.setItem('cartArr',JSON.stringify(cartArr));
                    document.querySelector('#caComp1>h3>span>span').textContent=cartArr.reduce(function(acc,el){
                    return acc+Number(el.qty);
                    },0)
                    
                    calcTotal();
                    location.reload();
                    
                })       
                caCardc2.append(caCardc2Inp)   
              let caCardc3=document.createElement('div');
                caCardc3.innerHTML='<i class="fas fa-plus"></i>'
                caCardc3.addEventListener('click',function(){
                  // alert('plus')
                  if(caCardc2Inp.value)
                  {
                    caCardc2Inp.value++;
                    cartProd.qty=caCardc2Inp.value;
                    localStorage.setItem('cartArr',JSON.stringify(cartArr));
                    document.querySelector('#caComp1>h3>span>span').textContent=cartArr.reduce(function(acc,el){
                    return acc+Number(el.qty);
                    },0)                    
                    calcTotal();
                    location.reload();
                    
                  }
                })
              let caCardc4=document.createElement('div');
            caCardc4.innerHTML = '<span><i class="far fa-trash-alt"></i></span>&nbsp;&nbsp<span><i class="far fa-heart"></i></span>';
            caCardc4.children[1].addEventListener('click', function () { 
             alert('Work in progress!!🚧')
            })
              caCardc4.children[0].addEventListener('click',function(){              
                modalBox.style.display='block'
                document.querySelector('.modalContent>button:nth-child(3)').addEventListener('click',function(){
                  cartArr=cartArr.filter(function(el){
                    return el!=cartProd;
                  })
                  localStorage.setItem('cartArr',JSON.stringify(cartArr));
                  location.reload();
                  displayCards(cartArr);              
                  modalBox.style.display='none'
              
                })
                // console.log(cartProd.prod)    
                // document.style.backgroundColor= 'rgba('+'0,0,0,0.4'+')';
                
              })
              caCardc.append(caCardc1,caCardc2,caCardc3,caCardc4)
              caCardc.setAttribute('class','caCardc')
          }
          // cardd
          {
            var caCardd=document.createElement('div');
            calcTotal();
            
            function calcTotal(){
              
              caCardd.innerHTML='<i class="fas fa-rupee-sign"></i>&nbsp;'+Math.round(((100-cartProd.item.offer)/100)*cartProd.item.Price*cartProd.qty);              
              
              
            }
            caCardd.setAttribute('class','caCardd')   
          }
          caCardTop.append(caCardb,caCardc,caCardd);
  
          // let hr=document.createElement('hr')
          // hr.style.border='2px solid #D1D1D1'         
  
          caComp1CardSection.append(caCardTop)
  
        })


        document.querySelector('#caComp1>h3>span>span').textContent=cartArr.reduce(function(acc,el){
          return acc+Number(el.qty);
        },0)

      }
      
      
    }
  
  //orderSummaryCartSection
  {
    let caVoucherApplied=0,orderSave=0,orderDisc=0,caPromoApplied=0,orderTot=0;
    let caComp2a=document.getElementById('caComp2a');
    document.getElementById('caComp2b').addEventListener('click',function(e){      
      if(e.target.previousElementSibling.toString()=='[object HTMLInputElement]')
      {
        // alert('voucher')
         if(document.querySelector('#caComp2b input').value=='masai10'){
           if(caVoucherApplied==0)
           {
             alert('10% additional discount applied!!')           
             caVoucherApplied=1;
             
             if(caPromoApplied==1){
               caComp2cTd[7].innerHTML='-'+'&nbsp&nbsp<i class="fas fa-rupee-sign"></i>&nbsp;'+Math.floor(orderTot*0.4)
              //  orderSave+=Math.floor(orderTot*0.1)
             }
             else{
              caComp2cTd[7].innerHTML='-'+'&nbsp&nbsp<i class="fas fa-rupee-sign"></i>&nbsp;'+Math.floor(orderTot*0.1)
              // orderSave+=Math.floor(orderTot*0.1)
             }             
             orderSave+=Math.floor(orderTot*0.1)
             caComp2cTd[12].innerHTML='-'+'&nbsp&nbsp<i class="fas fa-rupee-sign"></i>&nbsp;'+(orderSave)
             caComp2cTd[9].innerHTML='<i class="fas fa-rupee-sign"></i>&nbsp;'+Math.floor(orderTot-orderSave);
           }else{
            alert('Voucher already applied!!')           
           }
         }else{
           alert('Invalid code!')
         }
      }     
      else if(e.target.previousElementSibling.toString()=='[object HTMLSpanElement]'){
        if(caPromoApplied==0){
          // alert('promo')
          alert('30% additional discount applied!!') 
          caPromoApplied=1;      

          if(caVoucherApplied==1){
            caComp2cTd[7].innerHTML='-'+'&nbsp&nbsp<i class="fas fa-rupee-sign"></i>&nbsp;'+Math.floor(orderTot*0.4)
            // orderSave+=Math.floor(orderTot*0.3)
          }else{
            caComp2cTd[7].innerHTML='-'+'&nbsp&nbsp<i class="fas fa-rupee-sign"></i>&nbsp;'+Math.floor(orderTot*0.3)
            // orderSave+=Math.floor(orderTot*0.3)
          }          
          orderSave+=Math.floor(orderTot*0.3)
          caComp2cTd[12].innerHTML='-'+'&nbsp&nbsp<i class="fas fa-rupee-sign"></i>&nbsp;'+(orderSave)
          caComp2cTd[9].innerHTML='<i class="fas fa-rupee-sign"></i>&nbsp;'+Math.floor(orderTot-orderSave);
        }
      }
    })
    
    let caComp2bVoucherText=document.getElementById('caComp2b').innerHTML;
    let caComp2bPromoText=`
            <div>
            <p>Click on APPLY if you wish to use the promocode😋</p>            
            <input type="radio" checked>&nbspMASAI30 <span>(Enjoy 30% Off)</span>
            <button>APPLY</button>
            <div>`
    
    caComp2a.children[0].addEventListener('click',function(){
      // alert(1)
      caComp2a.children[0].style.color = 'black';
      caComp2a.children[1].style.color = 'grey';
      caComp2a.children[0].style.borderTop='1px solid #d1d1d1'
      caComp2a.children[0].style.borderBottom='none'      
      caComp2a.children[1].style.borderTop='none'
      caComp2a.children[1].style.borderBottom='1px solid #d1d1d1'      
      caComp2a.children[1].style.borderRight='1px solid #d1d1d1'      
      document.getElementById('caComp2b').innerHTML=caComp2bVoucherText;            
    })
    
    
    caComp2a.children[1].addEventListener('click',function(){
      // alert(2)
      caComp2a.children[1].style.color = 'black';
      caComp2a.children[0].style.color = 'grey';
      caComp2a.children[1].style.borderTop='1px solid #d1d1d1'
      caComp2a.children[1].style.borderBottom='none'      
      caComp2a.children[1].style.borderRight='1px solid #d1d1d1'      
      caComp2a.children[0].style.borderTop='none'
      caComp2a.children[0].style.borderBottom='1px solid #d1d1d1'      
      document.getElementById('caComp2b').innerHTML=caComp2bPromoText      
    })  


      document.querySelector('#caComp2d>button').addEventListener('click',function(){
        // alert('checkout')
        // console.log(caComp2cTd[5].innerHTML)

        let checkoutObj={
          orderTotal:caComp2cTd[1].innerHTML,
          orderDisc:caComp2cTd[5].innerHTML,
          orderPromo:caComp2cTd[7].innerHTML,
          orderYouPay:caComp2cTd[9].innerHTML,
          orderSave:caComp2cTd[12].innerHTML
        }
        localStorage.setItem('checkoutObj', JSON.stringify(checkoutObj));
        if (cartArr && cartArr.length != 0) window.location.href = 'checkout.html'
        else alert('Please add some Items..Your Cart is empty!!');
      })

  let caComp2cTd = document.querySelectorAll('#caComp2c>table td')
  let caComp2cTr = document.querySelectorAll('#caComp2c>table tr')
  let hr = document.createElement('hr')
  hr.style.width='160%'
  hr.style.backgroundColor='black'
  caComp2cTr[4].before(hr)  

      orderTot=(cartArr).reduce(function(acc,el){
        return acc+el.item.Price*el.qty;
      },0)  

      // let caComp2cOrder
     caComp2cTd[0].children[0].textContent=cartArr.reduce(function(acc,el){
       return acc+Number(el.qty)
     },0)

      caComp2cTd[1].innerHTML='&nbsp&nbsp<i class="fas fa-rupee-sign"></i>&nbsp;'+orderTot

      // let caComp2cShip
      caComp2cTd[3].innerHTML='<i class="fas fa-rupee-sign"></i>&nbsp;0'

      // let caComp2cDisc
      orderDisc=(cartArr).reduce(function(acc,el){
        return acc+(el.item.offer/100)*el.item.Price*el.qty;
      }, 0)
      
    caComp2cTd[4].style.color='green'
  
      caComp2cTd[5].innerHTML='(-)'+'&nbsp&nbsp<i class="fas fa-rupee-sign"></i>&nbsp;'+Math.floor(orderDisc)
      // let caComp2cPromo
      caComp2cTd[7].innerHTML='(-)'+'&nbsp&nbsp<i class="fas fa-rupee-sign"></i>&nbsp;'+0;

      // let orderPV=0;
      // if(caPromoApplied==1){
      //   orderPV=0.3;
      //   caComp2cTd[7].innerHTML='-'+'&nbsp&nbsp<i class="fas fa-rupee-sign"></i>'+orderTot*0.3
      // }else if(caPromoApplied==1 && caVoucherApplied==1){
      //   orderPV=0.4;
      //   caComp2cTd[7].innerHTML='-'+'&nbsp&nbsp<i class="fas fa-rupee-sign"></i>'+orderTot*0.4
      // }else {
      //   orderPV=0;
      // }

      // let caComp2cPay
      orderSave=Math.floor(orderDisc);            
      caComp2cTd[9].innerHTML = '<i class="fas fa-rupee-sign"></i>&nbsp;' + Math.floor(orderTot - orderSave);            
      let total = localStorage.setItem("Total", JSON.stringify( Math.floor(orderTot - orderSave)))
    }
  
