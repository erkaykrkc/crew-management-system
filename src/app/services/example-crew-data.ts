import { Crew } from "../models/crew.model";

export const CREW_DATA: Crew[] = [
    {
        firstName: 'John',
        lastName: 'Doe',
        nationality: 'USA',
        title: 'Captain',
        daysOnBoard: 120,
        dailyRate: 200,
        currency: 'USD',
        certificates: [
            { type: 'Captain License', issueDate: '2020-01-01', expiryDate: '2025-01-01' },
            { type: 'Safety Training', issueDate: '2019-06-01', expiryDate: '2024-06-01' }
        ]
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        nationality: 'Canada',
        title: 'Second Engineer',
        daysOnBoard: 90,
        dailyRate: 180,
        currency: 'USD',
        certificates: [
            { type: 'Engineer License', issueDate: '2018-07-15', expiryDate: '2023-07-15' },
            { type: 'Firefighting', issueDate: '2019-01-01', expiryDate: '2024-01-01' }
        ]
    },
    {
        firstName: 'Marie',
        lastName: 'Dubois',
        nationality: 'France',
        title: 'Chief Engineer',
        daysOnBoard: 150,
        dailyRate: 220,
        currency: 'EUR',
        certificates: [
            { type: 'Chief Officer License', issueDate: '2019-05-01', expiryDate: '2024-05-01' },
            { type: 'Safety Management', issueDate: '2018-07-10', expiryDate: '2023-07-10' }
        ]
    },
    {
        firstName: 'Pedro',
        lastName: 'Silva',
        nationality: 'Brazil',
        title: 'Bosun',
        daysOnBoard: 80,
        dailyRate: 150,
        currency: 'USD',
        certificates: [
            { type: 'Bosun License', issueDate: '2021-03-01', expiryDate: '2026-03-01' },
            { type: 'Firefighting', issueDate: '2020-08-15', expiryDate: '2025-08-15' }
        ]
    },
    {
        firstName: 'Olga',
        lastName: 'Petrov',
        nationality: 'Turkey',
        title: 'Deckhand',
        daysOnBoard: 50,
        dailyRate: 100,
        currency: 'EUR',
        certificates: [
            { type: 'Basic Seamanship', issueDate: '2021-11-05', expiryDate: '2026-11-05' },
            { type: 'First Aid', issueDate: '2022-01-20', expiryDate: '2027-01-20' }
        ]
    },
    {
        firstName: 'Kofi',
        lastName: 'Mensah',
        nationality: 'Japan',
        title: 'Second Officer',
        daysOnBoard: 100,
        dailyRate: 180,
        currency: 'USD',
        certificates: [
            { type: 'Second Officer License', issueDate: '2019-09-01', expiryDate: '2024-09-01' },
            { type: 'Navigation Safety', issueDate: '2020-06-12', expiryDate: '2025-06-12' }
        ]
    },
    {
        firstName: 'Emma',
        lastName: 'Wilson',
        nationality: 'UK',
        title: 'Chief Steward',
        daysOnBoard: 60,
        dailyRate: 120,
        currency: 'EUR',
        certificates: [
            { type: 'Steward License', issueDate: '2018-08-01', expiryDate: '2023-08-01' },
            { type: 'First Aid', issueDate: '2019-09-10', expiryDate: '2024-09-10' }
        ]
    },
    {
        firstName: 'Carlos',
        lastName: 'Mendez',
        nationality: 'Spain',
        title: 'Radio Operator',
        daysOnBoard: 70,
        dailyRate: 140,
        currency: 'EUR',
        certificates: [
            { type: 'Radio Operator License', issueDate: '2019-04-15', expiryDate: '2024-04-15' },
            { type: 'Communications Training', issueDate: '2018-11-01', expiryDate: '2023-11-01' }
        ]
    },
    {
        firstName: 'Lian',
        lastName: 'Chen',
        nationality: 'Russia',
        title: 'Second Engineer',
        daysOnBoard: 95,
        dailyRate: 175,
        currency: 'USD',
        certificates: [
            { type: 'Second Engineer License', issueDate: '2020-03-01', expiryDate: '2025-03-01' },
            { type: 'Mechanical Safety', issueDate: '2019-06-01', expiryDate: '2024-06-01' }
        ]
    },
    {
        firstName: 'Mohammed',
        lastName: 'Al-Farsi',
        nationality: 'India',
        title: 'Chief Engineer',
        daysOnBoard: 130,
        dailyRate: 250,
        currency: 'USD',
        certificates: [
            { type: 'Chief Engineer License', issueDate: '2017-12-01', expiryDate: '2022-12-01' },
            { type: 'Safety Protocols', issueDate: '2018-09-15', expiryDate: '2023-09-15' }
        ]
    }
];
