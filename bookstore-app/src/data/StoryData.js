const StoryData = [
    {
        id: 'Play Again',
        text: 'You are in a Massive Bookstore. Would you like to check out the SCIENCE section, the LOSER section, or some weird section called DING DONGS?',
        next : ['SCIENCE','LOSER', 'DING DONGS']
    },
    {
        id: 'SCIENCE',
        text: 'This is room makes no sense to you',
        next : ['DING DONGS', 'LOSER',]
    },
    {
        id: 'LOSER',
        text: 'This room definitely is your vibe.',
        next : ['DING DONGS', 'SCIENCE']
        
    },
    {
        id: 'DING DONGS',
        text: 'You should get out of here...',
        next : ['LOSER', 'ESCAPE']
    },
    {
        id: 'ESCAPE',
        text: 'You trip on a big fat book. Landing next to it you realize...',
        next : ['You Found It']
    }
]

export default StoryData