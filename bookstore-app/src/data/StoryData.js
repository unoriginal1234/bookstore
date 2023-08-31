const StoryData = [
    {
        id: 'Play Again',
        text: 'You are in a Massive Bookstore. Would you like to check out the SCIENCE section or the LOSER section?',
        next : ['SCIENCE','LOSER', 'DING DONGS']
    },
    {
        id: 'SCIENCE',
        text: 'This is room makes no sense to you',
        next : ['DING DONGS', 'LOSER',]
    },
    {
        id: 'LOSER',
        text: 'This room definitely is you vibe.',
        next : ['DING DONGS', 'SCIENCE']
        
    },
    {
        id: 'DING DONGS',
        text: 'You should get out of here...',
        next : ['LOSER', 'ESCAPE']
    },
    {
        id: 'ESCAPE',
        text: 'You make it out alive, dripping with sweat. You survived. This time...',
        next : ['Play Again']
    }

]

export default StoryData