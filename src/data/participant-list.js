import participant1 from "../assets/participants/Girl1.svg";
import participant2 from "../assets/participants/Boy1.svg";
import participant3 from "../assets/participants/Woman1.svg";
import participant4 from "../assets/participants/Woman2.svg";
import participant5 from "../assets/participants/Girl2.svg";
import participant6 from "../assets/participants/Woman4.svg";
import participant7 from "../assets/participants/Boy2.svg";
import participant8 from "../assets/participants/Woman3.svg";
import participant9 from "../assets/participants/Man1.svg";
import participant10 from "../assets/participants/Woman4.svg";
import participant11 from "../assets/participants/Man2.svg";
import participant12 from "../assets/participants/Woman5.svg";

import flow1_1 from "../assets/flows/P1-01-KP-path2app.svg";
import flow1_2 from "../assets/flows/P1-01-KP-path2app.svg";
import flow2_1 from "../assets/flows/P1-02-KP-path2app.svg";
import flow2_2 from "../assets/flows/P1-01-KP-path2app.svg";
import flow3_1 from "../assets/flows/P1-01-KP-path2app.svg";
import flow3_2 from "../assets/flows/P1-03-KP-path2app.svg";
import flow3_3 from "../assets/flows/P1-01-KP-path2app.svg";
import flow4_1 from "../assets/flows/P1-01-KP-path2app.svg";
import flow4_2 from "../assets/flows/P1-04-KP-path2app.svg";
import flow4_3 from "../assets/flows/P1-01-KP-path2app.svg";
import flow5_1 from "../assets/flows/P1-05-KP-path2app.svg";
import flow5_2 from "../assets/flows/P1-01-KP-path2app.svg";
import flow6_1 from "../assets/flows/P1-06-KP-path2app.svg";
import flow6_2 from "../assets/flows/P1-01-KP-path2app.svg";
import flow7_1 from "../assets/flows/P1-01-KP-path2app.svg";
import flow7_2 from "../assets/flows/P2-01-KP-path2app.svg";
import flow7_3 from "../assets/flows/P1-01-KP-path2app.svg";
import flow8_1 from "../assets/flows/P1-01-KP-path2app.svg";
import flow8_2 from "../assets/flows/P1-01-KP-path2app.svg";
import flow9_1 from "../assets/flows/P2-03-KP-path2app.svg";
import flow9_2 from "../assets/flows/P1-01-KP-path2app.svg";
import flow10_1 from "../assets/flows/P1-01-KP-path2app.svg";
import flow10_2 from "../assets/flows/P2-04-KP-path2app.svg";
import flow10_3 from "../assets/flows/P1-01-KP-path2app.svg";
import flow11_1 from "../assets/flows/P1-01-KP-path2app.svg";
import flow11_2 from "../assets/flows/P1-01-KP-path2app.svg";
import flow12_1 from "../assets/flows/P1-01-KP-path2app.svg";
import flow12_2 from "../assets/flows/P2-06-KP-path2app.svg";
import flow12_3 from "../assets/flows/P1-01-KP-path2app.svg";

class ParticipantList {

    static all = [
        {
            name: 'Anna C.',
            gender: 'Female',
            age: 27,
            occupation: 'Lifeguard',
            url: 'ashleyl',
            img: participant1,
            providers: [
                { name: 'Aetna', score: 1 },
                { name: 'AlohaCare', score: 1 },
                { name: 'HMAA', score: 2 }, 
                { name: 'HCP', score: 4 },
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
                    task: 'HCP Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 5,
                    confidence: 5
                },
                {
                    task: 'HCP Gym Membership',
                    url: 'hmsa-gym-membership',
                    completed: false,
                    seq: 3,
                    confidence: 3
                },
                {
                    task: 'HCP Find a Doctor',
                    url: 'hmsa-find-doctor',
                    completed: false,
                    seq: 5,
                    confidence: 5
                },
            ],
            images: [
                { 
                    label: "HCP Path to Application", 
                    src: flow1_1,
                    url: 'hmsa-path-to-app',
                    style: 'default'
                },
                { 
                    label: "Kaiser Path to Application", 
                    src: flow1_2,
                    url: 'kp-path-to-app',
                    style: 'large'
                },
            ]
        },
        {
            name: 'John J.',
            gender: 'Male',
            age: 24,
            occupation: 'Student',
            url: 'jamesg',
            img: participant2,
            providers: [
                { name: 'Aetna', score: 3 },
                { name: 'AlohaCare', score: 2 },
                { name: 'HMAA', score: 2 }, 
                { name: 'HCP', score: 4 },
                { name: 'Kaiser', score: 4 },
                { name: 'Ohana', score: 3 },
                { name: 'UHA', score: 4 },
                { name: 'UHC', score: 4 }
            ],
            tasks: [
                {
                    task: 'HCP Path to Application',
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
            images: [
                { 
                    label: "Kaiser Path to Application", 
                    src: flow2_1,
                    url: 'kp-path-to-app',
                    style: 'default'
                },
                { 
                    label: "Organic", 
                    src: flow2_2,
                    url: null,
                    style: 'default'
                }
            ]
        },
        {
            name: 'Carrie K.',
            gender: 'Female',
            age: 63,
            occupation: 'Executive Assitant',
            url: 'clairec',
            img: participant3,
            providers: [
                { name: 'Aetna', score: 0 },
                { name: 'AlohaCare', score: 0 },
                { name: 'HMAA', score: 0 }, 
                { name: 'HCP', score: 4 },
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
                    task: 'HCP Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 4,
                    confidence: 3
                },
                {
                    task: 'HCP Gym Membership',
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
            images: [
                { 
                    label: "HCP Path to Application", 
                    src: flow3_1,
                    url: 'hmsa-path-to-app',
                    style: 'large'
                },
                { 
                    label: "Kaiser Path to Application", 
                    src: flow3_2,
                    url: 'kp-path-to-app',
                    style: 'default'
                },
                { 
                    label: "Organic", 
                    src: flow3_3,
                    url: null,
                    style: 'default'
                },
            ]
        },
        {
            name: 'Shakti C.',
            gender: 'Female',
            age: 47,
            occupation: 'Self Employed',
            url: 'bhaktip',
            img: participant4,
            providers: [
                { name: 'Aetna', score: 0 },
                { name: 'AlohaCare', score: 0 },
                { name: 'HMAA', score: 0 }, 
                { name: 'HCP', score: 5 },
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
                    task: 'HCP Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 5,
                    confidence: 5
                },
                {
                    task: 'HCP Gym Membership',
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
            images: [
                { 
                    label: "HCP Path to Application", 
                    src: flow4_1,
                    url: 'hmsa-path-to-app',
                    style: 'large'
                },
                { 
                    label: "Kaiser Path to Application", 
                    src: flow4_2,
                    url: 'kp-path-to-app',
                    style: 'default'
                },
                { 
                    label: "Organic", 
                    src: flow4_3,
                    url: null,
                    style: 'large'
                },
            ]
        },
        {
            name: 'Jean O.',
            gender: 'Female',
            age: 44,
            occupation: 'Material Handler',
            url: 'jeaninel',
            img: participant5,
            providers: [
                { name: 'Aetna', score: 3 },
                { name: 'AlohaCare', score: 3 },
                { name: 'HMAA', score: 4 }, 
                { name: 'HCP', score: 4 },
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
            images: [
                { 
                    label: "HCP Path to Application", 
                    src: flow5_1,
                    url: 'hmsa-path-to-app',
                    style: 'default'
                },
                { 
                    label: "Kaiser Path to Application", 
                    src: flow5_2,
                    url: 'kp-path-to-app',
                    style: 'default'
                }
            ]
        },
        {
            name: 'Garry J.',
            gender: 'male',
            age: 34,
            occupation: 'Starbucks Barista',
            url: 'gabrielg',
            img: participant6,
            providers: [
                { name: 'Aetna', score: 3 },
                { name: 'AlohaCare', score: 4 },
                { name: 'HMAA', score: 3 }, 
                { name: 'HCP', score: 5 },
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
            images: [
                { 
                    label: "HCP Path to Application", 
                    src: flow6_1,
                    url: 'hmsa-path-to-app',
                    style: 'large'
                },
                { 
                    label: "Kaiser Path to Application", 
                    src: flow6_2,
                    url: 'kp-path-to-app',
                    style: 'default'
                }
            ]
        },
        {
            name: 'Don K.',
            gender: 'Male',
            age: 68,
            occupation: 'Retired',
            url: 'dennisl',
            img: participant7,
            providers: [
                { name: 'Aetna', score: 3 },
                { name: 'AlohaCare', score: 3 },
                { name: 'HMAA', score: 3 }, 
                { name: 'HCP', score: 4 },
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
                    task: 'HCP Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 3,
                    confidence: 4
                },
                {
                    task: 'HCP Find a Doctor',
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
            images: [
                { 
                    label: "HCP Path to Application", 
                    src: flow7_1,
                    url: 'hmsa-path-to-app',
                    style: 'large'
                },
                { 
                    label: "Kaiser Path to Application", 
                    src: flow7_2,
                    url: 'kp-path-to-app',
                    style: 'default'
                },
                { 
                    label: "Organic", 
                    src: flow7_3,
                    url: null,
                    style: 'default'
                },
            ]
        },
        {
            name: 'Joy P.',
            gender: 'Female',
            age: 68,
            occupation: 'Retired',
            url: 'joycel',
            img: participant8,
            providers: [
                { name: 'Aetna', score: 3 },
                { name: 'AlohaCare', score: 3 },
                { name: 'HMAA', score: 3 }, 
                { name: 'HCP', score: 3 },
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
                    task: 'HCP Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 4,
                    confidence: 3
                }
            ],
            images: [
                { 
                    label: "HCP Path to Application", 
                    src: flow8_1,
                    url: 'hmsa-path-to-app',
                    style: 'default'
                },
                { 
                    label: "Kaiser Path to Application", 
                    src: flow8_2,
                    url: 'kp-path-to-app',
                    style: 'large'
                }
            ]
        },
        {
            name: 'Clint P.',
            gender: 'Male',
            age: 65,
            occupation: 'Retired Teacher',
            url: 'cliffordl',
            img: participant9,
            providers: [
                { name: 'Aetna', score: 0 },
                { name: 'AlohaCare', score: 0 },
                { name: 'HMAA', score: 0 }, 
                { name: 'HCP', score: 4 },
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
                    task: 'HCP Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: true,
                    seq: 3,
                    confidence: 3
                },
                {
                    task: 'HCP Find a Doctor',
                    url: 'hmsa-find-doctor',
                    completed: true,
                    seq: 4,
                    confidence: 5
                }
            ],
            images: [
                { 
                    label: "HCP Path to Application", 
                    src: flow9_1,
                    url: 'hmsa-path-to-app',
                    style: 'default'
                },
                { 
                    label: "Kaiser Path to Application", 
                    src: flow9_2,
                    url: 'kp-path-to-app',
                    style: 'default'
                }
            ]
        },
        {
            name: 'Jan C.',
            gender: 'Female',
            age: 66,
            occupation: 'Retired Manager',
            url: 'janeb',
            img: participant10,
            providers: [
                { name: 'Aetna', score: 0 },
                { name: 'AlohaCare', score: 0 },
                { name: 'HMAA', score: 0 }, 
                { name: 'HCP', score: 5 },
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
                    task: 'HCP Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: true,
                    seq: 4,
                    confidence: 4
                },
                {
                    task: 'HCP Find a Doctor',
                    url: 'hmsa-find-doctor',
                    completed: true,
                    seq: 4,
                    confidence: 4
                }
            ],
            images: [
                { 
                    label: "HCP Path to Application", 
                    src: flow10_1,
                    url: 'hmsa-path-to-app',
                    style: 'default'
                },
                { 
                    label: "Kaiser Path to Application", 
                    src: flow10_2,
                    url: 'kp-path-to-app',
                    style: 'large'
                },
                { 
                    label: "Organic", 
                    src: flow10_3,
                    url: null,
                    style: 'default'
                },
            ]
        },
        {
            name: 'Ralph O.',
            gender: 'Male',
            age: 73,
            occupation: 'Retired Technician',
            url: 'rolfn',
            img: participant11,
            providers: [
                { name: 'Aetna', score: 0 },
                { name: 'AlohaCare', score: 0 },
                { name: 'HMAA', score: 0 }, 
                { name: 'HCP', score: 0 },
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
                    task: 'HCP Path to Application',
                    url: 'hmsa-path-to-app',
                    completed: false,
                    seq: 5,
                    confidence: 5
                },
                {
                    task: 'HCP Find a Doctor',
                    url: 'hmsa-find-doctor',
                    completed: true,
                    seq: 4,
                    confidence: 5
                }
            ],
            images: [
                { 
                    label: "HCP Path to Application", 
                    src: flow11_1,
                    url: 'hmsa-path-to-app',
                    style: 'large'
                },
                { 
                    label: "Kaiser Path to Application", 
                    src: flow11_2,
                    url: 'kp-path-to-app',
                    style: 'default'
                }
            ]
        },
        {
            name: 'Annie D.',
            gender: 'Female',
            age: 80,
            occupation: 'Realtor',
            url: 'adelines',
            img: participant12,
            providers: [
                { name: 'Aetna', score: 0 },
                { name: 'AlohaCare', score: 0 },
                { name: 'HMAA', score: 0 }, 
                { name: 'HCP', score: 0 },
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
                    task: 'HCP Path to Application',
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
            images: [
                { 
                    label: "HCP Path to Application", 
                    src: flow12_1,
                    url: 'hmsa-path-to-app',
                    style: 'large'
                },
                { 
                    label: "Kaiser Path to Application", 
                    src: flow12_2,
                    url: 'kp-path-to-app',
                    style: 'default'
                },
                { 
                    label: "Organic", 
                    src: flow12_3,
                    url: null,
                    style: 'large'
                },
            ]
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
