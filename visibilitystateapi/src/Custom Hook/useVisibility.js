import * as React from "react";

export const useVisibility = ()=>{
  const [onpage, setOnPage] = React.useState(true);
  const count = React.useRef(0);
  const handleUserMove=()=>{
    if(document.visibilityState === "visible"){
      count.current = count.current+1;
      setOnPage(true);
    }
    else{
      count.current = count.current+1;
      setOnPage(!onpage);
    }
}; 

    React.useEffect(()=>{
        document.addEventListener("visibilitychange",handleUserMove)
        

        return ()=>{
            document.removeEventListener("visibilitychange",handleUserMove);
        }

    },[]);

    return [onpage,count.current]
}