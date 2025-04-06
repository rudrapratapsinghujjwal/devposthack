# Foresight-418

*The SUGARVERSE Platform is designed to connect users with investors and facilitate seamless interactions.*

# 1 The Crypto currency (SugarByte)
Steps to Create Your SUGARByte Token
1) Create a MetaMask Wallet
2) Add Testnet to Your Wallet
3) Go to Remix and Create a Folder\
4) Create Three Solidity Files to Build and Manage the Coin
    -SugarByte.sol: The main ERC20 token contract for SUGARByte.
    -IOracle.sol: The interface for the Oracle contract that fetches sugar prices.
    -MockSugarOracle.sol: A mock implementation of the Oracle contract (used for testing purposes).
5) Deploy the Token to the Network
6) Test the Network by Doing Transactions
7) Add the Token to MetaMask
8) Create a Price Page to Track the Price of SUGARByte (Loveable AI Test link - in the end)

Why Link the Price of SUGARByte to Real-World Sugar Prices?
The idea of linking the price of SUGARByte to real-world sugar prices brings several advantages:
1) Stability and Predictability
2) Market Transparency
3) Real-World Utility
4) Novelty and Innovation
5) Economically Relevant
By integrating the value of SUGARByte with sugar prices, you're creating a dynamic and real-world connected token, setting your project apart in the world of cryptocurrencies. This innovative approach could not only generate interest but also provide real-world utility for a wide range of users and industries.
*CONTRACT: 0xa1C9F77bb34086673a313aF507bde95921657A94*

# 2 The website: SUGARVerse (website file)
1. Landing Page (index.html)
2. Login Page (login.html)
3. Signup Page (signup.html)
4. User Dashboard (user.html)
5. Client Dashboard (client.html)
6. Saved Enquiries (saved-enquiries.html)
7. Client Profile (client-profile.html)

*Navigation Architecture*
1) Entry Flow:
    Landing Page → Login Page
    Login Page → User Dashboard / Client Dashboard
    Login Page → Signup Page → Login Page
2) User Experience Paths:
User Dashboard ↔ Profile
User Dashboard → Saved Ideas

3) Client Experience Paths:
        Client Dashboard ↔ Profile
        Client Dashboard ↔ Saved Enquiries

*Technical Implementation*
-HTML5, CSS3, JavaScript for structuring, styling, and interactivity
-Chart.js integration for visualizing investment analytics and data.
-ChatGpt and Deepseek help were taken to implement the idea. 
*NOTE:* BACKEND FORMATION WAS NOT SUCCESSFUL 

# 3 The Predicting AI
My goal is to build a machine learning model that will review the startup ideas ,product ideas etc. given by users based on a set of criteria like originality,feasibility,market potential etc.

*How to do it?*
-Load the dataset that contains informations about various startup ideas
-Then do text cleaning by removing punctuations,digits,stopwords etc.
-Do TF-IDF so that the text datas is converted into matrix of features that can be used by machine learning algorithms to make decisions
-Split the data into train-test split where the training set is used to train the model and test set is used to evaluate model's performance.
-Model training in which the model learns from training data to understand the connection between ideas and evaluation
-Now after training the model,make predictions using test datas
-Now evaluate the model by usding different performance metrices like Mean Squared Error,R-squared and Mean Absolute Error
-Then create an API for model inference here we used FastAPI (because of its fast process,easily usable) which will allow user to submit new idea and get predictions.
-Then create a python file named app_fastapi.py in the same folder where our model is saved
  :import necessary libraries(uvicorn,FastAPI)
  :Create a FastAPI app instance and defied routes for incoming requests
  :The POST request will be defined to accept the input idea,process it and      use trained model to predict the scores
-Load the trained ml model using joblib in the fastAPI app(basically a file named app.py)
-When a POST request is sent with a new idea, the FastAPI app preprocesses the text (cleans and vectorizes it), then uses the trained model to predict the scores for parameters like Originality, Feasibility, etc
-Run the API with UVicorn
-Test the full system
Note: The portal was not working

*SUGARByte* Loveable AI website (Prototype): https://preview--sugar-token-charts-swap.lovable.app/crypto
