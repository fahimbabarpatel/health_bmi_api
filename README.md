# health_bmi_api
API to calculate BMI using Node.js Fastify framework https://www.fastify.io/benchmarks/ 

API accepts (JSON) Height CM and Weight KG and returns(JSON) bmi with risk level and category

- Install node.js 16.4 from https://nodejs.org/en/download/


```sh
cd health_bmi_api
npm i #to install dependency  
npm test  #to execute unit test case
npm start #to start server on 3000 port
```

```sh
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
```



```sh
Input

[
   {
                "Gender": "Male",
                "HeightCm": 172,
                "WeightKg": 78.8
   }
]

Output
[
    {
        "Gender": "Male",
        "HeightCm": 172,
        "WeightKg": 78.8,
        "bmi": 26.6,
        "bmic": "Overweight Moderately ",
        "bmir": "Enhanced risk"
    },
    {
        "ovrwight_cnt": 1
    }
]    


```

- Unit Test Code Coverage - 100% https://drive.google.com/file/d/194-YMxsjWbh7khi_xM0eICStISbtcjSw/view?usp=sharing
- We can use Cloud container orchestration ef. AWS ECS to easily handle huge traffic
- Also use Redis cache to store fresh bmi with mapping numbers, so next time it will pick from Redis. 




