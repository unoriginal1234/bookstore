function StoryItem({ item }) {

  return (
    <div className='card'>
        {
            <div className="text-display">{item.text}</div>
        }
    </div>
  )
}

export default StoryItem
