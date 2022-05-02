const products = [
  {
    name: "Don't Starve Together",
    cover: '/images/1.jpg',
    tag: 'Exploration',
    releasedate: '21 Apr, 2016',
    category: 'Roguelite',
    developer: 'Klei Entertainment',
    publisher: 'Klei Entertainment',
    description: `<div>Fight, Farm, Build and Explore Together in the standalone 
    multiplayer expansion to the uncompromising wilderness survival game, Do not Starve.</div>`,
    price: 79.99,
    countInStock: 99,
    rating: 4.6,
    numReviews: 2077,
    highlight: `<div>
    <div><h4 style='color:lightblue'>EXPLORE TOGETHER</h4>
      <div style='color:lightgrey, width:80%'>Discover and explore a massive procedurally generated and biome-rich world with countless
        resources and threats. Whether you stick to the surface world, go spelunking in the caves,
        dive deeper into the Ancient Archive, or set sail for the Lunar islands, it will be a long time before you run out of things to do.</div>
    </div><br />
    <div><h4 style='color:lightblue'>FIGHT TOGETHER</h4>
      <div style='color:lightgrey, width:80%'>Seasonal bosses, wandering menaces, lurking shadow creatures, and plenty of flora and fauna ready to turn you into a spooky ghost.</div>
    </div><br />
    <div><h4 style='color:lightblue'>FARM TOGETHER</h4>
      <div style='color:lightgrey, width:80%'>Plow fields and sow seeds to grow the farm of your dreams. Tend to your crops to help your fellow survivors stay fed and ready for the challenges to come.</div>
    </div><br />
    <div><h4 style='color:lightblue'>BUILD TOGETHER</h4>
      <div style='color:lightgrey, width:80%'>Protect yourself, your friends, and everything you have managed to gather, because you can be sure, somebody or something is going to want it back.</div>
    </div><br />
  </div>`
  },
  {
    name: 'DayZ',
    cover: '/images/2.jpg',
    tag: 'Zombies',
    releasedate: '13 Dec, 2018',
    category: 'Action',
    developer: 'Bohemia Interactive',
    publisher: 'Bohemia Interactive',
    description: `<div>How long can you survive a post-apocalyptic world? A land overrun
    with an infected "zombie" population, where you compete with other survivors for
    limited resources. Will you team up with strangers and stay strong together? Or play
    as a lone wolf to avoid betrayal? This is DayZ – this is your story.</div>`,
    price: 71.08,
    countInStock: 99,
    rating: 3.9,
    numReviews: 10,
    highlight: `<div>
    <div style='color:lightgrey, width:80%'>DayZ is a hardcore open-world survival game with only one rule:
      stay alive, no matter what. But with a myriad of threats lurking around every corner, that might be easier said than done...</div>
    <br />
    <div><h4 style='color:lightblue'>Key Features</h4>
      <ul>
        <li style='color:lightgrey, width:80%'>
          With no checkpoints or saves, when you die, you lose everything and have to start over.
        </li>
        <li style='color:lightgrey, width:80%'>
          Complex and authentic survival mechanics, including hunting, crafting, building, health preservation, and resource management.
        </li>
        <li style='color:lightgrey, width:80%'>
          Unpredictable and often emotional interactions with other players leading to a limitless spectrum of emergent gameplay.
        </li>
        <li style='color:lightgrey, width:80%'>
          A huge 230 km2 map with a variety of beautiful landscapes and landmarks based on real-life locations.
        </li>
        <li style='color:lightgrey, width:80%'>
          Up to 60 players striving to survive by any means necessary. Make friends, kill on sight,
          kidnap strangers and bend them to your will, or be betrayed for a can of beans. Anything and everything is possible.
        </li>
        <li style='color:lightgrey, width:80%'>
          An array of environmental threats that will test your capabilities. From erratic weather and dangerous wildlife to pitch-black nights and rage-induced infected.
        </li>
      </ul>
    </div><br />
  </div>`
  },
  {
    name: 'Sea of Thieves',
    cover: '/images/3.jpg',
    tag: 'Multiplayer',
    releasedate: '3 Jun, 2020',
    category: 'Action',
    developer: 'Rare Ltd',
    publisher: 'Xbox Game Studios',
    description: `<div>Sea of Thieves offers the essential pirate experience, from sailing 
    and fighting to exploring and looting – everything you need to live the pirate life
     and become a legend in your own right. With no set roles, you have complete freedom to approach the world, and other players, however you choose.</div>`,
    price: 129.99,
    countInStock: 99,
    rating: 4.7,
    numReviews: 328,
    highlight: `<div>
    <div style='color:lightgrey, width:80%'>Whether you’re voyaging as a group or sailing solo,
      you’re bound to encounter other crews in this shared world adventure – but will they be friends or foes, and how will you respond?</div>
    <div><h4 style='color:lightblue'>A Vast Open World</h4>
      <div style='color:lightgrey, width:80%'>Explore a vast open world filled with unspoiled islands, sunken ships and mysterious artefacts. Take on quests to hunt for lost treasure, seek out cursed
        Skeleton Captains or gather valuable cargo for the Trading Companies. Go hunting and fishing or choose from hundreds of optional goals and side-quests.</div>
    </div><br />
    <div><h4 style='color:lightblue'>Sea of Thieves: A Pirate’s Life</h4>
      <div style='color:lightgrey, width:80%'>Play the Tall Tales to experience Sea of Thieves’ unique narrative-driven campaigns, and join forces with Captain Jack Sparrow in the newest original story that
        brings Disney’s Pirates of the Caribbean sailing into Sea of Thieves. These immersive and cinematic quests provide around 30 hours of the ultimate pirate adventure.</div>
    </div><br />
    <div><h4 style='color:lightblue'>Become Legend</h4>
      <div style='color:lightgrey, width:80%'>On your journey to become a Pirate Legend you’ll amass loot, build a reputation and define a unique personal style
        with your hard-earned rewards. Adventurer. Explorer. Conqueror. What will your legend be?</div>
    </div><br />
    <div><h4 style='color:lightblue'>A Game That’s Always Growing</h4>
      <div style='color:lightgrey, width:80%'>With five major expansions and almost a year’s worth of monthly updates, Sea of Thieves is a service-based game that is continually
        growing and evolving. Check back each month to see what new content has been added.</div>
    </div><br />
  </div>`
  },
  {
    name: 'Ori and the Will of the Wisps',
    cover: '/images/4.jpg',
    tag: 'Metroidvania',
    releasedate: '10 Mar, 2020',
    category: 'Action',
    developer: 'Moon Studios GmbH',
    publisher: ' Xbox Game Studios',
    description: `<div>Play the critically acclaimed masterpiece. Embark on a new journey 
    in a vast, exotic world where you’ll encounter towering enemies and challenging puzzles on your quest to unravel Ori’s destiny.</div>`,
    price: 18.16,
    countInStock: 99,
    rating: 4.6,
    numReviews: 123,
    highlight: ` <div>
    <div><h4 style='color:lightblue'>ORI AND THE WILL OF THE WISPS IS A MUST PLAY*:</h4>
      <ul style='color:lightgrey, width:80%'>
        <li>
          98/100 GAMESBEAT “…an exhilarating, emotional masterpiece”
        </li>
        <li>
          9.5/10 GAMEINFORMER “the story is fantastic, the world is breathtaking”
        </li>
        <li>
          9/10 IGN “the best praise you can give a sequel”
        </li>
        <li>
          9.5/10 DESTRUCTOID “An early defining moment of the decade to come”
        </li>
        <li>
          90/100 GAMERS HEROES “Ori and the Will of the Wisps is a game of passion, made from the heart.”
        </li>
        <li>
          9/10 PRESS START AUS “its final act will fill your heart and have it bursting with joie de vivre.”
        </li>
      </ul>
      <div style='color:lightgrey, width:80%'>The little spirit Ori is no stranger to peril, but when a fateful flight puts the owlet Ku in harm’s way,
        it will take more than bravery to bring a family back together, heal a broken land, and discover Ori’s true destiny.
        From the creators of the acclaimed action-platformer Ori and the Blind Forest comes the highly anticipated sequel.
        Embark on an all-new adventure in a vast world filled with new friends and foes that come to life in stunning, hand-painted artwork.
        Set to a fully orchestrated original score, Ori and the Will
        of the Wisps continues the Moon Studios tradition of tightly crafted platforming action and deeply emotional storytelling.</div>
    </div><br /></div>`
  },
  {
    name: 'Detroit: Become Human',
    cover: '/images/5.jpg',
    tag: 'Story Rich',
    releasedate: '18 Jun, 2020',
    category: 'Adventure',
    developer: 'Quantic Dream',
    publisher: 'Quantic Dream',
    description: `<div>Detroit: Become Human puts the destiny of both mankind and androids in your hands, 
    taking you to a near future where machines have become more intelligent than humans. 
    Every choice you make affects the outcome of the game, with one of the most intricately branching narratives ever created.</div>`,
    price: 59.99,
    countInStock: 99,
    rating: 5,
    numReviews: 77,
    highlight: `<div>
    <div style='color:lightgrey, width:80%'>Detroit 2038. Technology has evolved to a point where human like androids are everywhere.
      They speak, move and behave like human beings, but they are only machines serving humans.</div>
    <div style='color:lightgrey, width:80%'>Play three distinct androids and see a world at the brink of chaos – perhaps our future - through their eyes.
      Your very decisions will dramatically alter how the game’s intense, branching narrative plays out.</div>
    <div><h4 style='color:lightblue'>PLAY YOUR PART IN A GRIPPING NARRATIVE</h4>
      <div style='color:lightgrey, width:80%'>Enter a world where moral dilemmas and difficult decisions can turn android slaves into world-changing revolutionaries.
        Discover what it means to be human from the perspective of an outsider – and see the world through the eyes of a machine.</div>
    </div><br />
    <div><h4 style='color:lightblue'>THEIR LIVES, YOUR CHOICES</h4>
      <div style='color:lightgrey, width:80%'>Shape an ambitious branching narrative, where your decisions not only determine the fate of the three main characters, but that of the entire city of Detroit.
        How you control Kara, Connor and Markus can mean life or death – and if one of them pays the ultimate price, the story still continues…</div>
    </div><br />
    <div><h4 style='color:lightblue'>COUNTLESS PATHS, COUNTLESS ENDINGS</h4>
      <div style='color:lightgrey, width:80%'>Every decision you make, no matter how minute, affects the outcome of the story.
        No playthrough will be exactly the same: replay again and again to discover a totally different conclusion.</div>
    </div><br />
    <div><h4 style='color:lightblue'>FULLY OPTIMIZED FOR PC</h4>
      <div style='color:lightgrey, width:80%'>Detroit: Become Human is brought to PC with stunning graphics, 4K resolution, 60 fps framerate and full integration of both
        mouse/keyboard and gamepad controls for the most complete Detroit: Become Human experience to date.</div>
    </div><br />
  </div>`
  },
  {
    name: 'Halo Infinite',
    cover: '/images/6.jpg',
    tag: 'Adventure',
    releasedate: '15 Nov, 2021',
    category: 'FPS',
    developer: '343 Industries',
    publisher: 'Xbox Game Studios',
    description: `The legendary Halo series returns with the most expansive Master 
    Chief campaign yet and a ground-breaking free to play multiplayer experience.`,
    price: 63.99,
    countInStock: 99,
    rating: 5,
    numReviews: 15077,
    highlight: `<div>
    <div><h4 style='color:lightblue'>Campaign:</h4>
      <div style='color:lightgrey, width:80%'>When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless
        foe he’s ever faced. Step inside the armor of humanity’s greatest hero to experience
        an epic adventure and explore the massive scale of the Halo ring. To experience the campaign, purchase Halo Infinite (Campaign).</div>
    </div><br />
    <div><h4 style='color:lightblue'>Multiplayer:</h4>
      <div style='color:lightgrey, width:80%'>Halo’s celebrated multiplayer returns, reimagined and free-to-play!
        Seasonal updates evolve the experience over time with unique events, new modes and maps, and community-focused content.</div>


    </div><br />
    <div><h4 style='color:lightblue'>Big Team Battle:</h4>
      <div style='color:lightgrey, width:80%'>Create endless combat possibilities by mixing and matching a rich variety of weapons, vehicles and equipment to experience
        big-team mayhem and fun that embraces the full spectrum of the Halo sandbox.</div>
    </div><br />
    <div><h4 style='color:lightblue'>Spartan Customization:</h4>
      <div style='color:lightgrey, width:80%'>Become a Spartan that’s uniquely your own with a rich and deep player customization system. Earn and discover new cosmetic items
        simply by playing campaign or multiplayer.
        Or to obtain even more cosmetic rewards, purchase a Battle Pass that never expires and unlock new content at your own pace.</div>
    </div><br />
  </div>`
  },
  {
    name: 'Forza Horizon 5',
    cover: '/images/7.jpg',
    tag: 'Open World',
    releasedate: '8 Nov, 2021',
    category: 'Racing',
    developer: 'Playground Games',
    publisher: 'Xbox Game Studios',
    description: `Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open
    world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars. Begin Your Horizon Adventure today and add to your Wishlist!`,
    price: 67.99,
    countInStock: 99,
    rating: 3,
    numReviews: 1692,
    highlight: `      <div>
    <div style='color:lightgrey, width:80%'>Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving
      open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.</div>
    <div><h4 style='color:lightblue'>This is Your Horizon Adventure</h4>
      <div style='color:lightgrey, width:80%'>Lead breathtaking expeditions across the vibrant and ever-evolving open world landscapes
        of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.</div>
    </div><br />
    <div><h4 style='color:lightblue'>This is a Diverse Open World</h4>
      <div style='color:lightgrey, width:80%'>Explore a world of striking contrast and beauty. Discover living deserts, lush jungles,
        historic cities, hidden ruins, pristine beaches, vast canyons and a towering snow-capped volcano..</div>


    </div><br />
    <div><h4 style='color:lightblue'>This is an Adventurous Open World</h4>
      <div style='color:lightgrey, width:80%'>Immerse yourself in a deep campaign with hundreds of challenges that reward you for engaging in the activities you love.
        Meet new characters and choose the outcomes of their Horizon Story missions.</div>
    </div><br />
    <div><h4 style='color:lightblue'>This is an Evolving Open World</h4>
      <div style='color:lightgrey, width:80%'>Take on awe-inspiring weather events such as towering dust storms and intense tropical storms as Mexico’s unique,
        dynamic seasons change the world every week. Keep coming back for new events,
        challenges, collectibles, and rewards, and new areas to explore. No two seasons will ever be the same.</div>
    </div><br />
    <div><h4 style='color:lightblue'>This is a Social Open World</h4>
      <div style='color:lightgrey, width:80%'>Team up with other players and enter the Horizon Arcade for a continuing series of fun, over-the-top challenges that
        keep you and your friends in the action and having fun with no menus,
        loading screens or lobbies. Meet new friends in Horizon Open and Tours and share your creations with new community gift sharing.</div>
    </div><br />
    <div><h4 style='color:lightblue'>This is Your Open World</h4>
      <div style='color:lightgrey, width:80%'>Create your own expressions of fun with the powerful new EventLab gameplay toolset including custom races, challenges, stunts, and entirely new game
        modes. Customize your cars in more ways than ever before with new options such as the ability
        open and close convertible tops, paint brake calipers, and more. Use the new Gift Drops feature to share your custom creations with the community.</div>
    </div><br />
  </div>`
  },
  {
    name: 'Cyberpunk 2077',
    cover: '/images/8.jpg',
    tag: 'Cyberpunk',
    releasedate: 'Dec 9, 2020',
    category: 'RPG',
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
    description: `Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night 
    City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.`,
    price: 89.99,
    countInStock: 99,
    rating: 5,
    numReviews: 4325,
    highlight: `      <div>
    <div><h4 style='color:lightblue'>CREATE YOUR OWN CYBERPUNK</h4>
      <div style='color:lightgrey, width:80%'>Become an urban outlaw equipped with cybernetic enhancements and build your legend on the streets of Night City.</div>
    </div><br />
    <div><h4 style='color:lightblue'>EXPLORE THE CITY OF THE FUTURE</h4>
      <div style='color:lightgrey, width:80%'>Night City is packed to the brim with things to do, places to see, 
      and people to meet. And it’s up to you where to go, when to go, and how to get there.</div>
    </div><br />
    <div><h4 style='color:lightblue'>BUILD YOUR LEGEND</h4>
      <div style='color:lightgrey, width:80%'>Go on daring adventures and build relationships with unforgettable characters whose fates are shaped by the choices you make.</div>
    </div><br />
    <div><h4 style='color:lightblue'>EQUIPPED WITH IMPROVEMENTS</h4>
      <div style='color:lightgrey, width:80%'>Experience Cyberpunk 2077 with a host of changes and improvements to gameplay and economy, the city, map usage, and more.</div>
    </div><br />
    <div><h4 style='color:lightblue'>INCLUDES FREE ADDITIONAL CONTENT</h4>
      <div style='color:lightgrey, width:80%'>Get your hands on a haul of free items including new guns and melee weapons, as well as extra customization options and more.</div>
    </div><br />
  </div>`
  },
  {
    name: 'Planet Zoo',
    cover: '/images/9.jpg',
    tag: 'Management',
    releasedate: 'Nov 5, 2019',
    category: 'Strategy',
    developer: 'Frontier Developments',
    publisher: 'Frontier Developments',
    description: `Build a world for wildlife in Planet Zoo. From the developers of Planet Coaster and Zoo Tycoon comes the 
    ultimate zoo sim. Construct detailed habitats, manage your zoo, and meet authentic living animals who think, feel and explore the world you create around them.`,
    price: 66.71,
    countInStock: 99,
    rating: 5,
    numReviews: 6091,
    highlight: `      <div>

    <div><h4 style='color:lightblue'>Meet a world of incredible animals.</h4>
      <div style='color:lightgrey, width:80%'>From playful lion cubs to mighty elephants, every animal in Planet Zoo is a thinking, feeling individual with a distinctive
        look and personality of their own. Craft detailed habitats to bring your animals’ natural environments home,
        research and manage each species to allow them to thrive, and help your animals raise families to pass their genes onto future generations.</div>
    </div><br />
    <div><h4 style='color:lightblue'>Manage an amazing living world</h4>
      <div style='color:lightgrey, width:80%'>responds to every decision you make. Focus on the big picture or go hands-on and control the smallest details. Thrill visitors with iconic exhibits,
        develop your zoo with new research,
        and release new generations of your animals back into the wild. Your choices come alive in a world where animal welfare and conservation comes first.</div>


    </div><br />
    <div><h4 style='color:lightblue'>Planet Zoo’s</h4>
      <div style='color:lightgrey, width:80%'>Planet Zoo’s powerful piece-by-piece construction tools let you effortlessly make your zoo unique. Every creative decision you make impacts
        the lives of your animals and the experience of your visitors. Let your imagination run wild as you dig lakes and rivers, raise hills and mountains,
        carve paths and caves, and build stunning zoos with a choice of unique themes and hundreds of building components.</div>
    </div><br />
    <div><h4 style='color:lightblue'>Join a connected community</h4>
      <div style='color:lightgrey, width:80%'>Join a connected community and share the world’s most creative habitats, scenery and even whole zoos on the Steam Workshop.
        See your own designs appear in zoos around the world, or discover fresh new content from the Planet Zoo community every day..</div>
    </div><br />
  </div>`
  },
  {
    name: 'Raft',
    cover: '/images/10.jpg',
    tag: 'Survival',
    releasedate: 'May 23, 2018',
    category: 'Indie',
    developer: 'Redbeet Interactive',
    publisher: 'Axolot Games',
    description: `Raft throws you and your friends into an epic oceanic adventure! Alone or together, players battle 
    to survive a perilous voyage across a vast sea! Gather debris, scavenge reefs and build your own floating home, but be wary of the man-eating sharks!`,
    price: 19.99,
    countInStock: 99,
    rating: 5,
    numReviews: 819,
    highlight: `      <div>
    <div><h4 style='color:lightblue'>Survive an epic oceanic adventure</h4>
      <div  style='color:lightgrey, width:80%'>By yourself or with friends, your mission is to survive an epic oceanic adventure across
        a perilous sea! Gather debris to survive, expand your raft and be wary of the dangers of
        the ocean!</div>
    </div><br />
    <div><h4 style='color:lightblue'>Trapped on a small raft</h4>
      <div  style='color:lightgrey, width:80%'>Trapped on a small raft with nothing but a hook made of old plastic, players awake on a vast,
        blue ocean totally alone and with no land in sight! With a dry throat and an empty stomach,
        survival will not be easy!</div>
    </div><br />
    <div><h4 style='color:lightblue'>Big Open Sea</h4>
      <div  style='color:lightgrey, width:80%'>Raft throws you and your friends into an epic adventure out on the big open sea, with the
        objective to stay alive, gather resources and build yourself a floating home worthy of
        survival.</div>
    </div><br />
    <div><h4 style='color:lightblue'>Resources are tough </h4>
      <div  style='color:lightgrey, width:80%'>Resources are tough to come by at sea: Players
        will have to make sure to catch whatever debris floats by using their trusty hook and when possible, scavenge the reefs beneath the waves and the islands above.</div>
      <div  style='color:lightgrey, width:80%'>However, thirst and hunger is not the only danger in the ocean… watch out for the man-
        eating shark determined to end your voyage!</div>
    </div><br />
    <div><h4 style='color:lightblue'>Features:</h4>
      <ul  style='color:lightgrey, width:80%'>
        <li>
          Multiplayer! Survive by yourself or with friends in online co-op!
        </li>
        <li>
          Hook! Use your hook to catch debris floating by.
        </li>
        <li>
          Craft! Build survival equipment, weapons, crop plots and more to help you stay alive!
        </li>
        <li>
          Build! Expand your raft from a simple wreckage to a buoyant mansion.
        </li>
        <li>
          Research! Learn new things to craft in the research table.
        </li>
        <li>
          Navigate! Sail your raft towards new places!
        </li>
        <li>
          Dive! Drop anchor and explore the depths for more resources.
        </li>
        <li>
          Fight! Defend your raft from the dangers of the ocean.
        </li>
      </ul>
    </div><br />
  </div>`
  },
]

module.exports = products
