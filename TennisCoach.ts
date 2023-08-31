import { Coach } from "./Coach";

export class TennisCoach implements Coach {
    getDailyWork(): string {
        return "Practice your smashing technique."
    }
}