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
import StartData from "./data/StartData"

function App() {

    const [stories, setStories] = useState(StoryData)
    const [books, setBooks] = useState(BookData)
    
    const [start] = useState(StartData)
    var [startCursor, setStartCursor] = useState(0)
    

    var [present, setPresent] = useState(start[startCursor].text)

    var [story, setStory] = useState(stories.find(story => story.id === present))

    var [hasBook, setHasBook] = useState(false)

    const [synopsis] = useState(SynopsisData)
    var [synopsisCursor, setSynopsisCursor] = useState(0)

    const handleClick = (e) => {
        if (e.target.id === 'Play Again') {
            setHasBook(hasBook = false)
            //Reset Data
            setStories(StoryData)
        }
        let nextid = e.target.id;
        // console.log(nextid)
        setPresent(present = nextid)
        setStory(stories.find(story => story.id === present))
    }

    const addStory = (newStory) => {
        
        setSynopsisCursor(
            synopsisCursor = synopsis[Math.floor(Math.random()*synopsis.length)])
        setStartCursor(
            startCursor = Math.floor(Math.random()*start.length))
        setPresent(present = start[startCursor].text)
        console.log(present)
        setStory(stories.find(story => story.id === present))
        // console.log(synopsisCursor)
        // This is the inventory
        newStory.name = newStory.text
        setBooks([newStory,...books])
        // This sets the text of the last adventure text
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