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
            ]
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
            ]
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
            ]
        }
        
    ];

    static get list() {
        return this.tasks;
    };

    static getCurrentTask(id) {
        return this.tasks.find(task => task.url === id);
    };
    
} 

export default TaskList;
