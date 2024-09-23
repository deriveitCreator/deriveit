"use client"

import { chalkWriting, textMain, cursiveMain } from "@/app/infoStore/fonts";
import { IconContext } from "react-icons";
import { FaPaintbrush } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { annotate } from 'rough-notation';
import { LegacyRef, createContext, useContext, useEffect, useRef, useState, Component, memo, createRef, RefObject, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { citationList } from '@/app/infoStore/sourcesForCitation';
import ImageWrapper from '@/app/components/ImageWrapper';
import StyleSelectionBox from "@/app/components/StyleSelectionBox";
import styles from "./design1.module.scss";

var FontSizeContext = createContext({h2: "", main: "", quote: ""});

interface infoBoxType {
  text: string;
  posX: number;
  posY: number;
  visibility: "hidden" | "visible";
};

export default function Design1(props: {topic:string, subTopic:string, contentArray: [[string, any]]}){
  const [fontSize, setFS] = useState({h2:"", main: "", quote: ""});
  const [blackboardOrAd, setBBOrAd] = useState("");
  const responsiveStyleRef = useRef("flex");
  const [ExtraInfoBoxStates, changeEIBS] = useState<infoBoxType>({text:"", posX:0, posY:0, visibility:"hidden"});
  const mainEl: RefObject<HTMLElement> = useRef(null);

  useEffect(()=>{
    if(blackboardOrAd === ""){
      //add scroll and background color
      document.documentElement.style.overflowY = "scroll";
      document.documentElement.style.backgroundColor = "rgb(249 250 251)";
      //blackboard stuff (or ad instead of the blackboard section for mobile)
      if(screen.width > parseInt(styles.minDeviceWidth)) {
        setBBOrAd("blackboard");
        setFS({h2:"text-4xl", main: "text-[28px]", quote: "text-2xl"});
      }
      else{
        //variable stores ad section instead of blackboard
        responsiveStyleRef.current = "block";
        setBBOrAd("ad");
        setFS({h2:"text-3xl", main: "text-2xl", quote: "text-xl"});
      }
    }
    else{
      //Prevent Google Ad script from changing element height
      let elToObserve = mainEl.current!;
      const observer = new MutationObserver(() => {elToObserve.style.minHeight = '100vh'});
      observer.observe(elToObserve, {
        attributes: true,
        attributeFilter: ['style']
      });
      //ad stuff
      var ads = document.getElementsByClassName('adsbygoogle').length;
      for (var i = 0; i < ads; i++) {
        try {
          //@ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {}
      }
      //[data-title] stuff (only for desktop)
      document.querySelectorAll("[data-title]").forEach( (el) => {
        addEventForDataTitle(el, changeEIBS);
      });
    }
  }, [blackboardOrAd]);

  let blackboardOrAdResult = <></>;
  if (blackboardOrAd === "blackboard") {
    blackboardOrAdResult = <SideBlackBoard fontSizeMain={fontSize.main} setFS={setFS}/>
  }
  else if (blackboardOrAd === "ad") {
    blackboardOrAdResult = <section>
      {/*@ts-ignore*/}
      <div id={styles.adBelowArticle} align="center"><ins
        className="adsbygoogle"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-4860967711062471"
        data-ad-slot="6823528647"
      ></ins></div>
    </section>;
  }

  return <FontSizeContext.Provider value={fontSize}>
    <main style={{display: responsiveStyleRef.current}} id={styles.main} ref={mainEl}>
      <Article content={getBodyContent(props.topic, props.subTopic, props.contentArray)}/>
      <ExtraInfoBox
        text={ExtraInfoBoxStates.text}
        pos={{X:ExtraInfoBoxStates.posX, Y:ExtraInfoBoxStates.posY}}
        visibility={ExtraInfoBoxStates.visibility}
        supportedFunc={changeEIBS}
      />
      {blackboardOrAdResult}
    </main>
  </FontSizeContext.Provider>
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
          className={' flex flex-col items-center justify-center my-4 '+cursiveMain.className}
          bor="border-black border-2"
          animate={true}
          src={`/${topic}/${subTopic}/${j[i][1][0]}`}
          figcaption ={j[i][1][1]}
        />);
        break;
      case ("displayimg"):
        bodyChildren.push(<ImageWrapper
          key={i}
          alt=""
          h = {screen.width > parseInt(styles.minDeviceWidth) ? ' max-h-[200px]': ' max-h-[150px]'}
          className=' flex items-center justify-center my-4 '
          bor="border-black border-2"
          animate={true}
          src={`/${topic}/${subTopic}/${j[i][1]}`}
        />);
        break;
      case ("displayimg2"):
        bodyChildren.push(<ImageWrapper
          key={i}
          alt=""
          h = {screen.width > parseInt(styles.minDeviceWidth) ? ' h-[220px]': ' h-[150px]'}
          className=' flex items-center justify-center my-4 '
          bor="border-black border-2"
          animate={true}
          src={`/${topic}/${subTopic}/${j[i][1]}`}
        />);
        break;
      case "displayFormula":
        bodyChildren.push(<div
          key={i}
          className={' text-xl grid min-h-[200px] items-center justify-items-center'}
          style={{gridTemplateColumns:"auto 90% auto"}}
        ><span></span><div className={' border-black border-2 bg-white px-1 overflow-x-auto h-min max-w-min w-full'}>
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

const Article = memo(function ArticleMemo(props: {content: JSX.Element[]}){
  const [firsTime,setFT] = useState(true);

  useEffect(()=>{
    if(firsTime) setFT(false);
    else {
      //@ts-ignore
      window.MathJax.typeset();
    }
  },[firsTime]);

  let paddingLevel = "px-3";
  if ((!firsTime) && (screen.width > parseInt(styles.minDeviceWidth))) {
    paddingLevel = "px-7 grow";
  }
  return <article className={`${paddingLevel}`} id={styles.article}>{props.content}</article>;
})

function H2Main({children}: {children: string}){
  const FontSizeContextVal = useContext(FontSizeContext);
  return <h2 className={FontSizeContextVal.h2 + ' underline leading-relaxed ' + cursiveMain.className} dangerouslySetInnerHTML={{__html: children}}></h2>
}

function PMain({children, mode}: {children: string, mode:number}){
  const fontSizeContextVal = useContext(FontSizeContext);
  
  let curStyle;
  switch(mode){
    case 1: curStyle = `pmain   ${textMain.className} mb-3 ${fontSizeContextVal.main}  leading-8 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-7 mx-1 [&>sup]:text-[60%] oldstyle-nums`; break;
    case 2: curStyle = `pmain2  ${textMain.className} mb-3 ${fontSizeContextVal.main}  leading-8 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-7 mx-4 [&>sup]:text-[60%] oldstyle-nums [&>[data-title]]:underline [&>[data-title]]:decoration-dashed [&>[data-title]]:cursor-help`; break;
    case 3: curStyle = `subText ${textMain.className} mb-3 ${fontSizeContextVal.quote} leading-7 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-6 mx-9 [&>sup]:text-[60%] oldstyle-nums text-zinc-700 `; break;
    default: alert(`There is an error, please leave this page and report this:\n"PMain (Design1) mode ${mode} reached!"`);
  }
  return <p className={curStyle} dangerouslySetInnerHTML={{__html: children}}></p>;
}

function addEventForDataTitle(el: Element, supportedFunc: Dispatch<SetStateAction<infoBoxType>>){
  el.addEventListener("mouseenter", ()=>{
    supportedFunc({
      text: el.getAttribute("data-title")!,
      posX: el.getBoundingClientRect().x - 20,
      posY: el.getBoundingClientRect().y + 50, 
      visibility:"visible"
    });
  });
  el.addEventListener("mouseleave",()=>{
    supportedFunc({text: "", posX: 0, posY: 0, visibility:"hidden"});
  });
}

function ListComp(props:{numbered: boolean, content:string}){
  if(props.numbered) return <ol className={`${textMain.className} list-decimal  text-2xl mx-12 mb-3`} dangerouslySetInnerHTML={{__html: props.content}}></ol>
  else               return <ul className={`${textMain.className} list-none     text-2xl mx-12 mb-3`} dangerouslySetInnerHTML={{__html: props.content}}></ul>
}

function SourcesSectionInner(props: {content: string[]}){
  return <section>
    <hr className=' mt-8 border-black border' style={{transform:"skewX(40deg)"}}/>
    <h3 className={`underline text-3xl ${cursiveMain.className}`}>Sources:</h3>
    <div style={{overflowX:"auto"}}>
      <ol id='source_format' className={`${textMain.className} list-decimal text-xl mx-6`}>{(props.content).map((stuff:any, i:number)=>{
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

const asideStyle = {
  width: "180px",
  minWidth: "180px",
  backgroundColor: "#333",
  border: "#bda27e solid 5px",
  boxShadow:"0px 0px 0px 2px #c2a782, 0px 0px 0px 4px #a58e6f, 3px 4px 8px 5px rgba(0, 0, 0, 0.5), 1px 1px 8px 1px rgb(15, 13, 13) inset",
  color: "#bbb",
  display: "flex",
  flexFlow: "column",
  flexGrow: "0",
  padding:"10px 0px",
  margin:"0px 12px",
  fontWeight: "bold"
}
type setFSType = Dispatch<SetStateAction<{h2: string;main: string;quote: string;}>>;
interface BBProps {fontSizeMain:string, setFS: setFSType};
class SideBlackBoard extends Component<BBProps, {op: string}>{
  homeIcon: RefObject<HTMLAnchorElement>;
  brushIcon: RefObject<HTMLButtonElement>;
  topicLink: RefObject<HTMLDivElement>;
  DecFontSizeEl: RefObject<HTMLButtonElement>;
  IncFontSizeEl: RefObject<HTMLButtonElement>;
  aboveAdSpacing: RefObject<HTMLParagraphElement>;
  fontSizeMain: string;
  setFS: any;

  constructor(props: BBProps){
    super(props);
    this.homeIcon = createRef();
    this.brushIcon = createRef();
    this.topicLink = createRef();
    this.DecFontSizeEl = createRef();
    this.IncFontSizeEl = createRef();
    this.aboveAdSpacing = createRef();
    this.fontSizeMain = this.props.fontSizeMain;
    this.setFS = props.setFS;
  }

  shouldComponentUpdate(nextProps: BBProps) {
    this.fontSizeMain = nextProps.fontSizeMain;
    return false;
  }

  //font sizes for H3 in order:         text-5xl,     text-4xl,     text-3xl
  //font sizes for main text in order:  text-3xl,     text-[28px],  text-2xl
  //font sizes for quote text in order: text-[28px],  text-2xl,     text-xl
  //2nd column is default
  decFS(mainFS: string, setFSFunc: setFSType){
    if(mainFS === "text-[28px]") setFSFunc({h2:"text-3xl", main: "text-2xl", quote: "text-xl"});
    else if (mainFS === "text-3xl") setFSFunc({h2:"text-4xl", main: "text-[28px]", quote: "text-2xl"});
  }

  incFS(mainFS: string, setFSFunc: setFSType){
    if(mainFS === "text-2xl") setFSFunc({h2:"text-4xl", main: "text-[28px]", quote: "text-2xl"});
    else if (mainFS === "text-[28px]") setFSFunc({h2:"text-5xl", main: "text-3xl", quote: "text-[28px]"});
  }

  getBlackBoardContent(){
    switch(Math.floor(Math.random() * 3)){
      case 1:
        return <p className=" text-lg rotate-45 mt-20 -mx-3 ">
          <span className=" text-left ">Ad Missing...</span>
            <br/>
          <span className=" text-right inline float-right" >hmm... adblock?</span>
        </p>;
      case 2:
        return <p className=" text-xl mt-20 rotate-45">
          <span>cool people</span>
            <br/>
          <span className=" text-center w-full inline-block">{"don't use"}</span>
            <br/>
          <span className=" text-right w-full inline-block">adblock!</span>
        </p>;
      default:
        return <p className=" mt-20 ">
          <span className=" rotate-45 block" >
            <span>THERE IS</span><br/>
            <span className=" text-center w-full inline-block">SUPPOSE TO BE</span><br/>
            <span className=" text-right w-full inline-block" >AN AD HERE!!!</span>
          </span><br/><br/>
          <span className=" text-lg text-center w-full inline-block">{"don't worry,  "}</span><br/>
          <span  className=" text-lg text-center w-full inline-block">{"  I'm not mad"}</span>
        </p>;
    };
  }

  render(){
    return <aside style={asideStyle} className={chalkWriting.className}>
    <div className="relative mb-2">
      <div style={{display:"inline-grid",gridTemplateColumns:"50% 50%",justifyItems: "center",alignItems:"center",width:"100%",marginTop:"10px"}}>
        <Link ref={this.homeIcon} className=" cursor-pointer hover:no-underline" href="/">
          <IconContext.Provider value={{style:{height:"32px",width:"100%",padding:"2px"}}}>
            <TiHome/>
          </IconContext.Provider>
        </Link>
        <BrushPaint brushRef={this.brushIcon}/>
      </div>
      <div className=" w-10/12 mx-auto h-0 mt-1" ref={this.topicLink}>&nbsp;</div>
      <Link className=" text-center text-xl pb-4 pt-1 cursor-pointer block hover:no-underline " href="./../">
        <IconContext.Provider value={{style:{display:"inline",height:"25px"}}}>
          <FaLongArrowAltLeft/>
        </IconContext.Provider>
        &nbsp;Topics Page
      </Link>
      <p className=" w-full text-center text-xl pb-2">
        <button onClick={()=>this.decFS(this.fontSizeMain, this.setFS)} ref={this.DecFontSizeEl }>-</button>
        &nbsp;&nbsp;Font Size&nbsp;&nbsp;
        <button onClick={()=>this.incFS(this.fontSizeMain, this.setFS)} ref={this.IncFontSizeEl }>+</button>
      </p>
      <p className=" w-11/12 mx-auto h-0" ref={this.aboveAdSpacing}>&nbsp;</p>
      <p className=" text-center text-xl">Advertisement:</p>
    </div>
    <div id={styles.adInBlackBloard}>
      <div id={styles.blackBoardDiv} className=" border-2 border-dashed border-zinc-300 m-2 flex-auto">{this.getBlackBoardContent()}</div>
      {/*@ts-ignore*/}
      <div align="center" style={{marginTop:"10px", marginBottom:"10px", flex:"auto"}}><ins
        className="adsbygoogle"
        style={{width:"160px",display:"block"}}
        data-ad-client="ca-pub-4860967711062471"
        data-ad-slot="1515076236"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins></div>
    </div>

    </aside>;
  }

  componentDidMount(){
    window.setTimeout(()=>{
      let commonSettings = {color: "#bbb", animationDuration:500, strokeWidth: 2};
      try{
        annotate(this.homeIcon.current! , {...commonSettings, type: "box", padding:2}).show();
        annotate(this.brushIcon.current! , {...commonSettings, type: "box", padding:2}).show();
        annotate(this.topicLink.current! ,{...commonSettings, type:"underline", padding:32}).show();
        annotate(this.aboveAdSpacing.current! , {...commonSettings, type: "underline", padding:28}).show();
        annotate(this.DecFontSizeEl.current! , {...commonSettings, type: "circle", padding:[0,5], iterations: 1}).show();
        annotate(this.IncFontSizeEl.current! , {...commonSettings, type: "circle", padding:[0,5], iterations: 1}).show();
      }
      catch{}
    }, 600);
  };

}

function BrushPaint(props: {brushRef: RefObject<HTMLButtonElement>}){
  const [showDB, changeSDB] = useState(false);

  function iconClicked(){
    changeSDB(true);
  }

  return  <>
    <button ref={props.brushRef} className=" cursor-pointer hover:no-underline" onClick={iconClicked}>
      <IconContext.Provider value={{style:{height:"32px",width:"100%",padding:"4px"}}}>
        <FaPaintbrush/>
      </IconContext.Provider>
    </button>
    {showDB ? <StyleSelectionBox showDB={showDB} changeSDB={changeSDB}/> : null}
  </>
}

function ExtraInfoBox(props:{
  text:string,
  pos:{X:number, Y:number},
  visibility: "hidden" | "visible",
  supportedFunc: Dispatch<SetStateAction<infoBoxType>>
}){
  return <div
    className={textMain.className + " bg-zinc-400 border-2 border-dashed border-black fixed text-2xl font-bold p-2 max-w-sm z-10 "}
    style={{top:props.pos.Y, left:props.pos.X, visibility: props.visibility}}
    dangerouslySetInnerHTML={{__html: props.text}}
    onMouseLeave={()=> props.supportedFunc({text: "", posX: 0, posY: 0, visibility:"hidden"})}
  ></div>
}