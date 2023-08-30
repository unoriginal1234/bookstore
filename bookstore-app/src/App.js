import { useState } from "react"
import Header from "./components/Header"
import StoryPresent from "./components/StoryPresent"
import StoryData from "./data/StoryData"
import AdventureButton from "./components/AdventureButton"

function App() {
    const [stories, setStories] = useState(StoryData)

    var [present, setPresent] = useState('Room One')

    var [story, setStory] = useState(stories.find(story => story.id === present))

    const handleClick = (e) => {
        // console.log(story.nextid1)
        // I want to know what button is being pressed
        // Now I'm going to want to loop through the adventure data instead of this if statement
        let nextid = e.target.id;
        console.log(nextid)
        setPresent(present = nextid)
        setStory(stories.find(story => story.id === present))
    }

    return (
        <>
            <Header />
            <div className="container">
                <StoryPresent story={story}/>
                <AdventureButton buttons={story.next} handleClick={handleClick}/>
            </div>
        </>
    )
}

export default App