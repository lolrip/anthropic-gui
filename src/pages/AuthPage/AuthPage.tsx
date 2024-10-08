// src/pages/AuthPage/AuthPage.tsx

import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useRef,
  useState,
} from 'react';

import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { submitPrompt } from '@/api/prompt.api';
import { ROUTES } from '@/app/router/constants/routes';
import { selectApiModel } from '@/redux/apiSettings/apiSettings.selectors';
import { setApiKey as dispatchApiKey } from '@/redux/apiSettings/apiSettings.slice';
import { useAppDispatch } from '@/redux/hooks';
import { ButtonAuthComponent } from '@/ui/ButtonAuthComponent';
import { IconComponent } from '@/ui/IconComponent';
import { TextFieldAuthComponent } from '@/ui/TextFieldAuthComponent';

import styles from './AuthPage.module.scss';

export const AuthPage = () => {
  const [apiKey, setApiKey] = useState('');
  const [invalidKey, setInvalidKey] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const model = useSelector(selectApiModel);

  const navigate = useNavigate();

  const formRef = useRef<HTMLFormElement | null>(null);

  const dispatch = useAppDispatch();

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const cursorPosition = input.selectionStart;
    const value = input.value;

    if (value.includes(' ')) {
      const newValue = value.replace(/ /g, '');
      input.value = newValue;
      setApiKey(newValue);

      if (cursorPosition) {
        input.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
      }
    } else {
      setApiKey(value);
    }

    setInvalidKey(false);
    setErrorMessage('');
  }, []);

  const validateApiKey = useCallback(
    async (keyApi: string): Promise<boolean> => {
      try {
        const response = await submitPrompt({
          model: model,
          temperature: 0,
          topK: 0,
          topP: 0,
          apiKey: keyApi,
          maxTokens: 1,
          prompt: `\n\nHuman: ' '\n\nAssistant:`,
        });
        if (response?.ok) {
          return true;
        } else {
          const errorData = await response?.json();
          setErrorMessage(errorData?.error?.message || 'Invalid API Key');
          return false;
        }
      } catch (error) {
        console.error('API Key validation error:', error);
        setErrorMessage(
          'An error occurred while validating the API Key. Please try again.',
        );
        return false;
      }
    },
    [model],
  );

  const onSubmit = useCallback(
    async (event?: FormEvent<HTMLFormElement>) => {
      event?.preventDefault();
      if (apiKey.length > 10) {
        const isValidKey = await validateApiKey(apiKey);
        if (isValidKey) {
          dispatch(dispatchApiKey(apiKey));
          navigate(ROUTES.Home, { replace: true });
        } else {
          setInvalidKey(true);
        }
      } else {
        setInvalidKey(true);
        setErrorMessage('API Key must be longer than 10 characters');
      }
    },
    [apiKey, validateApiKey, dispatch, navigate],
  );

  const onEnter = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' || event.code === 'NumpadEnter') {
        onSubmit();
      }
    },
    [onSubmit],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundWrapper}></div>
      <div className={styles.logoWrapper}>
        <IconComponent type="logoLight" className={styles.logoAuth} />
      </div>
      <div className={styles.formWrapper}>
        <form onSubmit={onSubmit} ref={formRef} className={styles.form}>
          <Stack spacing={1}>
            <div className={styles.errorContainer}>
              <p className={styles.textApiKey}>API Key</p>
              {apiKey.length > 0 && invalidKey && (
                <div>
                  <IconComponent type="warning" />
                  <span className={styles.textInvalidKey}>{errorMessage}</span>
                </div>
              )}
            </div>
            <TextFieldAuthComponent
              className={`${styles.textField} ${
                invalidKey ? styles.invalid : ''
              }`}
              placeholder="Enter key"
              value={apiKey}
              onChange={onChange}
              onKeyDown={onEnter}
              autoComplete="off"
              error={invalidKey && apiKey !== ''}
            />

            <ButtonAuthComponent
              type="submit"
              variant="contained"
              disabled={invalidKey || apiKey === ''}
            >
              Enter
            </ButtonAuthComponent>
          </Stack>
        </form>
      </div>
    </div>
  );
};
