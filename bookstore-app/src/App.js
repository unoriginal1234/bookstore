import { useState } from "react"
import Header from "./components/Header"
import StoryPresent from "./components/StoryPresent"
import StoryData from "./data/StoryData"
import AdventureButton from "./components/AdventureButton"

function App() {
    const [story, setStory] = useState(StoryData)

    var [index, setIndex] = useState(0)

    const handleClick = () => {
        setIndex(index => index + 1)
    }
    
    return (
        <>
            <Header />
            <div className="container">
                <StoryPresent story={story} index={index}/>
                <AdventureButton handleClick={handleClick}/>
            </div>
        </>
    )
}

export default App