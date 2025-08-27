import React, { useState, useEffect } from 'react';

const Micro = () => {
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);
  const [recording, setRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);
  const [audioURL, setAudioURL] = useState(null);

  useEffect(() => {
    const getMicrophone = async () => {
      try {
        const userStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setStream(userStream);
      } catch (err) {
        setError("Impossible d'accéder au micro");
      }
    };
    getMicrophone();

    // Si un enregistrement est déjà sauvegardé dans localStorage
    const savedAudio = localStorage.getItem('audioRecording');
    if (savedAudio) {
      setAudioURL(savedAudio);
    }
  }, []);

  const handleRecord = () => {
    if (!recording) {
      // Démarrer l'enregistrement
      if (!stream) return;
      const mediaRecorder = new MediaRecorder(stream);
      setRecorder(mediaRecorder);
      const chunks = [];

      mediaRecorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        setAudioURL(url);

        // Sauvegarder dans le localStorage
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          localStorage.setItem('audioRecording', reader.result);
        };
      };

      mediaRecorder.start();
      setRecording(true);
    } else {
      // Arrêter l'enregistrement
      if (recorder) {
        recorder.stop();
      }
      setRecording(false);
    }
  };

  const handlePlay = () => {
    if (audioURL) {
      const audio = new Audio(audioURL);
      audio.play();
    }
  };

  return (
    <div>
      <h2>Microphone</h2>
      {stream ? (
        <p>Micro activé ✅</p>
      ) : !error ? (
        <p>Demande accès au micro...</p>
      ) : (
        <p style={{ color: "red" }}>{error}</p>
      )}

      <button onClick={handleRecord}>
        {recording ? "Sauvegarder" : "Enregistrer"}
      </button>

      <button onClick={handlePlay} disabled={!audioURL}>
        Démarrer pour lire l'audio
      </button>
    </div>
  );
};

export default Micro;
