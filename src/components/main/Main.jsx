import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from "remark-gfm"; // GitHub Flavored Markdown (for tables, strikethrough, etc.)
import rehypePrism from "rehype-prism-plus";



const Main = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
    console.log(resultData)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt=" User icon" />
        </div>
        <div className="main-container">
            {!showResult?
            <>
            <div className="greet">
                <p><span>Hello, Dev</span></p>
                <p>How can i help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summerize this concept:urban planing</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstrom team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>improve the readability of the folowing code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>:
            <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?
                    <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>:
   <ReactMarkdown
   remarkPlugins={[remarkGfm]}
   rehypePlugins={[rehypeRaw, rehypePrism]}
   components={{
     // You can customize specific elements further if needed
     h1: ({ node, ...props }) => <h1 {...props} />,
     h2: ({ node, ...props }) => <h2 {...props} />,
     code: ({ node, inline, className, children, ...props }) => {
       const match = /language-(\w+)/.exec(className || '');
       return !inline ? (
         <pre>
           <code className={className} {...props}>
             {children}
           </code>
         </pre>
       ) : (
         <code className={className} {...props}>
           {children}
         </code>
       );
     }
   }}
 >
   {resultData}
 </ReactMarkdown>
    }
                </div>
            </div> 

            }
            
            <div className="main-bottom"> 
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text"placeholder='Enter promt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                   
                        <img src={assets.mic_icon} alt="" />
                    
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may inacurate info including about people, so double check 
its  responses.               </p>
            </div>
        </div>
      
    </div>
  )
}

export default Main
