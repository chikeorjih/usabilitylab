class TaskList {

    static tasks = [
        {
            name: 'HMSA Path to Application',
            summary: 'A user attempts to apply for benefits on hmsa.com',
            description: 'In this task we observed how Hawaiian residents and consumers find, study, and select a health insurance plan for themselves (and family, if applicable) on HMSA.com.',
            url: 'hmsa-path-to-app',
            completionRate: 8,
            completionBreakdown: [
                {label: 'Success', score: 1},
                {label: '1 Assist', score: 2},
                {label: '2 Assists', score: 1},
                {label: 'Abandoned', score: 8}
            ],
            easeAverage: {score: 3.5, adjusted: 1.5},
            confidenceAverage: {score: 3.5, adjusted: 1.5},
            firstInteraction: {
                participants: 3,
                interaction: 'Searched for blah on google.com'
            },
            issues: {
                participants: 3,
                interaction: 'clicked on stuffs'
            }
        },
        {
            name: 'Kaiser Permanente Path to Application',
            summary: 'A user attempts to apply for benefits on hmsa.com',
            description: 'In this task we observed how Hawaiian residents and consumers find, study, and select a health insurance plan for themselves (and family, if applicable) on HMSA.com.',
            url: 'kp-path-to-app',
            completionRate: 8,
            completionBreakdown: [
                {label: 'Success', score: 1},
                {label: '1 Assist', score: 2},
                {label: '2 Assists', score: 1},
                {label: 'Abandoned', score: 8}
            ],
            easeAverage: {score: 3.5, adjusted: 1.5},
            confidenceAverage: {score: 3.5, adjusted: 1.5},
            firstInteraction: {
                participants: 3,
                interaction: 'Searched for blah on google.com'
            },
            issues: {
                participants: 3,
                interaction: 'clicked on stuffs'
            }
        },
    ];

    static get list() {
        return this.tasks;
    };

    static getCurrentTask(id) {
        return this.tasks.find(task => task.url === id);
    };
    
} 

export default TaskList;
