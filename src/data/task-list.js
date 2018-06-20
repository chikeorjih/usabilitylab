import wires1 from "../assets/pdfs/HMSA_path_to_application.pdf";
import wires2 from "../assets/pdfs/HMSA_provider_search.pdf";
import wires3 from "../assets/pdfs/HMSA_gym_benefit.pdf";

class TaskList {

    static tasks = [
        {
            name: 'HMSA Path to Application',
            summary: 'A user attempts to apply for benefits on hmsa.com',
            description: 'In this task we observed how Hawaii residents and consumers find, study, and select a health insurance plan for themselves (and family, if applicable), starting on HMSA.com.',
            url: 'hmsa-path-to-app',
            completionRate: 10,
            completionBreakdown: [
                {label: 'Success', score: 1},
                {label: '1 Assist', score: 1},
                {label: 'Abandoned', score: 8}
            ],
            completionTotalParticipants: 10,
            easeAverage: {score: 4.1, adjusted: 0.73},
            confidenceAverage: {score: 3.9, adjusted: 0.64},
            firstInteraction: {
                participants: ['female','female','female','male','male'],
                interaction: '5 out of 10 participants started by clicking on "Health Plans" dropdown menu and selecting "Compare Plans"'
            },
            issues: [
                {
                    participants: ['male','male','male'],
                    theme: 'Information overload',
                    severity: 'High'
                },
                {
                    participants: ['female','female','male','female'],
                    theme: 'Terminology & language',
                    severity: 'Medium'
                },
                {
                    participants: ['female','male'],
                    theme: 'Readability & scanabilty',
                    severity: 'Medium'
                },
                {
                    participants: ['female'],
                    theme: 'Mismatch with expectations',
                    severity: 'Medium'
                }
            ],
            analysis: [
                'Of 11 participants who started the path to application (enrollment) on an HMSA.com Web page (e.g; home page, HMSA Health Plans, HMSA Akamai Advantage), 7 immediately navigated to the plan comparison chart for individuals and families.',
                'When participants reflected on the ease in finding and comparing HMSA health plans, those under 65 years rated it “easy to very easy”, and those 65 and older rated it “easy”. Both groups stated they were “confident” that they were on the right path to finding and applying for health insurance on HMSA.com.',
                'That said, of the 7 who immediately navigated to the plan comparison page, only 3 (1 the first day and 2 the second) clicked to enroll online or download the application without any prompting or assistance from the moderator. When we looked at the overall ease and confidence rating from these three participants, those over 65 rated the ease of finding and applying for a Medicare Akamai Advantage plan on HMSA easier and were more confident than those under 65.'
            ],
            recommendations: [
                {
                    description: 'We noticed some trends and pain points after analying how users performed on this task. We have some recommendations in the form of rough wireframed that might help start the discussion on how to better help the customer sucessfully achieve the task',
                    file: wires1,
                    fileName: 'Path to application recommendations (wireframes)'
                }
            ]
        },
        {
            name: 'Find HMSA Gym Benefits',
            summary: 'A user under 65 years of age attempts to learn what gym benefits their HMSA health plan provides',
            description: 'In this task we observed how Hawaii residents and consumers locate information on hmsa.com about the gym or fitness benefits included with their health insurance plan.',
            url: 'hmsa-gym-membership',
            completionRate: 0,
            completionBreakdown: [
                {label: 'Success', score: 0},
                {label: '4 Assist', score: 1},
                {label: 'Abandoned', score: 2}
            ],
            completionTotalParticipants: 3,
            easeAverage: {score: 3.3, adjusted: 0.66},
            confidenceAverage: {score: 4, adjusted: 1.3},
            firstInteraction: {
                participants: ['female','female', 'female'],
                interaction: 'All 3 participants started with Google search. Clicked one of top 3 organic search results - either the PDF result, "Fitness membership - HMSA.com" or the link "Active&Fit® Program - HMSA.com"'
            },
            issues: [
                {
                    participants: ['female','female'],
                    theme: 'Could not locate information they needed about discount or offers',
                    severity: 'Medium-high'
                },
                {
                    participants: ['female','female'],
                    theme: 'Tried to click page content (images, text) assuming it was a link or button',
                    severity: 'Medium-high'
                },
                {
                    participants: ['female'],
                    theme: 'Location & navigation',
                    severity: 'High'
                }
            ],
            analysis: [
                'Three of the 6 participants on day 1 were given the task of finding the gym or fitness center benefits they get with their HMSA health insurance plan. One was able to successfully locate the information, but was unable to determine which fitness centers or gyms she could use. The other two abandoned the task and site before finding the benefit information.',
                'One user who abandoned the task did so when faced with the “Active & Fit” program details (PDF). The other participant who abandoned the task, did so on the “Active & Fit” Web page (https://hmsa.com/well-being/active-and-fit/)when she clicked “1. Find your gym discount”, believing it was a link'
            ],
            recommendations: [
                {
                    description: "The Active&Fit (or Silver&Fit) program details should show the site visitor the gyms, fitness centers, and fitness programs nearest them (using the device location if available). The page can also allow them to enter different addresses/locations, so the visitor can explore what is closest to their work, where they shop, etc.'",
                    file: wires3,
                    fileName: 'Gym benefits recommendations (wireframes)'
                }
            ]
        },
        {
            name: 'Find a Doctor on hmsa.com',
            summary: 'A user over 65 years of age attempts attempts to find their current doctor, or a new doctor, on hmsa.com',
            description: 'In this task we observed how Hawaii residents and consumers search for a doctor who is covered under their HMSA health insurance plan.',
            url: 'hmsa-find-doctor',
            completionRate: 75,
            completionBreakdown: [
                {label: 'Success', score: 3},
                {label: 'Abandoned', score: 1}
            ],
            completionTotalParticipants: 4,
            easeAverage: {score: 3.8, adjusted: 1.8},
            confidenceAverage: {score: 4.3, adjusted: 2.2},
            firstInteraction: {
                participants: ['male','female', 'male'],
                interaction: '3 out of 4 participants started on hmsa.com. Clicked "Find a Doctor" in main (top) navigation.'
            },
            issues: [
                {
                    participants: ['male'],
                    theme: 'Page hard to read or scan',
                    severity: 'Medium-low'
                },
                {
                    participants: ['female'],
                    theme: 'Information overload',
                    severity: 'Medium-low'
                }
            ],
            analysis: [
                'Four of the 6 participants on day 2 were given the task of finding a primary physician who accepts their HMSA health insurance plan. Three were successful locating and using the Find a Doctor search and search results; one abandoned the task.',
                'The participant who abandoned will not use the HMSA site to find a new doctor. Instead, he will ask his friends and family to refer him to doctors they use and then call to find out what insurance that doctor accepts.'
            ],
            recommendations: [
                {
                    description: 'We noticed some trends and pain points after analying how users performed on this task. We have some recommendations in the form of rough wireframed that might help start the discussion on how to better help the customer sucessfully achieve the task',
                    file: wires2,
                    fileName: 'Find a provider recommendations (wireframes)'
                }
            ]
        },
        {
            name: 'Kaiser Permanente Path to Application',
            summary: 'A user attempts to apply for benefits on kpinhawaii.com',
            description: 'In this task we observed how Hawaii residents and consumers find, study, and select a health insurance plan for themselves (and family, if applicable) - starting on kpinhawaii.com.',
            url: 'kp-path-to-app',
            completionRate: 8,
            completionBreakdown: [
                {label: 'Success', score: 3},
                {lAbel: 'Failed', score: 1},
                {label: 'Abandoned', score: 6}
            ],
            completionTotalParticipants: 10,
            easeAverage: {score: 3.5, adjusted: 0.69},
            confidenceAverage: {score: 3.9, adjusted: 0.69},
            firstInteraction: {
                participants: ['female','female','female','female','male','male','female'],
                interaction: '7 out of 10 participants started by clicking on "Shop Our Plans" in main (top) navigation)'
            },
            issues: [
                {
                    participants: ['male','female','female', 'male','female','female','male'],
                    theme: 'Tried to click page content (images, text) assuming it was a link or button',
                    severity: 'Medium'
                },
                {
                    participants: ['female','male','female'],
                    theme: 'Terminology & language',
                    severity: 'Low'
                },
                {
                    participants: ['female','male'],
                    theme: 'Page or content layout',
                    severity: 'High'
                },
                {
                    participants: ['female', 'female'],
                    theme: 'Mismatch with expectations',
                    severity: 'Medium-low'
                }
            ],
            analysis: [
                'When the participants started the path to application on a Kaiser Permanente Web page (e.g; kpinhawaii.com, etc), 8 immediately navigated to the Shop Plans page.  Again, we asked each participant to rate the ease of the task and their level of confidence.',
                'On kpinhawaii.com, those under 65 years found the task slightly less easy than on HMSA.com, but were more confident they were on the right path to finding and applying for a plan. For the participants 65 years and older, they rated finding plans as difficult and were not as confident they were in the right place as they felt on HMSA.com',
                'Of the 7 who navigated to the plan comparison or detail pages, two (1 each day) clicked the “apply” button from one of the plan details page. For kpinhawaii.com, participants under 65 years perceived the ease in finding a plan and deciding to enroll slightly easier and were more confident on average than the participants 65 years and older. In fact, 2 of the 6 participants in the latter group never did find and compare Kaiser Permanente’s Medicare Advantage plans. They only explored the individual and family plans.',
                'For reasons we will discuss in greater detail, the number of individual and family plans, and the amount of information and consumer (mis)understanding of key health insurance terms render the task of shopping for and selecting the right health insurance plan for an individual or household very difficult.'
            ],
            recommendations: []
        },
        {
            name: 'Find Kaiser Permanente Gym Benefits',
            summary: 'A user under 65 years of age attempts attempts to learn what gym benefits their KP health plan provides',
            description: 'In this task we observed how Hawaii residents and consumers locate information on hmsa.com about the gym or fitness benefits included with their health insurance plan.',
            url: 'kp-gym-membership',
            completionRate: 67,
            completionBreakdown: [
                {label: 'Success', score: 2},
                {label: 'Abandoned', score: 1}
            ],
            completionTotalParticipants: 3,
            easeAverage: {score: 3.3, adjusted: 1.7},
            confidenceAverage: {score: 4.7, adjusted: 2.7},
            firstInteraction: {
                participants: ['male','female','male'],
                interaction: 'All 3 participant started with a Google search. Two clicked one of the top 2 organic search results; one looked at what was saved in her browser history.'
            },
            issues: [
                {
                    participants: ['male'],
                    theme: 'Could not locate information they needed about discount or offers',
                    severity: 'High'
                },
                {
                    participants: ['female'],
                    theme: 'Page hard to read or scan',
                    severity: 'High'
                },
                {
                    participants: ['male'],
                    theme: 'Page or content layout',
                    severity: 'Medium'
                }
            ],
            analysis: [
                'Three of the 6 participants on day 1 were given the task of finding the gym or fitness center benefits they get with their Kaiser Permanente health insurance plan. Two were able to successfully locate the information; one abandoned the task and site before finding the benefit information',
                'The user who abandoned the task did so when faced with the wall of text in the 2-page “Kaiser Permanente Fit Rewards Home Fitness Kit Flyer” (PDF). One of the participants who successfully found the gym/fitness center benefit did so using Google search, not the navigation or search on kpinhawaii.com.'
            ],
            recommendations: []
        },
        {
            name: 'Find a Doctor on kpinhawaii.com',
            summary: 'A user over 65 years of age attempts attempts to find their current doctor, or a new doctor, on kpinhawaii.com',
            description: 'In this task we observed how Hawaii residents and consumers search for a doctor who is covered under their Kaiser Permanente health insurance plan.',
            url: 'kp-find-doctor',
            completionRate: 0,
            completionBreakdown: [
                {label: 'Success', score: 0},
                {label: 'Abandoned', score: 2}
            ],
            completionTotalParticipants: 2,
            easeAverage: {score: 1.5, adjusted: 0},
            confidenceAverage: {score: 1.5, adjusted: 0},
            firstInteraction: {
                participants: ['female','female'],
                interaction: 'One started on the "Shop Our Plans" page; the other on the kpinhawaii.com home page. Neither ever found the provider search function.'
            },
            issues: [
                {
                    participants: ['female'],
                    theme: 'Tried to click page content (images, text) assuming it was a link or button',
                    severity: 'Medium'
                },
                {
                    participants: ['female'],
                    theme: 'Location & navigatino',
                    severity: 'High'
                }
            ],
            analysis: [
                'Two of the 6 participants on day 2 were given the task of finding a primary physician who accepts their Kaiser Permanente health insurance plan. Neither were able to successfully locate the information.',
                'In both cases, the Kaiser Permanente doctor search page proved difficult to understand and use. Both participants tried clicking the “Doctors” option under  “Search type” thinking it was a search box. They never scrolled down to see the Search button at the bottom of the page. Both tried clicking “Locations” under “Search type” as well, thinking it will go to a new page. When little happened, they tried clicking on the map but that was difficult to control and navigate, and once they had clicked Locations, they could not see any doctors, just hospitals and clinics'
            ],
            recommendations: []
        }
        
    ];

    static get list() {
        return this.tasks;
    };

    static getCurrentTask(id) {
        return this.tasks.find(task => task.url === id);
    };

    static getShape() {
        return {
            name: null,
            summary: null,
            description: null,
            url: null,
            completionRate: null,
            completionBreakdown: [{label: null, score: null}],
            completionTotalParticipants: null,
            easeAverage: null,
            confidenceAverage: null,
            firstInteraction: {participants: [], interaction: null},
            issues: []
        };
    }
    
} 

export default TaskList;
