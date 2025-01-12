"use client"

import { chalkWriting, textMain, cursiveMain } from "@/app/infoStore/fonts";
import { IconContext } from "react-icons";
import { FaPaintbrush } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { annotate } from 'rough-notation';
import { Ref, createContext, useContext, useEffect, useRef, useState, Component, memo, createRef, RefObject, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { citationList } from '@/app/infoStore/sourcesForCitation';
import StyleSelectionBox from "@/app/components/StyleSelectionBox";
import styles from "./design1.module.scss";
import React from "react";
import Image from 'next/image';

var FontSizeContext = createContext({h2: "", main: "", quote: ""});

interface infoBoxType {
  text: string;
  posX: number;
  posY: number;
  visibility: "hidden" | "visible";
};

export default function Main(props: {topic: string, subTopic: string, contentArray: [[string, any]]}){
  const [fontSize, setFS] = useState({h2:"", main: "", quote: ""});
  const [boxStates, changeBS] = useState<infoBoxType>({text:"", posX:0, posY:0, visibility:"hidden"});
  const blackboardOrAd = useRef<null|string>(null);
  const mainEl: RefObject<HTMLElement | null> = useRef(null);
  const [firstRender, updateFR] = useState(true);

  useEffect(()=>{
    if(firstRender){
      if(screen.width > parseInt(styles.maxMobileWidth))
        blackboardOrAd.current = "blackboard";
      else blackboardOrAd.current = "ad";
      updateFR(false);
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
      //set fontsize
      if(screen.width > parseInt(styles.maxMobileWidth))
        setFS({h2:"text-4xl", main: "text-[28px]", quote: "text-2xl"});
      else setFS({h2:"text-3xl", main: "text-2xl", quote: "text-xl"});
    }
  }, [firstRender]); // eslint-disable-line

  useEffect(()=>{
    if (!firstRender){
      //@ts-ignore
      window.MathJax.typeset();
      //add hover func to data titles (if desktop) 
      if(screen.width > parseInt(styles.maxMobileWidth))
        document.querySelectorAll("[data-title]").forEach((el)=>{
          el.addEventListener("mouseenter",()=>{
            changeBS({
              text: el.getAttribute("data-title")!,
              posX: el.getBoundingClientRect().x - 20,
              posY: el.getBoundingClientRect().y + 50,
              visibility:"visible"
            });
          });
          el.addEventListener("mouseleave",()=>{changeBS({text: "",posX: 0,posY: 0,visibility:"hidden"})});
        });
    }
  }, [fontSize]); // eslint-disable-line

  let blackboardOrAdResult = <></>;
  if (blackboardOrAd.current === "blackboard") 
    blackboardOrAdResult = <SideBlackBoard fontSizeMain={fontSize.main} setFS={setFS}/>;
  else if (blackboardOrAd.current === "ad")
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

  return <FontSizeContext.Provider value={fontSize}>
    <main id={styles.main} ref={mainEl} style={{opacity: blackboardOrAd.current?"1":"0"}}>
      <Article topic={props.topic} subTopic={props.subTopic} contentArray={props.contentArray}/>
      {blackboardOrAd.current==="blackboard" ? <ExtraInfoBox boxStates={boxStates} changeBS={changeBS}/> : null}
      {blackboardOrAdResult}
    </main>
  </FontSizeContext.Provider>;
}

const Article = memo(function ArticleMemo(props: {topic:string, subTopic:string, contentArray: [[string, any]]}){
  return <article id={styles.article}>{
    props.contentArray.map((record, i)=>{
      if (i) return getBodyContent(props.topic, props.subTopic, record[0], record[1], i);
      else return null;
    })
  }</article>;
});

function getBodyContent(topic:string, subTopic:string, type: string, content: any, i: number){
  switch(type){
    case "h2":
      return (<H2Main key={i}>{content}</H2Main>);
    case "pmain":
      return (<PMain mode={1} key={i}>{content }</PMain>);
    case "pmain2":
      return (<PMain mode={2} key={i}>{content }</PMain>);
    case "subText":
      return (<PMain mode={3} key={i}>{content }</PMain>);
    case "figure":
      return (<Figure src={`/${topic}/${subTopic}/${content[0]}`} figcaption={content[1]} key={i}/>);
    case ("displayimg"):
      return <DisplayImg src={`/${topic}/${subTopic}/${content}`} maxH={"max-h-[150px]"} key={i}/>;
    case ("displayimg2"):
      return <DisplayImg src={`/${topic}/${subTopic}/${content}`} maxH={"max-h-[220px]"} key={i}/>;
    case "displayFormula":
      return (<div
        key={i}
        className={' text-xl grid min-h-[200px] items-center justify-items-center'}
        style={{gridTemplateColumns:"auto 90% auto"}}
      >
        <span></span>
        <div
          className={' border-black border-2 bg-white px-1 overflow-x-auto overflow-y-hidden h-min max-w-min w-full'} suppressHydrationWarning
        >{content}</div>
        <span></span>
      </div>);
    case "ol":
      return <ol key={i} className={`${textMain.className} list-decimal text-2xl mx-12 mb-3`} dangerouslySetInnerHTML={{__html: content}}></ol>;
    case "ul":
      return <ul key={i} className={`${textMain.className} list-none text-2xl mx-12 mb-3`} dangerouslySetInnerHTML={{__html: content}}></ul>;
    case "source_format":
      return <section key={i}>
      <hr className=' mt-8 border-black border' style={{transform:"skewX(40deg)"}}/>
      <h3 className={`underline text-3xl ${cursiveMain.className}`}>Sources:</h3>
      <div style={{overflowX:"auto"}}>
        <ol id='source_format' className={`${textMain.className} list-decimal text-xl mx-6`}>{content.map((stuff:any, i:number)=>{
          return <LiForSources key={i}>{stuff}</LiForSources>;
        })}</ol>
      </div>
    </section>;
    default:
      return (<p className={'bg-red-950 text-xl w-full text-center text-red-600'} key={i}>There was a problem rendering this.<br/>Please screenshot and report this.</p>);
  }
}

function DisplayImg(props:{src: string, maxH: string}){
	const [divW,setDivW] = useState("w-0");

	useEffect(()=>{
		setDivW("w-auto");
	}, []);

  return <div className={`flex items-center justify-center my-4 ${divW} m-auto px-6 min-h-fit relative`} style={{transition:"width 0.5s linear 1s"}}>
    <Image alt={""} src={props.src} width={0} height={0} sizes="100vw" className={`border-black border-2 object-contain ${props.maxH} bg-white w-auto`}/>
  </div>;
}

function Figure(props:{src: string, figcaption: any}){
	const [divW,setDivW] = useState("w-0");

	useEffect(()=>{
		setDivW("w-full");
	}, []);

  return <figure className={`flex flex-col items-center justify-center my-4 ${cursiveMain.className} ${divW} h-auto m-auto overflow-hidden`} style={{transition:"width 0.5s linear 1s"}}>
    <Image alt={""} src={props.src} width={0} height={0} sizes="100vw" className={`w-auto h-[240px] border-black border-2 object-contain bg-white`}/>
  <figcaption className=' text-lg w-4/5 text-center ' dangerouslySetInnerHTML={{__html: props.figcaption}}></figcaption>
</figure>;
}

function H2Main({children}: {children: string}){
  const FontSizeContextVal = useContext(FontSizeContext);
  return <h2 className={FontSizeContextVal.h2 + ' underline leading-relaxed ' + cursiveMain.className} dangerouslySetInnerHTML={{__html: children}}></h2>
}

function PMain({children, mode}: {children: string, mode:number}){
  const fontSizeContextVal = useContext(FontSizeContext);
  
  let curStyle;
  let commonStyle = "mb-3 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>sup]:text-[60%] oldstyle-nums";
  switch(mode){
    case 1: curStyle = `pmain ${commonStyle} ${textMain.className} ${fontSizeContextVal.main}  leading-8 [&>.overLine]:leading-7 mx-1`; break;
    case 2: curStyle = `pmain2 ${commonStyle} ${textMain.className} ${fontSizeContextVal.main}  leading-8 [&>.overLine]:leading-7 mx-4 `; break;
    case 3: curStyle = `subText ${commonStyle} ${textMain.className} ${fontSizeContextVal.quote} leading-7 [&>.overLine]:leading-6 mx-9  text-zinc-700`; break;
    default: alert(`There is an error, please leave this page and report this:\n"PMain (Design1) mode ${mode} reached!"`);
  }
  return <p className={curStyle} dangerouslySetInnerHTML={{__html: children}}></p>;
}

function LiForSources(props: {children: string}){
  const refConst: Ref<HTMLLIElement>|null = useRef(null);
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
  homeIcon: RefObject<HTMLAnchorElement | null>;
  brushIcon: RefObject<HTMLButtonElement | null>;
  topicLink: RefObject<HTMLDivElement | null>;
  DecFontSizeEl: RefObject<HTMLButtonElement | null>;
  IncFontSizeEl: RefObject<HTMLButtonElement | null>;
  aboveAdSpacing: RefObject<HTMLParagraphElement | null>;
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
        &nbsp;Other Articles
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

function BrushPaint(props: {brushRef: RefObject<HTMLButtonElement | null>}){
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

const ExtraInfoBox = memo(function ExtraInfoBoxMemo(props:{boxStates: infoBoxType, changeBS: Dispatch<SetStateAction<infoBoxType>>}){
  return <div
    className={`${textMain.className} bg-zinc-400 border-2 border-dashed border-black fixed text-2xl font-bold p-2 max-w-sm z-10`}
    style={{top: props.boxStates.posY, left: props.boxStates.posX, visibility: props.boxStates.visibility}}
    dangerouslySetInnerHTML={{__html: props.boxStates.text}}
    onMouseLeave={()=> props.changeBS({text: "", posX: 0, posY: 0, visibility:"hidden"})}
  ></div>
});