import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Context } from '../../main';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');

  // Получаем сообщения из Firestore
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  );

  const sendMessage = async () => {
    if (value.trim()) {
      const message = value;
      setValue('');

      await firestore.collection('messages').add({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        style={{ height: window.innerHeight - 50, marginTop: '20px', color: "black" }} // ✅ Исправлено "black"
      >
        <div
          style={{
            width: '80%',
            height: '77vh',
            border: '1px solid lightblue',
            overflowY: 'auto',
            padding: '10px',
          }}
        >
          {loading ? (
            <p>Loading messages...</p>
          ) : (
            messages &&
            messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '10px',
                  padding: '10px',
                  border: user.uid === msg.uid ? '2px solid blue' : '1px solid gray',
                  borderRadius: '10px',
                }}
              >
                <div>
                  <img
                    src={msg.photoURL}
                    alt={msg.displayName}
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      marginRight: '10px',
                      verticalAlign: 'middle',
                    }}
                  />
                  <strong>{msg.displayName}</strong>
                </div>
                <p>{msg.text}</p>
              </div>
            ))
          )}
        </div>

        {/* Поле ввода и кнопка отправки */}
        <Grid container direction="column" alignItems="flex-end" style={{ width: '80%' }}>
          <TextField
            variant="outlined"
            fullWidth
            maxRows={2} // ✅ Исправлено rowsMax -> maxRows
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Введите сообщение..."
          />
          <Button onClick={sendMessage} variant="outlined" style={{ marginTop: '10px' }}>
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
