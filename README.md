# tiktok-clone (starter)

Este repo es un *starter* mínimo para una app tipo TikTok usando **Expo + React Native**.
Contiene la estructura básica, componentes principales y un servicio Firebase placeholder.

## Estructura
- `App.js` - navegación principal.
- `screens/FeedScreen.js` - feed vertical que muestra vídeos.
- `components/VideoCard.js` - componente de vídeo con autoplay y botones UI.
- `services/videosService.js` - ejemplo de conexión a Firestore (modular v9).
- `eas.json` - configuración mínima para EAS builds.

## Pasos para ejecutar
1. Instala dependencias: `npm install` (o `yarn`).
2. Instala Expo CLI si no la tienes: `npm install -g expo-cli`.
3. Crea un proyecto en Firebase y copia tu `firebaseConfig` en `services/videosService.js`.
4. Habilita Firestore y Storage en Firebase.
5. Rellena la colección `videos` con documentos de ejemplo:
   - Campos mínimos: `videoUrl` (URL pública a un mp4), `caption`, `likes`, `commentsCount`, `createdAt` (timestamp).
6. Ejecuta con `expo start`.

## Compilar APK con EAS (recomendado)
1. Instala `eas-cli`: `npm install -g eas-cli`.
2. Inicia sesión: `eas login`.
3. Configura proyecto: `eas build --platform android`.
4. Sube la AAB/APK resultante a Google Play Console.

## Notas y siguientes pasos
- Este starter usa URLs públicas para los vídeos; para producción sube a Firebase Storage o S3 y sirve desde CDN.
- Implementa reglas de seguridad en Storage y Firestore (permitir sólo usuarios autenticados).
- Añade pantalla de subida (CameraScreen) y Cloud Functions para generar thumbnails y transcodificar si hace falta.

Si quieres, te genero:
- un repo más completo con CI/EAS configurado,
- funciones Cloud Functions para procesado (ffmpeg),
- y ejemplos de reglas de seguridad para Firebase.
