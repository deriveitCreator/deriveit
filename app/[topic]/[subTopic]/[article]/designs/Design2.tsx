"use client"

import { mainTextFont, headingFont, printFont2 } from "@/app/infoStore/fonts";
import { LegacyRef, createContext, useContext, useEffect, useRef, useState, memo, useReducer, MutableRefObject, Suspense } from "react";
import { citationList } from '@/app/infoStore/sourcesForCitation';
import ImageWrapper from '@/app/components/ImageWrapper';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import StyleSelectionBox from "@/app/components/StyleSelectionBox";
import Link from "next/link";
import FormBox from "@/app/components/formBox";
import { IconContext } from "react-icons";
import { FaChevronLeft, FaChevronRight, FaPaintbrush } from "react-icons/fa6";
import { allTopics } from "@/app/infoStore/topicsInfo";
import { FaHome } from "react-icons/fa";
import Script from "next/script";

var FontSizeContext = createContext({h3:"", main: "", quote: ""});

export default function Design2(props: {topic: string, subTopic: string, article: string}){
  const [fontSize,setFS] = useState({h3:"text-4xl", main: "text-3xl", quote: "text-[28px]"});
  const [headerVal, setHV] = useState<string>("");
  const jsonForBody: MutableRefObject<any> = useRef(null);
  const [bodyVal, setBV] = useState<React.JSX.Element[] | null>(null);
  const [showDB, changeSDB] = useState(false);
  const [ExtraInfoBoxStates, changeEIBS] = useState<{text:string,posX:number,posY:number,visibility:"hidden"|"visible"}>({text:"",posX:0,posY:0,visibility:"hidden"})

  useEffect(()=>{
    if(bodyVal){
        document.querySelectorAll("[data-title]").forEach((el)=>{
            el.addEventListener("mouseenter",(event)=>{
                //@ts-ignore
                changeEIBS({text: el.getAttribute("data-title")!,posX: event.clientX - 20,posY: event.clientY + 20,visibility:"visible"});
            });
            el.addEventListener("mouseleave",()=>{changeEIBS({text: "",posX: 0,posY: 0,visibility:"hidden"});});
        });
        var ads = document.getElementsByClassName('adsbygoogle').length;
        for (var i = 0; i < ads; i++) {
          try {
            //@ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {}
        }
    }
    else if(headerVal !== "") {
      let j = jsonForBody.current!;
      let bodyChildren = [];
      for(let i = 1; i<j.length; i++){
        switch(j[i][0]){
          case "h3":
            bodyChildren.push(<H3Main key={i}>{j[i][1]}</H3Main>);
            break;
          case "pmain":
            bodyChildren.push(<PMain mode={1} key={i}>{j[i][1] }</PMain>);
            break;
          case "pmain2":
            bodyChildren.push(<PMain mode={2} key={i}>{j[i][1] }</PMain>);
            break;
          case "subText":
            bodyChildren.push(<PMain mode={3} key={i}>{j[i][1] }</PMain>);
            break;
          case "figure":
            bodyChildren.push(<ImageWrapper
              key={i}
              alt=""
              h =' h-[240px]'
              className={' flex flex-col items-center justify-center my-4 font-bold '+mainTextFont.className}
              src={`/${props.topic}/${props.subTopic}/${j[i][1][0]}`}
              figcaption ={j[i][1][1]}
            />);
            break;
          case ("displayimg"):
            bodyChildren.push(<ImageWrapper
              key={i}
              alt=""
              h =' h-[200px]'
              className=' flex items-center justify-center my-4 font-bold '
              src={`/${props.topic}/${props.subTopic}/${j[i][1]}`}
            />);
            break;
          case ("displayimg2"):
            bodyChildren.push(<ImageWrapper
              key={i}
              alt=""
              h =' h-[220px]'
              className=' flex items-center justify-center my-4 '
              src={`/${props.topic}/${props.subTopic}/${j[i][1]}`}
            />);
            break;
          case "displayFormula":
            bodyChildren.push(<div
              key={i}
              className={' text-xl grid h-[150px] items-center justify-items-center'}
              style={{gridTemplateColumns:"auto 80% auto"}}
            ><span></span><div className={' bg-white px-1 overflow-x-auto h-min w-min'}>
              <Latex strict>{j[i][1]}</Latex>
            </div><span></span></div>);
            break;
          case "ol":
            bodyChildren.push(<ListComp numbered={true} key={i} content={j[i][1]}/>);
            break;
          case "ul":
            bodyChildren.push(<ListComp numbered={false} key={i} content={j[i][1]}/>);
            break;
          case "source_format":
            bodyChildren.push(<SourcesSectionInner key={i} content={j[i][1]}/>);
            break;
          default:
            bodyChildren.push(<p className={'bg-red-950 text-xl w-full text-center text-red-600'} key={i}>There was a problem rendering this.<br/>Please screenshot and report this.</p>);
        }
      }
      setBV(bodyChildren);
    }
    else{
      document.documentElement.style.overflowY = "scroll";
      fetch("../../../infoStore/getArticleContent", {
        method:"POST",
        cache: "no-cache",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({topic: props.topic, subTopic: props.subTopic, article: props.article})
      }).then( res =>{ res.json().then(j=>{
        jsonForBody.current = j;
        setHV(j[0][1]);
      })})
    }
  },[headerVal, bodyVal]); // eslint-disable-line no-use-before-define

  return <FontSizeContext.Provider value={fontSize}>
    <ArticleHeader text={headerVal}/>
    <MainPart content={bodyVal!}/>
    <ExtraInfoBox text={ExtraInfoBoxStates.text} pos={{X:ExtraInfoBoxStates.posX, Y:ExtraInfoBoxStates.posY}} visibility={ExtraInfoBoxStates.visibility}/>
    <SideOption/>
    <StyleSelectionBox showDB={showDB} changeSDB={changeSDB}/>
    {/*@ts-ignore*/}
    <div align="center"><ins className="adsbygoogle"
        style={{display:"block",maxWidth:"95%",maxHeight:"150px",marginTop:"20px",marginBottom:"20px"}}
        data-ad-client="ca-pub-4860967711062471"
        data-ad-slot="1515076236"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins></div>
    <FooterEl/>
  </FontSizeContext.Provider>
}

const ArticleHeader = memo(function ArticleHeaderMemo(props: {text: string}){
  const animationState = useRef("");
  
  if(props.text !== "") animationState.current = "animate-[becomeBlack_0.5s_ease-out_0.5s_forwards]";
  return <header className=' w-full border-black border-b-4 mb-8 min-h-[84px] flex items-center justify-center'><h1 className={`${headingFont.className} text-center text-4xl leading-[50px] px-8 text-white font-bold ${animationState.current}`} dangerouslySetInnerHTML={{__html: props.text.replaceAll("&amp;","&")}} /></header>
});

const MainPart = memo(function MainPartMemo(props: {content: JSX.Element[]}){
  const [op,setOp] = useState(0);

  useEffect(()=>{
    if(props.content){
      //@ts-ignore
      window.MathJax.typeset();
      setOp(1);
    }
  },[props.content])
  let content = props.content;
  return <main className={`px-7 grow mb-10 `} style={{opacity:op,transition:"opacity 0.5s ease-out 0.1s"}}>{content}</main>
})

function H3Main({children}: {children: string}){
  const FontSizeContextVal = useContext(FontSizeContext);
  return <h3 className={FontSizeContextVal.h3 + ' underline font-bold mb-4 ' + headingFont.className} dangerouslySetInnerHTML={{__html: children}}></h3>
}

function PMain({children, mode}: {children: string, mode:number}){
  const FontSizeContextVal = useContext(FontSizeContext);

  if(mode === 1) return <p className={`pmain ${mainTextFont.className} mb-4 ${FontSizeContextVal.main} leading-8 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-7 mx-2 [&>sup]:text-[60%] [&>sup]:font-bold oldstyle-nums`} dangerouslySetInnerHTML={{__html: children}}></p>
  if(mode === 2) return <p className={`pmain2 ${mainTextFont.className} mb-4 ${FontSizeContextVal.main} leading-8 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-7 mx-8 [&>sup]:text-[60%] [&>sup]:font-bold oldstyle-nums [&>[data-title]]:underline [&>[data-title]]:decoration-dashed [&>[data-title]]:cursor-help`} dangerouslySetInnerHTML={{__html: children}}></p>
  if(mode === 3) return <p className={`subText ${mainTextFont.className} mb-4 ${FontSizeContextVal.quote} leading-7 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-6 mx-16 [&>sup]:text-[60%] text-zinc-700 oldstyle-nums`} dangerouslySetInnerHTML={{__html: children}}></p>
}

function ExtraInfoBox(props:{text:string, pos:{X:number, Y:number}, visibility: "hidden" | "visible"}){
    return <div className={mainTextFont.className + " bg-zinc-400 border-2 border-dashed border-black fixed text-xl font-bold p-1 max-w-sm"} style={{top:props.pos.Y,left:props.pos.X, visibility: props.visibility}} dangerouslySetInnerHTML={{__html: props.text}}></div>
}

function ListComp(props:{numbered: boolean, content:string}){
  const fontSizeContextVal = useContext(FontSizeContext);
  if(props.numbered) return <ol className={`${mainTextFont.className} list-decimal mx-20 mb-4 leading-8 ${fontSizeContextVal.quote}`} dangerouslySetInnerHTML={{__html: props.content}}></ol>
  else return <ul className={`${mainTextFont.className} list-decimal mx-20 mb-4 leading-8 ${fontSizeContextVal.quote}`} dangerouslySetInnerHTML={{__html: props.content}}></ul>
}

function SourcesSectionInner(props: {content: string[]}){
  return <section>
    <hr className=' mt-8 border-black border' style={{transform:"skewX(40deg)"}}/>
    <h3 className={' text-4xl underline font-bold '+headingFont.className}>Sources:</h3>
    <ol id='source_format' className={`${printFont2.className} list-decimal text-xl mx-8`}>{(props.content).map((stuff:any, i:number)=>{
      return <LiForSources key={i}>{stuff}</LiForSources>;
    })}</ol>
  </section>
}

function LiForSources(props: {children: string}){
  const refConst: LegacyRef<HTMLLIElement>|null = useRef(null);
  const [htmlVar, changeHTML] = useState(props.children);
  
  useEffect(()=>{
    let thisEl = refConst.current!.children[0];
    //@ts-ignore
    if(thisEl.tagName ==="CITE") changeHTML(citationList[thisEl.attributes.classname.textContent]);
  },[]);
  
  return <li ref={refConst} dangerouslySetInnerHTML={{__html: htmlVar}}></li>;
}

function SideOption(){
    const [asideW, setAW] = useState("0px");
    const grayAreaOp = useRef("opacity-0");
    const iconRef = useRef(<FaChevronLeft/>);
    const iconRightRef = useRef("0");
    const [sideOpDis, changeSOD] = useState("hidden");

    useEffect(()=>{
        if(asideW==="0px") window.setTimeout(()=>{
            iconRef.current = <FaChevronLeft/>;
            changeSOD("hidden");
        },450);
    }, [asideW])

    function turnOffAside(){
        document.documentElement.style.overflowY = "auto";
        document.documentElement.classList.remove("scroll2");
        iconRightRef.current = "0";
        grayAreaOp.current = "opacity-0";
        setAW("0px");
    }

    function turnOnAside(){
        document.documentElement.style.overflowY = "hidden";
        document.documentElement.classList.add("scroll2");
        iconRightRef.current = "240px";
        iconRef.current = <FaChevronRight/>;
        grayAreaOp.current = "opacity-50";
        changeSOD("block");
        setAW("240px");
    }

    return  <>
        <div onClick={()=>{asideW==="0px"?turnOnAside():turnOffAside()}} className="fixed top-28 cursor-pointer" style={{backgroundColor: "#BB5500",borderColor: "#663300",borderWidth: "5px",borderStyle: "solid", borderRightStyle:"none", borderRadius:"10px 0px 0px 10px", color: "#FFDD77",right:iconRightRef.current,zIndex:"10",transition:"right 0.4s"}}><IconContext.Provider value={{style:{height:"45px",margin:"0px 10px",fontWeight:"bold"}}}>{iconRef.current}</IconContext.Provider></div>
        <div className={`${sideOpDis} fixed h-full w-full grid top-0 right-0`} style={{gridTemplateColumns:`auto ${asideW}`,transition:"0.4s"}}>
            <div className={` bg-zinc-700 ${grayAreaOp.current} transition-all`} onClick={turnOffAside}></div>
            <aside className={"overflow-y-scroll"} style={{
                backgroundColor: "#BB5500",
                borderLeftColor: "#663300",
                borderLeftWidth: "5px",
                borderLeftStyle: "solid",
                position:"relative"
            }}>
                <div style={{
                    borderRightColor: "#663300",
                    borderRightWidth: "5px",
                    borderRightStyle: "solid",
                    padding:"1px 0px"
                }}>
                    <div className="flex flex-row justify-evenly mt-4">
                        <Link href={"/"}><IconContext.Provider value={{style:{color:"#FFDD77",border:"solid 4px #663300",borderRadius:"8px",height:"50px",width:"50px",padding:"4px",backgroundColor:"#c60"}}}><FaHome/></IconContext.Provider></Link>
                        <BrushButton/>
                    </div>
                    {allTopics.map((record, i)=>{
                        if(record.name === "Uncategorized") return null;
                        return <Link key={i} href={`/${record.name.replaceAll(" ","_").toLowerCase()}`}><ImageWrapper className="mx-6 my-4 hover:transform hover:scale-105" src={`/topicsPics/${record.name.replaceAll(" ","_").toLowerCase()}.png`} w="w-full"/></Link>
                    })}
                </div>
            </aside>
        </div>
    </>
}

function BrushButton(){
    const [showDB, changeSDB] = useState(false);

    function iconClicked(){
        changeSDB(true);
    }
    
    return <>
        <button onClick={iconClicked}><IconContext.Provider value={{style:{color:"#FFDD77",border:"solid 4px #663300",borderRadius:"8px",height:"50px",width:"50px",padding:"4px",backgroundColor:"#c60"}}}><FaPaintbrush/></IconContext.Provider></button>
        <Suspense><StyleSelectionBox showDB={showDB} changeSDB={changeSDB}/></Suspense>
    </>
}

const footerIdStyle = {
	display:"grid",
	gridTemplateColumns:"140px auto",
  margin:"0px 15px 0px 0px",
}

function FooterEl(){
    const [footerState, changeFS] = useState(false);
    const phpLocation = useRef("");
    const formType = useRef(0);
    
    function dispatch(arg0: {type: string}){
      arg0.type==="SHOW_FORM_BOX"? changeFS(true):changeFS(false);
    }

    function showForm(type: number){
        phpLocation.current = window.location.origin+"/infoStore/sendEmail";
        formType.current = type;
        dispatch({type: "SHOW_FORM_BOX"});
    }

    return <div className={printFont2.className+' pb-5 font-bold'}>
        <hr style={{backgroundColor:"black", height:"4px", border:"none"}}/>
        <footer>
            <div style={footerIdStyle}>
                <Link href="/" >
                    <ImageWrapper className=' mx-4 my-4 ' src="/link_logo_trans2.png" alt="" />
                </Link>
                <div style={{border:`solid black 3px`, marginTop:"10px", display:"flex",flexDirection:"row",justifyContent:"space-between", height:"min-content"}}>
                    <p style={{paddingLeft:"10px"}}>
                        If you find a bug in this website or want to report an error, <ClickButton type={0} func={showForm} /><br/>
                        If there are any equations for which you want proof for, <ClickButton type={1} func={showForm} /><br/>
                        For any suggestion and ideas, <ClickButton type={2} func={showForm} />
                    </p>
                    <Link href="https://www.paypal.com/donate/?business=8UEU66XK9RMKG&no_recurring=1&currency_code=CAD" style={{display:"flex",flexDirection:"column",justifyContent:"center",padding:"0px 25px"}} target="_blank">
                        <p className={" text-center font-bold text-sm "}>Want To Donate?</p>
                        <ImageWrapper className='flex justify-center ' mw="max-w-[70%]" h="h-6" src="/payPal.png" alt="" />
                    </Link>
                </div>
                <Suspense fallback={<></>}><FormBox showFB={footerState} reducerDis={dispatch} type={formType.current} actionLoc={phpLocation.current}/></Suspense>
            </div>
        </footer>
    </div>
}

function ClickButton(props: {type: number, func: (arg0: number) => void}){
    return <button onClick={()=>{props.func(props.type)}} className=' hover:underline outline-none'>click here</button>
}