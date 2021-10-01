import {useState,useRef} from 'react';
import './LogoOriginal.css'

const LogoOriginal = (props) => {
    const size=props.size;
    const id1=props.id1;
    const id2=props.id2;
    const [colourList,setColourList]=useState([0,30,60,90,120,150,180,210,240,270,300,330,360]);
    const interval_tracker=useRef(null);
    const hsl_value=useRef(0);

    const change =()=>{
        let val=hsl_value.current;
        val=val%361;
        // console.log(val);
        let a=[];
        let i=0;
        for (i=0;i<13;i++){
            a.push((val+i*30)%361);
        }
        setColourList(a);
        hsl_value.current=hsl_value.current-5;
    }

    const runThis=()=>{
        interval_tracker.current= setInterval(function(){change()},90)
    }

    const clearThis=()=>{
        clearInterval(interval_tracker.current);
        console.log(hsl_value);
        // console.log("Mouse leaved");
    }

    // useEffect(()=>{
    //     runThis();
    // },[]);
    
    


    return ( 
        <div className="logo_main">
            <div className="logo">
                <a href="https://lichal.com">
                <svg onMouseEnter={runThis} onMouseLeave={clearThis} id="logo1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 476.3363 487.0937">
                    <defs>
                    <linearGradient id={id1} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={"hsl(" + colourList[0]+",100%,50%)"}/>
                        <stop offset="17%" stopColor={"hsl(" + colourList[1]+",100%,50%)"}/>
                        <stop offset="34%" stopColor={"hsl(" + colourList[2]+",100%,50%)"}/>
                        <stop offset="50%" stopColor={"hsl(" + colourList[3]+",100%,50%)"}/>
                        <stop offset="66%" stopColor={"hsl(" + colourList[4]+",100%,50%)"}/>
                        <stop offset="82%" stopColor={"hsl(" + colourList[5]+",100%,50%)"}/>
                        <stop offset="100%" stopColor={"hsl(" + colourList[6]+",100%,50%)"}/>
                    </linearGradient>

                    <linearGradient id={id2} x1="1" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor={"hsl(" + colourList[6]+",100%,50%)"}/>
                        <stop offset="17%" stopColor={"hsl(" + colourList[7]+",100%,50%)"}/>
                        <stop offset="34%" stopColor={"hsl(" + colourList[8]+",100%,50%)"}/>
                        <stop offset="50%" stopColor={"hsl(" + colourList[9]+",100%,50%)"}/>
                        <stop offset="66%" stopColor={"hsl(" + colourList[10]+",100%,50%)"}/>
                        <stop offset="82%" stopColor={"hsl(" + colourList[11]+",100%,50%)"}/>
                        <stop offset="100%" stopColor={"hsl(" + colourList[12]+",100%,50%)"}/>
                    </linearGradient>

                    <linearGradient id="hue" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={"hsl(" + 0 +",50%,50%)"}/>
                        <stop offset="17%" stopColor={"hsl(" + 60 +",50%,50%)"}/>
                        <stop offset="34%" stopColor={"hsl(" + 120+",50%,50%)"}/>
                        <stop offset="50%" stopColor={"hsl(" + 180+",50%,50%)"}/>
                        <stop offset="66%" stopColor={"hsl(" + 240+",50%,50%)"}/>
                        <stop offset="82%" stopColor={"hsl(" + 300+",50%,50%)"}/>
                        <stop offset="100%" stopColor={"hsl(" + 360+",50%,50%)"}/>
                    </linearGradient>
                    </defs>
                        {/* <title>Lichal Corporation</title> */}
                        <path className="cls-1"
                            d="M323.6175,445.2207V603.4176h157.45a28.2423,28.2423,0,0,0-6.4308-9.0031,30.1112,30.1112,0,0,0-19.2923-7.7169H357.5965a23.1263,23.1263,0,0,1-12.8615-7.7169,23.4614,23.4614,0,0,1-5.1447-16.72v-100.32a25.5219,25.5219,0,0,0-6.4307-10.2893C328.7038,447.3234,325.87,445.7833,323.6175,445.2207Z" transform="translate(-322.6175 -117.3238)"
                             fill={"hsl(" + colourList[3]+",100%,50%)"}/>
                        <path className="cls-1"
                            d="M359,538.7V169.3238a44.8934,44.8934,0,0,1,27.4313,30.6467c-.8432,75.592-6.8828,281.57-.0977,307.1526A46.6109,46.6109,0,0,0,394.3692,523.2a50.9408,50.9408,0,0,0,24.1154,14.4692c19.4038,5.3654,132.5154,0,289.6692,0A53.2072,53.2072,0,0,1,738.7,550.5308,50.84,50.84,0,0,1,749.9538,565H376.6846A17.6846,17.6846,0,0,1,359,547.3154Z" transform="translate(-322.6175 -117.3238)"
                             fill={"url(#"+id1+")"}/>
                        <path className="cls-1"
                            d="M797.9538,276.5208V118.3238h-157.45a28.24,28.24,0,0,0,6.4308,9.0031,30.11,30.11,0,0,0,19.2923,7.7169h97.7477a23.1276,23.1276,0,0,1,12.8615,7.717,23.4609,23.4609,0,0,1,5.1446,16.72v100.32a25.5211,25.5211,0,0,0,6.4308,10.2892C792.8676,274.418,795.7017,275.9581,797.9538,276.5208Z" transform="translate(-322.6175 -117.3238)" fill={"hsl(" + colourList[9]+",100%,50%)"}/>
                        <path className="cls-1"
                            d="M762.5714,183.0413V552.4176A44.8924,44.8924,0,0,1,735.14,521.771c.8432-75.5921,6.8827-281.57.0976-307.1526a46.6108,46.6108,0,0,0-8.0356-16.077,50.94,50.94,0,0,0-24.1154-14.4692c-19.4037-5.3654-132.5153,0-289.6692,0a53.2062,53.2062,0,0,1-30.5461-12.8615,50.8418,50.8418,0,0,1-11.2539-14.4693H744.8867a17.6847,17.6847,0,0,1,17.6847,17.6847Z" transform="translate(-322.6175 -117.3238)"
                             fill={"url(#"+id2+")"} />
                        <polyline className="cls-2" points="158.382 141.676 158.382 352.376 359.382 352.376" fill="none" stroke={"url(#"+id1+")"} strokeWidth="10px"/>
                        <path className="cls-2"
                            d="M682,469.7a37.6944,37.6944,0,0,0-8.1048-11.9911,36.7634,36.7634,0,0,0-24.3146-10.278H526.3871a28.7961,28.7961,0,0,1-16.21-10.2781c-7.35-9.3491-6.666-20.0937-6.4839-22.2691V281.2691a34.4,34.4,0,0,0-8.1048-13.7041A31.7227,31.7227,0,0,0,481,259" transform="translate(-322.6175 -117.3238)"
                             fill="none" stroke={"url(#"+id2+")"} strokeWidth="10px"/>
                        
                        {/* <path
                            d="M464,284.5726V465.7H646.6a32.3342,32.3342,0,0,0-7.3629-10.3081c-8.5-7.9293-18.8007-8.72-22.0887-8.8354H505.2323a26.4788,26.4788,0,0,1-14.7258-8.8355,26.8625,26.8625,0,0,1-5.89-19.1436V303.7161A29.07,29.07,0,0,0,464,284.5726Z"
                            transform="translate(-343 -181)" fill="white" stroke="red" strokeWidth="2px"/> */}
                    </svg>
                </a>
            </div>
            <div className="title">
                <div className="lichal">
                    <label>Lichal</label>
                </div>
                <div className="corp">
                    <label>Corporation</label>
                </div>
            </div>
            
        {/* <button onClick={runThis}>Click Me</button> */}
        </div>
     );
}
 
export default LogoOriginal;