import { useState } from "react"
import Header from "./components/Header"
import StoryPresent from "./components/StoryPresent"
import StoryData from "./data/StoryData"
import AdventureButton from "./components/AdventureButton"

function App() {

    // var [haveBook, setHaveBook] = useState(false)

    // Can setHaveBook in the user submit form

    // var [book, setBook] = useState('')

    // setBook(book = 'whatever is submitted' useState(haveBook = true))

    const [stories, setStories] = useState(StoryData)

    var [present, setPresent] = useState('Play Again')

    var [story, setStory] = useState(stories.find(story => story.id === present))

    const handleClick = (e) => {
        let nextid = e.target.id;
        // console.log(nextid)
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