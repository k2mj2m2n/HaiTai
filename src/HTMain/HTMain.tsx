import React from "react";
import './HTMain.css';
import { useState,useEffect, useRef} from 'react';


function HTMain() {
    let timerID:any=useRef(0);    
    let [secRot, setSecRot] = useState(0);
    let [beesecRot, setbeeSecRot] = useState(0);
    let bln_pos = 8;
    let bee_pos = 0;

    useEffect(
       () => { //Runs only on the first render
              console.log("Start only one at first rendering!!");
              timerID.current = setInterval(tick, 100);

              return () => { //Runs only when this compoent destoried
                  console.log("cleaned up");
                  clearTimeout(timerID.current);
              };
            },
        []);

     function tick(){
        let d = new Date(); 
        let s = d.getSeconds(); //0 ~ 59

        if(s%2 == 0) bln_pos -= 0.1;
        else bln_pos += 0.1;

        bee_pos -= 187;
        if(bee_pos == -5423) bee_pos =0;
        setSecRot(bln_pos);
        setbeeSecRot(bee_pos);
     }

    return(
        <div className="section1">
            <div className="bg"><img className="mainbg" src="./bg_main.jpg" /></div>
            <img className="m_bln" src="./balloon.png" style={{top:secRot+'%'}}/>
            <div className="m_bee">
                <img src="./bee.png" style={{top: beesecRot+'px'}}/>
            </div>
        </div>
    )
}

export default HTMain;