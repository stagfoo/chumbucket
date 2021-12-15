import { state } from './index';

export function handleButtonClick() {
  state._update('updateBucket', state.bucket + '🍖')
};

export function hideNotifications(timeout: number) {
  setTimeout(()=> {
    state._update('updateNotification', {
      text: "",
      show: false
    })
  }, timeout)
};

export function showNotifications(message: string) {
  state._update('updateNotification', {
    text: message,
    show: true
  })
};
