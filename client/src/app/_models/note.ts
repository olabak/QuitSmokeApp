export interface Note{
    mood: mood;
    moodDescription: string,
    symptom: boolean,
    symptomDescription: string,
    description: string,
    addDate: Date,
    id: number,
    userId: number;

    
}
export enum mood{
    "Bardzo Dobre" = 0,
    Dobre = 1,
    Średnie = 2,
    Złe = 3,
    BardzoZle = 4 
}
