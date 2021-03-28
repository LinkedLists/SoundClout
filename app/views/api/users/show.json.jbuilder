json.extract! @user, :id, :username

if @user.profile_img.attached?
  json.profileUrl url_for(@user.profile_img)
else
  json.profileUrl 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
end