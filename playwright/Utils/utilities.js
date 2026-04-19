export class Utilities{
    getRandomNum(min, max){
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
    }
    randomEmail() {
        const getRandomNum = this.getRandomNum(5000, 9999999);
        const randomEmail = `user_${getRandomNum}@mailinator.com`;
        return randomEmail;
    }
}