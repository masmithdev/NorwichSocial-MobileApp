import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { useApp } from '../../providers/AppProvider';

const LoginScreen = () => {
  const app = useApp();
  const [busy, setBusy] = useState(false);
  const [loginResponse, setLoginResponse] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const doLogin = async () => {
      const response = await app.authStore.logInWithCredentials(
        username,
        password,
      );
      if (response) {
        setLoginResponse(response);
      }
      setBusy(false);
    };
    if (busy) {
      doLogin();
    }
  }, [busy, app.authStore, username, password]);

  const handleLogin = (uname: string, pword: string) => {
    setLoginResponse('Logging in');
    setBusy(true);
    setUsername(uname);
    setPassword(pword);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {busy || (
        <>
          <Button
            title="Login correct"
            onPress={() => handleLogin('Michael', 'Password')}
          />
          <Button
            title="Login wrong"
            onPress={() => handleLogin('Michael', 'wrong')}
          />
        </>
      )}
      {loginResponse && <Text>{loginResponse}</Text>}
    </SafeAreaView>
  );
};

export default LoginScreen;
