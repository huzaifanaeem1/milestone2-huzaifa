var _a;
var profilePictureInput = document.getElementById('profilePicture');
//profile picture elements
var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
