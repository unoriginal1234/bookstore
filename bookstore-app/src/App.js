import { useState } from "react"
import Header from "./components/Header"
import StoryPresent from "./components/StoryPresent"
import StoryData from "./data/StoryData"
import AdventureButton from "./components/AdventureButton"

function App() {
    const [stories, setStories] = useState(StoryData)

    var [present, setPresent] = useState('Room One')

    var [story, setStory] = useState(stories.find(story => story.id === present))

    const handleClick1 = () => {
        // console.log(story.nextid1)
        //Need to get the information from the button
        setPresent(present = story.nextid1)
        setStory(stories.find(story => story.id === present))
        
    }

    const handleClick2 = () => {
        // console.log(story.nextid2)
        setPresent(present = story.nextid2)
        setStory(stories.find(story => story.id === present))
    }
    
    return (
        <>
            <Header />
            <div className="container">
                <StoryPresent story={story}/>
                <AdventureButton button1={story.nextid1} button2={story.nextid2} handleClick1={handleClick1} handleClick2={handleClick2}/>
            </div>
        </>
    )
}

export default App