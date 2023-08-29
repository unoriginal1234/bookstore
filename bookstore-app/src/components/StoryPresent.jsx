import StoryItem from "./StoryItem"

function StoryPresent({ story }){
    
    return <div>
        { 
            <StoryItem item={story} />
        }
    </div>
}

export default StoryPresent