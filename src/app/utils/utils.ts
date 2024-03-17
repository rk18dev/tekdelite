export class Utils {
    formatDateToString(date: Date): string {
        const year = date.getFullYear(); // Get the year (4 digits)
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get the month (0-indexed, add 1 for actual month, pad with leading zero if needed)
        const day = date.getDate().toString().padStart(2, '0'); // Get the day of the month, pad with leading zero if needed
        return `${year}-${month}-${day}`; // Return formatted date string
    }
}