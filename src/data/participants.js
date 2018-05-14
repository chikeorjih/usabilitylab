import participant1 from "../assets/participants/participant1.png";
import participant7 from "../assets/participants/participant7.png";

class ParticipantList {

    static all = [
        {
            name: 'Ashley A.',
            gender: 'Female',
            age: 27,
            occupation: 'Lifeguard',
            url: 'ashleyl',
            img: participant1,
            providers: {
                aetna: 1,
                alohaCare: 1,
                hmaa: 2, 
                hmsa: 4,
                kaiser: 4,
                ohana: 2,
                uha: 1,
                uhc: 1
            },
            clips: []
        },
        {
            name: 'Dennis L.',
            gender: 'Male',
            age: 68,
            occupation: 'Retired',
            url: 'dennisl',
            img: participant7,
            providers: {
                aetna: 3,
                alohaCare: 3,
                hmaa: 3, 
                hmsa: 4,
                kaiser: 4,
                ohana: 3,
                uha: 3,
                uhc: 3
            },
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
