1. start project
```
django-admin startproject posts_proj .

python manage.py migrate

python manage.py createsuperuser

python manage.py makemigrations
```

2. start app 
```
python manage.py startapp posts
python manage.py startapp profiles
```

3. runserver 
```
python manage.py runserver
```

```
pip freeze
pip freeze > requirements.txt

pip install -r requirements.txt
```