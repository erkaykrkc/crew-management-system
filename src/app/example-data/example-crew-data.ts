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
            { type: 'Safety Management Certificate', issueDate: '2020-01-01', expiryDate: '2025-01-01' },
            { type: 'First Aid Training', issueDate: '2019-06-01', expiryDate: '2024-06-01' }
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
            { type: 'Safety Management Certificate', issueDate: '2018-07-15', expiryDate: '2023-07-15' },
            { type: 'First Aid Training', issueDate: '2019-01-01', expiryDate: '2024-01-01' }
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
            { type: 'Safety Management Certificate', issueDate: '2019-05-01', expiryDate: '2024-05-01' },
            { type: 'First Aid Training', issueDate: '2018-07-10', expiryDate: '2023-07-10' }
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
            { type: 'Safety Management Certificate', issueDate: '2021-03-01', expiryDate: '2026-03-01' },
            { type: 'First Aid Training', issueDate: '2020-08-15', expiryDate: '2025-08-15' }
        ]
    },
    {
        firstName: 'Olga',
        lastName: 'Petrov',
        nationality: 'Russia',
        title: 'Deckhand',
        daysOnBoard: 50,
        dailyRate: 100,
        currency: 'EUR',
        certificates: [
            { type: 'Safety Management Certificate', issueDate: '2021-11-05', expiryDate: '2026-11-05' },
            { type: 'First Aid Training', issueDate: '2022-01-20', expiryDate: '2027-01-20' }
        ]
    },
];
