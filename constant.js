'use strict';


const bmi_mapping = {
	1: {
		bmic: "Underweight",
		bmir: "Malnutrition risk"
	},
	2: {
		bmic: "Normal weight",
		bmir: "Low risk"
	},
	3: {
		bmic: "Overweight Moderately ",
		bmir: "Enhanced risk"
	},
	4: {
		bmic: "obese Severely",
		bmir: "Medium risk"
	},
	5: {
		bmic: "obese Very",
		bmir: "High risk"
	},
	6: {
		bmic: "severely obese",
		bmir: "Very high risk"
	}
}

module.exports.bmi_mapping = bmi_mapping;