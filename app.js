let grade = (score) => {
    if (score >=0 && score < 65) {
        return ("F")
    }
    else if (65 <= score && score <= 69) {
        return ("D")

    }else if (70 <= score && score <= 79) {
        return ("C")

    }else if (80 <= score && score<= 89) {
        return ("B")

    }else if (90 <= score && score<= 100)  {
        return ("A")
    }
    else {
        return "invalid Score";
    }
}
console.log(grade(78));