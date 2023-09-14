const StoryData = [
    // Room One
    {
        id: 'Front',
        text: 'You are in the front of a Massive Bookstore. Would you like to check out the SCIENCE section, the LOSER section, or some weird section called DING DONGS?',
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
    },
    // Room Two
    {
        id: 'Back',
        text: 'You are in the back of a Massive Bookstore. Would you like to check out the ART section, the HELP section, or HOT DOGS?',
        next : ['ART','HELP', 'HOT DOGS']
    },
    {
        id: 'ART',
        text: 'You become overwhelmed with human creative potential',
        next : ['HELP', 'HOT DOGS',]
    },
    {
        id: 'HELP',
        text: 'This room has an unease to it.',
        next : ['ART', 'HOT DOGS']
        
    },
    {
        id: 'HOT DOGS',
        text: 'A Room of Hot Dogs...',
        next : ['ART', 'EAT']
    },
    {
        id: 'EAT',
        text: 'You EAT a Hot Dog. Your tummy gets too full. You sit down next to a book and realize...',
        next : ['You Found It']
    },
    // Room Three
    {
        id: 'Basement',
        text: 'You are in the basement of a Massive Bookstore. Would you like to check out the HORROR section, the INFO section, or POETRY?',
        next : ['HORROR', 'INFO', 'POETRY']
    },
    {
        id: 'HORROR',
        text: 'This is room has a lot of happy people in it!',
        next : ['INFO', 'POETRY',]
    },
    {
        id: 'INFO',
        text: 'This room is spooky AF.',
        next : ['HORROR', 'POETRY']
        
    },
    {
        id: 'POETRY',
        text: 'Oh no! A mummy! It chases you!',
        next : ['HORROR', 'RUN']
    },
    {
        id: 'RUN',
        text: 'You turn to run. You step on a book, and slip. Your ankle twists but...',
        next : ['You Found It']
    },
]

export default StoryData