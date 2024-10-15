export interface Crew {
    firstName: string;
    lastName: string;
    nationality: string;
    title: string;
    daysOnBoard: number;
    dailyRate: number;
    currency: string;
    certificates?: Certificate[];
}

export interface Certificate {
    type: string;
    issueDate: string;
    expiryDate: string;
}
