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
        title: 'Engineer',
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
        title: 'Chief Officer',
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
        currency: 'BRL',
        certificates: [
            { type: 'Bosun License', issueDate: '2021-03-01', expiryDate: '2026-03-01' },
            { type: 'Firefighting', issueDate: '2020-08-15', expiryDate: '2025-08-15' }
        ]
    },
    {
        firstName: 'Olga',
        lastName: 'Petrov',
        nationality: 'Russia',
        title: 'Deckhand',
        daysOnBoard: 50,
        dailyRate: 100,
        currency: 'RUB',
        certificates: [
            { type: 'Basic Seamanship', issueDate: '2021-11-05', expiryDate: '2026-11-05' },
            { type: 'First Aid', issueDate: '2022-01-20', expiryDate: '2027-01-20' }
        ]
    },
    {
        firstName: 'Kofi',
        lastName: 'Mensah',
        nationality: 'Ghana',
        title: 'Second Officer',
        daysOnBoard: 100,
        dailyRate: 180,
        currency: 'USD',
        certificates: [
            { type: 'Second Officer License', issueDate: '2019-09-01', expiryDate: '2024-09-01' },
            { type: 'Navigation Safety', issueDate: '2020-06-12', expiryDate: '2025-06-12' }
        ]
    }
];