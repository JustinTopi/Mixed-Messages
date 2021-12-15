const quoteGenerator = () => {
    const objectList = {
        "Karl Marx": [
            "The philosophers have only interpreted the world, in various ways. The point, however, is to change it.",
            "Let the ruling classes tremble at a Communistic revolution. The proletarians have nothing to lose but their chains. They have a world to win. Workingmen of all countries unite!",
            "To be radical is to grasp things by the root.",
            "If anything is certain, it is that I myself am not a Marxist.",
            "Religion is the sigh of the oppressed creature, the heart of a heartless world and the soul of soulless conditions. It is the opium of the people.",
            "In proportion therefore, as the repulsiveness of the work increases, the wage decreases.",
            "The oppressed are allowed once every few years to decide which particular representatives of the oppressing class are to represent and repress them.",
            "History repeats itself, first as tragedy, second as farce.",
            "Democracy is the road to Socialism.",
            "From each according to his abilities, to each according to his needs."
        ],
        "Adam Smith": [
            "Civil government, so far as it is instituted for the security of property, is in reality instituted for the defense of the rich against the poor, or of those who have some property against those who have none at all.",
            "Science is the great antidote to the poison of enthusiasm and superstition.",
            "The first thing you have to know is yourself. A man who knows himself can step outside himself and watch his own reactions like an observer.",
            "Never complain of that of which it is at all times in your power to rid yourself.",
            "Mercy to the guilty is cruelty to the innocent.",
            "It is not very unreasonable that the rich should contribute to the public expense, not only in proportion to their revenue, but something more than in that proportion.",
            "The learned ignore the evidence of their senses to preserve the coherence of the ideas of their imagination.",
            "Problems worthy of attacks, prove their worth by hitting back.",
            "All for ourselves, and nothing for other people, seems, in every age of the world, to have been the vile maxim of the masters of mankind.",
            "It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest."
        ],
        "Mikhail Bakunin": [
            "If God really existed, it would be necessary to abolish Him.",
            "If you took the most ardent revolutionary, vested him in absolute power, within a year he would be worse than the Tsar himself.",
            "I am truly free only when all human beings, men and women, are equally free. The freedom of other men, far from negating or limiting my freedom, is, on the contrary, its necessary premise and confirmation.",
            "We are convinced that liberty without socialism is privilege, injustice; and that socialism without liberty is slavery and brutality.",
            "Do you want to make it impossible for anyone to oppress his fellow-man? Then make sure that no one shall possess power.",
            "Every command slaps liberty in the face.",
            "Every government, no matter who controls it, is an instrument of oppression.",
            "A jealous lover of human liberty, and deeming it the absolute condition of all that we admire and respect in humanity, I reverse the phrase of Voltaire, and say that, if God really existed, it would be necessary to abolish him.",
            "The passion for destruction is also a creative passion",
            "It should be added that, in general, it is the character of every metaphysical and theological argument to seek to explain one absurdity by another.",
        ],
        "John Maynard Keynes": [
            "It is better to be roughly right than precisely wrong.",
            "If you owe your bank a hundred pounds, you have a problem. But if you owe a million, it has.",
            "Capitalism is the astounding belief that the most wickedest of men will do the most wickedest of things for the greatest good of everyone.",
            "The political problem of mankind is to combine three things: economic efficiency, social justice and individual liberty.",
            "Markets can remain irrational longer than you can remain solvent.",
            "The avoidance of taxes is the only intellectual pursuit that carries any reward.",
            "When the capital development of a country becomes a by-product of the activities of a casino, the job is likely to be ill-done",
            "In the long run, we are all dead!",
            "When somebody persuades me I am wrong, I change my mind.",
            "When the facts change, I change my mind - what do you do, sir?",
        ],
        "Alan Turing": [
            "Sometimes it is the people no one can imagine anything of who do the things no one can imagine.",
            "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
            "I'm afraid that the following syllogism may be used by some in the future. Turing believes machines think, Turing lies with men, Therefore machines do not think. Yours in distress, Alan.",
            "Those who can imagine anything, can create the impossible.",
            "If a machine is expected to be infallible, it cannot also be intelligent.",
            "Sometimes it is the people who no one imagines anything of who do the things that no one can imagine.",
            "Finding such a person makes everyone else appear so ordinary…and if anything happens to him, you’ve got nothing left but to return to the ordinary world, and a kind of isolation that never existed before.",
            "The original question, 'Can machines think?' I believe to be too meaningless to deserve discussion.",
            "A very large part of space-time must be investigated, if reliable results are to be obtained.",
            "A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.",
        ],
        "Linus Torvalds": [
            "Software is like sex : it's better when it's free..",
            "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
            "I like offending people, because I think people who get offended should be offended.",
            "Intelligence is the ability to avoid doing work, yet getting the work done.",
            "Given enough eyeballs, all bugs are shallow.",
            "Only wimps use tape backup. REAL men just upload their important stuff on ftp and let the rest of the world mirror it.",
            "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
            "Don't ever make the mistake [of thinking] that you can design something better than what you get from ruthless massively parallel trial-and-error with a feedback cycle. That's giving your intelligence much too much credit.",
            "Humans are destined to be party animals, and technology will follow.",
            "Benevolent dictator? No, I'm just lazy. I try to manage by not making decisions and letting things occur naturally. That's when you get the best results.",
        ]
    }
    
    const adjectives = ['fantastic', 'brave', 'critical', 'caustic', 'enviable', 'great', 'monadical', 'free']
    const randomAdjective = Math.floor(Math.random() * adjectives.length)
    
    const words = ['thinker', 'man', 'intellectual', 'scientist']
    const randomWord = Math.floor(Math.random() * words.length)
    
    const keys = Object.getOwnPropertyNames(objectList)
    const randomKey = keys[Math.floor(Math.random() * keys.length)] //random key
    
    const randomQuote = Math.floor(Math.random() * objectList[randomKey].length)//random quote
    const quote = objectList[randomKey][randomQuote]
    return `<strong>Author:</strong> ${randomKey} <br>${randomKey} was a ${adjectives[randomAdjective]} ${words[randomWord]}! <br><strong>Quote:</strong> "${quote}"`
}

$(document).ready(function() {
    $("#generator").click(function() {
            let randomMessage = quoteGenerator();
            $("#p1").html(randomMessage);
        })
});