<p align="center">
    <img width="400" src="./Local Storage/images/development.jpg">
</p>

<h1 align="center">LocalStorage</h1>

<div align="center">
A program that stores rolling Students into the Local Storage </br></br>
</div>

### 📊 Project idea: Full Stack Development Begginer Demo

## 🌟 Features/Concepts Learned

- 💻 2 Front-end Pages
- 📊 Backend using Dev Tools (Inspect Element) and the Local Storage Method
- 💻 Implementation of Students and displaying them in the UI
- 🗄 Inserting `Keys/Values` into the Local Storage
- 💻 Converting strings and arrays using the `.JSON` method.
- ➕ Appending elements
- 🔀 Storing Arrays/Objects and returning them into a String.


## 📂 Technologies Used

### Frontend

- HTML
- CSS

### Backend

- Javascript

## ✅ Task

Grab the `student-list` file and insert each student into the Local Storage by adding their name, age, and class year.

### 🗄 How to check the Local Storage

Open Dev Tools by...

- right clicking and click on `Inspect Element`
- On the Nav Bar find your way into the `>>`.
- Click on `Application`
- Scroll down and find `Storage` and click it to view more.
You will find your `local server address` from which you're displaying the project from.
- Click the server and you should see `key` which shows the name of the storage that you're inserting data into.
- Next to the key you'll see `value` which is the string of data with their properties `(name, age, roll)`

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
