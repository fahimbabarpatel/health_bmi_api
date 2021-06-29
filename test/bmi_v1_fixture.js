const fixtures = {
    test1: {
        input_json: [
            {
                "Gender": "Male",
                "HeightCm": 172,
                "WeightKg": 78.8
            },
            {
                "Gender": "Female",
                "HeightCm": 151,
                "WeightKg": 50
            },
            {
                "Gender": "Female",
                "HeightCm": 151,
                "WeightKg": 30
            },
            {
                "Gender": "Male",
                "HeightCm": 172,
                "WeightKg": 150
            },
            {
                "Gender": "Male",
                "HeightCm": 147,
                "WeightKg": 67
            }, {
                "Gender": "Male",
                "HeightCm": 147,
                "WeightKg": 76
            }
        ],
        expected_json: [
            {
                "Gender": "Male",
                "HeightCm": 172,
                "WeightKg": 78.8,
                "bmi": 26.6,
                "bmic": "Overweight Moderately ",
                "bmir": "Enhanced risk"
            },
            {
                "Gender": "Female",
                "HeightCm": 151,
                "WeightKg": 50,
                "bmi": 21.9,
                "bmic": "Normal weight",
                "bmir": "Low risk"
            },
            {
                "Gender": "Female",
                "HeightCm": 151,
                "WeightKg": 30,
                "bmi": 13.2,
                "bmic": "Underweight",
                "bmir": "Malnutrition risk"
            },
            {
                "Gender": "Male",
                "HeightCm": 172,
                "WeightKg": 150,
                "bmi": 50.7,
                "bmic": "severely obese",
                "bmir": "Very high risk"
            },
            {
                "Gender": "Male",
                "HeightCm": 147,
                "WeightKg": 67,
                "bmi": 31,
                "bmic": "obese Severely",
                "bmir": "Medium risk"
            },
            {
                "Gender": "Male",
                "HeightCm": 147,
                "WeightKg": 76,
                "bmi": 35.2,
                "bmic": "obese Very",
                "bmir": "High risk"
            },
            {
                "ovrwight_cnt": 4
            }
        ]
    }
}

module.exports.fixtures = fixtures;