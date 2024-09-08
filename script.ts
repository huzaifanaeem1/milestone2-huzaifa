const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
//profile picture elements
const profilePictureFile =  profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
