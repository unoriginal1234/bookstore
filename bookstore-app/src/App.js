import { useState } from "react"
import Header from "./components/Header"
import StoryPresent from "./components/StoryPresent"
import StoryData from "./data/StoryData"
import AdventureButton from "./components/AdventureButton"
import BookForm from "./components/BookForm"

function App() {

    const [stories, setStories] = useState(StoryData)

    var [present, setPresent] = useState('Play Again')

    var [story, setStory] = useState(stories.find(story => story.id === present))

    var [hasBook, setHasBook] = useState(false)

    const handleClick = (e) => {
        let nextid = e.target.id;
        // console.log(nextid)
        setPresent(present = nextid)
        setStory(stories.find(story => story.id === present))
    }

    const addStory = (newStory) => {
        newStory.id = "You Found It"
        newStory.text = "You found " + newStory.text + "! It's a book about being a dang freak."
        console.log(newStory)
        newStory.next = ['Play Again']
        setStories([...stories, newStory])
        setHasBook (hasBook = true)
        console.log(hasBook)
    }

    if (hasBook === false) {
        return (
            <>
            <Header />
            <div className="container">
                <BookForm handleAdd ={addStory}/>
            </div>
        </>
        )
    } else {

    return (
        <>
            <Header />
            <div className="container">
                <StoryPresent story={story}/>
                <AdventureButton buttons={story.next} handleClick={handleClick}/>
            </div>
        </>
    )
}}

export default App