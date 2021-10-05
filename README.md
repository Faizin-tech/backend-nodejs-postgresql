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

Untuk melihat hasil pekerjaan submission dapat melihat link dibawah ini:

- [Task 1 (Users) Localhost](http://localhost:8081/task1)

```npm
http://localhost:8081/task1
```

Untuk Codenya dapat di lihat pada ~/controller/task1-controller.js

<br>

- [Task 2 (Movie Searcher) Localhost](http://localhost:8081/task2/search?keywords=MARVEL&page=1)

```npm
http://localhost:8081/task2/search?keywords=&page=
```

Masukan judul yang ingin dicari pada parameter keywords dan untuk menganti hasil berdasarkan page cukup ganti nilai pada parameter page, Setiap keyword yang dimasukan akan tersimpan di database

Untuk Codenya dapat di lihat pada ~/controller/task2-controller.js function expressions task2ListSearchMovie

<br>

- [Task 2 (Movie Detail) Localhost](http://localhost:8081/task2/detail?id=tt0458339)

```npm
http://localhost:8081/task2/detail?id=
```

Untuk Codenya dapat di lihat pada ~/controller/task2-controller.js function expressions task2SearchMovieById

<br>

Masukan parameter id berdasarkan imdbID untuk melihat informasi detail movie

- [Task 3 (Refactor Code Get FindFirstStringInBracket) Localhost](<http://localhost:8081/task3/findWord?word=yakin(usaha)sampai>)

```npm
http://localhost:8081/task3/findWord?word=
```

Masukan kata yang terdapat simbol '(' dan ')' untuk mendapatkan hasil yang diinginkan

Untuk Codenya dapat di lihat pada ~/controller/task3-controller.js

<br>

- [Task 4 (Anagram) Localhost](http://localhost:8081/task4)

```npm
http://localhost:8081/task4
```

Untuk Codenya dapat di lihat pada ~/controller/task4-controller.js

<br>

Terimakasih sudah melihat code saya..

Best Reqards Muhammad Faizin
