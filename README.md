
# Руководство по пользованию проектом "Игра Кубик"

## Введение

"Игра кубик" — это веб-игра, в которой игрок управляет кубиком и должен прыгать через возникающие препятствия. Цель игры — заработать как можно больше очков. Это руководство поможет вам разобраться, как играть в эту игру и как использовать её функционал.

## Запуск игры

1. Запуск сервера  
   Перед тем как запустить игру, убедитесь, что сервер запущен. Для этого откройте терминал (или командную строку) и выполните команду, необходимую для запуска вашего сервера, например:
      npm start
   
   или, если вы используете другой инструмент, следуйте соответствующим инструкциям.

2. Запуск браузера  
   Откройте ваш любимый веб-браузер (например, Chrome, Firefox, Safari).

3. Переход по адресу  
   В адресной строке введите http://localhost:3000 и нажмите Enter. Это позволит вам загрузить игру.

## Игровой процесс

- Управление:  
   Для того чтобы прыгнуть, нажмите клавишу Пробел. Это поможет вашему кубику перепрыгнуть через препятствия.

- Заработок очков:  
   За каждое успешно преодолённое препятствие вы получаете одно очко. Ваш текущий счет отображается в верхней части игрового экрана.

- Конец игры:  
   Если ваш кубик столкнется с препятствием, игра закончится. Вас уведомят об этом с помощью всплывающего сообщения, где также будет показан ваш итоговый счет.

## Сохранение результатов

- После завершения игры ваш счет автоматически сохраняется в файл results.txt на сервере. Каждое новое сохранение добавляется в конец файла с указанием времени и результата.

## Просмотр результатов

- Для просмотра ваших сохранённых результатов вам нужно открыть файл results.txt, который находится в корневой директории проекта. Вы сможете увидеть все свои предыдущие достижения.


--- 

Если у вас есть дополнительные пожелания или изменения, дайте знать!
