//Problem-01: New Price for Eid Sale

function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== "number" || typeof discount !== "number"){
        return "Invalid";
    }
    if (discount < 0 || discount > 100){
        return "Invalid";
    }
    let discountPrice = (currentPrice * discount) / 100;
    let newPrice = currentPrice - discountPrice;
    return newPrice.toFixed(3);
}


//Problem-02: OTP Validation for Zapshift

function validOtp(otp) {
    if (typeof otp !== "string"){
        return "Invalid";
    }
    if (otp.length !== 8){
        return false;
    }
    if (!otp.startsWith("ph-")){
        return false;
    }
    return true;
}


//Problem-03: BCS Final Score Calculator

function finalScore(omr) {
    if (typeof omr !== "object" ){
        return "Invalid";
    }
    let {right, wrong, skip} = omr;
    if (
        typeof right !== "number" ||
        typeof wrong !== "number" ||
        typeof skip !== "number"
    ){
        return "Invalid";
    }
    if (right + wrong + skip !== 100){
        return "Invalid";
    }
    let Score = right * 1 - wrong * 0.5 + skip * 0;
    return Math.round(Score);
}


//Problem-04: Upcoming Gono Vote

function gonoVote(votes) {
    if (!Array.isArray(votes)){
        return "Invalid";
    }
    let ha = 0;
    let na = 0;
    for (let vote of votes){
        if (vote === "ha") ha++;
        else if (vote === "na") na++;
    }
    if (ha > na){
        return true;
    }
    else if (ha === na) {
        return "equal";
    }
    else {
        return false;
    }
}


//Problem-05: Text Analyzer for an AI Company

function analyzeText(str) {
    if (typeof str !== "string" || str.trim() === ""){
        return "Invalid";
    }
    let words = str.split(" ");
    let longWord = "";
    for (let word of words){
        if(word.length > longWord.length){
            longWord = word;
        }
    }
    let totalCharacters = str.split(" ").join("").length;
    return{
        longWords: longWord,
        token: totalCharacters
    };
}