function Card({desc,img,title,type,ratings,pricing}){
    return (
        <>
        <div className="border w-[260px] p-2 rounded-lg " onClick={()=>{

              alert(`${title} is Ordered!`)
        
       }}>
          <div className="relative">
          <img src={img} alt="" />
          {
            ratings >= 4.5 ?  <div className='absolute px-2 bottom-0 left-0 m-2 py-1 rounded-full bg-green-200 text-green-950 text-sm'>Best Seller</div>:""
          
          }
          </div>
        
           <div className="flex justify-between items-center">

           <p className="mt-2 ">{title}</p>
           <span className={type=='Veg' ? 'h-3 w-3 rounded-full bg-green-800' : 'h-3 w-3 rounded-full bg-red-800'}></span>
           </div>



        <p className="  text-sm">{desc}</p>

       <div>
        <p  className="mt-2">  Price: {pricing}rs</p>
        {
            pricing >=200 ?  <p className="text-slate-600 mt-1 font-sans text-sm"> Free Delivery </p>: <p className="text-black-600 mt-1 font-sans text-sm"> Additional 49rs charged </p>
        }
       </div>
       
       </div>

        </>
    )
}
export default Card;