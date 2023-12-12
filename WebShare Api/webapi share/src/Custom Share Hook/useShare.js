import * as React  from "react";
import { useState } from "react";




export const useShare = (data)=>{
    
    const [error,showError]= useState("");

    function Sharedata (){
        if(!navigator.share){
            showError("Webshare api does not support this browser!!")
            return 
        }
        
        try{
             navigator.share(data)
        }
        catch(error){
            showError("Something went wrong !!");
        }
    }

    return ({error,Sharedata})

}