// Ultimate Maharashtra History Elevator - Enhanced Application with Bug Fixes
class MaharashtraHistoryElevator {
  constructor() {
    // Enhanced application data with comprehensive event details
    this.events = [
      {
        year: 2025,
        title: "Modern Maharashtra",
        desc: "Present-day Maharashtra leading India's digital transformation with Mumbai as financial capital and Pune as IT hub.",
        era: "modern",
        eraName: "Digital Era",
        eraTemp: "Innovation Age",
        details: "Maharashtra today is India's economic powerhouse with Mumbai housing the Bombay Stock Exchange, Bollywood film industry, and major corporations. Pune has emerged as India's IT capital with thousands of technology companies including Infosys, TCS, and Wipro. Cities like Nashik and Nagpur are becoming important industrial and logistics centers. The state leads in digital infrastructure, startup ecosystem, and technological innovation with major tech parks and research institutes.",
        image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600&fit=crop&auto=format&q=80",
        audioUrl: "https://example.com/audio/modern-maharashtra.mp3",
        virtualTourUrl: "https://example.com/tours/mumbai-skyline",
        tags: ["Technology", "Economy", "Innovation", "Mumbai", "Pune", "IT Industry"],
        keyFigures: ["Ratan Tata", "Mukesh Ambani", "Kiran Mazumdar-Shaw"],
        relatedEvents: [1960, 1947, 1885],
        quiz: {
          question: "Which city is known as India's IT capital in Maharashtra?",
          options: ["Mumbai", "Pune", "Nashik", "Nagpur"],
          correct: 1,
          explanation: "Pune is known as India's IT capital with major tech companies and software parks."
        }
      },
      {
        year: 1960,
        title: "Formation of Maharashtra State",
        desc: "Maharashtra state formed on May 1, 1960, with Mumbai as capital after the Samyukta Maharashtra movement.",
        era: "independence",
        eraName: "State Formation",
        eraTemp: "Unity Movement",
        details: "The Samyukta Maharashtra movement was a political movement demanding a separate Marathi-speaking state. Key leaders included Keshavrao Jedhe, S.M. Joshi, and Prabodhankar Thackeray. After years of protests and political negotiations, Maharashtra was carved out from the bilingual Bombay State on May 1, 1960, with Mumbai as its capital. Yashwantrao Chavan became the first Chief Minister of Maharashtra.",
        image: "images/1280px-Victoria_Terminus_GIP_Rail.jpg",
        audioUrl: "https://example.com/audio/maharashtra-formation.mp3",
        virtualTourUrl: "https://example.com/tours/mumbai-gateway",
        tags: ["Politics", "Unity", "Statehood", "Marathi", "Language Movement"],
        keyFigures: ["Yashwantrao Chavan", "Keshavrao Jedhe", "S.M. Joshi"],
        relatedEvents: [1947, 1942, 1885],
        quiz: {
          question: "When was Maharashtra state formed?",
          options: ["May 1, 1947", "May 1, 1960", "August 15, 1947", "January 26, 1960"],
          correct: 1,
          explanation: "Maharashtra was formed on May 1, 1960, which is celebrated as Maharashtra Day."
        }
      },
{
  year: 1947,
  title: "Indian Independence",
  desc: "India gains independence on August 15, 1947; Bombay State created including Gujarat and Maharashtra.",
  era: "independence",
  eraName: "Freedom Era",
  eraTemp: "Liberation",
  details: "India achieved independence from British rule on August 15, 1947. Maharashtra region became part of the newly created Bombay State, which included present-day Gujarat and Maharashtra. This was a culmination of the long freedom struggle led by leaders like Mahatma Gandhi, Lokmanya Tilak, and others. The partition of India created challenges, but Maharashtra emerged as a key industrial and commercial center in the new nation.",
  image: "images/Screenshot 2025-09-27 170047.png",
  audioUrl: "https://example.com/audio/independence-1947.mp3",
  virtualTourUrl: "https://example.com/tours/gateway-of-india",
  tags: ["Independence", "Freedom", "Nation Building", "Partition"],
  keyFigures: ["Mahatma Gandhi", "Jawaharlal Nehru", "Vallabhbhai Patel"],
  relatedEvents: [1942, 1905, 1885],
  quiz: {
   question: "What was Maharashtra called immediately after Independence?",
   options: ["Maharashtra State", "Bombay State", "Deccan State", "Western State"],
   correct: 1,
   explanation: "After independence, Maharashtra was part of Bombay State until 1960."
  }
},     {
        year: 1942,
        title: "Quit India Movement",
        desc: "Quit India Movement launched on August 9, 1942, from Gowalia Tank in Mumbai.",
        era: "independence",
        eraName: "Freedom Struggle",
        eraTemp: "Final Push",
        details: "The Quit India Movement was launched by Mahatma Gandhi on August 9, 1942, from Gowalia Tank Maidan (now August Kranti Maidan) in Mumbai. This was the final major push for Indian independence. The movement saw massive participation from Maharashtra, with leaders and common people joining the call to 'Do or Die'. The British responded with mass arrests, but the movement marked the beginning of the end of British rule in India.",
        image: "https://images.unsplash.com/photo-1605106702842-01a887a31122?w=800&h=600&fit=crop&auto=format&q=80",
        audioUrl: "https://example.com/audio/quit-india-movement.mp3",
        virtualTourUrl: "https://example.com/tours/august-kranti-maidan",
        tags: ["Resistance", "Gandhi", "Freedom Movement", "Civil Disobedience"],
        keyFigures: ["Mahatma Gandhi", "Aruna Asaf Ali", "Jayaprakash Narayan"],
        relatedEvents: [1947, 1905, 1885],
        quiz: {
          question: "From where was the Quit India Movement launched?",
          options: ["Red Fort Delhi", "Gowalia Tank Mumbai", "Sabarmati Ahmedabad", "Raj Ghat Delhi"],
          correct: 1,
          explanation: "The Quit India Movement was launched from Gowalia Tank (now August Kranti Maidan) in Mumbai."
        }
      },
      {
        year: 1905,
        title: "Swadeshi Movement by Tilak",
        desc: "Lokmanya Tilak leads the Swadeshi and Home Rule movements (1905–1916).",
        era: "british",
        eraName: "Nationalist Awakening",
        eraTemp: "Self-Rule Movement",
        details: "Bal Gangadhar Tilak, known as 'Lokmanya' (beloved of the people), was one of the first leaders to demand complete independence. He popularized the Ganesh festival as a form of nationalist expression and started the Home Rule movement. His famous slogan 'Swarajya is my birthright and I shall have it' became a rallying cry for the independence movement. He promoted Swadeshi (use of indigenous products) and boycott of British goods.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop&auto=format&q=80",
        audioUrl: "https://example.com/audio/tilak-swadeshi.mp3",
        virtualTourUrl: "https://example.com/tours/tilak-birthplace",
        tags: ["Tilak", "Swadeshi", "Home Rule", "Nationalism", "Ganesh Festival"],
        keyFigures: ["Bal Gangadhar Tilak", "Lala Lajpat Rai", "Bipin Chandra Pal"],
        relatedEvents: [1942, 1885, 1897],
        quiz: {
          question: "What was Lokmanya Tilak's famous slogan?",
          options: ["Quit India", "Swarajya is my birthright", "Vande Mataram", "Satyagraha"],
          correct: 1,
          explanation: "Tilak's famous slogan was 'Swarajya is my birthright and I shall have it'."
        }
      },
      {
        year: 1885,
        title: "Indian National Congress Founded",
        desc: "First session of Indian National Congress held in Bombay in December 1885.",
        era: "british",
        eraName: "Political Organization",
        eraTemp: "Institutional Beginning",
        details: "The Indian National Congress was founded by Allan Octavian Hume with its first session held at Gokuldas Tejpal Sanskrit College in Bombay from December 28-31, 1885. Womesh Chunder Bonnerjee was the first president. This marked the beginning of organized political resistance against British rule. The Congress initially sought greater representation for Indians in governance but gradually evolved to demand complete independence.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop&auto=format&q=80",
        audioUrl: "https://example.com/audio/congress-foundation.mp3",
        virtualTourUrl: "https://example.com/tours/congress-house-mumbai",
        tags: ["Congress", "Politics", "Organization", "Nationalism", "Democracy"],
        keyFigures: ["Allan Octavian Hume", "Womesh Chunder Bonnerjee", "Dadabhai Naoroji"],
        relatedEvents: [1905, 1942, 1947],
        quiz: {
          question: "Who was the first president of Indian National Congress?",
          options: ["Allan Octavian Hume", "Womesh Chunder Bonnerjee", "Dadabhai Naoroji", "Gopal Krishna Gokhale"],
          correct: 1,
          explanation: "Womesh Chunder Bonnerjee was the first president of the Indian National Congress in 1885."
        }
      },
      {
        year: 1818,
        title: "End of Maratha Empire",
        desc: "Defeat in Third Anglo-Maratha War; British capture Pune, ending Peshwa rule and Maratha independence.",
        era: "british",
        eraName: "Colonial Conquest",
        eraTemp: "End of Independence",
        details: "The Third Anglo-Maratha War (1817-1818) marked the end of Maratha independence. The British East India Company defeated the combined forces of the Marathas, including the Peshwa Baji Rao II, Bhonsle of Nagpur, and Holkar of Indore. The Treaty of Mandasor was signed, and Pune fell to the British. This ended over 150 years of Maratha rule and brought Maharashtra under British colonial administration as part of the Bombay Presidency.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format&q=80",
        audioUrl: "https://example.com/audio/maratha-end.mp3",
        virtualTourUrl: "https://example.com/tours/shaniwar-wada",
        tags: ["British Conquest", "Anglo-Maratha War", "Peshwa", "Colonial Rule"],
        keyFigures: ["Baji Rao II", "Lord Hastings", "Arthur Wellesley"],
        relatedEvents: [1775, 1720, 1707],
        quiz: {
          question: "Which war ended Maratha independence?",
          options: ["First Anglo-Maratha War", "Second Anglo-Maratha War", "Third Anglo-Maratha War", "Battle of Plassey"],
          correct: 2,
          explanation: "The Third Anglo-Maratha War (1817-1818) ended Maratha independence."
        }
      },
      {
        year: 1774,
        title: "First Anglo-Maratha War",
        desc: "Beginning of Anglo-Maratha Wars (1775–1818) - British expansion meets Maratha resistance.",
        era: "maratha",
        eraName: "Colonial Resistance",
        eraTemp: "Fighting Empire",
        details: "The First Anglo-Maratha War (1775-1782) began due to British interference in Maratha internal politics and the succession dispute after Madhavrao Peshwa's death. The war was fought primarily in western India with battles at Wadgaon and other locations. The Treaty of Salbai (1782) ended this war temporarily, but it marked the beginning of the eventual British conquest of Maratha territories over the next four decades.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format&q=80",
        audioUrl: "https://example.com/audio/anglo-maratha-wars.mp3",
        virtualTourUrl: "https://example.com/tours/wadgaon-battlefield",
        tags: ["Anglo-Maratha Wars", "British Expansion", "Resistance", "Military"],
        keyFigures: ["Warren Hastings", "Mahadji Shinde", "Nana Phadnavis"],
        relatedEvents: [1818, 1761, 1720],
        quiz: {
          question: "How many Anglo-Maratha Wars were fought?",
          options: ["Two", "Three", "Four", "Five"],
          correct: 1,
          explanation: "Three Anglo-Maratha Wars were fought between 1775-1818."
        }
      },
      {
        year: 1761,
        title: "Third Battle of Panipat",
        desc: "Marathas suffer devastating defeat against Ahmad Shah Abdali, marking the beginning of Maratha decline.",
        era: "maratha",
        eraName: "Great Defeat",
        eraTemp: "Turning Point",
        details: "The Third Battle of Panipat (January 14, 1761) was fought between the Maratha Empire and Ahmad Shah Abdali (Ahmad Shah Durrani) of Afghanistan. The Marathas, led by Sadashivrao Bhau, suffered a catastrophic defeat with massive casualties including the death of many prominent leaders. This battle is considered the turning point that halted Maratha expansion in North India and led to their gradual decline, paving the way for British dominance.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format&q=80",
        audioUrl: "https://example.com/audio/third-panipat.mp3",
        virtualTourUrl: "https://example.com/tours/panipat-battlefield",
        tags: ["Panipat", "Ahmad Shah Abdali", "Military Defeat", "Turning Point"],
        keyFigures: ["Sadashivrao Bhau", "Ahmad Shah Abdali", "Ibrahim Khan Gardi"],
        relatedEvents: [1720, 1740, 1774],
        quiz: {
          question: "Who led the Maratha forces at the Third Battle of Panipat?",
          options: ["Baji Rao I", "Sadashivrao Bhau", "Madhavrao Peshwa", "Mahadji Shinde"],
          correct: 1,
          explanation: "Sadashivrao Bhau led the Maratha forces at the Third Battle of Panipat."
        }
      },
      {
        year: 1720,
        title: "Baji Rao I Becomes Peshwa",
        desc: "Baji Rao I becomes Peshwa, leading rapid expansion of Maratha Empire across India.",
        era: "maratha",
        eraName: "Imperial Expansion",
        eraTemp: "Golden Age",
        details: "Baji Rao I (1720-1740) is considered the greatest Peshwa who transformed the Maratha Empire into a pan-Indian power. He never lost a single battle in his 20-year career, fighting over 41 major battles. Under his leadership, Maratha influence extended from the Deccan to Delhi, Bengal, and Gujarat. He established Maratha dominance in Malwa, Gujarat, and Bundelkhand, making the Marathas the paramount power in 18th-century India.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format&q=80",
        audioUrl: "https://example.com/audio/bajirao-peshwa.mp3",
        virtualTourUrl: "https://example.com/tours/shaniwar-wada-pune",
        tags: ["Baji Rao I", "Peshwa", "Military Genius", "Empire Building"],
        keyFigures: ["Baji Rao I", "Mastani", "Chimaji Appa", "Malhar Rao Holkar"],
        relatedEvents: [1707, 1740, 1761],
        quiz: {
          question: "How many battles did Baji Rao I lose in his career?",
          options: ["Zero", "One", "Two", "Three"],
          correct: 0,
          explanation: "Baji Rao I never lost a single battle in his entire military career."
        }
      },
      {
        year: 1707,
        title: "Death of Aurangzeb",
        desc: "Mughal Emperor Aurangzeb dies in Ahmednagar, marking Mughal decline and Maratha resurgence.",
        era: "maratha",
        eraName: "Mughal Decline",
        eraTemp: "Power Vacuum",
        details: "Aurangzeb, the last great Mughal emperor, died on March 3, 1707, in Ahmednagar after a 27-year campaign in the Deccan trying to subdue the Marathas. His death marked the beginning of rapid Mughal decline and created a power vacuum that the Marathas quickly filled. The Maratha resistance, which had continued throughout his reign, now transformed into expansion as they took advantage of the weakening Mughal state and internal succession disputes.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format&q=80",
        audioUrl: "https://example.com/audio/aurangzeb-death.mp3",
        virtualTourUrl: "https://example.com/tours/ahmednagar-tomb",
        tags: ["Aurangzeb", "Mughal Decline", "Power Vacuum", "Opportunity"],
        keyFigures: ["Aurangzeb", "Bahadur Shah I", "Tarabai", "Shahu Maharaj"],
        relatedEvents: [1680, 1720, 1713],
        quiz: {
          question: "Where did Aurangzeb die?",
          options: ["Delhi", "Agra", "Ahmednagar", "Aurangabad"],
          correct: 2,
          explanation: "Aurangzeb died in Ahmednagar, Maharashtra, in 1707."
        }
      },
      {
        year: 1680,
        title: "Death of Shivaji Maharaj",
        desc: "Chhatrapati Shivaji Maharaj dies on April 3, 1680, at Raigad Fort, ending the founder's era.",
        era: "maratha",
        eraName: "End of Founder's Era",
        eraTemp: "Succession Crisis",
        details: "Chhatrapati Shivaji Maharaj died on April 3, 1680, at the age of 50 at Raigad Fort due to fever and dysentery. His death created a succession crisis between his sons Sambhaji and Rajaram, weakening the Maratha state temporarily. However, his legacy of Hindavi Swarajya (self-rule) and the administrative and military systems he established continued to inspire the Maratha Empire's expansion under later rulers.",
        image: "images/samdhishivajimaharaj.avif",
        audioUrl: "https://example.com/audio/shivaji-death.mp3",
        virtualTourUrl: "https://example.com/tours/raigad-fort-tomb",
        tags: ["Shivaji Death", "Succession", "Legacy", "Raigad"],
        keyFigures: ["Chhatrapati Shivaji", "Sambhaji", "Rajaram", "Soyarabai"],
        relatedEvents: [1674, 1689, 1707],
        quiz: {
          question: "At what age did Shivaji Maharaj die?",
          options: ["45", "50", "55", "60"],
          correct: 1,
          explanation: "Shivaji Maharaj died at the age of 50 in 1680."
        }
      },
      {
        year: 1674,
        title: "Coronation of Shivaji Maharaj",
        desc: "Shivaji crowned as Chhatrapati on June 6, 1674, at Raigad Fort, establishing the Maratha Empire.",
        era: "maratha",
        eraName: "Empire Foundation",
        eraTemp: "Swarajya Established",
        details: "The historic coronation of Shivaji as Chhatrapati (Emperor) took place on June 6, 1674, at Raigad Fort with great pomp and ceremony. The coronation was performed according to Vedic rites by Pandit Gaga Bhatt from Varanasi, establishing the legitimacy of Hindu rule. This event formalized the Maratha Empire and the concept of Hindavi Swarajya. Shivaji was crowned again in a second ceremony to address religious concerns about the first coronation.",
        image: "images/maharajoath.jpg",
        audioUrl: "https://example.com/audio/shivaji-coronation.mp3",
        virtualTourUrl: "https://example.com/tours/raigad-coronation-site",
        tags: ["Coronation", "Chhatrapati", "Swarajya", "Hindu Empire"],
        keyFigures: ["Chhatrapati Shivaji", "Pandit Gaga Bhatt", "Jijabai"],
        relatedEvents: [1659, 1670, 1680],
        quiz: {
          question: "When was Shivaji Maharaj's coronation?",
          options: ["June 6, 1674", "April 3, 1680", "February 19, 1630", "November 10, 1659"],
          correct: 0,
          explanation: "Shivaji Maharaj was crowned as Chhatrapati on June 6, 1674."
        }
      },
      {
        year: 1659,
        title: "Battle of Pratapgad",
        desc: "Shivaji defeats and kills Afzal Khan of Bijapur Sultanate in a legendary encounter.",
        era: "maratha",
        eraName: "Strategic Victory",
        eraTemp: "Legendary Battle",
        details: "The Battle of Pratapgad (November 10, 1659) is one of the most famous battles in Marathi history. Adil Shah of Bijapur sent his general Afzal Khan to subdue Shivaji. In a dramatic encounter at the foot of Pratapgad fort, Shivaji killed Afzal Khan in a one-on-one meeting using his famous tiger claws (wagh nakh). This victory established Shivaji's reputation as a formidable warrior and strategist, leading to the expansion of Maratha territory.",
        image: "https://images.unsplash.com/photo-1582652976769-ad2be7049c7d?w=800&h=600&fit=crop&auto=format&q=80",
        audioUrl: "https://example.com/audio/pratapgad-battle.mp3",
        virtualTourUrl: "https://example.com/tours/pratapgad-fort",
        tags: ["Pratapgad", "Afzal Khan", "Wagh Nakh", "Strategic Victory"],
        keyFigures: ["Shivaji Maharaj", "Afzal Khan", "Jiva Mahala", "Sambhaji Kavji"],
        relatedEvents: [1645, 1664, 1674],
        quiz: {
          question: "Which weapon did Shivaji use to kill Afzal Khan?",
          options: ["Sword", "Tiger Claws (Wagh Nakh)", "Spear", "Dagger"],
          correct: 1,
          explanation: "Shivaji used tiger claws (wagh nakh) to kill Afzal Khan at Pratapgad."
        }
      },
      {
        year: 1630,
        title: "Birth of Shivaji Maharaj",
        desc: "Birth of future Maratha Empire founder Chhatrapati Shivaji at Shivneri Fort.",
        era: "pre-maratha",
        eraName: "Hero's Birth",
        eraTemp: "Destiny Begins",
        details: "Shivaji Bhosale was born on February 19, 1630 (some sources say 1627), at Shivneri Fort near Junnar to Shahaji Bhosale and Jijabai. His birth during the political turmoil of Deccan sultanates would prove prophetic. Raised by his mother Jijabai with stories of Ramayana and Mahabharata, young Shivaji was inspired by the ideals of dharma and justice. The hill fort of Shivneri, surrounded by the Sahyadri mountains, would shape his guerrilla warfare strategies.",
        image: "images/shivajimaharajbirth.jpg",
        audioUrl: "https://example.com/audio/shivaji-birth.mp3",
        virtualTourUrl: "https://example.com/tours/shivneri-fort",
        tags: ["Birth", "Shivneri Fort", "Jijabai", "Shahaji Bhosale"],
        keyFigures: ["Shivaji Maharaj", "Jijabai", "Shahaji Bhosale", "Dadoji Konddev"],
        relatedEvents: [1645, 1659, 1674],
        quiz: {
          question: "Where was Shivaji Maharaj born?",
          options: ["Pune", "Shivneri Fort", "Raigad Fort", "Rajgad Fort"],
          correct: 1,
          explanation: "Shivaji Maharaj was born at Shivneri Fort near Junnar."
        }
      }
    ];

    // Enhanced achievements system
    this.achievements = [
      {
        id: "explorer",
        name: "Time Explorer",
        description: "Visit 10 different historical events",
        icon: "🗓️",
        requirement: 10,
        progress: 0,
        unlocked: false,
        points: 100
      },
      {
        id: "scholar",
        name: "History Scholar",
        description: "Score 80% or above in 5 quizzes",
        icon: "🎓",
        requirement: 5,
        progress: 0,
        unlocked: false,
        points: 150
      },
      {
        id: "marathaExpert",
        name: "Maratha Empire Expert",
        description: "Explore all Maratha era events",
        icon: "👑",
        requirement: 8,
        progress: 0,
        unlocked: false,
        points: 200
      },
      {
        id: "quizMaster",
        name: "Quiz Master",
        description: "Complete 15 quizzes with perfect scores",
        icon: "🏆",
        requirement: 15,
        progress: 0,
        unlocked: false,
        points: 300
      },
      {
        id: "bookworm",
        name: "Digital Bookworm",
        description: "Bookmark 5 different events",
        icon: "🔖",
        requirement: 5,
        progress: 0,
        unlocked: false,
        points: 75
      }
    ];

    // Application state
    this.currentEventIndex = 0;
    this.isLoading = true;
    this.currentEra = 'modern';
    this.animationSpeed = 'normal';
    this.soundEnabled = true;
    this.parallaxEnabled = true;
    this.theme = 'auto';
    this.bookmarkedEvents = new Set();
    this.personalNotes = new Map();
    this.userProgress = {
      eventsVisited: new Set(),
      quizzesCompleted: new Set(),
      totalScore: 0,
      timeSpent: 0,
      sessionStart: Date.now()
    };

    // DOM elements cache
    this.elements = {};
    
    // Initialize application with comprehensive error handling
    this.init().catch(error => this.handleCriticalError(error));
  }

  // Enhanced initialization
  async init() {
    try {
      // Wait for dependencies
      await this.waitForDependencies();
      
      // Cache DOM elements
      this.cacheElements();
      this.validateCriticalElements();
      
      // Initialize loading screen
      this.initLoadingScreen();
      
      // Load user data
      this.loadUserData();
      
      // Initialize features after loading
      setTimeout(async () => {
        try {
          await this.hideLoadingScreen();
          await this.initializeAllFeatures();
        } catch (error) {
          this.handleInitializationError(error);
        }
      }, 3500);
      
    } catch (error) {
      console.error('Failed to initialize application:', error);
      this.showErrorState(error);
    }
  }

  // Wait for dependencies
  waitForDependencies() {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Dependencies failed to load within timeout'));
      }, 10000);

      const checkDependencies = () => {
        if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
          clearTimeout(timeout);
          try {
            gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
            resolve();
          } catch (error) {
            reject(error);
          }
        } else {
          setTimeout(checkDependencies, 100);
        }
      };
      
      checkDependencies();
    });
  }

  // Cache DOM elements
  cacheElements() {
    const selectors = {
      loadingScreen: '.loading-screen',
      loadingProgress: '.loading-progress',
      loadingTipText: '#loading-tip-text',
      yearValue: '#yearValue',
      yearDirection: '#yearDirection',
      eraName: '#eraName',
      eraTemp: '#eraTemp',
      gaugeFill: '#gaugeFill',
      progressFill: '#progressFill',
      currentEvent: '#currentEvent',
      totalEvents: '#totalEvents',
      visualContainer: '#visualContainer',
      elevatorSidebar: '#elevatorSidebar',
      timelineSection: '#timelineSection',
      timelineContainer: '#timelineContainer',
      settingsPanel: '#settingsPanel',
      eventModal: '#eventModal',
      notesModal: '#notesModal',
      achievementsPanel: '#achievementsPanel',
      searchPanel: '#searchPanel',
      quizModePanel: '#quizModePanel',
      miniMap: '#miniMap',
      miniMapContent: '#miniMapContent',
      miniMapEvents: '#miniMapEvents',
      miniMapIndicator: '#miniMapIndicator',
      progressDashboard: '#progressDashboard',
      helpOverlay: '#helpOverlay',
      toastContainer: '#toastContainer',
      bookmarksList: '#bookmarksList',
      announcer: '#announcer'
    };

    for (const [key, selector] of Object.entries(selectors)) {
      try {
        this.elements[key] = document.querySelector(selector);
      } catch (error) {
        console.warn(`Error caching element ${key}:`, error);
        this.elements[key] = null;
      }
    }

    // Cache collections
    try {
      this.elements.timelineEvents = document.querySelectorAll('.timeline-event');
      this.elements.imageLayers = document.querySelectorAll('.image-layer');
      this.elements.gaugeMarkers = document.querySelectorAll('.gauge-marker');
    } catch (error) {
      console.warn('Error caching element collections:', error);
    }
  }

  // Validate critical elements
  validateCriticalElements() {
    const critical = ['timelineSection', 'timelineContainer'];
    const missing = critical.filter(key => !this.elements[key]);
    
    if (missing.length > 0) {
      console.warn(`Some elements missing: ${missing.join(', ')}`);
    }
  }

  // Error handling
  handleCriticalError(error) {
    console.error('Critical application error:', error);
    this.showErrorState(error);
  }

  handleInitializationError(error) {
    console.error('Initialization error:', error);
    this.showToast('Some features may not work properly. Please refresh the page.', 'error');
  }

  // Show error state
  showErrorState(error) {
    const errorHtml = `
      <div class="error-state">
        <h1>⚠️ Application Error</h1>
        <p>The Maharashtra History Elevator encountered an unexpected error.</p>
        <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
          <button onclick="window.location.reload()" class="btn btn--primary">Reload Application</button>
        </div>
      </div>
    `;
    
    document.body.innerHTML = errorHtml;
  }

  // Loading screen initialization
  initLoadingScreen() {
    const tips = [
      "Maharashtra means 'Great State' in Sanskrit",
      "Shivaji Maharaj built over 300 forts across the Western Ghats",
      "Mumbai processes 40% of India's foreign trade",
      "Maharashtra has 5 UNESCO World Heritage Sites",
      "The state produces 25% of India's industrial output",
      "Marathi is spoken by over 83 million people worldwide"
    ];
    
    let tipIndex = 0;
    
    if (this.elements.loadingProgress) {
      gsap.to(this.elements.loadingProgress, {
        width: '100%',
        duration: 3.5,
        ease: 'power2.inOut'
      });
    }
    
    const rotateTips = () => {
      if (!this.isLoading || !this.elements.loadingTipText) return;
      
      if (this.elements.loadingTipText) {
        gsap.to(this.elements.loadingTipText, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            this.elements.loadingTipText.textContent = tips[tipIndex];
            tipIndex = (tipIndex + 1) % tips.length;
            gsap.to(this.elements.loadingTipText, { opacity: 1, duration: 0.3 });
          }
        });
      }
    };
    
    rotateTips();
    this.tipInterval = setInterval(rotateTips, 2800);
  }

  // Hide loading screen
  async hideLoadingScreen() {
    if (this.tipInterval) clearInterval(this.tipInterval);
    
    if (this.elements.loadingScreen) {
      await new Promise(resolve => {
        gsap.to(this.elements.loadingScreen, {
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut',
          onComplete: () => {
            this.elements.loadingScreen.classList.add('hidden');
            this.isLoading = false;
            resolve();
          }
        });
      });
    } else {
      this.isLoading = false;
    }
    
    this.showToast('🚀 Welcome to Maharashtra History Elevator Ultimate Edition!', 'success');
  }

  // Initialize all features
  async initializeAllFeatures() {
    try {
      // Generate timeline events first
      await this.generateTimelineEvents();
      
      // Core features
      this.initScrollAnimations();
      this.initEventAnimations();
      this.initImageTransitions();
      this.initProgressTracking();
      
      // Interactive features
      this.initEventModals();
      this.initEnhancedMiniMap();
      this.initControlPanel();
      this.initSettingsPanel();
      this.initAchievementsSystem();
      this.initSearchSystem();
      this.initQuizModeSystem();
      
      // Navigation and accessibility
      this.initKeyboardNavigation();
      this.initTouchGestures();
      this.initAccessibilityFeatures();
      
      // Data and personalization
      this.initThemeSystem();
      this.initBookmarkSystem();
      
      // Initialize particles
      this.initParticles();
      
      this.showToast('All features loaded successfully! 🎉', 'success');
      
    } catch (error) {
      console.error('Error initializing features:', error);
      this.handleInitializationError(error);
    }
  }

  // Generate timeline events
  async generateTimelineEvents() {
    if (!this.elements.timelineContainer) {
      console.error('Timeline container not found');
      return;
    }

    try {
      const fragment = document.createDocumentFragment();
      
      this.events.forEach((event, index) => {
        const eventElement = this.createTimelineEventElement(event, index);
        fragment.appendChild(eventElement);
      });
      
      this.elements.timelineContainer.innerHTML = '';
      this.elements.timelineContainer.appendChild(fragment);
      
      // Update cached elements
      this.elements.timelineEvents = this.elements.timelineContainer.querySelectorAll('.timeline-event');
      
      // Update total events display
      if (this.elements.totalEvents) {
        this.elements.totalEvents.textContent = this.events.length;
      }
      
    } catch (error) {
      console.error('Error generating timeline events:', error);
      throw error;
    }
  }

  // Create timeline event elements
  createTimelineEventElement(event, index) {
    const eventDiv = document.createElement('div');
    eventDiv.className = 'timeline-event clickable';
    eventDiv.setAttribute('data-year', event.year);
    eventDiv.setAttribute('data-era', event.era);
    eventDiv.setAttribute('data-index', index);
    eventDiv.setAttribute('tabindex', '0');
    eventDiv.setAttribute('role', 'button');
    eventDiv.setAttribute('aria-label', `Learn more about ${event.title}`);
    
    const yearDisplay = event.year < 0 ? `${Math.abs(event.year)} BC` : `${event.year} AD`;
    
    eventDiv.innerHTML = `
      <div class="event-marker">
        <span class="marker-dot"></span>
      </div>
      <div class="event-content">
        <div class="event-year">${yearDisplay}</div>
        <h2 class="event-title">${event.title}</h2>
        <p class="event-description">${event.desc}</p>
        <div class="event-tags">
          ${event.tags.map(tag => `<span class="event-tag">${tag}</span>`).join('')}
        </div>
        <div class="event-stats">
          <div class="event-stat">
            <span class="stat-icon">👁️</span>
            <span class="stat-text">Click to explore</span>
          </div>
          <div class="event-stat">
            <span class="stat-icon">🎵</span>
            <span class="stat-text">Audio available</span>
          </div>
          <div class="event-stat">
            <span class="stat-icon">❓</span>
            <span class="stat-text">Quiz ready</span>
          </div>
        </div>
      </div>
    `;
    
    return eventDiv;
  }

  // Initialize scroll animations
  initScrollAnimations() {
    if (!this.elements.timelineEvents || this.elements.timelineEvents.length === 0) {
      console.warn('No timeline events found for scroll animations');
      return;
    }
    
    try {
      const observerOptions = {
        threshold: [0.1, 0.5, 0.9],
        rootMargin: '-10% 0px -10% 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const index = parseInt(element.getAttribute('data-index'));
            
            gsap.fromTo(element, 
              {
                opacity: 0,
                y: 50,
                scale: 0.95
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: 'back.out(1.2)'
              }
            );
            
            element.classList.add('animate-in');
            
            if (entry.intersectionRatio > 0.5) {
              this.updateCurrentEvent(index);
            }
            
          } else {
            entry.target.classList.remove('animate-in');
          }
        });
      }, observerOptions);
      
      this.elements.timelineEvents.forEach(event => {
        observer.observe(event);
      });
      
      this.scrollObserver = observer;
      
    } catch (error) {
      console.error('Error initializing scroll animations:', error);
    }
  }

  // Initialize event animations
  initEventAnimations() {
    if (!this.elements.timelineEvents) return;
    
    try {
      this.elements.timelineEvents.forEach((event, index) => {
        ScrollTrigger.create({
          trigger: event,
          start: 'top 70%',
          end: 'bottom 30%',
          onEnter: () => {
            this.updateCurrentEvent(index);
            this.trackEventView(index);
          },
          onEnterBack: () => {
            this.updateCurrentEvent(index);
          }
        });
      });
      
    } catch (error) {
      console.error('Error initializing event animations:', error);
    }
  }

  // Track event views
  trackEventView(index) {
    try {
      if (!this.userProgress.eventsVisited.has(index)) {
        this.userProgress.eventsVisited.add(index);
        this.updateProgressDisplay();
      }
    } catch (error) {
      console.error('Error tracking event view:', error);
    }
  }
updateCurrentEvent(index) {
    if (this.isLoading || index === this.currentEventIndex) return;
    this.currentEventIndex = index;
    const event = this.events[index];
    this.animateYearChange(event.year);
    this.updateEraGauge(event);
    this.updateTimelineBackground(event.era);
    this.updateActiveImage(event.era);
  }
animateYearChange(targetYear) {
  const yearValue = this.elements.yearValue;
  if (!yearValue) return;

  const currentText = yearValue.textContent.trim();
  let currentYear = parseInt(currentText.replace(' AD', '').replace(' BC', ''));
  if (isNaN(currentYear)) currentYear = targetYear; // fallback

  const step = targetYear > currentYear ? 1 : -1;

  let tl = gsap.timeline();
  for (let y = currentYear; step > 0 ? y <= targetYear : y >= targetYear; y += step) {
    tl.to({ value: y }, {
      value: y,
      duration: 0.01,
      onUpdate: function() {
        let displayYear = Math.round(this.targets()[0].value);
        yearValue.textContent = displayYear < 0 ? Math.abs(displayYear) + " BC" : displayYear + " AD";
      }
    });
  }

  tl.to(yearValue, { textShadow: '0 0 30px rgba(240, 193, 75, 0.8)', duration: 0.3, yoyo: true, repeat: 1 });
}

  initImageTransitions() {
    if (!this.elements.imageLayers) return;
    
    try {
      this.elements.imageLayers.forEach((layer, index) => {
        if (index === 0) {
          layer.classList.add('active');
          gsap.set(layer, { opacity: 1 });
        } else {
          layer.classList.remove('active');
          gsap.set(layer, { opacity: 0 });
        }
        
        const img = layer.querySelector('img');
        if (img) {
          layer.addEventListener('mouseenter', () => {
            gsap.to(img, { 
              scale: 1.02, 
              filter: 'brightness(1.1) saturate(1.2)',
              duration: 0.5, 
              ease: 'power2.out' 
            });
          });
          
          layer.addEventListener('mouseleave', () => {
            gsap.to(img, { 
              scale: 1,
              filter: 'sepia(10%) saturate(1.1) brightness(0.9) contrast(1.1)',
              duration: 0.5, 
              ease: 'power2.out' 
            });
          });
        }
      });
      
    } catch (error) {
      console.error('Error initializing image transitions:', error);
    }
  }

  // Initialize progress tracking
  initProgressTracking() {
    if (!this.elements.timelineContainer || !this.elements.progressFill) return;
    
    try {
      ScrollTrigger.create({
        trigger: this.elements.timelineContainer,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const progress = Math.min(Math.max(self.progress * 100, 0), 100);
          
          gsap.to(this.elements.progressFill, {
            width: `${progress}%`,
            duration: 0.2,
            ease: 'power2.out'
          });
        }
      });
      
    } catch (error) {
      console.error('Error initializing progress tracking:', error);
    }
  }

  // Update progress stats
  updateProgressStats(currentIndex) {
    try {
      if (this.elements.currentEvent && this.elements.totalEvents) {
        this.elements.currentEvent.textContent = currentIndex + 1;
        this.elements.totalEvents.textContent = this.events.length;
      }
      
      const viewedEvents = document.getElementById('viewedEvents');
      const bookmarkedCount = document.getElementById('bookmarkedCount');
      
      if (viewedEvents) {
        viewedEvents.textContent = this.userProgress.eventsVisited.size;
      }
      if (bookmarkedCount) {
        bookmarkedCount.textContent = this.bookmarkedEvents.size;
      }
      
    } catch (error) {
      console.error('Error updating progress stats:', error);
    }
  }

  // Update progress display
  updateProgressDisplay() {
    this.updateProgressStats(this.currentEventIndex);
  }

  // Initialize event modals
  initEventModals() {
    if (!this.elements.timelineEvents || !this.elements.eventModal) return;
    
    try {
      // Add click listeners to timeline events
      this.elements.timelineEvents.forEach((event, index) => {
        event.addEventListener('click', () => this.showEventModal(index));
        event.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.showEventModal(index);
          }
        });
      });
      
      // Modal close handlers
      const closeModal = () => this.hideEventModal();
      const modalClose = this.elements.eventModal.querySelector('.modal-close');
      const modalOverlay = this.elements.eventModal.querySelector('.modal-overlay');
      
      if (modalClose) modalClose.addEventListener('click', closeModal);
      if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
      
      // ESC key handler
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !this.elements.eventModal.classList.contains('hidden')) {
          closeModal();
        }
      });
      
      // Initialize modal tabs
      this.initModalTabs();
      
    } catch (error) {
      console.error('Error initializing event modals:', error);
    }
  }

  // Initialize modal tabs
  initModalTabs() {
    const tabs = this.elements.eventModal?.querySelectorAll('.modal-tab');
    const panels = this.elements.eventModal?.querySelectorAll('.tab-panel');
    
    if (tabs && panels) {
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const targetTab = tab.getAttribute('data-tab');
          
          // Update active tab
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          
          // Update active panel
          panels.forEach(panel => {
            panel.classList.remove('active');
            if (panel.id === `${targetTab}-panel`) {
              panel.classList.add('active');
            }
          });
        });
      });
    }
  }

  // Show event modal
  showEventModal(index) {
    const event = this.events[index];
    if (!event || !this.elements.eventModal) return;
    
    try {
      // Populate modal content
      this.populateModalContent(event, index);
      
      // Show modal
      this.elements.eventModal.classList.remove('hidden');
      this.elements.eventModal.setAttribute('aria-hidden', 'false');
      
      // Focus management
      setTimeout(() => {
        const firstFocusable = this.elements.eventModal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (firstFocusable) firstFocusable.focus();
      }, 100);
      
    } catch (error) {
      console.error('Error showing event modal:', error);
    }
  }

  // Populate modal content
  populateModalContent(event, index) {
    try {
      const elements = {
        title: this.elements.eventModal.querySelector('#eventModalTitle'),
        image: this.elements.eventModal.querySelector('#eventModalImage'),
        year: this.elements.eventModal.querySelector('#eventModalYear'),
        era: this.elements.eventModal.querySelector('#eventModalEra'),
        description: this.elements.eventModal.querySelector('#eventModalDescription'),
        details: this.elements.eventModal.querySelector('#eventModalDetails'),
        tags: this.elements.eventModal.querySelector('#eventModalTags'),
        keyFigures: this.elements.eventModal.querySelector('#eventModalKeyFigures')
      };
      
      if (elements.title) elements.title.textContent = event.title;
      if (elements.image) {
        elements.image.src = event.image;
        elements.image.alt = event.title;
      }
      if (elements.year) elements.year.textContent = event.year < 0 ? `${Math.abs(event.year)} BC` : `${event.year} AD`;
      if (elements.era) elements.era.textContent = event.eraName;
      if (elements.description) elements.description.textContent = event.desc;
      if (elements.details) elements.details.textContent = event.details;
      
      // Populate tags
      if (elements.tags && event.tags) {
        elements.tags.innerHTML = event.tags.map(tag => 
          `<span class="modal-tag">${tag}</span>`
        ).join('');
      }
      
      // Populate key figures
      if (elements.keyFigures && event.keyFigures) {
        elements.keyFigures.innerHTML = `
          <h4>Key Historical Figures</h4>
          <p>${event.keyFigures.join(', ')}</p>
        `;
      }
      
      // Setup quiz
      this.setupModalQuiz(event.quiz);
      
      // Setup action buttons
      this.setupModalActions(index);
      
    } catch (error) {
      console.error('Error populating modal content:', error);
    }
  }

  // Setup modal quiz
  setupModalQuiz(quiz) {
    if (!quiz) return;
    
    try {
      const quizContainer = this.elements.eventModal.querySelector('#quizContainer');
      const questionEl = this.elements.eventModal.querySelector('#quizQuestion');
      const optionsEl = this.elements.eventModal.querySelector('#quizOptions');
      const resultEl = this.elements.eventModal.querySelector('#quizResult');
      const submitBtn = this.elements.eventModal.querySelector('#submitQuizBtn');
      
      if (questionEl) questionEl.textContent = quiz.question;
      
      if (optionsEl) {
        optionsEl.innerHTML = quiz.options.map((option, index) => 
          `<div class="quiz-option" data-index="${index}">${option}</div>`
        ).join('');
        
        // Add option click handlers
        optionsEl.querySelectorAll('.quiz-option').forEach(option => {
          option.addEventListener('click', () => {
            optionsEl.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
          });
        });
      }
      
      if (submitBtn) {
        submitBtn.onclick = () => this.submitQuiz(quiz, optionsEl, resultEl);
      }
      
    } catch (error) {
      console.error('Error setting up modal quiz:', error);
    }
  }

  // Submit quiz
  submitQuiz(quiz, optionsEl, resultEl) {
    try {
      const selected = optionsEl?.querySelector('.quiz-option.selected');
      if (!selected) {
        this.showToast('Please select an answer first!', 'info');
        return;
      }
      
      const selectedIndex = parseInt(selected.getAttribute('data-index'));
      const isCorrect = selectedIndex === quiz.correct;
      
      // Show results
      optionsEl.querySelectorAll('.quiz-option').forEach((option, index) => {
        if (index === quiz.correct) {
          option.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
          option.classList.add('incorrect');
        }
      });
      
      if (resultEl) {
        resultEl.innerHTML = `
          <div class="quiz-result ${isCorrect ? 'correct' : 'incorrect'}">
            <strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</strong>
            <p>${quiz.explanation}</p>
          </div>
        `;
        resultEl.classList.remove('hidden');
      }
      
      // Track quiz completion
      if (isCorrect) {
        this.userProgress.totalScore += 10;
        this.showToast('🎉 Correct! +10 points', 'success');
      } else {
        this.showToast('Try again! Check the explanation.', 'info');
      }
      
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  }

  // Setup modal actions
  setupModalActions(index) {
    try {
      const shareBtn = this.elements.eventModal.querySelector('#shareEvent');
      const bookmarkBtn = this.elements.eventModal.querySelector('#bookmarkEvent');
      const notesBtn = this.elements.eventModal.querySelector('#addNotesBtn');
      
      if (shareBtn) {
        shareBtn.onclick = () => this.shareEvent(this.events[index]);
      }
      
      if (bookmarkBtn) {
        const isBookmarked = this.bookmarkedEvents.has(index);
        bookmarkBtn.textContent = isBookmarked ? '🔖 Remove Bookmark' : '🔖 Bookmark';
        bookmarkBtn.onclick = () => this.toggleBookmark(index);
      }
      
      if (notesBtn) {
        notesBtn.onclick = () => this.showNotesModal(index);
      }
      
    } catch (error) {
      console.error('Error setting up modal actions:', error);
    }
  }

  // Hide event modal
  hideEventModal() {
    if (!this.elements.eventModal) return;
    
    this.elements.eventModal.classList.add('hidden');
    this.elements.eventModal.setAttribute('aria-hidden', 'true');
  }

  // Initialize enhanced mini-map
  initEnhancedMiniMap() {
    if (!this.elements.miniMap || !this.elements.miniMapEvents) return;
    
    try {
      // Create mini-map events
      this.events.forEach((event, index) => {
        const miniEvent = document.createElement('div');
        miniEvent.className = 'mini-map-event';
        miniEvent.textContent = `${event.year < 0 ? Math.abs(event.year) + ' BC' : event.year + ' AD'} - ${event.title}`;
        miniEvent.addEventListener('click', () => this.navigateToEvent(index));
        this.elements.miniMapEvents.appendChild(miniEvent);
      });
      
      // Toggle mini-map
      const toggle = document.getElementById('miniMapToggle');
      if (toggle) {
        toggle.addEventListener('click', () => {
          this.elements.miniMap.classList.toggle('expanded');
        });
      }
      
      // Zoom controls
      const zoomIn = document.getElementById('zoomInBtn');
      const zoomOut = document.getElementById('zoomOutBtn');
      
      if (zoomIn) {
        zoomIn.addEventListener('click', () => {
          this.showToast('Zoom functionality coming soon!', 'info');
        });
      }
      
      if (zoomOut) {
        zoomOut.addEventListener('click', () => {
          this.showToast('Zoom functionality coming soon!', 'info');
        });
      }
      
    } catch (error) {
      console.error('Error initializing enhanced mini-map:', error);
    }
  }

  // Navigate to event
  navigateToEvent(index) {
    try {
      const targetEvent = this.elements.timelineEvents?.[index];
      if (targetEvent) {
        gsap.to(window, {
          scrollTo: {
            y: targetEvent,
            offsetY: -100
          },
          duration: 1.5,
          ease: 'power2.inOut'
        });
        
        this.showToast(`Navigated to ${this.events[index].title}`, 'info');
      }
    } catch (error) {
      console.error('Error navigating to event:', error);
    }
  }

  // Update mini-map indicator
  updateMiniMapIndicator(index) {
    try {
      const miniEvents = this.elements.miniMapEvents?.querySelectorAll('.mini-map-event');
      const indicator = this.elements.miniMapIndicator;
      
      if (miniEvents && indicator) {
        miniEvents.forEach((event, i) => {
          event.classList.toggle('active', i === index);
        });
        
        const topPosition = (index / this.events.length) * 100;
        gsap.to(indicator, {
          top: `${topPosition}%`,
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    } catch (error) {
      console.error('Error updating mini-map indicator:', error);
    }
  }

  // Initialize control panel
  initControlPanel() {
    try {
      // Settings button
      const settingsBtn = document.getElementById('settingsBtn');
      if (settingsBtn) {
        settingsBtn.addEventListener('click', () => this.toggleSettings());
      }
      
      // Achievements button
      const achievementsBtn = document.getElementById('achievementsBtn');
      if (achievementsBtn) {
        achievementsBtn.addEventListener('click', () => this.toggleAchievements());
      }
      
      // Search button
      const searchBtn = document.getElementById('searchBtn');
      if (searchBtn) {
        searchBtn.addEventListener('click', () => this.toggleSearch());
      }
      
      // Quiz mode button
      const quizModeBtn = document.getElementById('quizModeBtn');
      if (quizModeBtn) {
        quizModeBtn.addEventListener('click', () => this.toggleQuizMode());
      }
      
      // Theme toggle
      const themeToggle = document.getElementById('themeToggle');
      if (themeToggle) {
        themeToggle.addEventListener('click', () => this.toggleTheme());
      }
      
      // Sound toggle
      const soundToggle = document.getElementById('soundToggle');
      if (soundToggle) {
        soundToggle.addEventListener('click', () => this.toggleSound());
      }
      
      // Help button
      const helpBtn = document.getElementById('helpBtn');
      if (helpBtn) {
        helpBtn.addEventListener('click', () => this.showHelp());
      }
      
    } catch (error) {
      console.error('Error initializing control panel:', error);
    }
  }

  // Toggle settings
  toggleSettings() {
    if (this.elements.settingsPanel) {
      this.elements.settingsPanel.classList.toggle('hidden');
    }
  }

  // Toggle achievements
  toggleAchievements() {
    if (this.elements.achievementsPanel) {
      this.elements.achievementsPanel.classList.toggle('hidden');
      if (!this.elements.achievementsPanel.classList.contains('hidden')) {
        this.updateAchievementsDisplay();
      }
    }
  }

  // Toggle search
  toggleSearch() {
    if (this.elements.searchPanel) {
      this.elements.searchPanel.classList.toggle('hidden');
    }
  }

  // Toggle quiz mode
  toggleQuizMode() {
    if (this.elements.quizModePanel) {
      this.elements.quizModePanel.classList.toggle('hidden');
    }
  }

  // Show help
  showHelp() {
    if (this.elements.helpOverlay) {
      this.elements.helpOverlay.classList.remove('hidden');
    }
  }

  // Initialize settings panel
  initSettingsPanel() {
    if (!this.elements.settingsPanel) return;
    
    try {
      // Close settings
      const closeBtn = document.getElementById('closeSettings');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.toggleSettings());
      }
      
      // Theme select
      const themeSelect = document.getElementById('themeSelect');
      if (themeSelect) {
        themeSelect.value = this.theme;
        themeSelect.addEventListener('change', (e) => {
          this.theme = e.target.value;
          this.applyTheme();
          this.saveUserData();
        });
      }
      
      // Animation speed
      const speedSelect = document.getElementById('animationSpeed');
      if (speedSelect) {
        speedSelect.value = this.animationSpeed;
        speedSelect.addEventListener('change', (e) => {
          this.animationSpeed = e.target.value;
          this.applyAnimationSpeed();
          this.saveUserData();
        });
      }
      
      // Sound effects toggle
      const soundCheck = document.getElementById('soundEffects');
      if (soundCheck) {
        soundCheck.checked = this.soundEnabled;
        soundCheck.addEventListener('change', (e) => {
          this.soundEnabled = e.target.checked;
          this.saveUserData();
        });
      }
      
      // Parallax effects toggle
      const parallaxCheck = document.getElementById('parallaxEffects');
      if (parallaxCheck) {
        parallaxCheck.checked = this.parallaxEnabled;
        parallaxCheck.addEventListener('change', (e) => {
          this.parallaxEnabled = e.target.checked;
          this.saveUserData();
        });
      }
      
    } catch (error) {
      console.error('Error initializing settings panel:', error);
    }
  }

  // Initialize achievements system
  initAchievementsSystem() {
    try {
      // Close achievements
      const closeBtn = document.getElementById('closeAchievements');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.toggleAchievements());
      }
      
      this.updateAchievementsDisplay();
      
    } catch (error) {
      console.error('Error initializing achievements system:', error);
    }
  }

  // Update achievements display
  updateAchievementsDisplay() {
    try {
      const achievementsList = document.getElementById('achievementsList');
      const totalScore = document.getElementById('totalScore');
      const eventsVisited = document.getElementById('eventsVisited');
      
      if (totalScore) totalScore.textContent = this.userProgress.totalScore;
      if (eventsVisited) eventsVisited.textContent = this.userProgress.eventsVisited.size;
      
      if (achievementsList) {
        achievementsList.innerHTML = this.achievements.map(achievement => `
          <div class="achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}">
            <div class="achievement-header">
              <div class="achievement-icon">${achievement.icon}</div>
              <div class="achievement-name">${achievement.name}</div>
            </div>
            <div class="achievement-description">${achievement.description}</div>
            <div class="achievement-progress">
              <div class="achievement-progress-fill" style="width: ${(achievement.progress / achievement.requirement) * 100}%"></div>
            </div>
          </div>
        `).join('');
      }
      
    } catch (error) {
      console.error('Error updating achievements display:', error);
    }
  }

  // Initialize search system
  initSearchSystem() {
    try {
      // Close search
      const closeBtn = document.getElementById('closeSearch');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.toggleSearch());
      }
      
      // Search input
      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          this.performSearch(e.target.value);
        });
      }
      
      // Voice search
      const voiceSearchBtn = document.getElementById('voiceSearchBtn');
      if (voiceSearchBtn) {
        voiceSearchBtn.addEventListener('click', () => {
          this.showToast('Voice search coming soon!', 'info');
        });
      }
      
    } catch (error) {
      console.error('Error initializing search system:', error);
    }
  }

  // Perform search
  performSearch(query) {
    try {
      if (!query || query.length < 2) return;
      
      const results = this.events.filter(event => 
        event.title.toLowerCase().includes(query.toLowerCase()) ||
        event.desc.toLowerCase().includes(query.toLowerCase()) ||
        event.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
      
      const searchResults = document.getElementById('searchResults');
      if (searchResults) {
        searchResults.innerHTML = results.map((event, originalIndex) => `
          <div class="search-result-item" data-index="${this.events.indexOf(event)}">
            <strong>${event.title}</strong> (${event.year < 0 ? Math.abs(event.year) + ' BC' : event.year + ' AD'})
            <p>${event.desc}</p>
          </div>
        `).join('');
        
        // Add click handlers
        searchResults.querySelectorAll('.search-result-item').forEach(item => {
          item.addEventListener('click', () => {
            const index = parseInt(item.getAttribute('data-index'));
            this.navigateToEvent(index);
            this.toggleSearch();
          });
        });
      }
      
    } catch (error) {
      console.error('Error performing search:', error);
    }
  }

  // Initialize quiz mode system
  initQuizModeSystem() {
    try {
      // Close quiz mode
      const closeBtn = document.getElementById('closeQuizMode');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.toggleQuizMode());
      }
      
    } catch (error) {
      console.error('Error initializing quiz mode system:', error);
    }
  }

  // Initialize keyboard navigation
  initKeyboardNavigation() {
    try {
      document.addEventListener('keydown', (e) => {
        if (this.isLoading) return;
        
        // Don't interfere with modal or panel interactions
        if (!this.elements.eventModal?.classList.contains('hidden') || 
            !this.elements.settingsPanel?.classList.contains('hidden')) return;
        
        switch(e.key) {
          case 'ArrowUp':
          case 'w':
          case 'W':
            this.navigateToEvent(Math.max(0, this.currentEventIndex - 1));
            e.preventDefault();
            break;
          case 'ArrowDown':
          case 's':
          case 'S':
            this.navigateToEvent(Math.min(this.events.length - 1, this.currentEventIndex + 1));
            e.preventDefault();
            break;
          case 'Home':
            this.navigateToEvent(0);
            e.preventDefault();
            break;
          case 'End':
            this.navigateToEvent(this.events.length - 1);
            e.preventDefault();
            break;
          case 'Enter':
          case ' ':
            if (document.activeElement?.classList.contains('timeline-event')) {
              const index = Array.from(this.elements.timelineEvents).indexOf(document.activeElement);
              if (index >= 0) this.showEventModal(index);
              e.preventDefault();
            }
            break;
          case '/':
            this.toggleSearch();
            e.preventDefault();
            break;
          case '?':
            this.showHelp();
            e.preventDefault();
            break;
          case 'Escape':
            // Close any open panels
            this.hideAllPanels();
            break;
        }
      });
      
    } catch (error) {
      console.error('Error initializing keyboard navigation:', error);
    }
  }

  // Hide all panels
  hideAllPanels() {
    try {
      [
        this.elements.eventModal,
        this.elements.settingsPanel,
        this.elements.achievementsPanel,
        this.elements.searchPanel,
        this.elements.quizModePanel,
        this.elements.helpOverlay
      ].forEach(panel => {
        if (panel && !panel.classList.contains('hidden')) {
          panel.classList.add('hidden');
        }
      });
    } catch (error) {
      console.error('Error hiding panels:', error);
    }
  }

  // Initialize touch gestures
  initTouchGestures() {
    try {
      let touchStartY = 0;
      let touchStartTime = 0;
      
      document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
      }, { passive: true });
      
      document.addEventListener('touchend', (e) => {
        if (this.isLoading) return;
        
        const touchEndY = e.changedTouches[0].clientY;
        const touchEndTime = Date.now();
        const deltaY = touchStartY - touchEndY;
        const deltaTime = touchEndTime - touchStartTime;
        
        if (Math.abs(deltaY) > 50 && deltaTime < 500) {
          if (deltaY > 0) {
            this.navigateToEvent(Math.min(this.events.length - 1, this.currentEventIndex + 1));
          } else {
            this.navigateToEvent(Math.max(0, this.currentEventIndex - 1));
          }
        }
      });
      
    } catch (error) {
      console.error('Error initializing touch gestures:', error);
    }
  }

  // Initialize accessibility features
  initAccessibilityFeatures() {
    try {
      // Add skip link if it doesn't exist
      if (!document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#timelineContainer';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
      
      // Enhanced focus management
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('using-keyboard');
        }
      });
      
      document.addEventListener('mousedown', () => {
        document.body.classList.remove('using-keyboard');
      });
      
    } catch (error) {
      console.error('Error initializing accessibility features:', error);
    }
  }

  // Theme system
  initThemeSystem() {
    this.applyTheme();
  }

  toggleTheme() {
    const themes = ['auto', 'light', 'dark'];
    const currentIndex = themes.indexOf(this.theme);
    this.theme = themes[(currentIndex + 1) % themes.length];
    this.applyTheme();
    this.saveUserData();
    this.showToast(`Theme changed to ${this.theme}`, 'info');
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      const icons = { auto: '🌓', light: '☀️', dark: '🌙' };
      themeToggle.textContent = icons[this.theme] || '🌓';
    }
  }

  applyAnimationSpeed() {
    const speeds = { slow: 2, normal: 1, fast: 0.5 };
    document.documentElement.style.setProperty('--animation-speed-multiplier', speeds[this.animationSpeed]);
  }

  // Sound system
  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    this.saveUserData();
    
    const soundToggle = document.getElementById('soundToggle');
    if (soundToggle) {
      soundToggle.textContent = this.soundEnabled ? '🔊' : '🔇';
    }
    
    this.showToast(`Sound ${this.soundEnabled ? 'enabled' : 'disabled'}`, 'info');
  }

  playTransitionSound() {
    if (!this.soundEnabled) return;
    
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      // Fallback - no sound if Web Audio API is not supported
    }
  }

  // Bookmark system
  initBookmarkSystem() {
    this.updateBookmarksList();
  }

  toggleBookmark(index) {
    if (this.bookmarkedEvents.has(index)) {
      this.bookmarkedEvents.delete(index);
      this.showToast('Bookmark removed', 'info');
    } else {
      this.bookmarkedEvents.add(index);
      this.showToast('Event bookmarked!', 'success');
    }
    
    this.saveUserData();
    this.updateBookmarksList();
  }

  updateBookmarksList() {
    if (!this.elements.bookmarksList) return;
    
    try {
      if (this.bookmarkedEvents.size === 0) {
        this.elements.bookmarksList.innerHTML = '<p class="bookmarks-empty">No bookmarked events yet. Click the bookmark icon on any event!</p>';
        return;
      }
      
      this.elements.bookmarksList.innerHTML = '';
      
      Array.from(this.bookmarkedEvents).sort().forEach(index => {
        const event = this.events[index];
        if (event) {
          const bookmarkItem = document.createElement('div');
          bookmarkItem.className = 'bookmark-item';
          bookmarkItem.innerHTML = `
            <div style="font-weight: 500;">${event.title}</div>
            <div style="font-size: 0.75rem; color: var(--elevator-text-muted);">${event.year < 0 ? Math.abs(event.year) + ' BC' : event.year + ' AD'}</div>
          `;
          bookmarkItem.addEventListener('click', () => this.navigateToEvent(index));
          this.elements.bookmarksList.appendChild(bookmarkItem);
        }
      });
      
    } catch (error) {
      console.error('Error updating bookmarks list:', error);
    }
  }

  // Show notes modal
  showNotesModal(index) {
    if (!this.elements.notesModal) return;
    
    try {
      const event = this.events[index];
      const titleEl = this.elements.notesModal.querySelector('#notesModalTitle');
      const textareaEl = this.elements.notesModal.querySelector('#personalNotes');
      
      if (titleEl) {
        titleEl.textContent = `Notes: ${event.title}`;
      }
      
      if (textareaEl) {
        textareaEl.value = this.personalNotes.get(index) || '';
      }
      
      // Setup save button
      const saveBtn = this.elements.notesModal.querySelector('#saveNotesBtn');
      if (saveBtn) {
        saveBtn.onclick = () => {
          if (textareaEl) {
            this.personalNotes.set(index, textareaEl.value);
            this.saveUserData();
            this.hideNotesModal();
            this.showToast('Notes saved!', 'success');
          }
        };
      }
      
      // Setup cancel button
      const cancelBtn = this.elements.notesModal.querySelector('#cancelNotesBtn');
      if (cancelBtn) {
        cancelBtn.onclick = () => this.hideNotesModal();
      }
      
      // Setup close button
      const closeBtn = this.elements.notesModal.querySelector('.modal-close');
      if (closeBtn) {
        closeBtn.onclick = () => this.hideNotesModal();
      }
      
      this.elements.notesModal.classList.remove('hidden');
      
    } catch (error) {
      console.error('Error showing notes modal:', error);
    }
  }

  // Hide notes modal
  hideNotesModal() {
    if (this.elements.notesModal) {
      this.elements.notesModal.classList.add('hidden');
    }
  }

  // Share event
  shareEvent(event) {
    try {
      if (navigator.share) {
        navigator.share({
          title: `Maharashtra History: ${event.title}`,
          text: event.desc,
          url: window.location.href
        }).catch(console.error);
      } else {
        const shareText = `Check out this historical event: ${event.title} (${event.year < 0 ? Math.abs(event.year) + ' BC' : event.year + ' AD'}) - ${event.desc}`;
        
        navigator.clipboard.writeText(shareText).then(() => {
          this.showToast('Event details copied to clipboard!', 'success');
        }).catch(() => {
          this.showToast('Sharing not supported', 'error');
        });
      }
    } catch (error) {
      console.error('Error sharing event:', error);
    }
  }

  // Initialize particles
  initParticles() {
    try {
      const particlesContainer = document.getElementById('particlesContainer');
      if (!particlesContainer) return;
      
      const particles = particlesContainer.querySelectorAll('.particle');
      particles.forEach(particle => {
        const delay = Math.random() * 10;
        const duration = 15 + Math.random() * 20;
        const startX = Math.random() * 100;
        
        particle.style.setProperty('--delay', `${delay}s`);
        particle.style.setProperty('--duration', `${duration}s`);
        particle.style.left = `${startX}%`;
      });
    } catch (error) {
      console.error('Error initializing particles:', error);
    }
  }

  // User data management
  loadUserData() {
    try {
      const saved = localStorage.getItem('maharashtra-history-data');
      if (saved) {
        const data = JSON.parse(saved);
        this.theme = data.theme || 'auto';
        this.animationSpeed = data.animationSpeed || 'normal';
        this.soundEnabled = data.soundEnabled !== false;
        this.parallaxEnabled = data.parallaxEnabled !== false;
        this.bookmarkedEvents = new Set(data.bookmarkedEvents || []);
        this.personalNotes = new Map(data.personalNotes || []);
        this.userProgress = { ...this.userProgress, ...(data.userProgress || {}) };
      }
    } catch (error) {
      console.warn('Failed to load user data:', error);
    }
  }

  saveUserData() {
    try {
      const data = {
        theme: this.theme,
        animationSpeed: this.animationSpeed,
        soundEnabled: this.soundEnabled,
        parallaxEnabled: this.parallaxEnabled,
        bookmarkedEvents: Array.from(this.bookmarkedEvents),
        personalNotes: Array.from(this.personalNotes.entries()),
        userProgress: this.userProgress
      };
      localStorage.setItem('maharashtra-history-data', JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save user data:', error);
    }
  }

  // Toast notification system
  showToast(message, type = 'info', duration = 4000) {
    if (!this.elements.toastContainer) return;
    
    try {
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      toast.innerHTML = `
        <span class="toast-message">${message}</span>
        <button class="toast-close" aria-label="Close notification">×</button>
      `;
      
      this.elements.toastContainer.appendChild(toast);
      
      const closeBtn = toast.querySelector('.toast-close');
      closeBtn?.addEventListener('click', () => this.hideToast(toast));
      
      const timer = setTimeout(() => this.hideToast(toast), duration);
      
      requestAnimationFrame(() => {
        toast.classList.add('show');
      });
      
      return { toast, timer };
    } catch (error) {
      console.error('Error showing toast:', error);
    }
  }

  hideToast(toast) {
    if (!toast || !toast.parentNode) return;
    
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }

  // Screen reader announcements
  announceToScreenReader(message) {
    if (!this.elements.announcer) return;
    
    try {
      this.elements.announcer.textContent = message;
      
      setTimeout(() => {
        if (this.elements.announcer) {
          this.elements.announcer.textContent = '';
        }
      }, 1000);
    } catch (error) {
      console.error('Error announcing to screen reader:', error);
    }
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Add global styles for enhanced interactions
    const style = document.createElement('style');
    style.textContent = `
      .using-keyboard *:focus { outline: 3px solid var(--elevator-gold) !important; }
      .loading { pointer-events: none; position: relative; }
      .loading::after { 
        content: ''; position: absolute; top: 50%; left: 50%; 
        width: 20px; height: 20px; border: 2px solid transparent; 
        border-top-color: var(--elevator-gold); border-radius: 50%; 
        animation: spin 1s infinite linear; transform: translate(-50%, -50%);
      }
      @keyframes spin { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
    `;
    document.head.appendChild(style);
    
    // Initialize the ultimate elevator
    window.maharashtraElevator = new MaharashtraHistoryElevator();
    
  } catch (error) {
    console.error('Failed to initialize Maharashtra History Elevator:', error);
    
    document.body.innerHTML = `
      <div class="error-state">
        <h1>⚠️ Application Error</h1>
        <p>The Maharashtra History Elevator failed to load properly.</p>
        <button onclick="window.location.reload()" class="btn btn--primary">Reload Application</button>
      </div>
    `;
  }
});

// Global error handlers
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MaharashtraHistoryElevator;
}