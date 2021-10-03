# Dokumentasi Penggunaan API

1. Install Semua Dependencies

```npm
    npm install
```

2. Jalankan MySQL dan Buat database MySQL dengan nama submission-bibit dengan ketentuan sebagai berikut:

```text
    HOST = localhost
    USER = root
    PASSWORD = ''
    PORT_DB = 5432
    DB = submission-bibit
```

3. Uncomment code dibawah ini yang terdapat pada index.js, untuk migrate otomatis semua tabel

From this:

```javascript
// const dbMigate = require('./model/index')
// dbMigate.sequelize.sync();
```

To this:

```javascript
const dbMigate = require("./model/index");
dbMigate.sequelize.sync();
```

4. Lalu jalankan dengan mengetikan pada terminal

```npm
    nodemon
```

atau

```npm
    npx nodemon
```
