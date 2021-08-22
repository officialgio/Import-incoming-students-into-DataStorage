<p align="center">
    <img width="400" src="./Local Storage/images/development.jpg">
</p>

<h1 align="center">LocalStorage</h1>

<div align="center">
A program that stores rolling Students into the Local Storage </br></br>
</div>

### 📊 Project idea: Full Stack Development Begginer Demo

## 🌟 Features/Concepts Learned

- �🖥🏻‍♀️ 2 Front-end Pages
- 🔏 Backend using Dev Tools (Inspect Element) and the the Local Storage Method
- 🏦 Implementation of Students and displaying them in the UI
- 📑 Inserting `Keys/Values` into the Local Storage
- 💳 Converting strings and arrays using the `.JSON` method.
- 💵 Appending elements
- 📈 Storing Arrays/Objects and returning them into a String.


## 📂 Technologies Used

### Frontend

- [React](https://github.com/facebook/react)
- [Redux](https://github.com/reduxjs/redux)
- [Ant Design](https://github.com/ant-design/ant-design)
- [Shards Dashboard](https://github.com/DesignRevision/shards-dashboard)
- [Bootstrap](https://github.com/twbs/bootstrap)
- [Jest](https://github.com/facebook/jest)
- [Enzyme](https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme)

### Backend

- [Django](https://github.com/django/django)
- [MySQL](https://www.mysql.com/)
- [JWT](https://github.com/jpadilla/pyjwt)
- [Plaid API](https://github.com/plaid/plaid-python)

## ✅ Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### 📍 Prerequisites

What things you need to install the software and how to install them

- Install [Node.js/npm](https://nodejs.org/en/download/)
- Install [python3/pip3](https://www.python.org/downloads/) (Version >= 3.6)
- Install [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

### ⚒️ Installation

```
# Clone this repository
git clone https://github.com/trinityng/biller

# Go into the repository
cd Biller
```

### 💻 Client Start-up

```
# Go into client folder
cd client
# Install client dependencies
npm install
# Start client on localhost:3000
npm start
```

### ⌨️ Server Start-up

```
# Create virtual environment (recommend) using conda/virtualenv
conda create --name your_env_name

# Start virtual env
source activate your_env_name
```

```
# Setup Plaid API Keys

# Go into server folder
cd server

# Create a file in a root server folder called "Plaid_API_Keys"
# Place your PLAID_CLIENT_ID, PLAID_SECRET, and PLAID_PUBLIC_KEY in the file
```

```
# Install server packages from requirements.txt
pip3 install -r requirements.txt or python -m pip3 install -r requirements.txt

# Create new migrations
python3 manage.py makemigrations

# Apply new migrations
python3 manage.py migrate

# Start server on localhost:8000
python3 manage.py runserver
```

## ⚙️ Testing

```
# Test server using Django unittest
cd server
python3 manage.py test
```

```
# Test client using Jest and Enzyme
cd client
npm test
```

## ⭐️ Authors

👩🏻‍💻 **Trinity Nguyen** - [trinwin](https://github.com/trinwin) (Project Lead + Frontend Lead)

👨🏻‍💻 **Au Tran** - [au-tran](https://github.com/au-tran) (Backend Lead)

👨🏻‍💻 **Matthew Vu** - [Redjay17](https://github.com/Redjay17) (Frontend Developer)

See also the list of [contributors](https://github.com/trinityng/Biller/contributors) who participated in this project.
