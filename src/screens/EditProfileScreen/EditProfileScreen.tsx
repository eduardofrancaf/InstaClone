import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import user from '~/assets/data/user.json';
import colors from '~/theme/colors';
import {useForm, Controller, Control, RegisterOptions} from 'react-hook-form';
import {IUser} from '~/types/models';
import {Asset, launchImageLibrary} from 'react-native-image-picker';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

// Pick permite pegar apenas algumas propriedades de algum tipo ja existente.
type IEditableUser = Pick<IUser, 'name' | 'username' | 'website' | 'bio'>;

interface ICustomInput {
  label: string;
  multiline?: boolean;
  control: Control<IEditableUser, object>;
  name: 'name' | 'username' | 'website' | 'bio';
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

const CustomInput = ({
  label,
  multiline = false,
  control,
  name,
  rules = {},
}: ICustomInput) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => {
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputAndErrorContainer}>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                multiline={multiline}
                style={styles.input}
              />
              <Text style={styles.textError}>{error?.message}</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

const EditProfileScreen = () => {
  const [userPhoto, setUserPhoto] = useState<Asset | null>(null);
  const {handleSubmit, control} = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      bio: user.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.log(data);
    Keyboard.dismiss();
  };

  const changeProfilePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({assets, didCancel, errorCode}) => {
        if (!didCancel && !errorCode && assets) {
          setUserPhoto(assets[0]);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: userPhoto?.uri || user.image}}
        style={styles.avatar}
      />
      <Text onPress={changeProfilePhoto} style={styles.photoText}>
        Change profile photo
      </Text>
      <CustomInput
        label="Name"
        control={control}
        name="name"
        rules={{required: 'Name is required'}}
      />
      <CustomInput
        label="Username"
        control={control}
        name="username"
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username requires at least 3 characters',
          },
        }}
      />
      <CustomInput
        label="Website"
        control={control}
        name="website"
        rules={{
          pattern: {value: URL_REGEX, message: 'This is not a valid website'},
        }}
      />
      <CustomInput
        label="Bio"
        control={control}
        multiline={true}
        name="bio"
        rules={{
          maxLength: {
            value: 200,
            message: 'Username should have a maximum of 200 characters',
          },
        }}
      />
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  photoText: {
    color: colors.primary,
    marginBottom: 20,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  label: {
    width: 80,
  },
  input: {
    borderBottomColor: colors.border,
    borderBottomWidth: 2,
    padding: 0,
    textAlignVertical: 'top',
  },

  inputAndErrorContainer: {
    flex: 1,
  },

  submit: {
    marginTop: 10,
    color: colors.primary,
  },

  textError: {
    color: colors.accent,
  },
});
