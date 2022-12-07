*this file is currently for internal planning only and not meant to be an actual Makefile yet*

pip install pipenv
pipenv shell
pipenv install django
django-admin startproject backend_django
cd backend_django
python manage.py startapp programming_path
python manage.py migrate
python manage.py runserver



npx create-react-app frontend_react
cd frontend_react
npm start

