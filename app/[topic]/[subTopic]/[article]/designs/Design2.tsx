"use client"

import { mainTextFont, headingFont, printFont2 } from "@/app/infoStore/fonts";
import { LegacyRef, createContext, useContext, useEffect, useRef, useState, memo, Suspense, Dispatch, SetStateAction, useMemo } from "react";
import { citationList } from '@/app/infoStore/sourcesForCitation';
import ImageWrapper from '@/app/components/ImageWrapper';
import StyleSelectionBox from "@/app/components/StyleSelectionBox";
import Link from "next/link";
import FormBox from "@/app/components/FormBox";
import { IconContext } from "react-icons";
import { FaChevronLeft, FaChevronRight, FaPaintbrush } from "react-icons/fa6";
import { allTopics } from "@/app/infoStore/topicsInfo";
import { FaHome } from "react-icons/fa";
import styles from "./design2.module.scss";
import { link } from "@/app/infoStore/paypalLink";

var FontSizeContext = createContext({h2:"", main: "", quote: ""});

export default function Design2(props: {topic:string, subTopic:string, contentArray: [[string, any]]}){
  const [fontSize,setFS] = useState({h2:"text-4xl", main: "text-3xl", quote: "text-[28px]"});
  const [showDB, changeSDB] = useState(false);
  const [ExtraInfoBoxStates, changeEIBS] = useState<{text:string,posX:number,posY:number,visibility:"hidden"|"visible"}>({text:"",posX:0,posY:0,visibility:"hidden"})
  const [asideW, setAW] = useState("0px");

  useEffect(()=>{
    //ad stuff
    var ads = document.getElementsByClassName('adsbygoogle').length;
    for (var i = 0; i < ads; i++) {
      try {
        //@ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }
    //set style directly
    document.documentElement.style.overflowY = "scroll";
    document.documentElement.style.backgroundColor = "white";
    //check mobile (else set [data-title] on desktop)
    if (screen.width < parseInt(styles.minDeviceWidth)) setFS({h2:"text-3xl", main: "text-[28px]", quote: "text-2xl"});
    else document.querySelectorAll("[data-title]").forEach((el)=>{
      el.addEventListener("mouseenter",()=>{
        changeEIBS({
          text: el.getAttribute("data-title")!,
          posX: el.getBoundingClientRect().x - 20,
          posY: el.getBoundingClientRect().y + 50,
          visibility:"visible"
        });
      });
      el.addEventListener("mouseleave",()=>{changeEIBS({text: "",posX: 0,posY: 0,visibility:"hidden"})});
    });
    return ()=>{
			document.documentElement.classList.remove("scroll2"); //incase exiting via side bar links
    }
  },[]); // eslint-disable-line no-use-before-define

  return <FontSizeContext.Provider value={fontSize}>
    <ArticleHeader text={props.contentArray[0][1]}/>
    <MainPart content={getBodyContent(props.topic, props.subTopic, props.contentArray)}/>
    <ExtraInfoBox 
      text={ExtraInfoBoxStates.text}
      pos={{X:ExtraInfoBoxStates.posX, Y:ExtraInfoBoxStates.posY}}
      visibility={ExtraInfoBoxStates.visibility}
    />
    <SideOption asideW={asideW} setAW={setAW}/>
    <StyleSelectionBox showDB={showDB} changeSDB={changeSDB}/>
    <section style={{display:((asideW=="0px"))?"block":"none"}}>
      {/*@ts-ignore*/}
      <div id={styles.idDiv} align="center"><ins
        className="adsbygoogle"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-4860967711062471"
        data-ad-slot="6823528647"
      ></ins></div>
    </section>
    <FooterEl/>
  </FontSizeContext.Provider>;
}

function getBodyContent(topic:string, subTopic:string, j: [[string, any]]){
  let bodyChildren = [];
  for(let i = 1; i<j.length; i++){
    switch(j[i][0]){
      case "h2":
        bodyChildren.push(<H2Main key={i}>{j[i][1]}</H2Main>);
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
          src={`/${topic}/${subTopic}/${j[i][1][0]}`}
          figcaption ={j[i][1][1]}
        />);
        break;
      case ("displayimg"):
        bodyChildren.push(<ImageWrapper
          key={i}
          alt=""
          h = {screen.width > parseInt(styles.minDeviceWidth) ? ' max-h-[200px]': ' max-h-[150px]'}
          className=' flex items-center justify-center my-4 font-bold '
          src={`/${topic}/${subTopic}/${j[i][1]}`}
        />);
        break;
      case ("displayimg2"):
        bodyChildren.push(<ImageWrapper
          key={i}
          alt=""
          h = {screen.width > parseInt(styles.minDeviceWidth) ? ' h-[220px]': ' h-[150px]'}
          className=' flex items-center justify-center my-4 '
          src={`/${topic}/${subTopic}/${j[i][1]}`}
        />);
        break;
      case "displayFormula":
        bodyChildren.push(<div
          key={i}
          className={' text-xl grid min-h-[150px] items-center justify-items-center '}
          style={{gridTemplateColumns:"auto auto auto"}}
        ><span></span><div className={' bg-white px-1 overflow-x-auto h-min w-11/12 '}>
          {j[i][1]}
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
  return bodyChildren;
}

const ArticleHeader = memo(function ArticleHeaderMemo(props: {text: string}){
  const animationState = useRef("");
  
  var responsiveStyle = "text-4xl px-8";
  if(props.text !== "") {
    animationState.current = "animate-[becomeBlack_0.5s_ease-out_0.5s_forwards]";
    if(screen.width < parseInt(styles.minDeviceWidth)) responsiveStyle = "text-3xl px-2";
  }
  return <header className=' w-full border-black border-b-4 mb-8 min-h-[84px] flex items-center justify-center'>
    <h1 className={`${headingFont.className} text-center leading-[50px] text-white font-bold ${animationState.current} ${responsiveStyle}`} dangerouslySetInnerHTML={{__html: props.text.replaceAll("&amp;","&")}} />
  </header>
});

const MainPart = memo(function MainPartMemo(props: {content: (JSX.Element[] | null)}){
  const [firsTime,setFT] = useState(true);

  useEffect(()=>{
    if(firsTime) setFT(false);
    else {
      //@ts-ignore
      window.MathJax.typeset();
    }
  },[firsTime]);

  let paddingLevel = "px-2";
  if ((!firsTime) && (screen.width > parseInt(styles.minDeviceWidth))) {
    paddingLevel = "px-7 grow";
  }
  return <main className={`mb-10 ${paddingLevel}`}>{props.content}</main>;
});

function H2Main({children}: {children: string}){
  const FontSizeContextVal = useContext(FontSizeContext);
  return <h2 className={FontSizeContextVal.h2 + ' underline font-bold mb-4 ' + headingFont.className} dangerouslySetInnerHTML={{__html: children}}></h2>
}

function PMain({children, mode}: {children: string, mode:number}){
  const FontSizeContextVal = useContext(FontSizeContext);

  var responsiveStyle = ["mx-1","mx-4","mx-6"];
  if (screen.width > parseInt(styles.minDeviceWidth)) {
    responsiveStyle = ["mx-2","mx-8 [&>[data-title]]:underline [&>[data-title]]:decoration-dashed [&>[data-title]]:cursor-help","mx-16"];
  }

  if(mode === 1)      return <p className={`pmain   ${mainTextFont.className} mb-4 ${FontSizeContextVal.main}  leading-8 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-7 [&>a]:text-[#24e] [&>a]:underline [&>sup]:text-[60%] [&>sup]:font-bold oldstyle-nums ${responsiveStyle[0]}`} dangerouslySetInnerHTML={{__html: children}}></p>
  else if(mode === 2) return <p className={`pmain2  ${mainTextFont.className} mb-4 ${FontSizeContextVal.main}  leading-8 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-7 [&>a]:text-[#24e] [&>a]:underline [&>sup]:text-[60%] [&>sup]:font-bold oldstyle-nums ${responsiveStyle[1]}`} dangerouslySetInnerHTML={{__html: children}}></p>
  else if(mode === 3) return <p className={`subText ${mainTextFont.className} mb-4 ${FontSizeContextVal.quote} leading-7 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-6 [&>a]:text-[#24e] [&>a]:underline [&>sup]:text-[60%] text-zinc-700   oldstyle-nums ${responsiveStyle[2]}`} dangerouslySetInnerHTML={{__html: children}}></p>
  else {
    alert(`There is an error, please leave this page and report this:\n"PMain (Design1) mode ${mode} reached!"`);
    return null;
  }
}

function ExtraInfoBox(props:{text:string, pos:{X:number, Y:number}, visibility: "hidden" | "visible"}){
    return <div className={mainTextFont.className + " bg-zinc-400 border-2 border-dashed border-black fixed text-xl font-bold p-1 max-w-sm"} style={{top:props.pos.Y,left:props.pos.X, visibility: props.visibility}} dangerouslySetInnerHTML={{__html: props.text}}></div>
}

function ListComp(props:{numbered: boolean, content:string}){
  const fontSizeContextVal = useContext(FontSizeContext);

  var responsiveStyle = "mx-20"
  if (screen.width < parseInt(styles.minDeviceWidth)) responsiveStyle = "mx-10";
  if(props.numbered) return <ol className={`${mainTextFont.className} list-decimal mb-4 leading-8 ${fontSizeContextVal.quote} ${responsiveStyle}`} dangerouslySetInnerHTML={{__html: props.content}}></ol>
  else               return <ul className={`${mainTextFont.className} list-disc    mb-4 leading-8 ${fontSizeContextVal.quote} ${responsiveStyle}`} dangerouslySetInnerHTML={{__html: props.content}}></ul>
}

function SourcesSectionInner(props: {content: string[]}){
  return <section>
    <hr className=' mt-8 border-black border' style={{transform:"skewX(40deg)"}}/>
    <h3 className={' text-4xl underline font-bold '+headingFont.className}>Sources:</h3>
    <div style={{overflowX:"auto"}}>
      <ol id='source_format' className={`${printFont2.className} list-decimal text-xl mx-8`}>{(props.content).map((stuff:any, i:number)=>{
        return <LiForSources key={i}>{stuff}</LiForSources>;
      })}</ol>
    </div>
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

function SideOption(props: {asideW: string, setAW: Dispatch<SetStateAction<string>>}){
  const grayAreaOp = useRef("opacity-0");
  const iconRef = useRef(<FaChevronLeft/>);
  const iconRightRef = useRef("0");
  const [sideOpDis, changeSOD] = useState("hidden");

  useEffect(()=>{
    if(props.asideW==="0px") window.setTimeout(()=>{
      iconRef.current = <FaChevronLeft/>;
      changeSOD("hidden");
    },450);
  }, [props.asideW]); // eslint-disable-line no-use-before-define

  function turnOffAside(){
    document.documentElement.style.overflowY = "auto";
    document.documentElement.style.overflowX = "auto";
    document.documentElement.classList.remove("scroll2");
    iconRightRef.current = "0";
    grayAreaOp.current = "opacity-0";
    props.setAW("0px");
  }

  function turnOnAside(){
    document.documentElement.style.overflowY = "hidden";
    document.documentElement.style.overflowX = "hidden";
    document.documentElement.classList.add("scroll2");
    iconRightRef.current = "240px";
    iconRef.current = <FaChevronRight/>;
    grayAreaOp.current = "opacity-50";
    changeSOD("block");
    props.setAW("240px");
  }

  return  <>
    <div onClick={()=>{props.asideW==="0px"?turnOnAside():turnOffAside()}} className="fixed top-28 cursor-pointer" style={{backgroundColor: "#BB5500",borderColor: "#663300",borderWidth: "5px",borderStyle: "solid", borderRightStyle:"none", borderRadius:"10px 0px 0px 10px", color: "#FFDD77",right:iconRightRef.current,zIndex:"10",transition:"right 0.4s"}}><IconContext.Provider value={{style:{height:"45px",margin:"0px 10px",fontWeight:"bold"}}}>{iconRef.current}</IconContext.Provider></div>
    <div className={`${sideOpDis} fixed h-full w-full grid top-0 right-0`} style={{gridTemplateColumns:`auto ${props.asideW}`,transition:"0.4s"}}>
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
            if(record.name === "Error") return null;
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

function FooterEl(){
  const [firstTime, setFT] = useState(true);
	const [footerState, changeFS] = useState(false);
	const formType = useRef(0);

  useEffect(()=>{
    setFT(false);
  },[])
		
	function dispatch(arg0: {type: string}){
			arg0.type==="SHOW_FORM_BOX"? changeFS(true):changeFS(false);
	}

	function showForm(type: number){
			formType.current = type;
			dispatch({type: "SHOW_FORM_BOX"});
	}

  if(!firstTime){
    return <div className={printFont2.className+' font-bold'}>
      <footer>
      {
        screen.width > parseInt(styles.minDeviceWidth) ?
        <>
          <hr style={{backgroundColor:"black", height:"4px", border:"none"}}/>
          <div style={{display:"grid",gridTemplateColumns:"140px auto",margin:"0px 15px 0px 20px"}}>
            <Link href="/" >
                <ImageWrapper className=' mx-4 my-4 ' src="/link_logo_trans2.png" alt="" />
            </Link>
            <div style={{border:`solid black 3px`, marginTop:"10px", display:"flex",flexDirection:"row",justifyContent:"space-between", height:"min-content"}}>
              <p style={{paddingLeft:"10px"}}>
                  If you find a bug in this website or want to report an error, <ClickButton type={0} func={showForm} /><br/>
                  If there are any equations for which you want proof for, <ClickButton type={1} func={showForm} /><br/>
                  For any suggestion and ideas, <ClickButton type={2} func={showForm} />
              </p>
              <Link href={link} style={{display:"flex",flexDirection:"column",justifyContent:"center",padding:"0px 25px"}} target="_blank">
                  <p className={" text-center font-bold text-sm "}>Want To Donate?</p>
                  <ImageWrapper className='flex justify-center ' mw="max-w-[70%]" h="h-6" src="/payPal.png" alt="" />
              </Link>
            </div>
            <Suspense fallback={<></>}><FormBox showFB={footerState} reducerDis={dispatch} type={formType.current}/></Suspense>
          </div>
        </>:
        <div style={{ borderTop:`solid black 3px`,marginTop:"10px",letterSpacing:"-1px"}}>
          <div style={{height:"min-content"}}>
            <p style={{paddingLeft:"10px", paddingBottom:"4px"}}>
                If you find a bug in this website or want to report an error, <ClickButton type={0} func={showForm} /><br/>
                If there are any equations for which you want proof for, <ClickButton type={1} func={showForm} /><br/>
                For any suggestion and ideas, <ClickButton type={2} func={showForm} />
            </p>
            <div style={{display:"grid", gridTemplateColumns:"100px 150px", justifyContent:"space-evenly"}}>
              <Link href="/" >
                  <ImageWrapper className=' mx-1 my-5 ' src="/link_logo_trans2.png" alt="" />
              </Link>
              <Link href={link} style={{display:"flex",flexDirection:"column",justifyContent:"center"}} target="_blank">
                <p className={" text-center font-bold text-sm "}>Want To Donate?</p>
                <ImageWrapper className='flex justify-center ' mw="max-w-[70%]" h="h-6" src="/payPal.png" alt="" />
              </Link>
            </div>
          </div>
          <Suspense fallback={<></>}><FormBox showFB={footerState} reducerDis={dispatch} type={formType.current}/></Suspense>
        </div>
      }
      </footer>
    </div>
  }
  else return null;
}

function ClickButton(props: {type: number, func: (arg0: number) => void}){
    return <button onClick={()=>{props.func(props.type)}} className=' hover:underline outline-none'>click here</button>
}