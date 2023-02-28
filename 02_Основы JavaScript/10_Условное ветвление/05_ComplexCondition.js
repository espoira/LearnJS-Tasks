let message, login;

message = (login == 'Сотрудник') ? 'Привет' : 
		  (login == 'Директор') ? 'Здравствуйте' : 
		  (login == '') ? 'Нет логина' : '';
