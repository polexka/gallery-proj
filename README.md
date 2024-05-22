sudo apt-get update

sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

sudo apt-get update

sudo apt-get install -y docker-ce

sudo docker run -d -p 27017:27017 --name mongodb mongo:3.6

# Проект Место
Учебный проект, который был разработан в рамках обучения на курсе веб-разработки в Яндекс Практикуме. 

Это сервис, который позволяет пользователям делиться своими фотографиями, просматривать фотографии других пользователей и ставить лайки. 

В проекте использованы следующие технологии: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Postman, Git, Webpack, BEM, REST API, а также серверный реверс-прокси сервер Nginx. В проекте был реализован полный стек технологий для создания современного веб-приложения.

https://github.com/polexka/react-mesto-api-full

IP  51.250.28.233

Frontend  https://mesto-polexka.students.nomoredomains.work

Backend  https://api.mesto-polka.students.nomoredomains.work
