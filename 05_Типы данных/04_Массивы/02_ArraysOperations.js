let musicStyles = ['Джаз', 'Блюз'];
alert(musicStyles);

musicStyles.push('Рок-н-ролл');
alert(musicStyles);

musicStyles[Math.floor((musicStyles.length - 1) / 2)] = 'Классика';
alert(musicStyles);

let firstElement = musicStyles.shift();
alert(firstElement);
alert(musicStyles);

musicStyles.unshift('Рэп', 'Регги');
alert(musicStyles);