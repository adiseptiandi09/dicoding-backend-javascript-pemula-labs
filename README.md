# Belajar Back-End Pemula dengan JavaScript — Labs

Arsip latihan fundamental selama mengikuti kelas **Belajar Back-End Pemula dengan JavaScript** di Dicoding. Repositori ini merangkum konsep dasar runtime Node.js hingga pembangunan server web menggunakan framework Express.

## Konsep yang Dipelajari & Dipraktikkan

### 1. [`01-nodejs-basic`](./01-nodejs-basic)
Memahami cara kerja dan modul inti (*core modules*) lingkungan runtime Node.js:
- **[`01-process-object`](./01-nodejs-basic/01-process-object):** Pemanfaatan objek global `process` untuk membaca variabel lingkungan (*environment variables*), argumen baris perintah (CLI), serta memantau penggunaan memori.
- **[`02-modularization`](./01-nodejs-basic/02-modularization):** Penerapan arsitektur modular (ES Modules) untuk memisahkan dan mengimpor logika program antarberkas.
- **[`03-node-package-manager`](./01-nodejs-basic/03-node-package-manager):** Pengelolaan dan penggunaan paket pihak ketiga (*third-party packages*) melalui NPM.
- **[`04-events`](./01-nodejs-basic/04-events):** Penerapan paradigma pemrograman berbasis kejadian (*event-driven programming*) menggunakan `EventEmitter`.
- **[`05-filesystem`](./01-nodejs-basic/05-filesystem):** Operasi pembacaan berkas secara asinkron (*asynchronous file I/O*) serta resolusi *path* direktori.
- **[`06-stream`](./01-nodejs-basic/06-stream):** Konsep pemrosesan aliran data (*streams*) secara bertahap untuk efisiensi memori saat membaca dan menulis berkas.

### 2. [`02-nodejs-web-server`](./02-nodejs-web-server)
Membangun server HTTP murni menggunakan modul bawaan `http` Node.js, mencakup konsep dasar siklus *request-response*, *routing* manual, penanganan metode HTTP, serta pembacaan *request body* berbasis *stream*.

### 3. [`03-express-web-server`](./03-express-web-server)
Membangun server web menggunakan framework **Express**, mencakup pemisahan konfigurasi server dan *routing* modular, penggunaan parameter dinamis (*path* & *query parameters*), serta pengelolaan kode status respons HTTP.