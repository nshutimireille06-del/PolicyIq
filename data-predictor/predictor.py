# General Data Predictor
# An AI that learns from data and makes predictions

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Step 1: Create some sample data to learn from
# This is general world development data
data = {
    'internet_access': [20, 35, 50, 60, 75, 80, 85, 90, 95, 98],
    'healthcare_index': [30, 40, 55, 60, 70, 75, 80, 85, 90, 95],
    'gdp_per_capita': [1000, 2000, 5000, 8000, 15000, 25000, 35000, 45000, 55000, 65000],
    'human_development': [0.3, 0.4, 0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95]
}

# Step 2: Load it into a pandas DataFrame (like an Excel sheet for AI)
df = pd.DataFrame(data)
print("Your Data:")
print(df)
print("\n")

# Step 3: Define what we're predicting
X = df[['internet_access', 'healthcare_index', 'gdp_per_capita']]
y = df['human_development']

# Step 4: Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 5: Train the AI model
model = LinearRegression()
model.fit(X_train, y_train)
print("AI Model trained successfully!")

# Step 6: Make predictions
predictions = model.predict(X_test)
print(f"Predicted values: {predictions}")
print(f"Actual values: {y_test.values}")

# Step 7: See how accurate the AI is
r2 = r2_score(y_test, predictions)
print(f"\nAI Accuracy Score: {r2:.2f} out of 1.0")

# Step 8: Visualize the results
plt.figure(figsize=(10, 6))
sns.scatterplot(x=df['gdp_per_capita'], y=df['human_development'], color='blue', label='Real Data')
plt.plot(df['gdp_per_capita'], model.predict(X), color='red', label='AI Prediction')
plt.title('AI Prediction vs Real Data')
plt.xlabel('GDP per Capita')
plt.ylabel('Human Development Index')
plt.legend()
plt.savefig('prediction_chart.png')
print("\nChart saved as prediction_chart.png")