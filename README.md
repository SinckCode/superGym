# 🏋️‍♂️ Super Gym - Sistema Web Integral

**Super Gym** es una plataforma web completa para la gestión de un gimnasio. Combina un **sitio web informativo** con detalles de servicios, productos y métodos de pago, junto con una **API backend** para administrar usuarios, membresías, pagos, productos y servicios.

---

## 📂 Estructura del Proyecto

```
super-gym/
├── assets/       # Imágenes y recursos gráficos
├── js/           # Scripts frontend
├── styles/       # Hojas de estilo CSS
├── views/        # Páginas HTML
├── gym-api/      # Backend API (Node.js + Express + MongoDB)
└── listado.txt   # Listado de archivos
```

---

## ✨ Funcionalidades

### 🌐 Frontend
- Página principal con información del gimnasio.
- Sección de servicios ofrecidos.
- Visualización de métodos de pago.
- Galería de imágenes.
- Estilos personalizados (`styles/`).
- Scripts de interacción (`js/`).

### ⚙️ Backend
- CRUD de usuarios.
- Gestión de membresías.
- Registro y consulta de pagos.
- Gestión de productos y servicios.
- Conexión con MongoDB mediante Mongoose.
- Estructura modular (`models/`, `routes/`).
- Configuración de desarrollo con **nodemon**.

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 🚀 Instalación y Puesta en Marcha

### 📋 Requisitos Previos
- Tener [Node.js](https://nodejs.org) instalado.
- Tener MongoDB en ejecución (local o en la nube).

---

### ⚙️ Backend

1. Navega a la carpeta del backend:
   ```
   cd gym-api
   ```
2. Instala las dependencias:
   ```
   npm install
   ```
3. Configura las variables de entorno si aplica (por ejemplo, conexión a MongoDB).
4. Inicia el servidor en modo desarrollo:
   ```
   npm run dev
   ```
   El servidor estará disponible en [http://localhost:3000](http://localhost:3000).

---

### 🌐 Frontend

Abre el archivo principal en tu navegador:
```
views/index.html
```

---

## 📷 Capturas de Pantalla

💡 **Nota:** Puedes incluir aquí imágenes de la carpeta `assets/` como ejemplos del diseño y funcionalidad.

---

## 📜 Scripts Útiles

- `npm run dev`: Inicia el servidor backend en modo desarrollo con **nodemon**.

---

## 🤝 Contribuciones

¿Quieres contribuir? ¡Eres bienvenido!  
Sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una rama:
   ```
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y commits:
   ```
   git commit -m "Agregar nueva funcionalidad"
   ```
4. Sube tu rama:
   ```
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un **Pull Request**.

---

## 📝 Licencia

Este proyecto se distribuye bajo la licencia que definas (MIT, GPL, etc.).
