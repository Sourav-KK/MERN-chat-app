//  assigns default propic to users using their fullname
const defaultProfilePic = (fullName: string) => {
  return `https://avatar.iran.liara.run/username?username=${fullName}&background=f4d9b2&color=FF9800`;
};
export default defaultProfilePic;
