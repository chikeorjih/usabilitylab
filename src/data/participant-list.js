import participant1 from "../assets/participants/participant1.png";
import participant2 from "../assets/participants/participant2.png";
import participant3 from "../assets/participants/participant3.png";
import participant4 from "../assets/participants/participant4.png";
import participant5 from "../assets/participants/participant5.png";
import participant6 from "../assets/participants/participant6.png";
import participant7 from "../assets/participants/participant7.png";
import participant8 from "../assets/participants/participant8.png";
import participant9 from "../assets/participants/participant9.png";
import participant10 from "../assets/participants/participant10.png";
import participant11 from "../assets/participants/participant11.png";
import participant12 from "../assets/participants/participant12.png";

import flow1_1 from "../assets/flows/participant1-HMSA-path.svg";

import video1 from "../assets/video/participant1-1.mp4";

class ParticipantList {

    static all = [
        {
            name: 'Ashley A.',
            gender: 'Female',
            age: 27,
            occupation: 'Lifeguard',
            url: 'ashleyl',
            img: participant1,
            providers: [
                { name: 'Aetna', score: 1 },
                { name: 'AlohaCare', score: 1 },
                { name: 'HMAA', score: 2 }, 
                { name: 'HMSA', score: 4 },
                { name: 'Kaiser', score: 4 },
                { name: 'Ohana', score: 2 },
                { name: 'UHA', score: 1 },
                { name: 'UHC', score: 1 }
            ],
            tasks: [
                {
                    task: 'Organic',
                    url: 'organic',
                    completed: false,
                    seq: 1,
                    confidence: 1
                },
                {
                    task: 'HMSA Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 5,
                    confidence: 5
                },
                {
                    task: 'HMSA Gym Membership',
                    url: 'hmsa-gym-membership',
                    completed: false,
                    seq: 3,
                    confidence: 3
                },
                {
                    task: 'HMSA Find a Doctor',
                    url: 'hmsa-find-doctor',
                    completed: false,
                    seq: 5,
                    confidence: 5
                },
            ],
            images: [
                { 
                    label: "HMSA Path to Application", 
                    src: flow1_1,
                    url: 'hmsa-path-to-app'
                }
            ],
            clips: [
                {
                    title: 'What is a network provider?',
                    src: video1
                }
            ]
        },
        {
            name: 'James G.',
            gender: 'Male',
            age: 24,
            occupation: 'Student',
            url: 'jamesg',
            img: participant2,
            providers: [
                { name: 'Aetna', score: 3 },
                { name: 'AlohaCare', score: 2 },
                { name: 'HMAA', score: 2 }, 
                { name: 'HMSA', score: 4 },
                { name: 'Kaiser', score: 4 },
                { name: 'Ohana', score: 3 },
                { name: 'UHA', score: 4 },
                { name: 'UHC', score: 4 }
            ],
            tasks: [
                {
                    task: 'HMSA Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: true,
                    seq: 4,
                    confidence: 3
                },
                {
                    task: 'Kaiser Path to Application',
                    url: 'kp-path-to-app',
                    completed: true,
                    seq: 3,
                    confidence: 2
                },
                {
                    task: 'Kaiser Gym Benefit',
                    url: 'kp-gym-membership',
                    completed: true,
                    seq: 2,
                    confidence: 5
                }
            ],
            clips: [
                {
                    title: 'What is a network provider?',
                    src: video1
                }
            ]
        },
        {
            name: 'Claire C.',
            gender: 'Female',
            age: 63,
            occupation: 'Executive Assitant',
            url: 'clairec',
            img: participant3,
            providers: [
                { name: 'Aetna', score: 0 },
                { name: 'AlohaCare', score: 0 },
                { name: 'HMAA', score: 0 }, 
                { name: 'HMSA', score: 4 },
                { name: 'Kaiser', score: 5 },
                { name: 'Ohana', score: 0 },
                { name: 'UHA', score: 0 },
                { name: 'UHC', score: 0 }
            ],
            tasks: [
                {
                    task: 'Organic',
                    url: 'organic',
                    completed: false,
                    seq: 1,
                    confidence: 1
                },
                {
                    task: 'HMSA Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 4,
                    confidence: 3
                },
                {
                    task: 'HMSA Gym Membership',
                    url: 'hmsa-gym-membership',
                    completed: true,
                    seq: 3,
                    confidence: 5
                },
                {
                    task: 'Kaiser Path to Application',
                    url: 'kp-path-to-app',
                    completed: false,
                    seq: 3,
                    confidence: 5
                }
            ],
            clips: [
                {
                    title: 'What is a network provider?',
                    src: video1
                }
            ]
        },
        {
            name: 'Bhakti P.',
            gender: 'Female',
            age: 47,
            occupation: 'Self Employed',
            url: 'bhaktip',
            img: participant4,
            providers: [
                { name: 'Aetna', score: 0 },
                { name: 'AlohaCare', score: 0 },
                { name: 'HMAA', score: 0 }, 
                { name: 'HMSA', score: 5 },
                { name: 'Kaiser', score: 3 },
                { name: 'Ohana', score: 0 },
                { name: 'UHA', score: 0 },
                { name: 'UHC', score: 0 }
            ],
            tasks: [
                {
                    task: 'Organic',
                    url: 'organic',
                    completed: true,
                    seq: 4,
                    confidence: 3
                },
                {
                    task: 'HMSA Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 5,
                    confidence: 5
                },
                {
                    task: 'HMSA Gym Membership',
                    url: 'hmsa-gym-membership',
                    completed: true,
                    seq: 4,
                    confidence: 4
                },
                {
                    task: 'Kaiser Path to Application',
                    url: 'kp-path-to-app',
                    completed: false,
                    seq: 5,
                    confidence: 5
                }
            ],
            clips: [
                {
                    title: 'What is a network provider?',
                    src: video1
                }
            ]
        },
        {
            name: 'Jeanine L.',
            gender: 'Female',
            age: 44,
            occupation: 'Material Handler',
            url: 'jeaninel',
            img: participant5,
            providers: [
                { name: 'Aetna', score: 3 },
                { name: 'AlohaCare', score: 3 },
                { name: 'HMAA', score: 4 }, 
                { name: 'HMSA', score: 4 },
                { name: 'Kaiser', score: 4 },
                { name: 'Ohana', score: 3 },
                { name: 'UHA', score: 5 },
                { name: 'UHC', score: 3 }
            ],
            tasks: [
                {
                    task: 'Organic',
                    url: 'organic',
                    completed: false,
                    seq: 1,
                    confidence: 1
                },
                {
                    task: 'Kaiser Path to Application',
                    url: 'kp-path-to-app',
                    completed: false,
                    seq: 4,
                    confidence: 5
                },
                {
                    task: 'Kaiser Gym Membership',
                    url: 'kp-gym-membership',
                    completed: false,
                    seq: 3,
                    confidence: 4
                }
            ],
            clips: [
                {
                    title: 'What is a network provider?',
                    src: video1
                }
            ]
        },
        {
            name: 'Gabriel G.',
            gender: 'male',
            age: 34,
            occupation: 'Starbucks Barista',
            url: 'gabrielg',
            img: participant6,
            providers: [
                { name: 'Aetna', score: 3 },
                { name: 'AlohaCare', score: 4 },
                { name: 'HMAA', score: 3 }, 
                { name: 'HMSA', score: 5 },
                { name: 'Kaiser', score: 4 },
                { name: 'Ohana', score: 2 },
                { name: 'UHA', score: 2 },
                { name: 'UHC', score: 2 }
            ],
            tasks: [
                {
                    task: 'Organic',
                    url: 'organic',
                    completed: false,
                    seq: 2,
                    confidence: 4
                },
                {
                    task: 'Kaiser Path to Application',
                    url: 'kp-path-to-app',
                    completed: true,
                    seq: 4,
                    confidence: 4
                },
                {
                    task: 'Kaiser Gym Membership',
                    url: 'kp-gym-membership',
                    completed: true,
                    seq: 5,
                    confidence: 5
                }
            ],
            clips: [
                {
                    title: 'What is a network provider?',
                    src: video1
                }
            ]
        },
        {
            name: 'Dennis L.',
            gender: 'Male',
            age: 68,
            occupation: 'Retired',
            url: 'dennisl',
            img: participant7,
            providers: [
                { name: 'Aetna', score: 3 },
                { name: 'AlohaCare', score: 3 },
                { name: 'HMAA', score: 3 }, 
                { name: 'HMSA', score: 4 },
                { name: 'Kaiser', score: 4 },
                { name: 'Ohana', score: 3 },
                { name: 'UHA', score: 3 },
                { name: 'UHC', score: 3 }
            ],
            tasks: [
                {
                    task: 'Organic',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 4,
                    confidence: 5
                },
                {
                    task: 'HMSA Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 3,
                    confidence: 4
                },
                {
                    task: 'HMSA Find a Doctor',
                    url: 'hmsa-find-doctor',
                    completed: false,
                    seq: 3,
                    confidence: 3
                },
                {
                    task: 'Kaiser Path to Application',
                    url: 'kp-path-to-app',
                    completed: false,
                    seq: 3,
                    confidence: 3
                }
            ],
            clips: []
        },
        {
            name: 'Joyce L.',
            gender: 'Female',
            age: 68,
            occupation: 'Retired',
            url: 'joycel',
            img: participant8,
            providers: [
                { name: 'Aetna', score: 3 },
                { name: 'AlohaCare', score: 3 },
                { name: 'HMAA', score: 3 }, 
                { name: 'HMSA', score: 3 },
                { name: 'Kaiser', score: 4 },
                { name: 'Ohana', score: 3 },
                { name: 'UHA', score: 3 },
                { name: 'UHC', score: 3 }
            ],
            tasks: [
                {
                    task: 'Organic',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 3,
                    confidence: 3
                },
                {
                    task: 'Kaiser Find a Doctor',
                    url: 'kp-find-doctor',
                    completed: false,
                    seq: 2,
                    confidence: 2
                },
                {
                    task: 'HMSA Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 4,
                    confidence: 3
                }
            ],
            clips: []
        },
        {
            name: 'Clifford L.',
            gender: 'Male',
            age: 65,
            occupation: 'Retired Teacher',
            url: 'cliffordl',
            img: participant9,
            providers: [
                { name: 'Aetna', score: 0 },
                { name: 'AlohaCare', score: 0 },
                { name: 'HMAA', score: 0 }, 
                { name: 'HMSA', score: 4 },
                { name: 'Kaiser', score: 3 },
                { name: 'Ohana', score: 0 },
                { name: 'UHA', score: 0 },
                { name: 'UHC', score: 0 }
            ],
            tasks: [
                {
                    task: 'Kaiser Path to Application',
                    url: 'kp-path-to-app',
                    completed: false,
                    seq: 1,
                    confidence: 1
                },
                {
                    task: 'HMSA Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: true,
                    seq: 3,
                    confidence: 3
                },
                {
                    task: 'HMSA Find a Doctor',
                    url: 'hmsa-find-doctor',
                    completed: true,
                    seq: 4,
                    confidence: 5
                }
            ],
            clips: []
        },
        {
            name: 'Jane B.',
            gender: 'Female',
            age: 66,
            occupation: 'Retired Manager',
            url: 'janeb',
            img: participant10,
            providers: [
                { name: 'Aetna', score: 0 },
                { name: 'AlohaCare', score: 0 },
                { name: 'HMAA', score: 0 }, 
                { name: 'HMSA', score: 5 },
                { name: 'Kaiser', score: 5 },
                { name: 'Ohana', score: 0 },
                { name: 'UHA', score: 0 },
                { name: 'UHC', score: 0 }
            ],
            tasks: [
                {
                    task: 'Organic',
                    url: 'hmsa-path-to-app',
                    completed: true,
                    seq: 4,
                    confidence: 5
                },
                {
                    task: 'Kaiser Path to Application',
                    url: 'kp-path-to-app',
                    completed: true,
                    seq: 5,
                    confidence: 5
                },
                {
                    task: 'Kaiser Find a Doctor',
                    url: 'kp-find-doctor',
                    completed: false,
                    seq: 1,
                    confidence: 1
                },
                {
                    task: 'HMSA Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: true,
                    seq: 4,
                    confidence: 4
                },
                {
                    task: 'HMSA Find a Doctor',
                    url: 'hmsa-find-doctor',
                    completed: true,
                    seq: 4,
                    confidence: 4
                }
            ],
            clips: []
        },
        {
            name: 'Rolf N.',
            gender: 'Male',
            age: 73,
            occupation: 'Retired Technician',
            url: 'rolfn',
            img: participant11,
            providers: [
                { name: 'Aetna', score: 0 },
                { name: 'AlohaCare', score: 0 },
                { name: 'HMAA', score: 0 }, 
                { name: 'HMSA', score: 0 },
                { name: 'Kaiser', score: 0 },
                { name: 'Ohana', score: 0 },
                { name: 'UHA', score: 0 },
                { name: 'UHC', score: 0 }
            ],
            tasks: [
                {
                    task: 'Organic',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 3,
                    confidence: 4
                },
                {
                    task: 'HMSA Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 5,
                    confidence: 5
                },
                {
                    task: 'HMSA Find a Doctor',
                    url: 'hmsa-find-doctor',
                    completed: true,
                    seq: 4,
                    confidence: 5
                }
            ],
            clips: []
        },
        {
            name: 'Adeline S.',
            gender: 'Female',
            age: 80,
            occupation: 'Realtor',
            url: 'adelines',
            img: participant12,
            providers: [
                { name: 'Aetna', score: 0 },
                { name: 'AlohaCare', score: 0 },
                { name: 'HMAA', score: 0 }, 
                { name: 'HMSA', score: 0 },
                { name: 'Kaiser', score: 0 },
                { name: 'Ohana', score: 0 },
                { name: 'UHA', score: 0 },
                { name: 'UHC', score: 0 }
            ],
            tasks: [
                {
                    task: 'Organic',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 3,
                    confidence: 3
                },
                {
                    task: 'HMSA Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 2,
                    confidence: 3
                },
                {
                    task: 'Kaiser Path to Application',
                    url: 'kp-path-to-app',
                    completed: false,
                    seq: 4,
                    confidence: 4
                }
            ],
            clips: []
        }
    ];

    static get youngParticipants() {
        return this.all.filter(person => person.age < 65);
    };

    static get medicareParticipants() {
        return this.all.filter(person => person.age >= 65);
    };

    static getCurrentParticipant(id) {
        return this.all.find(person => person.url === id);
    };
    
} 

export default ParticipantList;
