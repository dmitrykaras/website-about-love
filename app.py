from flask import Flask, request, render_template, flash, redirect, url_for
app = Flask(__name__)
app.secret_key = 'your_secret_key'

users = {
    'Админ': 'Я люблю тебя'
}
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        if username in users and users[username] == password:
            return f'Добро пожаловать, {username}!'
        else:
            flash('Неверный логин или пароль!', 'error')
            return redirect(url_for('login'))
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        confirm_password = request.form['confirm_password']
        
        # Проверка данных
        if username in users:
            flash('Пользователь с таким логином уже существует!', 'error')
        elif password != confirm_password:
            flash('Пароли не совпадают!', 'error')
        elif len(password) < 6:
            flash('Пароль должен быть не менее 6 символов!', 'error')
        else:
            # Добавление нового пользователя
            users[username] = password
            flash('Регистрация успешна! Теперь вы можете войти.', 'success')
            return redirect(url_for('login'))
    return render_template('register.html')

if __name__ == '__main__':
    app.run()