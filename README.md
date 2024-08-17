# Personalized-Financial-Assistant

Project Overview
This project is a mini-project for a second-year engineering course. The goal is to develop a simplified personalized financial assistant powered by AI to help users manage their finances. The assistant allows users to track transactions, set budgets, and receive basic financial advice.

Features
User Authentication: Secure registration and login.
Transaction Tracking: Add and view transactions.
Budget Management: Set and track monthly budgets.
AI Advice: Receive simple, rule-based financial advice based on transaction data.

Project Structure

financial-assistant/
├── app.py
├── requirements.txt
├── templates/
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── transactions.html
│   └── budget.html
├── static/
│   ├── styles.css
├── models.py
├── forms.py
├── utils/
│   ├── ai_advice.py
└── README.md

Libraries and Technical Specifications
Backend
Flask: A lightweight WSGI web application framework.
Flask-Login: User session management for Flask.
Flask-WTF: Simple integration of WTForms with Flask.
Flask-SQLAlchemy: Adds SQLAlchemy support to Flask applications.
SQLite: Lightweight, disk-based database.

Frontend
HTML/CSS: For structure and styling of web pages.
Jinja2: Templating engine for Python, used by Flask.
AI and NLP
spaCy: Industrial-strength Natural Language Processing (NLP) library for Python, used for basic financial advice.

Security
Werkzeug: A comprehensive WSGI web application library, used by Flask for password hashing.

Other Tools
pip: Python package installer.
venv: Python virtual environment.

Full List of Dependencies (requirements.txt)
Flask==2.1.1
Flask-Login==0.5.0
Flask-WTF==1.0.0
Flask-SQLAlchemy==2.5.1
spaCy==3.2.1

Setup Instructions
Prerequisites
Python 3.8 or higher
Virtual environment (recommended)
Installation

Clone the Repository:
git clone https://github.com/your-username/financial-assistant.git
cd financial-assistant

Create a Virtual Environment:
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

Install Dependencies:
pip install -r requirements.txt

Set Up the Database:
from app import db, app
with app.app_context():
    db.create_all()
    
Run the Application:
flask run
Access the Application:
Open your web browser and go to http://127.0.0.1:5000.

Usage
User Registration and Login
Register a new user by navigating to the registration page.
Log in with the registered credentials to access the dashboard.
Dashboard
View an overview of your transactions and receive basic financial advice.
Transactions
Add new transactions with an amount and category.
View a list of all transactions.
Budget
Set a monthly budget and track your spending against it.
AI Advice
The AI advice is a simple rule-based system that provides basic financial tips based on your transaction data. For example, it will alert you if your spending exceeds a certain threshold.

Future Improvements
Enhance AI advice with machine learning models.
Implement more detailed spending analysis and visualization.
Add more advanced user authentication features (e.g., password reset, profile management).
License
This project is licensed under the MIT License.

Acknowledgments
Flask for providing the web framework.
spaCy for natural language processing tools.
Flask-Login for user session management.
Contact
For any questions or feedback, please contact allu456654ansari@gmail.com.
