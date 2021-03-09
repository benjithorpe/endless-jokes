function getQuote() {
    var randomNumber = Math.round(Math.random() * (facts.length - 1));
    document.getElementById("text").value = facts[randomNumber];
}

var facts = [
    "Despite the world’s population increasing by about 2M people every day, humans now feel more alone than ever before.",
    "If you want to increase your chances of making a good impression in a meeting, sit toward the middle of the table.",
    "If you have a song stuck in your head, one of the best ways to get it out of your head is to chew gum, according to study.",
    "Social media is psychologically designed to be addictive.",
    "Tell yourself you'd just quickly check your Facebook notifications, and 15 minutes later you're still scrolling? "
    + "You're not alone. Part of that has to do with infinite scroll: "
    + "When you can stay on the site without actually interacting and clicking, your brain doesn't get that \"stop\" cue.",
    "When one rule seems too strict, we want to break more.",
    "Psychologists have studied a phenomenon called reactance: "
    + "When people perceive certain freedoms being taken away, they not only break that rule, but they break even more",
    "Food tastes better when someone else makes it.",
    "We always try to return a favor.",
    "It's not just good manners—the \"rule of reciprocity\" suggests that we're programmed to want to help someone who's helped us",
    "People sincerely believe that their negative opinions about others are truthful and have no connection with them "
    + "and their self-confidence. In fact, humiliating others helps them restore their own self-esteem.",
    "We're convinced that the future is bright.",
    "Doesn't matter if you like where you're at right now or not—most of us have an \"optimism bias\" "
    + "that convinces us the future will be better than the present.",
    "If your boss yells a lot, it’s just a matter of time you’ll want his position for yourself, "
    + "and having a violent boss indicates you will also be violent.",
    "Money can buy happiness, but only up to a certain point.",
    "Research shows that in terms of income, people have a \"satiation point\" where happiness peaks and earning more won't actually make you happier",
    "Lying requires a lot of mental effort. A person who is lying has to keep in mind two things at the same time "
    + "– the lie, or what they are saying, and the truth, or what they are trying to hide."
    + "As a result, a liar uses simple sentences and finds it more difficult to cope with mental tasks.",
    "Long-term couples will feel more attracted to each other when they regularly engage in novel "
    + "and exciting joint activities that involve working together to achieve a goal.",
    "Behavior affects morality. People who lied, betrayed someone, or committed other immoral acts "
    + "begin to perceive what is good or bad in another way.",
    "Power makes people care less about others.",
    "Money and power reduces your empathy",
    "The Buddha commonly depicted in statues and pictures is a different person entirely. "
        + "The real Buddha was actually incredibly skinny because of self-deprivation",
    "The letter Z is the least frequently used letter in written English. "
        + "It is more common in American English than in British English due to spellings differences.",
    "Psychologists say that both men and women become sexually aroused while dreaming (even if the dream has no sexual content).",
    "Jack Daniel (the founder of the whiskey) died from kicking a safe. "
        + "When he kicked it, he broke his toe which got infected. He eventually died from blood poisoning.",
    "The cardboard holder that you often get around a takeaway cup of coffee is called a “zarf”.",
    "Clinomania is the excessive desire to lay in bed all day.",
    "The Latin name for banana is “musa sapientum” which translates to fruit of the wise men.",
    "If you were to have your picture taken by the very first camera, you’d need to sit still for 8 hours.",
    "Forgiveness is the number one trait linked to happiness in humans.",
    "Although many people think shaving causes the hair to grow back quicker, there is no scientific evidence for this.",
    "It requires seven to eight trees to provide enough oxygen for just one person per year.",
    "Of the 70% of water covering the Earth only 3% of it is fresh, the other 97% of it is salted",
    "Fires spread faster uphill than downhill.",
    "Heat, not sunlight, ripens tomatoes.",
    "Heavier, not bigger lemons, produce more juice.",
    "The legs of bats are too weak to support their weight, so they hang upside down.",
    "A full moon is nine times brighter than a half moon.",
    "Your eye expands up to 45% when looking at something pleasing.",
    "Rats and mice are ticklish, and even laugh when tickled.",
    "Butterflies were formerly known by the name Flutterby.",
    "Your breathing rate increases when you start to type.",
    "Camel's milk does not curdle.",
    "Once cherries have been picked, they don’t ripen.",
    "Mangoes are the most-consumed fruit in the world.",
    "A tune that gets stuck in your head is called an earworm.",
    "Only female mosquitoes bite.",
    "The legs of bats are too weak to support their weight, so they hang upside down.",
    "Lifejackets used to be filled with sunflower seeds for flotation.",
    "Africa is divided into more countries than any other continent.",
    "Honeybees navigate by using the sun as a compass.",
    "Thomas Edison designed a helicopter that would work with gunpowder. It ended up blowing up and also blew up his factory.",
    "Right handed people tend to chew food on the right side and lefties chew on the left.",
    "The plastic things on the end of shoelaces are called aglets.",
    "Panama is the only place in the world where you can see the sun rise on the Pacific and set on the Atlantic.",
    "\"Guy\" was once an insult for anyone dressed in poor clothes, originating from the "
        + "burning of effigies of the infamous British rebel, Guy Fawkes.",
    "Indonesia is made up of more than 17,000 islands.",
    "The only thing that can scratch a diamond is a diamond.",
    "Googol is a number (1 followed by 100 zeros).",
    "Twins have a very high occurrence of left handedness.",
    "\"Never odd or even\" spelled backward is still \"Never odd or even.\"",
];

