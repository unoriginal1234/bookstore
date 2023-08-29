const StoryData = [
    {
        id: 'Room One',
        text: 'You are in a Massive Bookstore. Would you like to check out the SCIENCE section or the LOSER section?',
        nextid1: 'SCIENCE',
        nextid2: 'LOSER',
    },
    {
        id: 'SCIENCE',
        text: 'This is room makes no sense to you',
        nextid1: 'DING DONGS',
        nextid2: 'LOSER',
    },
    {
        id: 'LOSER',
        text: 'This room definitely is you vibe.',
        nextid1: 'DING DONGS',
        nextid2: 'SCIENCE',
    },
    {
        id: 'DING DONGS',
        text: 'You should get out of here...',
        nextid1: 'LOSER',
        nextid2: 'SCIENCE',
    }
]

export default StoryData