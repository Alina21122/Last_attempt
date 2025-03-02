
var map = L.map('map').setView([46.8602, 29.6033], 10); // Координаты Тирасполя
    
// Добавление тайла карты (используем OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Добавление маркера на Тирасполь
L.marker([46.8602, 29.6033]).addTo(map)
  .bindPopup('Тирасполь, Приднестровье')
  .openPopup();