export interface Note{
    mood: mood;
    moodDescription: string,
    symptom: boolean,
    symptomDescription: string,
    description: string,
    id: number,
    userId: number;

    
}
export enum mood{
    BardzoDobre = 0,
    Dobre = 1,
    Średnie = 2,
    Złe = 3,
    BardzoZle = 4 
}
