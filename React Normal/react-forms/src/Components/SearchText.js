import React,{useState} from "react";

function SearchTexts (){
    const [searchText,setSearchText] = useState("")

    const handleKeyPress = (e) =>{
        if(e.key === "Enter"){
            handleSubmit()
        }else{
            console.log(`Key pressed : ${e.key}`);
        }
    }

    const handleSubmit = () =>{
        console.log(`Text searched: ${searchText}`);
    }

    return (
        <div>
            <label><h3>Search text</h3></label>
            <input 
            type="text"
            value={searchText}
            placeholder="Search text"
            onKeyPress={handleKeyPress}
            onChange={(e)=>setSearchText(e.target.value)}
            />

            <button onClick={handleSubmit} type="submit">Submit</button>
        </div>
    )

}

export default SearchTexts;