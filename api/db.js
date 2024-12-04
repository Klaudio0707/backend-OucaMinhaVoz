const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const filePath = path.join(__dirname, 'db.json');
  
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    res.status(200).json(jsonData); // Retorna o conteúdo de db.json
  } catch (error) {
    res.status(500).json({ error: 'Erro ao ler o db.json' });
  }
};
