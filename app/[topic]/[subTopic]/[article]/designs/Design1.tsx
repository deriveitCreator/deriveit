"use client"

import { chalkWriting, textMain, cursiveMain } from "@/app/infoStore/fonts";
import { IconContext } from "react-icons";
import { FaPaintbrush } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { annotate } from 'rough-notation';
import { LegacyRef, createContext, useContext, useEffect, useRef, useState, Component, memo, createRef, useReducer, RefObject, Dispatch, SetStateAction, Ref, MutableRefObject } from "react";
import Link from "next/link";
import { citationList } from '@/app/infoStore/sourcesForCitation';
import ImageWrapper from '@/app/components/ImageWrapper';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import StyleSelectionBox from "@/app/components/StyleSelectionBox";

type d1sType = {
  showDialogBox: boolean
}

const design1States: d1sType = {
  showDialogBox: false
}

const reducer = (state: d1sType, action: {type:string, payload?:string}) => {
  switch (action.type) {
      case "SHOW_DIALOG_BOX":
          return {...state, showDialogBox: true};
      case "HIDE_DIALOG_BOX":
          return {...state, showDialogBox: false};
      default:
          return state;
  }
}

var FontSizeContext = createContext({h3:"text-4xl", main: "text-[28px]", quote: "text-2xl"});

export default function Design1(props: {topic: string, subTopic: string, article: string}){
  const [fontSize,setFS] = useState({h3:"text-4xl", main: "text-[28px]", quote: "text-2xl"});
  const [headerVal, setHV] = useState<string>("");
  const jsonForBody: MutableRefObject<any> = useRef(null);
  const [bodyVal, setBV] = useState<React.JSX.Element[] | null>(null);
  const [d1s, dispatch]: [d1sType, any] = useReducer(reducer, design1States);

  useEffect(()=>{
    if(headerVal !== "") {
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
              className={' flex flex-col items-center justify-center my-4 '+cursiveMain.className}
              bor="border-black border-2"
              animate={true}
              src={`/${props.topic}/${props.subTopic}/${j[i][1][0]}`}
              figcaption ={j[i][1][1]}
            />);
            break;
          case ("displayimg"):
            bodyChildren.push(<ImageWrapper
              key={i}
              alt=""
              h =' h-[200px]'
              className=' flex items-center justify-center my-4 '
              bor="border-black border-2"
              animate={true}
              src={`/${props.topic}/${props.subTopic}/${j[i][1]}`}
            />);
            break;
          case ("displayimg2"):
            bodyChildren.push(<ImageWrapper
              key={i}
              alt=""
              h =' h-[220px]'
              className=' flex items-center justify-center my-4 '
              bor="border-black border-2"
              animate={true}
              src={`/${props.topic}/${props.subTopic}/${j[i][1]}`}
            />);
            break;
          case "displayFormula":
            bodyChildren.push(<div
              key={i}
              className={' text-xl grid h-[200px] items-center justify-items-center'}
              style={{gridTemplateColumns:"auto 80% auto"}}
            ><span></span><div className={' border-black border-2 bg-white px-1 overflow-x-auto h-min w-min'}>
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
  },[headerVal]); // eslint-disable-line no-use-before-define

  return <FontSizeContext.Provider value={fontSize}>
    <ArticleHeader text={headerVal}/>
    <div style={{display:"flex",width:"100%" , marginBottom:"40px",minHeight:"100vh"}}>
      <MainPart content={bodyVal!}/>
      <SBBMemo fontSizeMain={fontSize.main} setFS={setFS} dispatchFunc={dispatch}/>
    </div>
    <StyleSelectionBox showDB={d1s.showDialogBox} reducerDis={dispatch}/>
  </FontSizeContext.Provider>
}

const ArticleHeader = memo(function ArticleHeaderMemo(props: {text: string}){
  const animationState = useRef("");
  
  if(props.text !== "") animationState.current = "animate-[becomeBlack_0.5s_ease-out_0.5s_forwards]";
  return <header className='border-t-4 w-full border-gray-600 bg-gray-100 border-b-4 mb-8 min-h-[84px] flex items-center justify-center'><h1 className={`${cursiveMain.className} text-center text-4xl leading-[50px] px-8 text-gray-100 ${animationState.current}`} dangerouslySetInnerHTML={{__html: props.text.replaceAll("&amp;","&")}} /></header>
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
  return <main className={`px-7 grow `} style={{opacity:op,transition:"opacity 0.5s ease-out 0.1s"}}>{content}</main>
})

function H3Main({children}: {children: string}){
  const FontSizeContextVal = useContext(FontSizeContext);
  return <h3 className={FontSizeContextVal.h3 + ' underline ' + cursiveMain.className} dangerouslySetInnerHTML={{__html: children}}></h3>
}

function PMain({children, mode}: {children: string, mode:number}){
  const FontSizeContextVal = useContext(FontSizeContext);

  if(mode === 1) return <p className={`pmain ${textMain.className} mb-3 ${FontSizeContextVal.main} leading-8 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-7 mx-1 [&>sup]:text-[60%] oldstyle-nums`} dangerouslySetInnerHTML={{__html: children}}></p>
  if(mode === 2) return <p className={`pmain2 ${textMain.className} mb-3 ${FontSizeContextVal.main} leading-8 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-7 mx-4 [&>sup]:text-[60%] oldstyle-nums`} dangerouslySetInnerHTML={{__html: children}}></p>
  if(mode === 3) return <p className={`subText ${textMain.className} mb-3 ${FontSizeContextVal.quote} leading-7 text-zinc-700 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-6 mx-9 [&>sup]:text-[60%] oldstyle-nums`} dangerouslySetInnerHTML={{__html: children}}></p>
}

function ListComp(props:{numbered: boolean, content:string}){
  if(props.numbered) return <ol className={`${textMain.className} list-decimal text-2xl mx-12 mb-3`} dangerouslySetInnerHTML={{__html: props.content}}></ol>
  else return <ul className={`${textMain.className} list-decimal text-2xl mx-12 mb-3`} dangerouslySetInnerHTML={{__html: props.content}}></ul>
}

function SourcesSectionInner(props: {content: string[]}){
  return <section>
    <hr className=' mt-8 border-black border' style={{transform:"skewX(40deg)"}}/>
    <h3 className={' text-4xl underline '+cursiveMain.className}>Sources:</h3>
    <ol id='source_format' className={`${textMain.className} list-decimal text-xl mx-6`}>{(props.content).map((stuff:any, i:number)=>{
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
}
type setFSType = Dispatch<SetStateAction<{h3: string;main: string;quote: string;}>>;
interface BBProps {fontSizeMain:string, setFS: setFSType, dispatchFunc:Dispatch<{type: string;payload?: string | undefined;}>};
class SideBlackBoard extends Component<BBProps, {op: string}>{
  homeIcon: RefObject<HTMLAnchorElement>;
  brushIcon: RefObject<HTMLButtonElement>;
  topicLink: RefObject<HTMLDivElement>;
  DecFontSizeEl: RefObject<HTMLButtonElement>;
  IncFontSizeEl: RefObject<HTMLButtonElement>;
  adEl: RefObject<HTMLParagraphElement>;
  fontSizeMain: string;
  setFS: any;
  dispatchFunc: any;

  constructor(props: BBProps){
    super(props);
    this.homeIcon = createRef();
    this.brushIcon = createRef();
    this.topicLink = createRef();
    this.DecFontSizeEl = createRef();
    this.IncFontSizeEl = createRef();
    this.adEl = createRef();
    this.fontSizeMain = this.props.fontSizeMain;
    this.setFS = props.setFS;
    this.dispatchFunc = this.props.dispatchFunc;
  }
  
  shouldComponentUpdate(nextProps: BBProps, nextState: {op: string}) {
    this.fontSizeMain = nextProps.fontSizeMain;
    return this.state.op !== nextState.op;
  }

  //font sizes for main text in order: text-3xl, text-2xl, text-[28px]
  //font sizes for quote text in order: text-2xl, text-[28px], text-xl
  decFS(curFS: string, setFSFunc: setFSType){
    if(curFS === "text-3xl") setFSFunc({h3:"text-4xl", main: "text-[28px]", quote: "text-2xl"});
    else setFSFunc({h3:"text-3xl", main: "text-2xl", quote: "text-xl"});
  }

  incFS(curFS: string, setFSFunc: setFSType){
    if(curFS === "text-2xl") setFSFunc({h3:"text-4xl", main: "text-[28px]", quote: "text-2xl"});
    else setFSFunc({h3:"text-5xl", main: "text-3xl", quote: "text-[28px]"});
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
        <button ref={this.brushIcon} className=" cursor-pointer hover:no-underline" onClick={()=>{this.dispatchFunc({type:"SHOW_DIALOG_BOX"})}}>
          <IconContext.Provider value={{style:{height:"32px",width:"100%",padding:"4px"}}}>
            <FaPaintbrush/>
          </IconContext.Provider>
        </button>
      </div>
      <div className=" w-10/12 mx-auto h-0 mt-1" ref={this.topicLink}>&nbsp;</div>
      <Link className=" text-center text-xl pb-4 pt-1 cursor-pointer block hover:no-underline " href="./../">
        <IconContext.Provider value={{style:{display:"inline",height:"25px"}}}>
          <FaLongArrowAltLeft/>
        </IconContext.Provider>
        &nbsp;Topic Page
      </Link>
      <p className=" w-full text-center text-xl pb-2">
        <button onClick={()=>this.decFS(this.fontSizeMain, this.setFS)} ref={this.DecFontSizeEl }>-</button>
        &nbsp;&nbsp;Font Size&nbsp;&nbsp;
        <button onClick={()=>this.incFS(this.fontSizeMain, this.setFS)} ref={this.IncFontSizeEl }>+</button>
      </p>
      <p className=" w-11/12 mx-auto h-0" ref={this.adEl}>&nbsp;</p>
      <p className=" text-center text-xl">Advertisement:</p>
    </div>
    <div className=" border-2 border-dashed border-zinc-300 m-2 flex-auto overflow-hidden">{this.getBlackBoardContent()}</div>
    </aside>;
  }

  componentDidMount(){
    window.setTimeout(()=>{
      let commonSettings = {color: "#bbb", animationDuration:500, strokeWidth: 2};
      try{
        annotate(this.homeIcon.current! , {...commonSettings, type: "box", padding:2}).show();
        annotate(this.brushIcon.current! , {...commonSettings, type: "box", padding:2}).show();
        annotate(this.topicLink.current! ,{...commonSettings, type:"underline", padding:32}).show();
        annotate(this.adEl.current! , {...commonSettings, type: "underline", padding:28}).show();
        annotate(this.DecFontSizeEl.current! , {...commonSettings, type: "circle", padding:[0,5], iterations: 1}).show();
        annotate(this.IncFontSizeEl.current! , {...commonSettings, type: "circle", padding:[0,5], iterations: 1}).show();
      }
      catch{}
    }, 600);
  };

}

const SBBMemo = memo(SideBlackBoard);