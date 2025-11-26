import { storage, db } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export async function uploadVideoFile(uri, caption) {
  const id = Date.now().toString();
  const response = await fetch(uri);
  const blob = await response.blob();

  const fileRef = ref(storage, `videos/${id}/video.mp4`);
  await uploadBytes(fileRef, blob);

  const videoUrl = await getDownloadURL(fileRef);

  const auth = getAuth();
  const user = auth.currentUser;

  await addDoc(collection(db, "videos"), {
    caption,
    videoUrl,
    likes: 0,
    commentsCount: 0,
    createdAt: serverTimestamp(),
    userId: user ? user.uid : null
  });

  return videoUrl;
}
