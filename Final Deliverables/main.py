import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn import metrics
import sys

age = float(sys.argv[1])
gender = 1 if sys.argv[2] == 'female' else 0
bmi = float(sys.argv[3])
child = int(sys.argv[4])
smoker = 0 if sys.argv[5] == 'yes' else 1
region = int(sys.argv[6])

insurance_dataset = pd.read_csv('insurance.csv')

# encoding sex column
insurance_dataset.replace({'sex':{'male':0,'female':1}}, inplace=True)

# encoding 'smoker' column
insurance_dataset.replace({'smoker':{'yes':0,'no':1}}, inplace=True)

# encoding 'region' column
insurance_dataset.replace({'region':{'southeast':0,'southwest':1,'northeast':2,'northwest':3}}, inplace=True)

X = insurance_dataset.drop(columns='charges', axis=1)
Y = insurance_dataset['charges']

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=2)

# loading the Linear Regression model
regressor = LinearRegression()

regressor.fit(X_train, Y_train)

# prediction on training data
training_data_prediction =regressor.predict(X_train)

# R squared value
r2_train = metrics.r2_score(Y_train, training_data_prediction)

# prediction on test data
test_data_prediction =regressor.predict(X_test)

# R squared value
r2_test = metrics.r2_score(Y_test, test_data_prediction)

# age,female,BMI,smoker,1 child,southeast region
input_data = np.array([[age, gender, bmi, smoker, child, region]])

prediction = regressor.predict(input_data)

print('The cost', abs(round(prediction[0])))

