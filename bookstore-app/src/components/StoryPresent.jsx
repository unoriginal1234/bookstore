import StoryItem from "./StoryItem"

function StoryPresent({ story, index }){
    console.log({index})
    
    return <div>
        { 
            <StoryItem item={story.at(index)} />
        }
    </div>
}

export default StoryPresent