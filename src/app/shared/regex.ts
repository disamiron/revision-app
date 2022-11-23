interface RegExpData {
  regexString: RegExp | string;
  errorMsg: {
    pattern: string;
    maxLength?: string;
    exists?: string;
    imgSize?: string;
    imgFormat?: string;
    imgDimensions?: string;
  };
}

export const regExps: { [key: string]: RegExpData } = {
  login: {
    regexString: /^[A-Za-z0-9]{6,20}$/,
    errorMsg: {
      pattern: 'Логин должен содержать от 6 до 20 знаков и/или цифр',
    },
  },
  password: {
    regexString:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@\[\]^_`{|}~])[a-zA-Z!"#$%&'()*+,-./:;<=>?@\[\]^_`{|}~\d]{8,}$/,
    errorMsg: {
      pattern: 'Пароль должен содержать 8 знаков',
    },
  },
};

export const requiredMsg: string = 'Это обязательное поле';
