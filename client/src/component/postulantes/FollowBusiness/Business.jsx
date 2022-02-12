import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getBusiness, getFollowed } from '../../../redux/actions/indexP';
//import { follow} from '../../../redux/actions/indexP'
import BusinessCard from '../MyPostulations/PostCard';
import NavBar from '../NavBar';


function Business() {
  const dispatch = useDispatch();
  const handleAllBusiness = (e) => {
    dispatch(getBusiness());
    };
  useDispatch(()=>{
    dispatch(getBusiness())
    dispatch(getFollowed())
  },[dispatch])
const followedBusiness = useSelector((state) =>state.rootReducerPostulante.followedBusiness)
 //console.log(followedBusiness)
 const business = useSelector((state) =>state.rootReducerPostulante.business)
 //console.log(business)


  return  ( 
  <div className="absolute bg-verdeOscuro h-screen w-screen">
  {/* NAVBAR */}
  <div>
    <NavBar />
  </div>
   <div className="focus:outline-none grid sm:grid-rows-4 grid-cols-1 bg-verdeOscuro  h-auto pt-7">
     <div className="col-span-3 bg-verdeOscuro p-2">
          <div className=" bg-verdeMedio rounded-2xl p-2 w-full h-full">
            <div className="items-center justify-center grid grid-row-7">
              <div className="grid-span-2 bg-verdeMedio w-fit">
                <div className="flex m-0 justify-center">
          <h1 className="font-bold my-4 mx-4 text-centermb-3"> Business followed </h1>   
    <div>
    {followedBusiness.length === 0 ? (
   <div>  <p className=" font-bold text-center mb-3">No followed business? Search know!  
    <button className="h-fit  mx-4 px-2 shadow-lg mt-1 shadow-black rounded-2xl text-verdeHover bg-verdeOscuro hover:bg-verdeClaro"
                onClick={(e) => handleAllBusiness(e)} >
                      all business{" "}
   </button>
</p>        
<div  className="flex m-0 justify-center">
    {business.length === 0 ? <p></p> : business?.map((el) => {
      return (
        <div className="m-4" key={el.id}>
          <BusinessCard
            id = {el.id}
            name={el.name}
            description={el.description}
            location={el.location} 
            
          />
        </div>
      );
    })}
  </div>
      </div>

  ) : (
    <div>
      {followedBusiness?.map((el) => {
        return (
          <div className="m-4" key={el.id}>
            <BusinessCard
              id = {el.id}
              name={el.name}
              description={el.description}
              location={el.location} 
              
            />
          </div>
        );
      })}
    </div>
  )}
             </div>
       </div>
    </div>
  </div>  
  </div>
  </div>
  </div>
  </div>

  )}

export default Business;
