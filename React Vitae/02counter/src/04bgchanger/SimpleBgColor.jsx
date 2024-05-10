import React,{useState} from 'react'

function SimpleBgColor() {
    const [color,setColor] = useState('pink')

    const changeColor = (color) =>{
        setColor(color)
    }
    return (
        <>
            <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
                <footer>
                <button onClick={()=>changeColor('red')} style={{backgroundColor:'red',borderRadius:10, display:'flex', margin: 0 , padding:2 ,justifyContent:'center'}}>Red</button>
                </footer>
                    <footer>
                    <button onClick={()=>changeColor('green')} style={{backgroundColor:'green', borderRadius:10, display:'flex',margin: 0 , padding:2 ,bottom:15,right:0}}>Green</button>
                    </footer>
                    <footer>
                    <button onClick={()=>changeColor('blue')} style={{backgroundColor:'blue',borderRadius:10, display:'flex',margin: 0 , padding:2 }}>Blue</button>
                    </footer>
                    <footer>
                    <button onClick={()=>changeColor('yellow')} style={{backgroundColor:'yellow',borderRadius:10, display:'flex',margin: 0 , padding:2 }}>Yellow</button>
                    </footer>
                    <footer>
                    <button onClick={()=>changeColor('purple')} style={{backgroundColor:'purple',borderRadius:10, display:'flex',margin: 0 , padding:2 }}>Purple</button>
                    </footer>
                    <footer>
                    <button onClick={()=>changeColor('orange')} style={{backgroundColor:'orange',borderRadius:10, display:'flex',margin: 0 , padding:2 }}>Orange</button>
                    </footer>
                   <footer>
                   <button onClick={()=>changeColor('brown')} style={{backgroundColor:'brown',borderRadius:10, display:'flex',margin: 0 , padding:2 }}>Brown</button>
                   </footer>
                    <footer>
                    <button onClick={()=>changeColor('gray')} style={{backgroundColor:'gray',borderRadius:10, display:'flex',margin: 0 , padding:2 }}>Gray</button>
                </footer>
            </div>
        </>
    )
    // return (
    //     <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
    //     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    //       <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
    //         <button
    //         onClick={() => changeColor('red')}
    //         className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
    //         style={{backgroundColor: 'red'}}
    //         >Red</button>
    //         <button
    //         onClick={() => changeColor('green')}
    //         className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
    //         style={{backgroundColor: 'green'}}
    //         >Green</button>
            
    //         </div>
    //     </div>
    //   </div>
    // )
    
}

export default SimpleBgColor;
