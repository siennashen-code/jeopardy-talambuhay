import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What city is known as the Big Apple?',
        answer: 'New York City',
    },
    {
        points: 200,
        question: 'What type of dance does Misty Copeland do?',
        imgSrc: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifWVwBbDKqx5gPMEvBGOX8oaX7olXV-u-WrXhIlvpT0B5d8H3JiEo9GZeHFSVCYW8hLR5xQCOiEcvOVxqChhcvahyI5SmzWm4ECEngVICYZleOFIGFLOKU5G3ptrkscneOPD0DoNl-L-8/s1600/Misty+%25231.jpg',
        answer: 'Ballet',
    },
    {
        points: 300,
        question: 'What is the complementary color of purple?',
        answer: 'Yellow',
    },
    {
        points: 400,
        question: 'What type of fish is this?',
        imgSrc: '/betafish.jpg',
        answer: 'Betta Fish',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question: 'What instrument is this',
            imgSrc: '/violin.png',
            answer: 'Violin',
        },
        {
            points: 200,
            question: 'What is the oldest Japanese dog breed?',
            imgSrc: 'sammi.png',
            answer: 'Shiba Inu',
        },
        {
            points: 300,
            question: 'What is the first name of the main character in the Catcher in the Rye?',
            imgSrc: '/catcher.png',
            answer: 'Holden',
        },
        {
            points: 400,
            question: 'How many yards is a standard American pool?',
            imgSrc: 'https://st3.depositphotos.com/2060347/16546/i/450/depositphotos_165463602-stock-photo-woman-swimming-on-the-back.jpg',
            answer: '25',
        }
    ]);
const futureQuestions: Question[] = 
    sortQuestions([
        {
            points: 100,
            question: 'What is this guy doing?',
            imgSrc: 'https://t4.ftcdn.net/jpg/00/19/24/59/360_F_19245921_byNSmUhIf9fOItBGjapNTBbMv6GvWxAy.jpg',
            answer: 'Skydiving',
        },
        {
            points: 200,
            question: 'What is the southernmost continent of the Earth?',
            answer: 'Antarctica',
        },
        {
            points: 300,
            question: 'What restaurant is this?',
            imgSrc: 'https://platform.ny.eater.com/wp-content/uploads/sites/6/chorus/uploads/chorus_asset/file/19242852/HaiHeadpiece.jpg?quality=90&strip=all&crop=0.1953125%2C0%2C99.609375%2C100&w=2400',
            answer: 'Haidilao',
        },
        {
            points: 400,
            question: 'What country has no mosquitos?',
            imgSrc: 'data:image/jpeg;base64,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',
            answer: 'Iceland',
        }
]);


const categories = [
    {
        title: "Sienna's Past",
        questions: pastQuestions
    },
    {
        title: "Sienna's Present",
        questions: presentQuestions
    },
    {
        title: "Sienna's Future",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}