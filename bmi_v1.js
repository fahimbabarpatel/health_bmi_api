'use strict';



// Category
// 
// Underweight
// Normal weight
// Overweight Moderately 
// obese Severely
// obese Very
// severely obese

// BMI
// 
// 18.4 and below
// 18.5 - 24.9
// 25 - 29.9
// 30 - 34.9
// 35 - 39.9
// 40 and above

// Risk
// 
// Malnutrition risk
// Low risk
// Enhanced risk
// Medium risk
// High risk
// Very high risk

// Formula
// BMI(kg/m2 )

const bmi_mapping = require("./constant").bmi_mapping;

function bmi_execute_v1(data) {
	let ovrwight_cnt = data.reduce(function (i, item, ci, arr) {
		proc_bmi(arr[ci]);
		if (item.bmi >= 25)
			return i + 1;
		else
			return i
	}, 0);
	data.push({ ovrwight_cnt })
	return data;
}

function proc_bmi(el) {
	cal_bmi(el);
	bmi_map(el);
}


// function to calculate bmi
function cal_bmi(el) {
	let mtr = (el.HeightCm / 100);
	let bmi = el.WeightKg / Math.pow(mtr, 2);
	el.bmi = Math.round(bmi * 10) / 10;
}

// function to map bmi category and risk
function bmi_map(el) {
	if (el.bmi <= 18.4)
		Object.assign(el, bmi_mapping[1]);
	else if (el.bmi >= 18.5 && el.bmi <= 24.9)
		Object.assign(el, bmi_mapping[2]);
	else if (el.bmi >= 25 && el.bmi <= 29.9)
		Object.assign(el, bmi_mapping[3]);
	else if (el.bmi >= 30 && el.bmi <= 34.9)
		Object.assign(el, bmi_mapping[4]);
	else if (el.bmi >= 35 && el.bmi <= 39.9)
		Object.assign(el, bmi_mapping[5]);
	else
		Object.assign(el, bmi_mapping[6]);
}

module.exports.bmi_execute_v1 = bmi_execute_v1;