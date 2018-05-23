import config from '../constants';

export function FBlogin () {
  return Expo.Facebook.logInWithReadPermissionsAsync(
    config.facebookConfig.appId,
    {
      permissions: [
        'public_profile',
        'email',
        'user_birthday',
        'user_age_range',
        'user_friends'
      ],
      behavior: 'web'
    }
  );
}

export function getFBUserData (token) {
  return fetch(`https://graph.facebook.com/me?access_token=${token}`);
}
