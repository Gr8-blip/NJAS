# Nigerian Journal of Applied Science

Nigerian Journal of Applied Science is a journal management dashboard for publishing practical science and engineering research. The project has two parts:

- Backend: Django REST API in `app`
- Frontend: React dashboard in `JSPharm`

The dashboard lets an admin manage website pages, research articles, uploaded journal files, and journal volumes/issues.

## 1. What You Need

Before starting, install these tools if you do not already have them.

### Python

Open PowerShell and run:

```powershell
python --version
```

or:

```powershell
py --version
```

If you see a Python version, you can skip the Python install step.

If Python is not installed:

1. Download Python from https://www.python.org/downloads/
2. Install Python 3.12 or newer.
3. During installation, tick `Add Python to PATH`.
4. Close and reopen PowerShell.
5. Run `python --version` again to confirm it works.

### Node.js

Open PowerShell and run:

```powershell
node --version
```

If you see a Node version, you can skip the Node install step.

If Node.js is not installed:

1. Download Node.js LTS from https://nodejs.org/
2. Install it with the default options.
3. Close and reopen PowerShell.
4. Run `node --version` again to confirm it works.

## 2. Open The Project

In PowerShell, go to the project folder:

```powershell
cd "C:\Users\user\Documents\DevPlayGround\NJAS — Nigerian Journal Applied Science"
```

If your project is in another folder, replace the path with your own project location.

## 3. Backend Setup

The backend lives inside the `app` folder.

### Create a virtual environment

From the project root, run:

```powershell
python -m venv venv
```

If `python` does not work but `py` works, use:

```powershell
py -m venv venv
```

### Activate the virtual environment

```powershell
venv\Scripts\activate
```

You should now see `(venv)` at the start of your PowerShell line.

### Install backend packages

```powershell
pip install -r requirements.txt
```

### Create the database tables

```powershell
python app\manage.py migrate
```

### Optional: create an admin user

This lets you log in to Django admin.

```powershell
python app\manage.py createsuperuser
```

Follow the prompts for username, email, and password.

## 4. Frontend Setup

The frontend lives inside the `JSPharm` folder.

Open a new PowerShell window, go to the project folder, then run:

```powershell
cd "C:\Users\user\Documents\DevPlayGround\NJAS — Nigerian Journal Applied Science\JSPharm"
```

Install frontend packages:

```powershell
npm install
```

If PowerShell blocks `npm`, use:

```powershell
npm.cmd install
```

## 5. Start The Servers

You need two PowerShell windows open: one for Django and one for React.

### Start Django backend

In the first PowerShell window:

```powershell
cd "C:\Users\user\Documents\DevPlayGround\NJAS — Nigerian Journal Applied Science"
venv\Scripts\activate
python app\manage.py runserver
```

The backend should run at:

```text
http://127.0.0.1:8000
```

The API starts at:

```text
http://127.0.0.1:8000/api/
```

The Django admin is:

```text
http://127.0.0.1:8000/admin/
```

### Start React frontend

In the second PowerShell window:

```powershell
cd "C:\Users\user\Documents\DevPlayGround\NJAS — Nigerian Journal Applied Science\JSPharm"
npm run dev
```

If PowerShell blocks `npm`, use:

```powershell
npm.cmd run dev
```

The React dashboard should run at:

```text
http://localhost:5173
```

Open that link in your browser.

## 6. Site Walkthrough

The sidebar contains the main admin areas:

- Dashboard
- Pages
- Articles
- Upload Journals
- Volumes
- Upload Volume

### Dashboard

This is the main control center.

It shows:

- Total pages
- Total articles
- Published articles
- Total volumes
- Published volumes
- Uploaded journal files
- Articles under review
- Recent articles
- Recent uploads

It also has quick links for adding articles, uploading files, and creating volumes.

### Pages

Use this area to manage static website pages.

Examples:

- Home
- About
- Contact
- Submission Guidelines

Actions available:

- Create a page
- Edit a page
- Set page status to `Draft` or `Published`
- Delete a page

To add a page:

1. Open `Pages`.
2. Enter the page title.
3. The slug is created automatically, but you can edit it.
4. Add the page body/content.
5. Choose `Draft` or `Published`.
6. Click `Create Page`.

### Articles

Use this area to manage research articles and journal papers.

Actions available:

- Create an article
- Edit article details
- Upload a manuscript file
- Link article to a volume
- Mark article as `Draft`, `Under Review`, `Published`, or `Archived`
- Publish an article quickly
- Delete an article
- Download/open the uploaded manuscript

To add an article:

1. Open `Articles`.
2. Enter the title.
3. Add authors and affiliations.
4. Add abstract, citation, pages, and keywords.
5. Choose approval date if available.
6. Select the article status.
7. Link it to a volume if one exists.
8. Upload the manuscript file.
9. Click `Create Article`.

### Upload Journals

Use this area to upload journal files.

Examples:

- Full journal PDF
- Cover image
- Supplementary file

Actions available:

- Upload a file
- Link file to a volume
- Link file to an article
- Add notes or metadata
- Open/download uploaded file
- Delete uploaded file

To upload a journal file:

1. Open `Upload Journals`.
2. Enter the upload title.
3. Choose the document type.
4. Link it to a volume or article if needed.
5. Add metadata or notes.
6. Choose the file from your PC.
7. Click `Upload File`.

### Volumes

Use this area to manage journal editions or issues.

Actions available:

- View all volumes
- See article count per volume
- See uploaded file count per volume
- Publish a volume
- Delete a volume
- Edit a volume

Each volume groups articles by year, issue, or publication cycle.

### Upload Volume

Use this area to create a new volume or edit an existing one.

Fields include:

- Volume number
- Year
- Volume title
- Publication cycle
- Published date
- Description
- Cover image
- Publish status

To create a volume:

1. Open `Upload Volume`.
2. Enter the volume number.
3. Enter the year.
4. Add a title and description.
5. Add the publication cycle, for example `January - June`.
6. Choose a cover image if available.
7. Tick `Publish this volume` if it should be live.
8. Click `Create Volume`.

## 7. Common Problems

### `python` is not recognized

Python is not installed or was not added to PATH.

Fix:

1. Install Python.
2. Tick `Add Python to PATH`.
3. Restart PowerShell.
4. Try again.

You can also try:

```powershell
py --version
```

### `npm` is blocked in PowerShell

Use `npm.cmd` instead:

```powershell
npm.cmd run dev
```

### Frontend cannot load backend data

Make sure the Django backend is running:

```text
http://127.0.0.1:8000
```

Then refresh the React page:

```text
http://localhost:5173
```

### Database table does not exist

Run migrations:

```powershell
python app\manage.py migrate
```

### Uploaded files are not showing

Make sure the backend server is running. Uploaded files are served by Django during development from the backend media folder.

## 8. Useful Commands

Run backend checks:

```powershell
python app\manage.py check
```

Run frontend production build:

```powershell
cd JSPharm
npm.cmd run build
```

Start backend:

```powershell
venv\Scripts\activate
python app\manage.py runserver
```

Start frontend:

```powershell
cd JSPharm
npm.cmd run dev
```
