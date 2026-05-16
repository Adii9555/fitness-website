function calculateBMI() {

    const h = document.getElementById('height').value;
    const w = document.getElementById('weight').value;
    const output = document.getElementById('bmi-result');

    if (h > 0 && w > 0) {

        const bmi = (w / ((h / 100) * (h / 100))).toFixed(1);

        let msg = "";

        if (bmi < 18.5)
            msg = "Underweight - Time to bulk up!";
        else if (bmi < 25)
            msg = "Normal - You are fit!";
        else if (bmi < 30)
            msg = "Overweight - Time to hit treadmill!";
        else
            msg = "Obese - Start strict routine!";

        output.innerHTML =
        `BMI: ${bmi}<br>${msg}`;

    } else {

        output.innerHTML =
        "Please enter valid values!";
    }
}