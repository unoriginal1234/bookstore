// import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"
import Header from "./components/Header"
import StoryPresent from "./components/StoryPresent"
import StoryData from "./data/StoryData"
import BookData from "./data/BookData"
import AdventureButton from "./components/AdventureButton"
import BookForm from "./components/BookForm"
import Inventory from "./components/Inventory"
import SynopsisData from "./data/SynopsisData"

function App() {

    const [stories, setStories] = useState(StoryData)

    const [books, setBooks] = useState(BookData)

    var [present, setPresent] = useState('Play Again')

    var [story, setStory] = useState(stories.find(story => story.id === present))

    var [hasBook, setHasBook] = useState(false)

    const [synopsis, setSynopsis] = useState(SynopsisData)
    var [synopsisCursor, setSynopsisCursor] = useState(0)

    const handleClick = (e) => {
        if (e.target.id === 'Play Again') {
            setHasBook(hasBook = false)
            setStories(StoryData)
        }
        let nextid = e.target.id;
        // console.log(nextid)
        setPresent(present = nextid)
        setStory(stories.find(story => story.id === present))
    }

    const addStory = (newStory) => {
        // This is the inventory
        setSynopsisCursor(
            synopsisCursor = synopsis[Math.floor(Math.random()*synopsis.length)]
            )
        console.log(synopsisCursor)
        newStory.name = newStory.text
        setBooks([newStory,...books])
        
        newStory.id = "You Found It"
        newStory.text = "You found " + newStory.text + "! " + synopsisCursor.text
        newStory.next = ['Play Again']
        // Add to the Stories
        setStories([...stories, newStory])
        // Is there a book you're looking for?
        setHasBook (hasBook = true)
    }

    if (hasBook === false) {
        return (
            <>
            <Header />
            <div className="container">
                <BookForm handleAdd={addStory}/>
                <Inventory books={books}/>
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