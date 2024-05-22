sudo apt-get update
sudo apt-get install -y gnupg
wget -qO - https://www.mongodb.org/static/pgp/server-3.6.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list

# Устанавливаем MongoDB 3.6
sudo apt-get update
sudo apt-get install -y mongodb-org

# Запускаем MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Проект Место
Учебный проект, который был разработан в рамках обучения на курсе веб-разработки в Яндекс Практикуме. 

Это сервис, который позволяет пользователям делиться своими фотографиями, просматривать фотографии других пользователей и ставить лайки. 

В проекте использованы следующие технологии: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Postman, Git, Webpack, BEM, REST API, а также серверный реверс-прокси сервер Nginx. В проекте был реализован полный стек технологий для создания современного веб-приложения.

https://github.com/polexka/react-mesto-api-full

IP  51.250.28.233

Frontend  https://mesto-polexka.students.nomoredomains.work

Backend  https://api.mesto-polka.students.nomoredomains.work
